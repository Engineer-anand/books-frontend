import { toast } from "react-toastify";


export const handleSucces= (msg)=>{
    toast.success(msg,{
        position:"top-right"
    })
}

export const handleError= (msg)=>{
    toast.error(msg,{
        position:"top-right"
    })
}
export const handleInfo= (msg)=>{
    toast.info(msg,{
        position:"top-right"
    })
}
export const handleDefault= (msg)=>{
    toast(msg,{
        position:"top-right"
    })
}