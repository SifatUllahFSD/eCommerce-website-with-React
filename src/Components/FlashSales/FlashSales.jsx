// import React from 'react'
// import new1 from '../../assets/images/new1.png'
// import new2 from '../../assets/images/new2.png'
// import new3 from '../../assets/images/new3.png'
// import new4 from '../../assets/images/new4.png'
// import { FaStar } from "react-icons/fa";
// import { FaRegStarHalfStroke } from "react-icons/fa6";
// import CountdownTimer from '../Countdown/Countdown'
// import { FaRegHeart } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// const FlashSales = () => {
//   const FlashSales = [
//     {id:1, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:-40, image:new1},
//     {id:2, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:-40, image:new2},
//     {id:3, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:-40, image:new3},
//     {id:4, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:-40, image:new4},
//     {id:5, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:-40, image:new4},
//     {id:6, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:-40, image:new4},
//     {id:7, name:'HAVIT HV-G92 Gamepad', dprice:120, price:160, discount:-40, image:new4},
//     ]
//   return (
//    <>
//    <section className='pt-[120px] pb-[102px]'>
//     <div className="container">
//         <div className="flex items-end gap-[87px] ">
//            <div className="">
//              <h4 className='font-poppins font-semibold text-[16px] text-[#DB4444] leading-5 pl-9 relative after:absolute after:w-5 after:h-10 after:bg-[#DB4444] after:content-[""] after:left-0 after:-top-[50%] after:rounded-sm '>Today’s</h4>
//             <h2 className='pt-[34px] font-inter font-semibold text-[36px] text-[#000000] leading-8 '>Flash Sales</h2>
//            </div>
//            <div className="">
//             <CountdownTimer
//              targetDate="2025-12-31T23:59:59" 
//             rendarer={(time) =>
//              {
//                return(
//                 <div className='flex items-center gap-[17px]'>
//                   <div className="">
//                     <p className='font-poppins font-medium text-[12px] leading-[18px] text-[#000000]'>days</p>
//                     <h2 className='font-inter font-bold text-[32px] leading-[30px] text-[#000000] pt-1'>{time.days}</h2>
//                   </div>
//                   <div className="pt-3"><span className='text-[#E07575] text-[30px] font-bold '>:</span></div>
//                    <div className="">
//                     <p className='font-poppins font-medium text-[12px] leading-[18px] text-[#000000]'>Hours</p>
//                     <h2 className='font-inter font-bold text-[32px] leading-[30px] text-[#000000] pt-1'>{time.hours}</h2>
//                   </div>
//                   <div className="pt-3"><span className='text-[#E07575] text-[30px] font-bold '>:</span></div>
//                    <div className="">
//                     <p className='font-poppins font-medium text-[12px] leading-[18px] text-[#000000]'>Minutes</p>
//                     <h2 className='font-inter font-bold text-[32px] leading-[30px] text-[#000000] pt-1'>{time.minutes}</h2>
//                   </div>
//                   <div className="pt-3"><span className='text-[#E07575] text-[30px] font-bold '>:</span></div>
//                    <div className="">
//                     <p className='font-poppins font-medium text-[12px] leading-[18px] text-[#000000]'>Seconds</p>
//                     <h2 className='font-inter font-bold text-[32px] leading-[30px] text-[#000000] pt-1'>{time.seconds}</h2>
//                   </div>
                 
//                 </div>
                
//               )
//              }
//              }
//             >

//             </CountdownTimer>
//            </div>
//         </div>
//         <div className="">
//         <Swiper
//           spaceBetween={24}
//               slidesPerView={4} 
 
//               loop={true}
//                 navigation={{
//                   nextEl: ".swiper-button-next",
//                   prevEl: ".swiper-button-prev",
//               }}
//               autoplay={{
//                   delay: 2000,
//                   disableOnInteraction: false, }}
//                 modules={[Autoplay, Navigation]}

//               breakpoints={{
//                   1024: { slidesPerView: 4 ,
                     
//                   },
//                   768: {slidesPerView: 2},
//                   300: { slidesPerView: 1 
//  },
//               }}
//         >
//             <SwiperSlide>
              
