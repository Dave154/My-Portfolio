'use client';

import { Copy } from "lucide-react";
import GradientButton from "./gradientbutton";
import { toast } from "sonner";

const Copymail = () => {
  return (
    <div className="relative z-50"  onClick={()=>{
        navigator.clipboard.writeText('okpedavid0@gmail.com')
        toast("Email has been Copeed to Clipboard.")

    }}> 
    <GradientButton  
     text={'Copy Email'}
     icon={<Copy/>}
     
    />
    </div>
  )
}

export default Copymail