import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Hero = () => {
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  useGSAP(() => {
    tl.from('#head-one', {
      opacity: 0,
      duration: 2,
      y: -100,
      x: -100
    })
    tl.to('#head-one', {
      x: -100,
      y: 0,
      duration: 1,
      opacity: 1
    })
    tl.to('#head-one', {
      x: 0,
      y: 0,
      duration: 1
    })

    tl2.from('#head-two', {
      opacity: 0,
      duration: 2,
      y: 100,
      x: 100
    })
    tl2.to('#head-two', {
      x: 100,
      y: 0,
      duration: 1,
      opacity: 1
    })
    tl2.to('#head-two', {
      x: 0,
      y: 0,
      duration: 1
    })
    // gsap.from('.head',{
    //   opacity:0,
    //   duration:1,
    //   y:100
    // })
    gsap.to('#explore', {
      opacity: 1,
      duration: 1
    })
  }, [])
  return (
    <>
      <main className='w-full  heroImage mt-[85px] relative'>
        <div className='relative flex flex-col gap-15 items-center justify-center h-full py-[20vh]'>
          <div className='pt-11'>
            <h1 className='text-white text-2xl sm:text-3xl md:text-[50px] transition-all duration-150 ease-in-out p-4 cursor-pointer  font-[600] text-center tracking-wide pb-15'>
              <span id='head-one' className=' inline-block'>Innovating the Future with</span> <br /> <span id='head-two' className='inline-block'>Smart Technology</span>
            </h1>
            <p className='text-[#f1f1f1] head text-lg sm:text-xl text-center'>
              Empowering industries with IoT, embedded systems, and automation.
            </p>
          </div>
          <div className="relative duration-1000 opacity-70 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-2xl ">
            <a id='explore'
              role="button"
              className="relative inline-flex items-center opacity-0 justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
              href="#"
            >Explore Our Solutions<svg
              aria-hidden="true"
              viewBox="0 0 10 10"
              height="10"
              width="10"
              fill="none"
              className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
            >
                <path
                  d="M0 5h7"
                  className="transition opacity-0 group-hover:opacity-100"
                ></path>
                <path
                  d="M1 1l4 4-4 4"
                  className="transition group-hover:translate-x-[3px]"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
    //   <div className='bg-my-gradient-two w-full h-[80vh] flex flex-col items-center justify-center border-t border-[#ffffff1f]'>
    // <div className='sm:w-1/2 flex flex-col gap-8 pb-30'>
    //     <h1 className='text-white text-4xl p-4 cursor-pointer sm:text-6xl font-bold text-center tracking-wide'>
    //     <span id='head-one' className=' inline-block'>Innovating the Future with</span> <br /> <span id='head-two' className='inline-block'>Smart Technology</span>
    //     </h1>
    //     <p className='text-[#f1f1f1] head text-2xl sm:text-[20px] text-center'>
    //     Empowering industries with IoT, embedded systems, and automation.
    //     </p>
    // </div>
    //     <div className="  duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-2xl ">
    //     <a id='explore'
    //   role="button"
    //   className="relative inline-flex items-center opacity-0 justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
    //   href="#"
    //   >Explore Our Solutions<svg
    //     aria-hidden="true"
    //     viewBox="0 0 10 10"
    //     height="10"
    //     width="10"
    //     fill="none"
    //     class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
    //   >
    //     <path
    //       d="M0 5h7"
    //       class="transition opacity-0 group-hover:opacity-100"
    //     ></path>
    //     <path
    //       d="M1 1l4 4-4 4"
    //       class="transition group-hover:translate-x-[3px]"
    //     ></path>
    //   </svg>
    // </a>

    //     </div>
    //   </div>
  )
}

export default Hero
