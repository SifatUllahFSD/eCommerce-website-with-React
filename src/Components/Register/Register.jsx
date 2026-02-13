import React, { useState } from 'react'
import reg from '../../assets/images/reg.png'
import Button from '../Common/Button'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebaseConfig'
import Swal from "sweetalert2";


const Register = () => {
  const [formdata,setFormdata] = useState({
     name:'',
    email:'',
    password:''
  })

   const [errors, setErrors] = useState({})
    const validate = () => {
        let newErrors = {}

        if(!formdata.name){
            newErrors.name = 'Please Enter Your Name'
        }
        if(!formdata.email){
            newErrors.email = 'Please Enter Your email'
        }
        if(!formdata.password){
            newErrors.password = 'Please Enter Your password'
        }
        setErrors(newErrors);
          return Object.keys(newErrors).length == 0

    }

    const auth = getAuth(app);

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()){
            createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
            .then((userCredential) => {
                const user = userCredential.user;
               return updateProfile(auth.currentUser, {
                   displayName:formdata.name
                 })
            })
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Success",
                    showConfirmButton: false,
                    timer: 1500
                });

                setFormdata({
                    name:'',
                    email:'',
                    password:'',
                })
            })
            .catch((error) => {
                console.error("Registration Error:", error.message)
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Registration Failed",
                    text: error.message,
                    showConfirmButton: true
                });
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
                     <h2 className='font-inter font-medium text-[36px] leading-7.5 text-black pb-6'>Create an account</h2>
                     <p className='font-popins font-normal text-[16px] leading-6 text-black pb-12'>Enter your details below</p>
                     <form  onSubmit={handleSubmit}>
                        <div className="pb-10">
                            <input value={formdata.name} onChange={(e) => setFormdata(prev => ({...prev,name:e.target.value}))} type="text" className=' border-b border-[#808080] outline-0 w-full pb-2 font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)] ' placeholder="Name" />
                             {errors.name && <strong className='text-red-500'>{errors.name}</strong>}
                        </div>
                        <div className="pb-10">
                            <input value={formdata.email} onChange={(e) => setFormdata(prev => ({...prev,email:e.target.value}))} type="email" className=' border-b border-[#808080] outline-0 w-full pb-2 font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)] ' placeholder="Email or Phone Number" />
                             {errors.email && <strong className='text-red-500'>{errors.email}</strong>}
                        </div>
                        <div className="pb-10">
                            <input value={formdata.password} onChange={(e) => setFormdata(prev => ({...prev,password:e.target.value}))} type="password" className=' border-b border-[#808080] outline-0 w-full pb-2 font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.4)] ' placeholder="Password" />
                            {errors.password && <strong className='text-red-500'>{errors.password}</strong>}
                        </div>
                         <div className="flex flex-col gap-4">
                         <Button 
                                    type="submit"
                                    Text="Create Account" 
                                    className="w-full" 
                        />
                         <Button icon={<FcGoogle className='text-[24px]' />} Text="Sign up with Google" className="w-full border bg-transparent border-[#808080] text-black flex justify-center items-center gap-4"></Button>
                     </div>
                     <p className='text-center font-popins font-normal text-[16px] leading-6 text-[rgba(0,0,0,0.7)] pt-8'>Already have account? <Link to="/LogIn" className='font-medium border-b border-[rgba(0,0,0,0.7)] ml-4'>Log in</Link></p>
                     </form>
                    
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Register
