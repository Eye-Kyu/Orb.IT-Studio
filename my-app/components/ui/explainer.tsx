import '@radix-ui/themes/styles.css' ;
import { Button } from '@/components/ui/button';

function Orby () {
    return (
      <div className='relative flex-col space-y-12 box-border h-screen w-screen'>
        <p className='text-center  pt-24 px-20 text-6xl font-medium leading-normal w-screen'>A Digital Design and Tech Studio based in Nairobi. We build brands, 
            create digital experiences and shape the stories of Tommorrow.</p>
        <div className='absolute flex w-full justify-center'>
        <Button variant={'outline'} className='full'>See Our Work</Button>
        </div>
      </div>
    )
}
export default Orby;