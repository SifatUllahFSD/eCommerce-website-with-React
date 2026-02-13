import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import banner4 from '../../assets/images/banner4.png'
import banner7 from '../../assets/images/banner7.png'
import banner8 from '../../assets/images/banner8.png'
import banner1 from '../../assets/images/banner1.png'
import { IoArrowForward } from "react-icons/io5";
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router';


const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1500,
    fade: true,
  };

  const [categories,setCategories] = useState([])
   useEffect(() =>{
      axios.get('https://dummyjson.com/products/categories')
      .then(result => setCategories(result.data) )
    })

  return (
    
      <section className='  '>
        <div className="container">
            <div className="flex gap-[45px]  ">
                <div className="w-[20%] category flex flex-col pt-10 gap-4 border-r border-[rgba(0,0,0,0.25)] ">
                  {
                    categories.slice(0,9).map(category =>(
                    
                   <Link to={`products/categories/${category.slug}`}>{category.name}</Link>
                    ))
                  }
                </div>
                <div className="w-[80%] pt-10 ">
                   <Slider {...settings}>
                  <div className="item">
                     <div className=" bg-black flex ">
                     <div className="w-[40%] pt-[58px] pl-16 ">
                    <div className="flex items-center gap-6">
                       <img src={banner1} alt="" />
                       <h3 className='font-poppins text-[#FAFAFA] text-[16px] font-normal leading-6'>iPhone 14 Series</h3>
                    </div>
                    <h2 className=' pb-[22px] pt-5 text-[#FAFAFA] text-[48px] font-inter font-semibold leading-[60px] pr-7 ' >Up to 10% off Voucher</h2>
                    <p className='flex gap-2 items-center'>
                      <a className='font-poppins text-[#FAFAFA] text-[16px] font-medium leading-6 border-b border-[#FAFAFA] pb-1 ' href="">Shop Now</a>
                       <IoArrowForward className=' text-[#FAFAFA] ' />
                       </p>
                     </div>
                     <div className="w-[60%] flex justify-end pt-4 ">
                     <img src={banner2} alt="" />
                     </div>
                   </div>
                  </div>

                   <div className="item">
                     <div className=" bg-[rgba(17,202,165,0.81)] flex ">
                     <div className="w-[40%] pt-[58px] pl-16 ">
                    <div className="flex items-center gap-6">
                       <img src={banner1} alt="" />
                       <h3 className='font-poppins text-[#FAFAFA] text-[16px] font-normal leading-6'>iPhone 14 Series</h3>
                    </div>
                    <h2 className=' pb-[22px] pt-5 text-[#FAFAFA] text-[48px] font-inter font-semibold leading-[60px] pr-7' >Up to 10% off Voucher</h2>
                    <p className='flex gap-2 items-center'>
                      <a className='font-poppins text-[#FAFAFA] text-[16px] font-medium leading-6 border-b border-[#FAFAFA] pb-1 ' href="">Shop Now</a>
                       <IoArrowForward className=' text-[#FAFAFA] ' />
                       </p>
                     </div>
                     <div className="w-[60%] flex justify-end pt-4 ">
                     <img src={banner7} alt="" />
                     </div>
                   </div>
                  </div>

                   <div className="item">
                     <div className=" bg-black flex ">
                     <div className="w-[40%] pt-[58px] pl-16 ">
                    <div className="flex items-center gap-6">
                       <img src={banner1} alt="" />
                       <h3 className='font-poppins text-[#FAFAFA] text-[16px] font-normal leading-6'>iPhone 14 Series</h3>
                    </div>
                    <h2 className=' pb-[22px] pt-5 text-[#FAFAFA] text-[48px] font-inter font-semibold leading-[60px] pr-7' >Up to 10% off Voucher</h2>
                    <p className='flex gap-2 items-center'>
                      <a className='font-poppins text-[#FAFAFA] text-[16px] font-medium leading-6 border-b border-[#FAFAFA] pb-1 ' href="">Shop Now</a>
                       <IoArrowForward className=' text-[#FAFAFA] ' />
                       </p>
                     </div>
                     <div className="w-[60%] flex justify-end pt-4">
                     <img src={banner4} alt="" />
                     </div>
                   </div>
                  </div>

                   <div className="item">
                     <div className=" bg-[rgba(219,71,3,0.81)] flex ">
                     <div className="w-[40%] pt-[58px] pl-16 ">
                    <div className="flex items-center gap-6">
                       <img src={banner1} alt="" />
                       <h3 className='font-poppins text-[#FAFAFA] text-[16px] font-normal leading-6'>iPhone 14 Series</h3>
                    </div>
                    <h2 className=' pb-[22px] pt-5 text-[#FAFAFA] text-[48px] font-inter font-semibold leading-[60px] pr-7' >Up to 10% off Voucher</h2>
                    <p className='flex gap-2 items-center'>
                      <a className='font-poppins text-[#FAFAFA] text-[16px] font-medium leading-6 border-b border-[#FAFAFA] pb-1 ' href="">Shop Now</a>
                       <IoArrowForward className=' text-[#FAFAFA] ' />
                       </p>
                     </div>
                     <div className="w-[60%] flex justify-end pt-4 ">
                     <img src={banner8} alt="" />
                     </div>
                   </div>
                  </div>

                   <div className="item">
                     <div className=" bg-[#056760ab] flex ">
                     <div className="w-[40%] pt-[58px] pl-16 ">
                    <div className="flex items-center gap-6">
                       <img src={banner1} alt="" />
                       <h3 className='font-poppins text-[#FAFAFA] text-[16px] font-normal leading-6'>iPhone 14 Series</h3>
                    </div>
                    <h2 className=' pb-[22px] pt-5 text-[#FAFAFA] text-[48px] font-inter font-semibold leading-[60px] pr-7' >Up to 10% off Voucher</h2>
                    <p className='flex gap-2 items-center'>
                      <a className='font-poppins text-[#FAFAFA] text-[16px] font-medium leading-6 border-b border-[#FAFAFA] pb-1 ' href="">Shop Now</a>
                       <IoArrowForward className=' text-[#FAFAFA] ' />
                       </p>
                     </div>
                     <div className="w-[60%] flex justify-end pt-4 ">
                     <img className='' src={banner3} alt="" />
                     </div>
                   </div>
                  </div>
                  </Slider>
                </div>
            </div>
        </div>
      </section>
    
  )
}

export default Banner
