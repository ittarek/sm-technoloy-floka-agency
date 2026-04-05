import React from 'react'

export const LeftSideSmallCard = () => {
  return (
         <div
                className="stats-card flex justify-center items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 gap-2"
                style={{ height: '110px' }}>
                <p className="text-lg text-gray-600 font-semibold leading-tight">
                  Successful projects completed
                </p>
                <p className="text-3xl flex items-center font-semibold text-gray-900 mt-1">
                  2k <span className="text-gray-400">+</span>
                </p>
              </div>
  )
}
