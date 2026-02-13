import React, { useEffect, useState } from 'react'
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesThin } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";
import axios from 'axios';
import { Link } from 'react-router';

const BrowseByCategory = () => {
  // const categories = [ 
  //   {id:1 , icon:CiMobile4,},
  //   {id:2, icon:HiOutlineComputerDesktop, },
  //   {id:3, icon:TbDeviceWatchStats, },
  //   {id:4, icon:CiCamera, },
  //   {id:5, icon:PiHeadphonesThin, },
  //   {id:6, icon:LuGamepad,}
  // ]

   const [categories,setCategories] = useState([])
   useEffect(() =>{
      axios.get('https://dummyjson.com/products/categories')
      .then(result => setCategories(result.data) )
    })
  return (
    <>
    <section className=' pb-[130px] '>
        <div className="container pt-[70px] border-t border-[rgba(0,0,0,0.3)] ">
          <div className="">
             <h4 className='font-poppins font-semibold text-[16px] text-[#DB4444] leading-5 pl-9 relative after:absolute after:w-5 after:h-10 after:bg-[#DB4444] after:content-[""] after:left-0 after:-top-[50%] after:rounded-sm '>Categories</h4>
             <h2 className='pt-[34px] font-inter font-semibold text-[36px] text-[#000000] leading-8 '>Browse By Category</h2>
          </div>
          <div className="pt-15 grid grid-cols-6 gap-[30px]">
            {
              categories.slice(0,6).map(category => (
            <Link to={`products/categories/${category.slug}`} >
             <div className="border border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] text-center group hover:bg-[#DB4444]">
              < CiCamera className ='mx-auto group-hover:text-white text-[48px]' />
              <h1 className='pt-4 font-poppins font-normal text-[16px] group-hover:text-white leading-6 text-[#000000]'>{category.name}</h1>
            </div>
            </Link>
              ))
            }
          </div>
        </div>
    </section>
    </>
  )
}

export default BrowseByCategory
