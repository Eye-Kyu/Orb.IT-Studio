import '@radix-ui/themes/styles.css' ;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function titros () {
    return (
        <div className='box-border w-48 h-auto border-green-100 flex'>
        <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='titles flex-col pl-2 text-xs space-y-1'>
            <p className='font-semibold'>Njoroge Muiruri</p>
            <p>Founder, OrbIT.Studio</p>
            </div>
        </div>
    )
}

export default titros;