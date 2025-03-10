import React from 'react'
import Card from './Card'
import { cards } from '../../Constant/Constant.js'

const OurServices = () => {
    return (
        <div className='bg-[#220A32] text-white px-5 lg:px-19'>
            <div className='services'>
                <div>
                    <h1 className='text-[40px] sm:text-[50px] font-[500] lg:text-[70px] transition-all duration-150'>What We <br /> Offer</h1>
                </div>
                <div className=' grid max-lg:hidden place-items-center transition-all duration-150  xl:grid-cols-3 lg:grid-cols-2'>
                    {
                        cards.map((card)=>(
                            <div>
                                <Card heading={card.heading} url={card.url} para={card.para}/>
                            </div>
                        ))
                    }
                </div>

                <div className=' max-lg:flex lg:hidden overflow-scroll'>
                    {
                        cards.map((card)=>(
                            <div className='mr-5'>
                                <Card heading={card.heading} url={card.url} para={card.para}/>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default OurServices
