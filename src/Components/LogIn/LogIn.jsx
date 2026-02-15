import React, { useState } from 'react'
import reg from '../../assets/images/reg.png'
import Button from '../Common/Button'
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';




const LogIn = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const [formdata,setFormdata] = useState({
    email:'',
    password:''
  })
 
  const [errors, setErrors] = useState({})

  const validate = () => { 
    let newErrors = {}

    if(!formdata.email){
        newErrors.email = 'Please Enter Your email'
    }  

    if(!formdata.password){
        newErrors.password = 'Please Enter Your password'
    }  
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
    
  }
  const dispatch = useDispatch();
const[errmsg,setErrmsg] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault()
      if(validate()){
        signInWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(authinfo({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            
          }))
          navigate('/')
        })
        .catch((error) => {
          setErrors({ error: error.message });
        }); 
      }
    }



  return (
    <>
    <section className='pb-35 pt-15 relative'>
      <div className="w-[50%]">
        <img src={reg} className='w-full' alt="" />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full ">
        <div className="container h-full">
            <div className="flex justify-end  items-center h-full">
                <div className="">
                     <h2 className='font-inter font-medium text-[36px] leading-7.5 text-black pb-6'>Log in to Exclusive</h2>
                     <p className='font-popins font-normal text-[16px] leading-6 text-black pb-12'>Enter your details below</p>
                     {errmsg && <div className='text-white py-2 px-3 mb-5 bg-red-400'> Invalid email or password </div>}
                     <form onSubmit={handleSubmit}>
                        <div className="pb-10">
                            <input onChange={(e) => setFormdata(prev =>({...formdata,email:e.target.value}))} type="text" className=' border-b border-[#808080] outline-0 w-full pb-2 font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)] ' placeholder="Email or Phone Number" />
                              {errors.email && <strong className='text-red-500'>{errors.email}</strong>}  
                        </div>
                        <div className="pb-10">
                            <input onChange={(e) => setFormdata(prev =>({...formdata,password:e.target.value}))}  type="password" className=' border-b border-[#808080] outline-0 w-full pb-2 font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)] ' placeholder="Password" />
                            {errors.password && <strong className='text-red-500'>{errors.password}</strong>}  
                        </div>
                         <div className="flex justify-between items-center">
                        <Button type="submit" Text="Log In" className="py-4 px-12" ></Button>
                         <a href=""  className='font-popins font-normal text-[16px] leading-6 text-[#DB4444]'>Forget Password?</a>
                         
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

export default LogIn
