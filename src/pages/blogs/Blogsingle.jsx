import React from 'react'
import Header from '../../components/header'
import BlogLatest from '../../components/blog/BlogDisplay'
import BlogImage1 from '../../assets/images/blog/blog2.jpg'
import BlogImage2 from '../../assets/images/blog/blog4.jpg'
import BlogImage3 from '../../assets/images/blog/blog3.jpg'
import { BsShare } from 'react-icons/bs'

const BlogSingle = () => {
    return (
        <div className='w-full flex-col pb-7  justify-center bg-[#0d0f15]  items-center flex gap-2'>
            <Header title={`single blog`} path={`blog / Single Blog 1`} />

            <div className="flex  justify-center p-4 w-full md:w-10/12 lg:w-8/12 pt-10 items-start gap-7">

                {/* left side */}
                <div className="flex flex-col w-full sm:w-11/12 md:w-10/12 xl:w-9/12  gap-4">
                    <h1 className='text-2xl capitalize md:text-3xl'>How do you improve your content writing skills?</h1>

                    <p className='text-neutral-500 text-base xl:text-lg'>
                        Commodo semper bibendum adipiscing orci bibendum eu lectus sed.
                        Commodo cursus vitae augue luctus nibh. Congue sit quisque volutpat libero tempor a id cursus purus.
                        Pellentesque pellentesque scelerisque curabitur porta dolor. Amet vulputate vitae eget sit rhoncus imperdiet.
                        Odio justo nullam scelerisque quis bibendum. Cras ipsum vel diam praesent tortor at elit sit.
                        A risus molestie bibendum donec blandit adipiscing volutpat sollicitudin aliquam.
                        Nec arcu cras ultrices velit sed ligula. Iaculis elit vulputate sollicitudin quisque ut faucibus.
                    </p>

                    <p className='text-neutral-500 text-base xl:text-lg'>
                        Facilisis nec malesuada enim viverra cras. Auctor dignissim tellus vestibulum vitae hac amet
                        . Suspendisse sit feugiat in pulvinar bibendum arcu nunc id.
                        Duis hac nisl dui facilisi placerat at mauris elit scelerisque.
                        Turpis ornare auctor amet vestibulum in magna aliquet ultricies netus.
                        Adipiscing lobortis a interdum morbi etiam non.
                    </p>

                    <div className="p-7 bg-zinc-900  ">
                        <p className='italic text-neutral-500'> Mattis facilisis quam amet blandit faucibus. Sed in vitae montes sem quis faucibus bibendum massa.
                            Eget volutpat molestie eget non netus nisl eleifend.
                            Sit pellentesque posuere vitae scelerisque vel aliquet vulputate purus.
                            Ac risus neque sed at pellentesque ultrices.</p>
                        <div className='flex gap-7 items-center'><div className=' h-0 border border-[#FF9078] w-12'></div> <p className=''>By jordan smith</p> </div>
                    </div>



                    <div className="flex flex-col gap-7 w-full">

                        <div className="flex w-full gap-4 ">
                            <div className="w-1/2 min-h-80 border">
                                <img src={BlogImage3} className='w-full h-full object-cover '  alt="" />
                            </div>
                            <div className="w-1/2 min-h-80 border">
                                <img src={BlogImage2} className='w-full h-full object-cover '  alt="" />
                            </div>
                        </div>
                        <div className="h-[49vh] w-full">
                            <img src={BlogImage1} className='w-full h-full object-cover ' alt="" />
                        </div>
                    </div>

                    <p className='text-neutral-500 text-base xl:text-lg'>
                        Facilisis nec malesuada enim viverra cras. Auctor dignissim tellus vestibulum vitae hac amet.
                        Suspendisse sit feugiat in pulvinar bibendum arcu nunc id. Duis hac nisl dui facilisi placerat at mauris elit scelerisque.
                        Turpis ornare auctor amet vestibulum in magna aliquet ultricies netus.
                        Adipiscing lobortis a interdum morbi etiam non. Elit sed magna risus tempor non quis. Nec pulvinar scelerisque in faucibus.
                    </p>
                    <p className='text-neutral-500 text-base xl:text-lg'>
                        Dis morbi cursus aliquam rutrum tortor amet.
                        Mauris consequat libero praesent pellentesque nibh sed eget urna.
                        Leo at feugiat vel dictum eget quam et commodo nullam. Nec arcu egestas adipiscing mollis dapibus justo non.


                    </p>


                    <div className="flex  justify-center w-full">
                        <div className="w-5/12 border border-l-0 py-2 border-zinc-700 flex justify-start items-center">
                            <p className='capitalize'>prev</p>
                        </div>
                        <div className="w-2/12  border border-x-0  py-2 border-zinc-700 flex justify-center items-center">
                            <BsShare className='w-4 h-4' />
                        </div>
                        <div className="w-5/12 border border-r-0  py-2 border-zinc-700 flex justify-end items-center">
                            <p className='capitalize'>next</p>
                        </div>
                    </div>

                </div>

                {/* right side */}

                <div className="flex flex-col w-full gap-7 md:w-10/12 lg:w-3/12 xl:w-4/12 ">

                    <div className="p-10 w-full border border-zinc-600">
                        <input type="text" className='bg-white p-3 w-full text-lg rounded-md text-black ' placeholder='search' />
                    </div>


                    <div className="flex justify-center gap-3 w-full p-8 border border-zinc-600 items-center flex-col">
                        <h1 className=' text-2xl md:text-3xl xl:text-4xl'>Category</h1>

                        <div className="flex flex-col w-full gap-1">
                            <p className='hover:text-amber-300 transition-all  ease-linear text-base cursor-pointer md:text-lg font-medium'>Fiction Writers</p>
                            <p className='hover:text-amber-300 transition-all  ease-linear text-base cursor-pointer md:text-lg font-medium'>Content Writers</p>
                            <p className='hover:text-amber-300 transition-all  ease-linear text-base cursor-pointer md:text-lg font-medium'>Digital Writers </p>
                            <p className='hover:text-amber-300 transition-all  ease-linear text-base cursor-pointer md:text-lg font-medium'>Business Writers</p>
                            <p className='hover:text-amber-300 transition-all  ease-linear text-base cursor-pointer md:text-lg font-medium'>Technical Writers</p>
                            <p className='hover:text-amber-300 transition-all  ease-linear text-base cursor-pointer md:text-lg font-medium'>Marketing Writers</p>


                        </div>
                    </div>


                    <div className="bg-zinc-800 border gap-2 flex items-center justify-center flex-col  border-zinc-700 p-10">

                        <h1 className='text-4xl capitalize '>get in toouch</h1>
                        <p className='text-neutral-400 text-center'>Ready to assist you in resolving any issues you may have.</p>
                        <button className='p-3 cursor-pointer bg-[#FF9078] w-52 text-xl'>Submit Now</button>

                    </div>





                </div>



            </div>

            <BlogLatest />
        </div>
    )
}

export default BlogSingle