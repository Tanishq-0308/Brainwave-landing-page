import React from 'react'
import image1 from '../../../assets/cards/Iot.jpeg'

const Card = ({heading, url, para}) => {
  return (
    <div className='bg-[#ffffff1c] group hover:scale-105 font-bold hover:font-medium transition-all duration-500 ease-in-out h-[550px] text-white md:w-[370px] w-[330px] mt-3 shadow-md shadow-[#00000079] flex flex-col justify-between mb-8'>
      <div className='h-[25%] group-hover:h-0 group-hover:z-10'>
            <h1 className='px-4.5 text-[25px] h-full  text-wrap py-9'>
                {heading}
            </h1>
      </div>
      <div className='h-[75%] relative group-hover:h-[100%] bg-black transition-all duration-400 ease-linear'>
            <img src={url} alt="" className='h-[100%] object-cover opacity-80 group-hover:opacity-30'/>
            <p className='absolute -left-80 hidden top-10  px-4.5 py-9 w-xs border    text-center text-lg group-hover:block '>{para}</p>
      </div>
    </div>
  )
}

export default Card
