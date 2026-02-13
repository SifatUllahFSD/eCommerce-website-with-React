import React from 'react'

const Button = ({className, Text, icon, onClick}) => {
  return (
   <>
   <button onClick={onClick} className={`py-4 bg-[#DB4444] text-[#FAFAFA] rounded-sm font-popins font-medium text-[16px] leading-6 ${className}`}>{icon} <span>{Text}</span></button>
   </>
  )
}

export default Button
