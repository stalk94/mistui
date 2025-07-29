import Skeleton from '@/components/utils/skeleton';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';
import Avatar from '@/components/avatar';



export default function InfoSkeleton(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* basic */}
            <Section
                title="Basic"
                description="text variant"
                code={`
                    
                `}
            >
                <div className="flex justify-center">
                    <Skeleton
                        
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description=""
                code={`
                    <div className='flex-col'>
                        <Skeleton
                            width={50}
                            height={50}
                            variant='circular'
                        />
                        <Skeleton
                            className='mt-1'
                            variant='text'
                            width={200}
                        />
                        <Skeleton
                            className='mt-1'
                            variant='rectangular'
                            width={200}
                        />
                        <Skeleton
                            className='mt-1'
                            variant='rounded'
                            width={200}
                        />
                    </div>
                `}
            >
                <div className="flex justify-center">
                    <div className='flex-col'>
                        <Skeleton
                            width={50}
                            height={50}
                            variant='circular'
                        />
                        <Skeleton
                            className='mt-1'
                            variant='text'
                            width={200}
                        />
                        <Skeleton
                            className='mt-1'
                            variant='rectangular'
                            width={200}
                        />
                        <Skeleton
                            className='mt-1'
                            variant='rounded'
                            width={200}
                        />
                    </div>
                </div>
            </Section>

        </div>
    );
}



InfoSkeleton.meta = {
    ...baseMeta
}