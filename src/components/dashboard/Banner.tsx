
import { Skeleton } from '@/components/ui/skeleton'

const Banner = () => {
  return (
    <div className='flex flex-row gap-5 w-full h-120'>
        <Skeleton className='w-1/5 h-full'/>
        <Skeleton className='w-3/5 h-full'/>
        <Skeleton className='w-1/5 h-full'/>
    </div>
  )
}

export default Banner