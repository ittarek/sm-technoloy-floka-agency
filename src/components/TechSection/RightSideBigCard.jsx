import React from 'react'
import { Stars } from './Stars'

export const RightSideBigCard = () => {
  return (
   <div
                 className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                 style={{ height: '380px' }}>
                 <div className="border-b border-gray-200 pb-6 mb-6">
                   <Stars filled={5} size={20} />
                   <p className="text-[80px] font-semibold text-gray-900 leading-none mt-2">
                     4.9<span className="text-gray-300">/5</span>
                   </p>
                 </div>
                 <p className="text-gray-400 text-base font-semibold leading-relaxed flex-1">
                   We offer end-to-end creative solutions that make brands unforgettable.
                 </p>
                 <div className="mt-6">
                   <a
                     href="#"
                     className="flex items-center gap-3 w-fit text-black font-bold tracking-widest hover:opacity-80 transition-opacity duration-300">
                     <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 hover:-rotate-90">
                       +
                     </span>
                     hire us now
                   </a>
                 </div>
               </div>
  )
}
