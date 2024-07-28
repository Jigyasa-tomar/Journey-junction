import React, { useState } from 'react'

const Card = ({id, image, name, price, info, interestedTour,removeTour}) => {

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0,130)}...`;
  

  function readmoreHandler(){
    setReadmore(!readmore);
  }
  
  return (
    <div className='max-w-[420px] md:w-[320px] sm:w-[370px] xs:w-[420px] h-auto min-h-[280px]
     bg-slate-100 p-3 rounded-xl flex flex-col gap-2 shadow-2xl'>

     <div className='w-full min-w-[210px] h-[210px]'>
      <img src={image} className='w-full h-full object-cover rounded'/>
     </div>

      <div>
        <h3 className='font-bold text-lg'>{name}</h3>

        <h4 className='text-sm text-sky-800 font-medium mt-1'>{price}</h4>

       <div className='text-[15px] mt-2'>
        {description}
        <span onClick={readmoreHandler} className='text-indigo-500 font-normal hover:cursor-default'>
          {readmore ? `Show Less`: `Read more`}
        </span>   
      </div>
        </div>

     <div className='w-full flex flex-row items-center justify-between mt-2 '>
      <button onClick={() => interestedTour(id)}
        className='bg-slate-300 border border-black p-1 rounded-md hover:bg-green-400 hover:text-white'>
          Interested
        </button>

        <button onClick={() => removeTour(id)}
          className='bg-slate-300 border border-black p-1 rounded-md hover:bg-red-500 hover:text-white'>
          Not Interested
        </button>
     </div>

      
    </div>
  )
}

export default Card;
