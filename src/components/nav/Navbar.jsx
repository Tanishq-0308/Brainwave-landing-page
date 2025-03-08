import { useGSAP } from '@gsap/react';
import logo from '../../assets/dark-logo.png'
import { FiAlignJustify } from "react-icons/fi";
import gsap from 'gsap';
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to('.list', {
            opacity: 1,
            duration: 0.1,
            stagger: 0.3
        })
        tl.from('#contact-btn', {
            y: 20,
            opacity: 0,
            duration: 1
        })
    }, [])
    const list = [
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'About Us',
            path:'/about-us'
        },
        {
            id:3,
            name:'Services',
            path:'/services'
        },
        {
            id:4,
            name:'Products',
            path:'/products'
        },
        {
            id:5,
            name:'Clients',
            path:'/clients'
        },
    ];
    return (
        <>
            <nav className='w-full h-[85px] bg-[#220A32] fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 lg:px-12 text-white '>
                <div>
                    <Link to='/'>
                    <img src={logo} alt="" className='h-[55px]' />
                    </Link>
                </div>
                <div className=' hidden lg:flex'>
                    <ul className='flex gap-10 px-8 py-2 shadow-md shadow-[#00000079] items-center font-semibold rounded-full text-[#c0bebe] bg-[#9696962d]'>
                        {list.map((item)=>(
                            <li key={item.id} className='hover:text-white'>
                                <NavLink to={item.path} className={({isActive})=>`${isActive ? 'text-purple-400' : ''} transition-all duration-200 ease-in-out opacity-0 list`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='contact-btn'>
                    <button  className='hidden  lg:flex p-2 rounded-3xl border-none hover:bg-white cursor-pointer transition-all ease-in-out duration-350 shadow-[1px_0px_2px_1px_rgba(184,61,184,1)]  hover:text-purple-950'>
                    <NavLink to="/contact-us">
                        Contact us
                    </NavLink>
                    </button>
                    <button className='text-4xl lg:hidden'>
                    <FiAlignJustify />
                </button>
                </div>
            </nav>
            {/* <div className="flex bg-my-gradient-two text-white items-center justify-between p-3.5 sm:px-10">
                <img src={logo} alt="logo" className='h-full w-[35%] sm:w-[25%] md:w-[20%] lg:w-[10%] transition-all duration-150 cursor-pointer' />
                <div className=' md:flex hidden'>
                    <ul className="flex bg-[#9696962d] justify-between gap-3 font-bold p-2  rounded-3xl shad">
                        {list.map((item) => (
                            <li key={item.id} >
                            <NavLink to={item.path} 
                            className={({ isActive }) =>
                                `${isActive ? 'text-purple-400 text-3xl' : 'text-[#c0bebe] text-2xl'} 
                                 hover:text-white text-[10px] sm:text-sm md:text-[15px] opacity-0
                                 transition-all duration-200 cursor-pointer px-3 py-1 rounded-3xl list`
                            }
                            >
                                {item.name}
                            </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='contact-btn'>
                    <button className="font-display-medium hidden md:flex border text-[10px] sm:text-sm md:text-[16px] p-2 rounded-3xl border-none hover:bg-white cursor-pointer transition-all duration-150 shadow-[1px_0px_2px_1px_rgba(184,61,184,1)]  hover:text-purple-950 hover:font-semibold">
                        <NavLink to="/contact-us">
                            Contact Us
                        </NavLink>
                    </button>
                </div>
                <button className='text-3xl md:hidden'>
                    <FiAlignJustify />
                </button>
            </div> */}
        </>
    )
}

export default Navbar
