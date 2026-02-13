import React, { useEffect, useState } from 'react'
import new1 from '../../assets/images/new1.png'
import new2 from '../../assets/images/new2.png'
import new3 from '../../assets/images/new3.png'
import new4 from '../../assets/images/new4.png'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import axios from 'axios'

const Explore = () => {
    
    const [visibleCount, setVisibleCount] = useState(8)
    const [products, setProducts] =  useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
    },[])
    console.log(products)
  return (
   <>
   <section className='pb-[168px]'>
    <div className="container">
        <div className="">
             <h4 className='font-poppins font-semibold text-[16px] text-[#DB4444] leading-5 pl-9 relative after:absolute after:w-5 after:h-10 after:bg-[#DB4444] after:content-[""] after:left-0 after:-top-[50%] after:rounded-sm '>Our Products</h4>
           <div className="flex justify-between items-center text-center "> 
            <h2 className='pt-[34px] font-inter font-semibold text-[36px] text-[#000000] leading-8 '>Explore Our Products</h2>
             <div className="flex gap-2">
                       <button className="flash-prev w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-xl">
                        <GoArrowLeft />
                       </button>
                       <button className="flash-next w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-xl">
                        <GoArrowRight />
                       </button>
            </div>
           </div>
           
        </div>
        
        <div className=" grid grid-cols-4 pt-[60px] gap-x-[30px] gap-y-[60px] pb-[60px] ">
             {
                    products.slice(0,visibleCount).map((product,index) => (
                         <div className="" key={index}>
               <div className=" relative bg-[#F5F5F5] py-[35px] rounded-sm group overflow-hidden ">
                 <Link to={`/Details/${product.id}`}>
                   <img className='mx-auto' src={product.thumbnail} alt="" />
                 </Link>          
               
                  <a href="" className='font-poppins font-medium text-[16px] leading-6 text-[#FFFFFF] bg-black absolute w-full py-2 text-center left-0 -bottom-10 group-hover:bottom-0 duration-300 rounded-b-sm '>Add To Cart</a>
                  <div className='absolute top-3 right-3'>
                      <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2'>
                          <FaRegHeart />
                      </div>
                      <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>
                          <IoEyeOutline />
                      </div>
                  </div>
                 <div className=" absolute w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center top-3 left-3 ">
                    <span className='py-1 font-poppins font-normal text-[12px] leading-[18px] text-[#FAFAFA]'>-40%</span>
                 </div>
               </div>
               <h3 className='pt-4 font-poppins font-medium text-[16px] leading-6 text-[#000000] '>{product.title}</h3>
                <div className="flex gap-2 items-center ">
                      <p className='pt-2 text-[#DB4444] font-poppins font-medium text-[16px] leading-6 flex gap-3'>${product.price} </p>
               <div className="pt-2 flex gap-2 items-center ">
                <div className="flex gap-1  ">
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                    <FaStar className='text-[#FFAD33] text-[20px]' />
                   
                </div>
                <div className="">
                    <p className='font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]'>(88)</p>
                </div>
                </div>
               </div>
            </div>
                    ))}
         
 
        </div>
        {
            visibleCount < products.length
            && 
             <div className=" flex justify-center ">
            <button onClick={() => setVisibleCount(visibleCount+4)} className='font-poppins font-medium text-[16px] leading-6 text-[#FAFAFA] bg-[#DB4444] py-4 px-12  rounded-sm'>View More Products</button>
        </div>
        }
       
    </div>
   </section>
   </>
  )
}

export default Explore
