import React from 'react'
import gucci from '../../assets/images/gucci.png'
import speaker3 from '../../assets/images/spekar3.png'
import woman from '../../assets/images/woman.png'
import ps5 from '../../assets/images/ps5.png'

const NewArrival = () => {
  return (
   <>
   <section className='pb-[130px]'>
    <div className="container">
        <div className="pb-[60px]">
             <h4 className='font-poppins font-semibold text-[16px] text-[#DB4444] leading-5 pl-9 relative after:absolute after:w-5 after:h-10 after:bg-[#DB4444] after:content-[""] after:left-0 after:-top-[50%] after:rounded-sm '>Featured</h4>
            <h2 className='pt-[34px] font-inter font-semibold text-[36px] text-[#000000] leading-8 '>New Arrival</h2>
           </div>
           <div className="flex gap-[30px] ">
              <div className="bg-[#000000] w-1/2 relative rounded-sm ">
                <img src={ps5} alt="" className='mx-auto pt-[90px]' />
                <div className=" absolute max-w-[242px] bottom-8 left-8 ">
                    <h3 className='font-inter font-semibold text-[24px] leading-6 text-[#FAFAFA] '>PlayStation 5</h3>
                    <p className='pt-4 pb-4 font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] '>Black and White version of the PS5 coming out on sale.</p>
                    <a href="" className='font-poppins font-medium text-[16px] leading-6 text-[#FAFAFA] border-b border-[#828282] '>Shop Now</a>
                </div>
              </div>
              <div className="w-1/2">
                <div className="bg-[#0D0D0D] relative rounded-sm ">
                    <img src={woman} alt="" className=' ms-auto rounded-sm '/>
                    <div className=" absolute max-w-[242px] bottom-8 left-8 ">
                    <h3 className='font-inter font-semibold text-[24px] leading-6 text-[#FAFAFA] '>Women’s Collections</h3>
                    <p className='pt-4 pb-4 font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] '>Featured woman collections that give you another vibe.</p>
                    <a href="" className='font-poppins font-medium text-[16px] leading-6 text-[#FAFAFA] border-b border-[#828282]'>Shop Now</a>
                </div>
                </div>
                <div className=" flex pt-8 gap-[30px]">
                    <div className="bg-[#000000] w-1/2 relative rounded-sm">
                        <img src={speaker3} alt="" className='py-8 mx-auto relative z-10'/>
                        <div className=" absolute max-w-[191px] bottom-8 left-8 z-100">
                          <h3 className='font-inter font-semibold text-[24px] leading-6 text-[#FAFAFA] '>Speakers</h3>
                          <p className='pt-2 pb-2 font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] '>Amazon wireless speakers</p>
                          <a href="" className='font-poppins font-medium text-[16px] leading-6 text-[#FAFAFA] border-b border-[#828282]'>Shop Now</a>
                        </div>
                        <div className="w-[196px] h-[196px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-[rgba(217,217,217,0.9)] blur-[100px] "></div>
                    </div>
                    <div className="bg-[#000000] w-1/2 relative rounded-sm">
                        <img src={gucci} alt="" className='py-8 mx-auto relative z-10' />
                        <div className=" absolute max-w-[191px] bottom-8 left-8 z-100">
                            <h3 className='font-inter font-semibold text-[24px] leading-6 text-[#FAFAFA] '>Perfume</h3>
                            <p className='pt-2 pb-2 font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] '>GUCCI INTENSE OUD EDP</p>
                            <a href="" className='font-poppins font-medium text-[16px] leading-6 text-[#FAFAFA] border-b border-[#828282]'>Shop Now</a>
                       </div>
                      <div className="w-[196px] h-[196px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-[rgba(217,217,217,0.9)] blur-[100px] "></div>
                    </div>
                </div>
              </div>
           </div>
    </div>
   </section>
   </>
  )
}

export default NewArrival
