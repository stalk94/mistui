import { createStore } from "statekit-lite";

export type ColorUsage = {
    color: string;
    count: number;
}
type ColorMemoryState = {
    colors: ColorUsage[];
}

const MAX_COLORS = 50; // 👈 лимит хранения


export const colorMemory = createStore<ColorMemoryState>(
    { colors: [] },
    {
        persist: { key: "color-memory" }
    }
);


export function addColorToMemory(color: string) {
    colorMemory.colors.set((prev) => {
        const existing = prev.find((c) => c.color === color);
        let next: ColorUsage[];

        if (existing) {
            next = prev.map((c) =>
                c.color === color ? { ...c, count: c.count + 1 } : c
            );
        } else {
            next = [{ color, count: 1 }, ...prev];
        }

        // сортируем по популярности (count), потом по свежести
        next = next
            .sort((a, b) => b.count - a.count)
            .slice(0, MAX_COLORS); // 👈 максимум 50 в памяти

        return next;
    });
}