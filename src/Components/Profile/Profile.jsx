import React from 'react'
import Button from '../Common/Button'

const Profile = () => {
  return (
    <>
    <section className='pb-[140px]'>
        <div className="container">
            <div className='py-20 flex justify-between'>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-4'>
                    <a href="" className=''>Home</a> 
                    <span>/</span>
                    <span>My Account</span>
                </p>
                 <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-1'>
                    <a href="" className=''>Welcome!</a> 
                    <span className='text-[#DB4444]'>Md Rimel</span>
                </p>
            </div>
            <div className="flex gap-25">
                <div className="w-[30%]">
                    <div className="">
                        <p className='font-poppins font-medium text-[16px] text-[#000000] leading-6'>Manage My Account</p>
                        <div  className='pt-4 ml-[35px] flex flex-col gap-2 font-poppins font-normal  text-[16px] text-[rgba(0,0,0,0.5)] leading-6'>
                           <p className='hover:text-[#DB4444]'>My Profile</p>
                           <p className='hover:text-[#DB4444]'>Address Book</p>
                           <p className='hover:text-[#DB4444]'>My Payment Options</p>
                        </div>
                    </div>
                     <div className="pt-6">
                        <p className='font-poppins font-medium text-[16px] text-[#000000] leading-6'>My Orders</p>
                        <div  className='pt-4 ml-[35px] flex flex-col gap-2 font-poppins font-normal  text-[16px] text-[rgba(0,0,0,0.5)] leading-6'>
                           <p className='hover:text-[#DB4444]'>My Returns</p>
                           <p className='hover:text-[#DB4444]'>My Cancellations</p>
                        </div>
                    </div>
                     <div className="pt-6">
                        <p className='font-poppins font-medium text-[16px] text-[#000000] leading-6'>My WishList</p>
                    </div>
                </div>
                <div className="w-[70%]">
                    <div className=" shadow py-10 px-20 rounded-sm ">
                       <p className='pb-4 font-poppins font-medium text-[20px] text-[#DB4444] leading-7'>Edit Your Profile</p>
                    <form action="" className='pt-4'>
                        <div className='flex gap-[50px]'>
                            <div className='w-1/2'>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>First Name</label>
                                <input type="text" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-2 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Md' />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Last Name</label>
                                <input type="text" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-2 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Rimel' />
                            </div>
    
                        </div>
                        <div className='flex gap-[50px] pt-6'>
                            <div className='w-1/2'>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Email</label>
                                <input type="email" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-2 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='rimel1111@gmail.com' />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Address</label>
                                <input type="text" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-2 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Kingston, 5236, United State' />
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Password Changes</label>
                                <input type="password" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-4 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='New Passwod' />
                                <input type="password" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-4 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Current Password' />
                                <input type="password" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-4 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Confirm New Passwodv' />
                            </div>
                            <div className='flex justify-end gap-7 items-center pt-10'>
                                <span className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Cancel</span>
                                <Button Text="Save Changes" className="py-4 px-12"></Button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Profile
