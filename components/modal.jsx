import React from 'react'
import { X } from 'lucide-react'
const Modal = ({children,showModal,setShowModal}) => {
  return (
    <div className='fixed inset-0 z-50 bg-black/50 flex flex-col gap-3 items-center justify-center'>
        <span className="cursor-pointer  rounded-full bg-gray-800/90 p-2" onClick={()=>setShowModal(false)}>
         <X size={20}/>
        </span>
        <div className='w-full  max-w-6xl p-4 bg-transparent border border-gray-800/90 backdrop-blur-lg rounded-xl shadow-lg flex flex-col gap-3 xl:flex-row max-h-[90vh] overflow-y-auto'>
          {children}
        </div>
    </div>
  )
}

export default Modal