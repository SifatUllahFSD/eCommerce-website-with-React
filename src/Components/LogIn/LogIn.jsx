import React from 'react'
import reg from '../../assets/images/reg.png'
import Button from '../Common/Button'
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {
  return (
    <>
    <section className='pb-[140px] pt-[60px] relative'>
      <div className="w-[50%]">
        <img src={reg} className='w-full' alt="" />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full ">
        <div className="container h-full">
            <div className="flex justify-end  items-center h-full">
                <div className="">
                     <h2 className='font-inter font-medium text-[36px] leading-[30px] text-black pb-6'>Log in to Exclusive</h2>
                     <p className='font-popins font-normal text-[16px] leading-6 text-black pb-12'>Enter your details below</p>
                     <form action="">
                        <div className="pb-10">
                            <input type="text" className=' border-b border-[#808080] outline-0 w-full pb-2 font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)] ' placeholder="Email or Phone Number" />
                        </div>
                        <div className="pb-10">
                            <input type="text" className=' border-b border-[#808080] outline-0 w-full pb-2 font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)] ' placeholder="Password" />
                        </div>
                     </form>
                     <div className="flex justify-between items-center">
                        <Button Text="Log In" className="py-4 px-12" ></Button>
                         <a href="" className='font-popins font-normal text-[16px] leading-6 text-[#DB4444]'>Forget Password?</a>
                         
                     </div>
                    
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default LogIn
