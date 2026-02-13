import React from 'react'
import best1 from '../../assets/images/best1.png'
import best2 from '../../assets/images/best2.png'
import best3 from '../../assets/images/best3.png'
import best4 from '../../assets/images/best4.png'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const BestSelling = () => {
    const BestSelling = [
        {id:1, name:'The north coat', dprice:260, price:360, image:best1, rating:4},
        {id:1, name:'The north coat', dprice:260, price:360, image:best2, rating:5},
        {id:1, name:'The north coat', dprice:260, price:360, image:best3, rating:3},
        {id:1, name:'The north coat', dprice:260, price:360, image:best4, rating:2},
    ]
  return (
   <>
   <section className='pb-[140px]'>
    <div className="container border-t border-[rgba(0,0,0,0.3)] pt-[78px]">
        <div className=" ">
             <h4 className= '  font-poppins font-semibold text-[16px] text-[#DB4444] leading-5 pl-9 relative after:absolute after:w-5 after:h-10 after:bg-[#DB4444] after:content-[""] after:left-0 after:-top-[50%] after:rounded-sm '>This Month</h4>
            <h2 className='pt-[34px] font-inter font-semibold text-[36px] text-[#000000] leading-8 flex justify-between'> <span> Best Selling Products</span> <a className='font-poppins font-medium text-[16px] leading-6 text-[#FAFAFA] bg-[#DB4444] py-4 px-12  rounded-sm'>View All</a></h2>
             
        </div>
        <div className=" grid grid-cols-4 pt-10 gap-[30px]  ">
            {
                BestSelling.map(best =>(
                      <div className="">
               <div className=" bg-[#F5F5F5] py-[35px] rounded-sm relative ">
                 <img className='mx-auto' src={best.image} alt="" />
                  <div className='absolute top-3 right-3'>
                    <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2'>
                        <FaRegHeart />
                    </div>
                    <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>
                        <IoEyeOutline />
                    </div>
                 </div>
               </div>
               <h3 className='pt-4 font-poppins font-medium text-[16px] leading-6 text-[#000000] '>HAVIT HV-G92 Gamepad</h3>
               <p className='pt-2 text-[#DB4444] font-poppins font-medium text-[16px] leading-6 flex gap-3'>${best.dprice} <del className='text-[rgba(0,0,0,0.5)] '>${best.price}</del></p>
               <div className="pt-2 flex gap-2 items-center ">
                <div className="flex gap-1  ">
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                   
                </div>
                <div className="">
                    <p className='font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]'>({best.rating})</p>
                </div>
               </div>
            </div>
                ))
            }
           
           
        </div>
    </div>
   </section>
   </>
  )
}

export default BestSelling
