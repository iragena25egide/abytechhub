import React from 'react'
import Header from '../../components/header'
import BlogCard from '../../components/blog/BlogCard'

import Testimonials from '../../components/home/testimony'
import { cards } from '../../stores/Blogdata'

const BlogPage = () => {

   
    return (
        <div className='w-full flex-col pb-7 justify-center bg-[#0d0f15]  items-center flex gap-2'>
            <Header title={`blog`} path={`blog`} />

            <div className="flex flex-col justify-center w-9/12 pt-10 items-center gap-10">

                <h1 className='text-yellow-300 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>News <span className='text-white'>&</span> Blogs</h1>

                <div className="flex items-center gap-9 justify-center flex-wrap">

                    {
                        cards.map((card, key) => (
                            <BlogCard {...card} key={key} ></BlogCard>
                        ))
                    }

                </div>


            </div>
                <Testimonials /> 

        </div>
    )
}

export default BlogPage