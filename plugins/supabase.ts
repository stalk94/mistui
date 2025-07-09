import { createClient, SupabaseClient } from '@supabase/supabase-js';

type ConfigAdapter = {
    /** secret key supabase */
    key: string,
    /** url supabase */
    url: string
}

function deepGet(obj: any, path: string[]) {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
}
function deepSet(obj: any, path: string[], value: any): any {
    const key = path[0];
    if (path.length === 1) {
        obj[key] = value;
    } 
    else {
        if (typeof obj[key] !== 'object' || obj[key] === null) obj[key] = {};
        deepSet(obj[key], path.slice(1), value);
    }
    return obj;
}


export class SupabaseAdapter<Schema extends Record<string, any>> {
    supabase: SupabaseClient
    table: string

    constructor(config: ConfigAdapter, table?: string) {
        this.supabase = createClient(config.url, config.key);
        this.table = table ?? 'kv_store';
    }
    async set<K extends keyof Schema>(key: K, value: Schema[K]): Promise<void> {
        const [mainKey, ...path] = (key as string).split('.');

        let updatedValue;

        if (path.length) {
            const { data } = await this.supabase
                .from(this.table)
                .select('value')
                .eq('key', mainKey)
                .maybeSingle();

            const baseValue = data?.value ?? {};
            updatedValue = deepSet(baseValue, path, value);
        } else {
            updatedValue = value;
        }

        const { error } = await this.supabase
            .from(this.table)
            .upsert({ key: mainKey, value: updatedValue });

        if (error) {
            console.error('❌ Ошибка при вставке:', error.message);
        }
    }
    async get<K extends keyof Schema>(key: K): Promise<Schema[K] | undefined> {
        const [mainKey, ...path] = (key as string).split('.');

        const { data } = await this.supabase
            .from(this.table)
            .select('value')
            .eq('key', mainKey)
            .maybeSingle();

        if (!data?.value) return undefined;
        else return path.length ? deepGet(data.value, path) : data.value;
    }
    async push<K extends keyof Schema, T = Schema[K] extends Array<infer U> ? U : never>(key: K, value: T): Promise<void> {
        const current = await this.get<Schema[K]>(key);
        const updated = Array.isArray(current) ? [...current, value] : [value];
        await this.set(key, updated as Schema[K]);
    }
    async delete(key: string): Promise<void> {
        const [mainKey, ...path] = key.split('.');

        if (path.length === 0) {
            await this.supabase
                .from(this.table)
                .delete()
                .eq('key', mainKey);
        } 
        else {
            const { data } = await this.supabase
                .from(this.table)
                .select('value')
                .eq('key', mainKey)
                .single();

            if (!data?.value) return;

            // удалить вложенный ключ
            let ref = data.value;
            for (let i = 0; i < path.length - 1; i++) {
                if (!ref[path[i]]) return;
                ref = ref[path[i]];
            }
            delete ref[path[path.length - 1]];

            await this.supabase
                .from(this.table)
                .update({ value: data.value })
                .eq('key', mainKey);
        }
    }
    async has<K extends keyof Schema>(key: K): Promise<boolean> {
        return (await this.get(key)) !== undefined;
    }
    async all(): Promise<{ key: string; value: any }[]> {
        const { data } = await this.supabase
            .from(this.table)
            .select();
        return data ?? [];
    }
    onChange<T = any>(key: string, callback: (val: T) => void, interval = 1000) {
        let last: any;

        setInterval(async () => {
            const value = await this.get<T>(key);

            if (JSON.stringify(value) !== JSON.stringify(last)) {
                last = value;
                callback(value);
            }
        }, interval);
    }
}