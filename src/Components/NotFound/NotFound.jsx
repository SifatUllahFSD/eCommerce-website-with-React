import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
   <section className='pt-20 pb-[140px]'>
    <div className="container">
        <div className="">
          <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.43)] flex gap-4'>
            <a href="">Home</a> <span>/</span> <span className='text-[#000000]'>404 Error</span>
            </p>  
        </div>  
         <div className='text-center pt-[140px]'>
                <h2 className='font-inter font-medium text-[110px] leading-[115px] text-black pb-10'>404 Not Found</h2>
                <p className='font-popins font-normal text-[16px] leading-6 text-black pb-24'>Your visited page not found. You may go home page.</p>
                <Link to="/" className='px-12 py-4 bg-[#DB4444] text-[#fafafa] text-[16px] leading-6 font-popins font-medium rounded-sm'>Back to home page</Link>
        </div>
    </div>
   </section>
  )
}

export default NotFound