//                  {
//             FlashSales.map(flash => (
//                  <div className="">
//                <div className=" relative bg-[#F5F5F5] py-[35px] rounded-sm group overflow-hidden ">
//                  <img className='mx-auto' src={flash.image} alt="" />
//                  <div className=" absolute w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center top-3 left-3 ">
//                     <span className='py-1 font-poppins font-normal text-[12px] leading-[18px] text-[#FAFAFA]'>{flash.discount}</span>
//                  </div>
//                  <a href="" className='font-poppins font-medium text-[16px] leading-6 text-[#FFFFFF] bg-black absolute w-full py-2 text-center left-0 -bottom-10 group-hover:bottom-0 duration-300 rounded-b-sm '>Add To Cart</a>
//                  <div className='absolute top-3 right-3'>
//                     <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2'>
//                         <FaRegHeart />
//                     </div>
//                     <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>
//                         <IoEyeOutline />
//                     </div>
//                 </div>
//                </div>
//                <h3 className='pt-4 font-poppins font-medium text-[16px] leading-6 text-[#000000] '> {flash.name}</h3>
//                <p className='pt-2 text-[#DB4444] font-poppins font-medium text-[16px] leading-6 flex gap-3'>${flash.dprice} <del className='text-[rgba(0,0,0,0.5)] '>${flash.price}</del></p>
//                <div className="pt-2 flex gap-2 items-center ">
//                 <div className="flex gap-1  ">
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
                   
//                 </div>
//                 <div className="">
//                     <p className='font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]'>(88)</p>
//                 </div>
//                </div>
//             </div>
//             ))
//           }
            
//             </SwiperSlide>

          
//         </Swiper>
//         </div>
//         {/* <div className=" grid grid-cols-4 pt-10 gap-[30px] pb-[102px] ">
//           {
//             FlashSales.map(flash => (
//                  <div className="">
//                <div className=" relative bg-[#F5F5F5] py-[35px] rounded-sm group overflow-hidden ">
//                  <img className='mx-auto' src={flash.image} alt="" />
//                  <div className=" absolute w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center top-3 left-3 ">
//                     <span className='py-1 font-poppins font-normal text-[12px] leading-[18px] text-[#FAFAFA]'>{flash.discount}</span>
//                  </div>
//                  <a href="" className='font-poppins font-medium text-[16px] leading-6 text-[#FFFFFF] bg-black absolute w-full py-2 text-center left-0 -bottom-10 group-hover:bottom-0 duration-300 rounded-b-sm '>Add To Cart</a>
//                  <div className='absolute top-3 right-3'>
//                     <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2'>
//                         <FaRegHeart />
//                     </div>
//                     <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>
//                         <IoEyeOutline />
//                     </div>
//                 </div>
//                </div>
//                <h3 className='pt-4 font-poppins font-medium text-[16px] leading-6 text-[#000000] '> {flash.name}</h3>
//                <p className='pt-2 text-[#DB4444] font-poppins font-medium text-[16px] leading-6 flex gap-3'>${flash.dprice} <del className='text-[rgba(0,0,0,0.5)] '>${flash.price}</del></p>
//                <div className="pt-2 flex gap-2 items-center ">
//                 <div className="flex gap-1  ">
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
//                     <FaStar className='text-[#FFAD33] text-[20px]' />
                   
//                 </div>
//                 <div className="">
//                     <p className='font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]'>(88)</p>
//                 </div>
//                </div>
//             </div>
//             ))
//           }
           

//         </div> */}
//         <div className=" flex justify-center ">
//             <button className='font-poppins font-medium text-[16px] leading-6 text-[#FAFAFA] bg-[#DB4444] py-4 px-12  rounded-sm'>View All Products</button>
//         </div>
//     </div>
//    </section>
//    </>
//   )
// }

// export default FlashSales



















import React from 'react'
import new1 from '../../assets/images/new1.png'
import new2 from '../../assets/images/new2.png'
import new3 from '../../assets/images/new3.png'
import new4 from '../../assets/images/new4.png'

import { FaStar } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { IoEyeOutline } from "react-icons/io5"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

import CountdownTimer from '../Countdown/Countdown'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

