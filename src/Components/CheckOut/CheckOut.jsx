import React from 'react'
import { FiCheck } from "react-icons/fi";
import master from '../../assets/images/master.png'
import visa from '../../assets/images/visa.png'
import nagad from '../../assets/images/nogod.png'
import bkash from '../../assets/images/bkash.png'
import hi from '../../assets/images/HI.png'
import lcd from '../../assets/images/LCD.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


const CheckOut = () => {
      const cartItems = useSelector(state => state.cart.items)
      let subtotal = 0;
       cartItems.map(sub => 
        subtotal += sub.price*sub.quantity
    )
   
    
  return (
   <>
   <section className='pb-[140px]'>
    <div className="container">
         <div className='py-20'>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-4'>
                    <a href="" className=''>Home</a> 
                    <span>/</span>
                    <span>Cart</span>
                    <span>/</span>
                    <span>Checkout</span>
                </p>
        </div>
        <div className='pb-12'>
                <h3 className='font-inter font-medium text-black text-[36px] leading-[30px]'>Billing Details</h3>
        </div>
        <div className="flex gap-[173px]">
            <form action="" className='w-[45%]'>
                <div className='pb-8'>
                        <label htmlFor="" className='font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)]'>First Name<span className='text-[#DB4444]'>*</span></label>
                        <input className='w-full rounded-sm bg-[#F5F5F5] p-4 mt-2' type="text" />
                </div>
                 <div className='pb-8'>
                        <label htmlFor="" className='font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)]'>Company Name</label>
                        <input className='w-full rounded-sm bg-[#F5F5F5] p-4 mt-2' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label htmlFor="" className='font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)]'>Street Address<span className='text-[#DB4444]'>*</span></label>
                        <input className='w-full rounded-sm bg-[#F5F5F5] p-4 mt-2' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label htmlFor="" className='font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)]'>Apartment, floor, etc. (optional)</label>
                        <input className='w-full rounded-sm bg-[#F5F5F5] p-4 mt-2' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label htmlFor="" className='font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)]'>Town/City<span className='text-[#DB4444]'>*</span></label>
                        <input className='w-full rounded-sm bg-[#F5F5F5] p-4 mt-2' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label htmlFor="" className='font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)]'>Phone Number<span className='text-[#DB4444]'>*</span></label>
                        <input className='w-full rounded-sm bg-[#F5F5F5] p-4 mt-2' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label htmlFor="" className='font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)]'>Email Address<span className='text-[#DB4444]'>*</span></label>
                        <input className='w-full rounded-sm bg-[#F5F5F5] p-4 mt-2' type="email" />
                    </div>
                    <div className='flex gap-4 agree'>
                        <input id='agree' type="checkbox" className='hidden' />
                        <label htmlFor="agree" className='cursor-pointer flex gap-4 items-center'>
                            <span className='w-6 h-6 bg-[#DB4444] text-[#DB4444] rounded-sm flex justify-center items-center'>
                                <FiCheck/>
                            </span>
                            <p className='font-popins font-normal text-[16px] leading-6 text-black'>Save this information for faster check-out next time</p>
                        </label>
                    </div>
            </form>
            <div className="w-[55%]">
                {
                    cartItems.map((item, index) => 
                        <div key={index} className='flex items-center justify-between'>
                        <div className='flex gap-6 items-center'>
                            <img src={item.thumbnail} className='w-20' alt="" />
                            <span className='font-popins font-normal text-[16px] leading-6 text-black'>{item.title}</span>
                        </div>
                        <div>
                            <span className='font-popins font-normal text-[16px] leading-6 text-black'>${item.price}</span>
                        </div>
                    </div>
                    )
                }
                      
                    <div>
                        <div className='flex justify-between pt-6 pb-4 border-b border-[rgba(0,0,0,0.4)] font-popins font-normal text-[16px] text-black'>
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between pt-6 pb-4 border-b border-[rgba(0,0,0,0.4)] font-popins font-normal text-[16px] text-black'>
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className='flex justify-between pt-6 pb-4 font-popins font-normal text-[16px] text-black'>
                            <span>Total:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='pt-4'>
                            <div className='flex gap-4 justify-between items-center pay'>
                                <div>
                                    <input id='pay1' name='pay' type="radio" className='hidden' />
                                    <label htmlFor="pay1" className='cursor-pointer flex gap-4 items-center'>
                                        <span className='w-6 h-6 border border-[#00000] rounded-full flex justify-center items-center'></span>
                                        <p className='font-popins font-normal text-[16px] leading-6 text-black'>Bank</p>
                                    </label>`
                                </div>
                                <div className='flex gap-2'>
                                    <img src={bkash} alt="" />
                                    <img src={visa} alt="" />
                                    <img src={master} alt="" />
                                    <img src={nagad} alt="" />
                                </div>
                            </div>
                            <div className='flex gap-4 pay pt-[34px]'>
                                <input id='pay2' name='pay' type="radio" className='hidden' />
                                <label htmlFor="pay2" className='cursor-pointer flex gap-4 items-center'>
                                    <span className='w-6 h-6 border border-[#00000] rounded-full flex justify-center items-center'></span>
                                    <p className='font-popins font-normal text-[16px] leading-6 text-black'>Cash on Delivery</p>
                                </label>
                                
                            </div>
                        </div>
                        <div className='flex gap-4 pt-8'>
                            <input className='border border-black rounded-sm py-4 px-6 font-popins font-normal text-[16px] leading-6 grow' type="text" placeholder='Coupon Code' />
                            <button className='py-4 px-12 bg-[#DB4444] rounded-sm font-medium font-popins text-[16px] leading-6 text-[#FAFAFA]'>Apply Coupon</button>
                        </div>
                        <div className='pt-8 flex justify-center items-center gap-8'>
                            <button className='py-4 px-12 bg-[#DB4444] rounded-sm font-medium font-popins text-[16px] leading-6 text-[#FAFAFA]'>Place Order</button>
                           <Link to='/cart'> <button className='py-4 px-12 bg-[#DB4444] rounded-sm font-medium font-popins text-[16px] leading-6 text-[#FAFAFA]'>Black To Card</button></Link>
                        </div>
                    </div>


            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default CheckOut
