import React from 'react'
import new1 from '../../assets/images/new1.png'
import new2 from '../../assets/images/new2.png'
import new3 from '../../assets/images/new3.png'
import new4 from '../../assets/images/new4.png'
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const WishList = () => {
     const wishlist = [
        {id:1, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new1},
        {id:2, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new2},
        {id:3, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:0, image:new3},
        {id:4, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:0, image:new4},
    ]
    const just = [
        {id:1, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new1,color:'#00FF66',},
        {id:2, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:40, image:new2,color:'#00FF66',},
        {id:3, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:0, image:new3 , color:'#00FF66',},
        {id:4, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:0, image:new4,
            color:'#00FF66'
        },
    ]
  return (
    <>
    <section className='pt-20'>
        <div className="container">
             <div className='flex justify-between pb-15'>
                    <h3 className='font-popins font-normal text-[20px] leading-[26px] text-black'>Wishlist(4)</h3>
                    <a href="" className='font-popins font-medium text-[16px] leading-6 text-black py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm'>Move All To Bag</a>
            </div>
             <div className="grid grid-cols-4 pb-[118px] gap-[30px]">
                    {
                        wishlist.map(flash => (
                            <div>
                                <div className='bg-[#F5F5F5] py-[35px] rounded-sm mb-4 relative group overflow-hidden'>
                                    <img className='mx-auto' src={flash.image} alt="" />
                                    <div className='px-4 bg-[#DB4444] rounded-sm text-center py-1 pb-2 absolute top-3 left-3'>
                                        <span className='font-popins text-[#FAFAFA] text-[12px] font-normal leading-[18px]'>-{flash.discount}%</span>
                                    </div>
                                    <a href="" className='bg-black absolute left-0 bottom-0 w-full py-2 font-popins font-medium text-[16px] leading-6 text-white text-center rounded-b-sm'>Add To Cart</a>
                                    <div className='absolute top-3 right-3'>
                                        <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2'>
                                            <RiDeleteBin6Line />
                                        </div>
                                    </div>
                                </div>
                                <h3 className='font-popins font-medium text-black text-[16px] leading-6 pb-2'>
                                    {flash.name}
                                </h3>

                                <p className='font-popins font-medium text-black text-[16px] leading-6 flex gap-3'>
                                    <span className='text-[#DB4444]'>${flash.dprice}</span> <del className='text-[rgba(0,0,0,0.5)]'>${flash.price}</del>
                                </p>
                                
                            </div>
                        ))
                    }

                </div>
                 <div>
                    <div className='flex justify-between pb-15'>
                        <h3 className='font-popins font-normal text-[20px] leading-[26px] text-black relative after:w-5 after:h-10 after:absolute after:content-[""] after:-top-2.5 after:left-0 after:bg-red-500 after:rounded-sm ps-8'>Just For You</h3>
                        <a href="" className='font-popins font-medium text-[16px] leading-6 text-black py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm'>See All</a>
                    </div>
                    <div className="grid grid-cols-4 pb-[118px] gap-[30px]">
                        {
                            just.map(flash => (
                                <div>
                                    <div className='bg-[#F5F5F5] py-[35px] rounded-sm mb-4 relative group overflow-hidden'>
                                        <img className='mx-auto' src={flash.image} alt="" />
                                        <div className='px-4 bg-[#DB4444] rounded-sm text-center py-1 pb-2 absolute top-3 left-3'>
                                            <span className='font-popins text-[#FAFAFA] text-[12px] font-normal leading-[18px]'>-{flash.discount}%</span>
                                        </div>
                                        <a href="" className='bg-black absolute left-0 bottom-0 w-full py-2 font-popins font-medium text-[16px] leading-6 text-white text-center rounded-b-sm'>Add To Cart</a>
                                        <div className='absolute top-3 right-3'>
                                            <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>
                                                <IoEyeOutline />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='font-popins font-medium text-black text-[16px] leading-6 pb-2'>
                                        {flash.name}
                                    </h3>

                                    <p className='font-popins font-medium text-black text-[16px] leading-6 flex gap-3'>
                                        <span className='text-[#DB4444]'>${flash.dprice}</span> <del className='text-[rgba(0,0,0,0.5)]'>${flash.price}</del>
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
        </div>
    </section>
    </>
  )
}

export default WishList
