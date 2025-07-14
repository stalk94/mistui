import { useRef } from 'react';
import type { FileInputProps } from './type';
import { FormWrapper } from './atomize';
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import { useCache } from '../hooks';
import { useTheme } from '../theme';

/** Один файл */
export default function FileInput({ 
    onChange, 
    size,  
    labelLeft, 
    placeholder, 
    accept, 
    maxSize, 
    onError, 
    styleInput,
    style,
    color = 'primary',
    ...props 
}: FileInputProps) {
    const { styles } = useTheme();
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [files, setFiles] = useCache<File>(null);
    const [progress, setProgress] = useCache<number>(0);
    
    
    const readFile = (file: File, onProgress: (percent: number) => void) => {
        const reader = new FileReader();

        reader.onprogress = (event) => {
            if (event.lengthComputable) {
                const percent = Math.round((event.loaded / event.total) * 100);
                onProgress(percent);
            }
        }
        reader.onload = () => {
            //console.log("Файл прочитан", reader.result);
        }
        reader.onloadend = () => {
            setProgress(0);
        }

        reader.readAsDataURL(file);
    }
    const handleLoad = (files: FileList) => {
        if (!files && !files[0]) return;
        const file = files[0];

        if(maxSize && (file.size / (1024 * 1024)) > maxSize) {
            onError?.(`File "${file.name}" exceeds the limit ${Math.round(maxSize / 1024 / 1024)} MB`);
        }
        else {
            setFiles(file);
            readFile(file, (percent) => {
                setProgress(percent);
                console.log("Загрузка файла на клиенте:", percent, "%");
            });
            onChange?.(file);
        }
    }
    
    
    return (
        <FormWrapper
            size={size}
            styleInput={styleInput}
            style={style}
            color={color}
            labelLeft={
                <button
                    type='button'
                    className={`
                        btn 
                        btn-${size}
                        p-0 m-0
                        bg-transparent 
                        hover:bg-transparent 
                        border-none 
                        shadow-none
                    `}
                    onClick={() => fileRef.current?.click()}
                >
                    {!progress 
                        ? (labelLeft 
                            ? labelLeft 
                            : <DocumentArrowDownIcon className="label w-[1.1em] h-[1.1em] fill-current" />
                         )
                        : <span className={`loading loading-ring loading-${size}`}/>
                    }
                </button>
            }
            { ...props }
        >
            <input 
                type="file"
                ref={fileRef}
                onChange={(e)=> handleLoad(e.target.files)}
                className="hidden"
                accept={accept}
            />

            <button
                className="w-full flex items-center cursor-pointer"
                onClick={() => fileRef.current?.click()}
            >
                {/* placeholder, file name, progressLine */}
                { !progress
                    ? (files?.name
                        ? <span 
                            style={{
                                color: (style.color ?? styles?.input?.fontColor)
                            }}
                         >
                            { files?.name }
                         </span>
                        : <span 
                            style={{ color: styles?.input?.placeholderColor }} 
                            className='text-neutral-500'
                         >
                            { placeholder ?? 'Загрузить файл' }
                         </span>
                     )
                    : <>
                        <progress 
                            className="progress w-full h-2" 
                            value={progress}
                            max="100"
                        /> 
                        <span className='ml-3 text-xs'>
                            { progress }%
                        </span>
                    </>
                }
            </button>
        </FormWrapper>
    );
}