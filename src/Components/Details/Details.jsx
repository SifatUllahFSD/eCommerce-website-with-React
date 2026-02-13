import React, { useEffect, useState } from 'react'
import Related from '../Related/Related'
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import Button from '../Common/Button.jsx'
import { BsArrowRepeat } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import axios from 'axios'
import { useParams } from 'react-router'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { addtocart } from '../../Redux/Slice/cartSlice.jsx'
import Swal from 'sweetalert2'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'




const Details = () => {
    const {id} = useParams()
    const [previewimg, setPreviewImg] = useState(null)
    const [gallery,setGallery] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const handlePreview = (img, index) => {
        setPreviewImg(img)
        setActiveIndex(index)
    }
     const [quantity, setQuantity] = useState(1)

    const inc = () => {
        setQuantity(prev => prev+1)
    }
    const dec = () => {
        if(quantity > 1){
            setQuantity(prev => prev-1)
        }
    }

    const colors = [
        {id:1, name:'soft blue', color:'#A0BCE0'},
        {id:2, name:'soft red', color:'#E07575'},
    ]
    const sizes = [
        {id:1, name:'XS'},
        {id:2, name:'S'},
        {id:3, name:'M'},
        {id:4, name:'L'},
        {id:5, name:'XL'},
    ]

    const [showMore,setShowMore] = useState(false)


    const [prodetails,setproDetails] = useState({})
    useEffect(() =>{
     axios.get(`https://dummyjson.com/products/${id}`)
     .then(res =>{
            setproDetails(res.data),
            setPreviewImg(res.data.thumbnail),
            setGallery(res.data.images)
        })
    }, [id])
 
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addtocart({
            id:prodetails.id,
            title:prodetails.title,
            price:prodetails.price,
            thumbnail:prodetails.thumbnail,
            quantity,
        }))

         Swal.fire({
            title: "Add To Card Successful",
            icon: "success",
            draggable: true
                  });
        
    }
    
    

    
  return (
   <>
    <section className='pt-20 pb-[140px]'>
        <div className="container">
            <div className='pb-20 '>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-4'>
                    <a href="" className=''>Home</a> 
                    <span>/</span>
                    <span>Product Details</span>
                </p>
            </div>
            <div className='flex gap-[70px]'>
                <div className="w-[60%]">
                    <div className="flex gap-[30px] justify-between">
                        <div className='w-[20%] flex flex-col gap-4'>
                            {
                                gallery.map((gal, index) => (
                                    <div className={`bg-[#F5F5F5] flex justify-center items-center rounded-sm w-[170px] h-[138px] ${activeIndex === index ?'opacity-100':'opacity-30'}`}>
                                        <img onClick={()=>handlePreview(gal, index)} src={gal} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='w-[70%] bg-[#F5F5F5] rounded-sm px-7 py-[60px]'>
                            {previewimg && (
                                <InnerImageZoom
                                    src={previewimg}
                                   zoomSrc={gallery[activeIndex] || previewimg}
                                    zoomScale={1}
                                    className="w-full"
                                     hideHint={true}
                                     zoomPreload={true}
                                     zoomType="click"

                                    
                                />
                            )}
                        </div>

                    </div>
                </div>
                <div className="w-[40%]">
                    <h3 className='font-inter font-semibold text-[24px] leading-6 text-black'>{prodetails.title}</h3>
                    <div className='flex items-center gap-2 pt-4'>
                        <div className='flex gap-1'>
                          {
                                Array.from({length:5}).map((_,i) => {
                                    const rating = prodetails.rating
                                    const fullstar = Math.floor(rating)
                                    const halfstar = rating - fullstar >= 0.5

                                    if(i < fullstar) return <IoIosStar className='text-[#FFAD33]'/>
 
                                    if(i === fullstar && halfstar) return  <IoIosStarHalf className='text-[#FFAD33]'/>

                                    return <IoIosStarOutline className='text-[#FFAD33]'/>
                                })
                            }
                        </div>
                        <div className='pr-2'>
                            <span className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]'>({prodetails.reviews?.length} Reviews)</span>
                        </div>
                        <div>
                           <span className={`${prodetails.stock ? 'text-[#00FF66]':'text-[#c00]'} font-popins font-normal text-[14px] leading-[21px] border-l border-[rgba(0,0,0,0.5)] ps-4`}>{prodetails.stock ? 'In Stock':'out of stock'}</span>
                        </div>
                        
                    </div>
                    <h4 className='font-inter font-normal text-[24px] text-black leading-6 pt-4 pb-6'>${prodetails.price}</h4>
                    <div className='border-b border-[rgba(0,0,0,0.5)] pb-6'>
                        <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-[500px]':'max-h-[60px]'}`}>
                            <p className='font-popins font-normal text-[14px] leading-[21px] text-black pr-15 '>{prodetails.description}</p>
                        </div>
                        <span onClick={()=> setShowMore(!showMore)} className='underline'>
                            {
                                showMore ? 'view less':'view more...'
                            }
                        </span>
                    </div>
                    <div className='colors flex gap-6 pt-6'>
                         <div className='font-inter font-normal text-[20px] text-black leading-5'>Colours:</div>
                         <div className='flex gap-2'>
                            {
                                colors.map((color, index) => (
                                    <div key={index}>
                                        <input id={`color${color.id}`} type="radio" name='color' className='hidden' />
                                        <label htmlFor={`color${color.id}`}>
                                            <span style={{ backgroundColor:color.color }} className='w-5 h-5 inline-block rounded-full'></span>
                                        </label>
                                    </div>
                                ))
                            }
                            
                         </div>
                    </div>
                     <div className='sizes flex gap-6 pt-6 items-center'>
                         <div className='font-inter font-normal text-[20px] text-black leading-5'>Sizes:</div>
                         <div className='flex gap-4'>
                            {
                                sizes.map((size, index) => (
                                    <div key={index}>
                                        <input id={`size${size.id}`} type="radio" name='color' className='hidden' />
                                        <label htmlFor={`size${size.id}`}>
                                            <span className='w-8 h-8 rounded-sm border border-[rgba(0,0,0,0.5)] inline-block text-center leading-8'>{size.name}</span>
                                        </label>
                                    </div>
                                ))
                            }
                         </div>
                    </div>
                    <div className='flex pt-6 gap-4'>
                        <div className='flex'>
                            <div onClick={dec} className='flex justify-center items-center w-10 h-11 border border-[rgba(0,0,0,0.5)] rounded-l-sm hover:bg-[#DB4444] group hover:border-[#DB4444]'>
                                <FiMinus className='text-[24px] group-hover:text-white'/>
                            </div>
                            <div className='select-none w-20 h-11 border-y border-[rgba(0,0,0,0.5)] text-center leading-11 font-popins font-medium text-black text-[20px]'>{quantity}</div>
                            <div onClick={inc} className='flex justify-center items-center w-10 h-11 border border-[rgba(0,0,0,0.5)] rounded-r-sm hover:bg-[#DB4444] group hover:border-[#DB4444]'>
                                <GoPlus className='text-[24px] group-hover:text-white'/>
                            </div>
                        </div>
                        <div>
                            <Button onClick={handleAddToCart} Text="Add To Cart" className="px-12 py-2.5! select-none" />
                        </div>
                        <div>
                            <Button Text={<GoHeart/>} className="text-[26px] text-black p-2! bg-transparent border border-[rgba(0,0,0,0.5)]" />
                        </div>
                    </div>

                    <div className='border border-[rgba(0,0,0,0.5)] mt-[50px] py-6  rounded-sm'>
                        <div className='flex items-center gap-4 px-4 border-b border-[rgba(0,0,0,0.5)] pb-4'>
                            <div>
                                <TbTruckDelivery className='text-[40px] text-black'/>
                            </div>
                            <div>
                                <h4 className='font-popins font-medium text-[16px] leading-6 text-black pb-2'>Free Delivery</h4>
                                <p className='font-popins font-medium text-[12px] leading-[18px] text-black'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 px-4 pt-4'>
                            <div>
                                <BsArrowRepeat className='text-[40px] text-black'/>
                            </div>
                            <div>
                                <h4 className='font-popins font-medium text-[16px] leading-6 text-black pb-2'>Return Delivery</h4>
                                <p className='font-popins font-medium text-[12px] leading-[18px] text-black'>{prodetails.returnPolicy}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <Related category={prodetails.category}></Related>
   </>
  )
}

export default Details
