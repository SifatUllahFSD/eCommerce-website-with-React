import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";

const WhyUs = () => {
  return (
    <>
    <section className='pb-[141px]'>
        <div className="container">
            <div className="grid grid-cols-3 gap-[88px] px-[114px] ">
                <div className=" ">
                    <div className="bg-black flex justify-center items-center w-[68px] h-[68px] rounded-full border-10 border-[#c1c1c1] mx-auto">
                        <TbTruckDelivery className='text-white text-[32px]' />
                    </div>
                    <div className="text-center pt-6">
                         <h3 className='font-popins font-semibold text-[20px] leading-7 text-black pb-2'>FREE AND FAST DELIVERY</h3>
                       <p className='font-popins font-normal text-[14px] leading-[21px] text-black'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                 <div className=" ">
                    <div className="bg-black flex justify-center items-center w-[68px] h-[68px] rounded-full border-10 border-[#c1c1c1] mx-auto">
                        <SlEarphonesAlt className='text-white text-[32px]' />
                    </div>
                    <div className="text-center pt-6">
                         <h3 className='font-popins font-semibold text-[20px] leading-7 text-black pb-2'>24/7 CUSTOMER SERVICE</h3>
                       <p className='font-popins font-normal text-[14px] leading-[21px] text-black'>Friendly 24/7 customer support</p>
                    </div>
                </div>
                 <div className=" ">
                    <div className="bg-black flex justify-center items-center w-[68px] h-[68px] rounded-full border-10 border-[#c1c1c1] mx-auto">
                        <GoShieldCheck className='text-white text-[32px]' />
                    </div>
                    <div className="text-center pt-6">
                         <h3 className='font-popins font-semibold text-[20px] leading-7 text-black pb-2'>MONEY BACK GUARANTEE</h3>
                       <p className='font-popins font-normal text-[14px] leading-[21px] text-black'>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhyUs
