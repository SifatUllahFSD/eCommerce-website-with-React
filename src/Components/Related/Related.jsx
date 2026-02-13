import React, { useEffect, useState } from 'react'
import new1 from '../../assets/images/new1.png'
import { FaStar } from "react-icons/fa";
import CountdownTimer from '../Countdown/Countdown';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import axios from 'axios';
import { Link } from 'react-router';



const Related = ({category}) => {
    const FlashSales = [
        {id:1, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new1},
        {id:2, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new1},
        {id:3, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new1},
        {id:4, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new1},
    ]

    const [related,setRelated] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${category}`)
        .then(res => setRelated(res.data.products) )
    })
  return (
    <>
    <section className=''>
        <div className="container">
            <div className='pb-[70px] flex gap-[87px] items-end'>
               <div>
                 <h4 className='font-inter font-semibold text-[16px] leading-5 text-[#DB4444] pl-[34px] relative after:w-5 after:h-10 after:absolute after:content-[""] after:-top-2.5 after:left-0 after:bg-red-500 after:rounded-sm'>Related Item</h4>
               </div>
               
            </div>
            <div className="grid grid-cols-4 pb-[118px] gap-[30px]">
                {
                    related.map(item => (
                        <div>
                            <div className='bg-[#F5F5F5] py-[35px] rounded-sm mb-4 relative group overflow-hidden'>
                                <Link to={`/Details/${item.id}`}>
                                <img className='mx-auto' src={item.thumbnail} alt="" />
                                </Link>
                                <div className='px-4 bg-[#DB4444] rounded-sm text-center py-1 pb-2 absolute top-3 left-3'>
                                    <span className='font-popins text-[#FAFAFA] text-[12px] font-normal leading-[18px]'>-{item.discountPercentage}%</span>
                                </div>
                                <a href="" className='bg-black absolute left-0 -bottom-10 w-full py-2 font-popins font-medium text-[16px] leading-6 text-white text-center rounded-b-sm group-hover:bottom-0 duration-300'>Add To Cart</a>
                                <div className='absolute top-3 right-3'>
                                    <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2'>
                                        <FaRegHeart />
                                    </div>
                                    <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>
                                        <IoEyeOutline />
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-popins font-medium text-black text-[16px] leading-6 pb-2'>
                               <Link to={`/Details/${item.id}`}>                                
                                {item.title}
                                </Link>
                            </h3>

                            <p className='font-popins font-medium text-black text-[16px] leading-6 flex gap-3'>
                                <span className='text-[#DB4444]'>${(item.price - item.price*item.discountPercentage / 100).toFixed(2)}</span> <del className='text-[rgba(0,0,0,0.5)]'>${item.price}</del>
                            </p>
                            <div className='flex gap-2 items-center'>
                                <div className='flex gap-1'>
                                    <FaStar className='text-[#FFAD33] text-[20px]' />
                                    <FaStar className='text-[#FFAD33] text-[20px]' />
                                    <FaStar className='text-[#FFAD33] text-[20px]' />
                                    <FaStar className='text-[#FFAD33] text-[20px]' />
                                    <FaStar className='text-[#FFAD33] text-[20px]' />
                                </div>
                                <div className='pt-2'>
                                    <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-5'>(88)</span>
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

export default Related