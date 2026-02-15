import React from 'react'
import new1 from '../../assets/images/new1.png'
import new2 from '../../assets/images/new2.png'
import new3 from '../../assets/images/new3.png'
import new4 from '../../assets/images/new4.png'
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from "../../Redux/Slice/wishlistSlice";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';





const WishList = () => {
     const dispatch = useDispatch()
     const wishlist = useSelector(state => state.wishlist.items);

   const [products, setProducts] = useState([])
   useEffect(() => {
  axios.get("https://dummyjson.com/products")
    .then(res => setProducts(res.data.products))
}, [])
const justForYou = products
  .filter(product => 
    !wishlist.some(item => item.id === product.id)
  )
  .slice(0, 4)


  return (
    <>
    <section className='pt-20'>
        <div className="container">
             <div className='flex justify-between pb-15'>
                    <h3 className='font-popins font-normal text-[20px] leading-[26px] text-black'>Wishlist ({wishlist.length})</h3>
                    <a href="" className='font-popins font-medium text-[16px] leading-6 text-black py-4 px-12 border border-[rgba(0,0,0,0.5)] rounded-sm'>Move All To Bag</a>
            </div>
             <div className="grid grid-cols-4 pb-[118px] gap-[30px]">
                    {
                        wishlist.map(flash => (
                            <div key={flash.id}>
                                <div className='bg-[#F5F5F5] py-8 rounded-sm mb-4 relative group overflow-hidden'>
                                    <Link to={`/Details/${flash.id}`}>
                                   <img 
                                    className="mx-auto object-contain"
                                    src={flash.thumbnail} 
                                    alt="" 
                                    />
                                    </Link>
                                    <div className='px-4 bg-[#DB4444] rounded-sm text-center py-1 pb-2 absolute top-3 left-3'>
                                        <span className='font-popins text-[#FAFAFA] text-[12px] font-normal leading-[18px]'>-{flash.discountPercentage}%</span>
                                    </div>
                                    <Link to={`/Details/${flash.id}`}>
                                    <a href="" className='bg-black absolute left-0 bottom-0 w-full py-2 font-popins font-medium text-[16px] leading-6 text-white text-center rounded-b-sm'>Add To Cart</a>
                                    </Link>
                                    <div className='absolute top-3 right-3'>
                                        <div onClick={() => dispatch(removeFromWishlist(flash.id))}
                                            className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center mb-2 cursor-pointer'
                                            >
                                            <RiDeleteBin6Line />
                                            </div>
                                    </div>
                                </div>
                                <h3 className='font-popins font-medium text-black text-[16px] leading-6 pb-2'>
                                    {flash.title}

                                </h3>

                                <p className='font-popins font-medium text-black text-[16px] leading-6 flex gap-3'>
                                    <span className='text-[#DB4444]'>${Math.round(flash.discountPercentage)}%</span> <del className='text-[rgba(0,0,0,0.5)]'>${flash.price}</del>
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
                            justForYou.map(flash => (
                                <div key={flash.id}>
                                    <div className='bg-[#F5F5F5] h-[220px] flex items-center justify-center rounded-sm mb-4 relative group overflow-hidden'>
                                        <img className="w-40 h-40 object-contain"  src={flash.thumbnail} alt="" />
                                        <div className='px-4 bg-[#DB4444] rounded-sm text-center py-1 pb-2 absolute top-3 left-3'>
                                            <span className='font-popins text-[#FAFAFA] text-[12px] font-normal leading-[18px]'>-{flash.discount}%</span>
                                        </div>
                                        <Link to={`/Details/${flash.id}`}>
                                        <button onClick={() => {
                                            dispatch(addtocart({ ...flash, quantity: 1 }))
                                            dispatch(removeFromWishlist(flash.id))
                                        }}
                                         className='bg-black absolute left-0 bottom-0 w-full py-2 text-white text-center rounded-b-sm'
                                        >
                                        Add To Cart
                                        </button>
                                            </Link>
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
