import React from 'react'
import logo from '../assets/founda-logo.svg'
import stars from '../assets/stars.svg'
import menuduo from '../assets/menu-duo.svg'


const Navbar = () => {
  return (
    <nav className='bg-purple py-10 max-sm:px-5 max-sm:py-5 max-sm:pt-10'>
        <div className='flex items-center justify-between w-full max-w-[1565px] mx-auto'>
            <img src={logo} alt="" className='h-10 max-sm:h-7.5' />

            <div className="links flex items-center gap-14 font-poppins text-[18px] max-sm:hidden">
                <a href="#" className="text-white hover:text-purple-light">Home</a>
                <a href="#" className="text-white hover:text-purple-light">About</a>
                <a href="#" className="text-white hover:text-purple-light">Services</a>
                <a href="#" className="text-white hover:text-purple-light">Pricing</a>
                <a href="#" className="text-white hover:text-purple-light">Contact</a>
                <a href="#" className="text-white hover:text-purple-light">Blog</a>
            </div> 

            <button className='flex items-center gap-2.5 bg-white text-purple py-4.5 px-6 rounded-2xl font-poppins font-medium text-[18px] transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5 max-sm:hidden'><img src={stars} alt="" /> Let's Launch Together</button> 

            <span><img src={menuduo} alt="" /></span>
        </div>

    </nav>
  )
}

export default Navbar