const FlashSales = () => {

  const FlashSales = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', dprice: 120, price: 160, discount: -40, image: new1 },
    { id: 2, name: 'AK-900 Wired Keyboard', dprice: 960, price: 1160, discount: -35, image: new2 },
    { id: 3, name: 'IPS LCD Gaming Monitor', dprice: 370, price: 400, discount: -30, image: new3 },
    { id: 4, name: 'S-Series Comfort Chair', dprice: 375, price: 400, discount: -25, image: new4 },
    { id: 5, name: 'S-Series Comfort Chair', dprice: 375, price: 400, discount: -25, image: new1 },
    { id: 6, name: 'S-Series Comfort Chair', dprice: 375, price: 400, discount: -25, image: new2 },
    { id: 7, name: 'S-Series Comfort Chair', dprice: 375, price: 400, discount: -25, image: new3 },
    { id: 8, name: 'S-Series Comfort Chair', dprice: 375, price: 400, discount: -25, image: new4 },
  ]

  return (
    <section className="pt-[120px] pb-[102px]">
      <div className="container">

        {/* ================= Header ================= */}
        <div className="flex items-end justify-between">

          {/* Left */}
          <div className="flex items-end gap-[87px]">
            <div>
              <h4 className='font-poppins font-semibold text-[16px] text-[#DB4444] leading-5 pl-9 relative after:absolute after:w-5 after:h-10 after:bg-[#DB4444] after:content-[""] after:left-0 after:-top-[50%] after:rounded-sm'>
                Today’s
              </h4>
              <h2 className='pt-[34px] font-inter font-semibold text-[36px] text-[#000000] leading-8'>
                Flash Sales
              </h2>
            </div>

            {/* Countdown */}
            <CountdownTimer
              targetDate="2026-12-31T23:59:59"
              rendarer={(time) => (
                <div className="flex items-center gap-[17px]">
                  {["days", "hours", "minutes", "seconds"].map((label, i) => (
                    <React.Fragment key={i}>
                      <div>
                        <p className="font-poppins font-medium text-[12px] capitalize">
                          {label}
                        </p>
                        <h2 className="font-inter font-bold text-[32px]">
                          {time[label]}
                        </h2>
                      </div>
                      {i !== 3 && (
                        <span className="text-[#E07575] text-[30px] font-bold pt-3">:</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            />
          </div>

          {/* Right → Custom Arrow */}
          <div className="flex gap-2">
            <button className="flash-prev w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-xl">
             <GoArrowLeft />
            </button>
            <button className="flash-next w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-xl">
             <GoArrowRight />
            </button>
          </div>
        </div>

        {/* ================= Swiper ================= */}
        <div className="pt-10 pb-[102px]">
          <Swiper
            modules={[Navigation, Autoplay ]}
            
            navigation={{
              prevEl: '.flash-prev',
              nextEl: '.flash-next',
            }}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {
              FlashSales.map(item => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="relative bg-[#F5F5F5] py-[35px] rounded-sm group overflow-hidden">

                      <img src={item.image} alt={item.name} className="mx-auto" />

                      <div className="absolute top-3 left-3 w-[55px] h-[26px] bg-[#DB4444] rounded-sm text-center">
                        <span className="text-white text-[12px]">
                          {item.discount}%
                        </span>
                      </div>

                      <a
                        href="#"
                        className="absolute w-full left-0 -bottom-10 group-hover:bottom-0 duration-300 bg-black text-white text-center py-2"
                      >
                        Add To Cart
                      </a>

                      <div className="absolute top-3 right-3">
                        <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2">
                          <FaRegHeart />
                        </div>
                        <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
                          <IoEyeOutline />
                        </div>
                      </div>

                    </div>

                    <h3 className="pt-4 font-poppins font-medium text-[16px]">
                      {item.name}
                    </h3>

                    <p className="pt-2 text-[#DB4444] font-medium flex gap-3">
                      ${item.dprice}
                      <del className="text-[rgba(0,0,0,0.5)]">
                        ${item.price}
                      </del>
                    </p>

                    <div className="pt-2 flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#FFAD33]" />
                        ))}
                      </div>
                      <span className="text-[rgba(0,0,0,0.5)] font-semibold">
                        (88)
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        {/* ================= Button ================= */}
        <div className="flex justify-center">
          <button className="bg-[#DB4444] text-white py-4 px-12 rounded-sm">
            View All Products
          </button>
        </div>

      </div>
    </section>
  )
}

export default FlashSales