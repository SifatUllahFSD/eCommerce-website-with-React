 import React from 'react'
 import logo2 from '../../assets/images/logo2.png'
 import qr from '../../assets/images/qr.png'
 import ps from '../../assets/images/playstore.png'
 import as from '../../assets/images/appstore.png'
 import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { LuCopyright } from "react-icons/lu";
import { PiPaperPlaneRightLight } from "react-icons/pi";
 
 const Footer = () => {
   return (
    <>
    <footer className='bg-[#000000] pt-20 '>
        <div className="container pb-[116px]">
            <div className="flex gap-[87px] ">
                <div className="w-[26%]">
                    <img src={logo2} alt="" />
                    <h3 className='pt-6 pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]' >Subscribe</h3>
                    <p className='pb-[25px] font-poppins font-normal text-[16px] leading-6  text-[#FAFAFA]'>Get 10% off your first order</p>
                    <div className="w-[217px] relative ">
                        <input className='w-full border-2 border-white font-poppins text-[16px] leading-6 font-normal text-[#FAFAFA] py-3 pl-4 pr-8 outline-0 rounded-sm bg-[#000000] ' type="text" placeholder='Enter your email' />
                        <PiPaperPlaneRightLight className=' text-white absolute top-1/2 right-3 -translate-y-1/2 text-[18px] ' />
                   </div>
                </div>
                <div className="w-[17%]">
                     <h3 className=' pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]' >Support</h3>
                    <p className='pb-4 font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className='pb-4 font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>exclusive@gmail.com</p>
                    <p className='font-poppins font-normal text-[16px] leading-6 text-[#FAFAFA]'>+88015-88888-9999</p>
                </div>
                 <div className="w-[17%]">
                     <h3 className=' pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]' >Account</h3>
                     <div className="flex flex-col gap-y-4 ">
                    <a className=' address'>My Account</a>
                    <a className=' address'>eLogin / Register</a>
                    <a className=' address '>Cart</a>
                    <a className='address'>Wishlist</a>
                     </div>
                </div>
                 <div className="w-[18%]">
                     <h3 className=' pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]' >Quick Link</h3>
                     <div className="flex flex-col gap-y-4 ">
                    <a className=' address'>Privacy Policy</a>
                    <a className=' address'>Terms Of Use</a>
                    <a className=' address '>FAQ</a>
                    <a className='address'>Contact</a>
                     </div>
                </div>
                 <div className="w-[20%]">
                     <h3 className=' pb-6 font-poppins font-medium text-[20px] leading-7 text-[#FAFAFA]' >Quick Link</h3>
                     <div className="flex gap-2 ">
                       <div className="">
                        <img src={qr} alt="" />
                       </div>
                       <div className="flex flex-col gap-y-2.5">
                        <img src={ps} alt="" />
                        <img src={as} alt="" />
                       </div>
                     </div>
                      <div className='flex gap-6 pt-6 '>
                        <a href="" className='text-[18px] text-white'><RiFacebookLine /></a>
                        <a href="" className='text-[18px] text-white'><RiTwitterLine /></a>
                        <a href="" className='text-[18px] text-white'><AiOutlineInstagram /></a>
                        <a href="" className='text-[18px] text-white'><RiLinkedinLine /></a>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="flex gap-1.5 justify-center items-center pb-6 ">
           <p> <LuCopyright className=' text-[rgba(255,255,255,0.22)] text-[18px] ' /></p>
            <h3 className='font-poppins font-normal text-[16px] leading-6 text-[rgba(255,255,255,0.22)]'>Copyright Rimel 2022. All right reserved</h3>
        </div>
    </footer>
    </>
   )
 }
 
 export default Footer
 