import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({image,title,description}) => {
    const navigate = useNavigate()
  return (
    <div className='flex w-full sm:w-9/12 cursor-pointer md:w-1/3 xl:w-1/4 flex-auto transition duration-200 ease-in-out  flex-col gap-2 group' onClick={()=>navigate('/blog/1')}>
        <div className="flex w-full relative">
        <img src={image} className='w-full h-72 object-cover ' alt="" />
        <button className='absolute top-1.5 left-1.5 p-2 capitalize text-[#0D0F1A]  font-medium text-lg bg-amber-400 group-hover:text-white cursor-pointer group-hover:bg-red-400 transition duration-200 ease-in-out'>content tips</button>
        </div>

        <h1 className='text-xl md:text-2xl xl:text-3xl capitalize group-hover:text-amber-400 transition duration-200 ease-in-out '>{title}</h1>
        <p className='text-sm md:text-base text-gray-500'>{description}</p>

    </div>
  )
}

export default BlogCard