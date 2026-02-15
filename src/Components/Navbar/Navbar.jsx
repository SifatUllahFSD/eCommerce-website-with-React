import React, { useEffect, useState } from 'react'
import { IoChevronDownSharp } from "react-icons/io5";
import logo1 from '../../assets/images/logo1.png'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import { LuShoppingBag } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const location = useLocation();
    const currentLink = window.location.pathname

    const [show, setShow] = useState(false)

    const [searchkeyword, setSearchKeyword] = useState('')
    const cartItems = useSelector(state => state.cart.items)
   
     useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(authinfo({
                    uid:user.uid,
                    displayName:user.displayName,
                    email:user.email,
                }))
            }
        });
        return () => unsub()
    },[])
const handleLogout = async () => {
  try {
    await signOut(auth);
    setShow(false); // dropdown বন্ধ করবে
    navigate("/login"); // login page এ পাঠাবে
  } catch (error) {
    console.log(error);
  }
};



    
  return (
   <>
   <nav className='border-b border-[rgba(0,0,0,0.25)]'>
    <div className="bg-[#000000] py-3  ">
      <div className="container flex items-center gap-[179px]  ">
         <div className='flex gap-2 w-[80%] justify-end '>
         <p className="  text-[14px] font-normal font-poppins leading-[21px] text-[#FAFAFA] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a href="" className=" flex text-[14px] font-semibold font-poppins leading-6 text-[#FAFAFA] underline ">ShopNow</a>
       </div>
        <div className=" flex justify-end ">
         <div className=" flex relative w-18 ">
            <select className=' outline-0 appearance-none w-full text-[14px] font-normal font-poppins leading-[21px] text-[#FAFAFA]' >
                <option value="" className='text-black'>English</option>
                <option value="" className='text-black'>Bangla</option>
            </select>
            <span className=' text-white absolute top-[50%] right-0 pointer-events-none -translate-y-1/2 text-[18px] '>
               <IoChevronDownSharp />
            </span>
         </div>
        </div>
      </div>
    </div>
    <div className="pt-10 pb-4  ">
      <div className="container">
        <div className="flex gap-[130px] items-center relative ">
          <div className=" flex  w-[65%] gap-40 ">
           <div className="">
            <a href=""> <img src={logo1} alt="" /></a>
           </div>
           <div className="">
            <ul className='flex gap-12 menu'>
              <li>< Link to="/">Home</Link></li>
              <li>< Link to="/Shop">Shop</Link></li>
              <li><a href="">About</a></li>
              <li><Link to="/Register">Sign Up</Link></li>
            </ul>
           </div>
          </div>
          <div className={`w-[35%] flex gap-6 ${currentLink == '/Register' ? 'justify-end' : ''}`}>
            <div className="w-[243px] relative ">
              <input onChange={(e) => setSearchKeyword(e.target.value)} className='w-full font-poppins text-[12px] leading-[18px] font-normal text-black py-2.5 pl-4 pr-3 outline-0 rounded-sm bg-[#F5F5F5] ' type="text" placeholder='What are you looking for?' />
              <Link to={`/searched/products/${searchkeyword}`}>
                <FiSearch className='absolute top-1/2 -translate-y-1/2 right-3 text-[20px]' />
              </Link>
            </div>
           {
            currentLink != '/Register' ?  
             <div className="flex gap-4 items-center  ">
              <div>
                <Link to="/WishList"> <FaRegHeart className='text-[20px]' /></Link>
                 
              </div>
              <div className='relative'>
                <Link to="/cart"><IoCartOutline className='text-[24px] ' /></Link>
                   <i className='w-4 h-4 bg-[#DB4444] rounded-full  flex justify-center items-center text-[12px] text-[#FAFAFA] font-normal font-poppins not-italic absolute top-[-7px] right-[-5px] '>{cartItems.length}</i>
              </div>
              <div onClick={()=> setShow(!show)} className='cursor-pointer  w-8 h-8 bg-[#DB4444] text-white rounded-full flex justify-center items-center  '>
                <RiUser3Line  className='text-[20px]' />
              </div>
            </div> 
             :
              ''
           }
          
          </div>
           
            {
                  show &&
                  <div className='abc z-10 absolute top-10 rounded-sm right-0 ps-5 pt-[18px] pr-4 pb-2.5 flex gap-3 flex-col'>
                  <Link onClick={() => setShow(false) } to="/profile" className='flex gap-4 items-center font-popins font-normal text-[14px] leading-[21px] text-[#FAFAFA]'>
                      <RiUser3Line className='text-[24px]'/>
                      <span>Manage My Account</span>
                  </Link>
                  <a href="" className='flex gap-4 items-center font-popins font-normal text-[14px] leading-[21px] text-[#FAFAFA]'>
                      <LuShoppingBag className='text-[24px]'/>
                      <span>My Order</span>
                  </a>
                  <a href="" className='flex gap-4 items-center font-popins font-normal text-[14px] leading-[21px] text-[#FAFAFA]'>
                      <IoCloseCircleOutline className='text-[24px]'/>
                      <span>My Cancellations</span>
                  </a>
                  <a href="" className='flex gap-4 items-center font-popins font-normal text-[14px] leading-[21px] text-[#FAFAFA]'>
                      <IoIosStarOutline className='text-[24px]'/>
                      <span>My Reviews</span>
                  </a>
                  <button onClick={handleLogout} href="" className='flex gap-4 items-center font-popins font-normal text-[14px] leading-[21px] text-[#FAFAFA]'>
                      <TbLogout2 className='text-[24px]'/>
                      <span>Logout</span>
                  </button>
              </div>
            }
                        

        </div>
      </div>
    </div>
   </nav>
   </>
  )
}

export default Navbar
