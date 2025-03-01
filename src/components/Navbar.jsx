import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links = [
        {path:'/',name:'Home'},
        {path:'#',name:'Pages'},
        {path:'#',name:'Services'},
        {path:'#',name:'Projects'},
        {path:'/blogs',name:'Blog'},
        {path:'/contact-us',name:'Contact Us'},
    
    
      ]
    
    return (

        <header className="relative w-full bg-gray-900 text-white py-4 px-6 h-20 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
                <span className="text-xl font-bold text-yellow-400">Abytech Hub</span>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-6">
               
               {
                links.map((link,key)=>(
                    <Link key={key} to={link.path} className="text-yellow-400">{link.name}</Link>
                ))
               }
               
            </nav>

            {/* Contact Us Button */}
            <button className="bg-red-500 hidden md:flex hover:bg-red-600 px-4 py-2 rounded-md text-white font-bold">
                Contact Us
            </button>

            {/* Mobile Menu (Hamburger) */}
            <div className="md:hidden">
                <button className="text-white text-2xl">&#9776;</button>
            </div>
        </header>

    )
}

export default Navbar