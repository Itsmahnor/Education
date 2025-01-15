import React from 'react'

export const SearchProgram = () => {
  return (
    <div className="w-[100vw] h-auto md:pt-5 bg-orange-950 flex justify-center text-orange-500 ">
      <div className="w-[80vw] h-auto flex justify-around flex-wrap gap-10">
      
        <div className="lg:w-[70vw] w-[90vw]">
          
            <CategoryGrid />
  
        </div>
      </div>
    </div>
  )
}
