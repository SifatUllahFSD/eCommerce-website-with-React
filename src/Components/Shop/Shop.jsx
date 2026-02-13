import React, { useEffect, useState } from 'react'
import new1 from '../../assets/images/new1.png'
import new2 from '../../assets/images/new2.png'
import new3 from '../../assets/images/new3.png'
import new4 from '../../assets/images/new4.png'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import axios from 'axios'
import { Link } from 'react-router'


const Shop = () => {
 

  
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(result => setCategories(result.data))
    },[])

  const colors = [
    {id:1, color:'#000000', name:'black'},
    {id:2, color:'#FF0000', name:'red'},
    {id:3, color:'#00FF38', name:'green'},
  ]


  const [sortby, setSortBy] = useState('')
  const [products, setProducts] =  useState([])
  const [visiblecount, setVisibleCount] =  useState(6)

  

  useEffect(() => {
      if(sortby){
        axios.get(`https://dummyjson.com/products/category/${sortby}`)
        .then(res => {
          setProducts(res.data.products)
          setItemOffset(0)
        })
      }
      else{
         axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
      }
     
  },[sortby])


  
  const itemsPerPage = visiblecount;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
  if (products.length === 0) return;
  const newOffset =
    (event.selected * itemsPerPage) % products.length;
  setItemOffset(newOffset);
};


  return (
    <>
    <section className='pb-26 pt-20'>
      <div className="container">
         <p className='font-popins font-normal text-[14px] leading-5.25 text-[rgba(0,0,0,0.43)] flex gap-4'>
            <a href="">Home</a> <span>/</span> <span>Shop</span>
            </p>
        <div className="flex pt-12.5">
          <div className="w-1/5">
          <div className="">
             <h3 className='font-popins font-bold text-[20px] text-[#262626] pb-4'>Shop by Category</h3>
             <div className="'[&>a]:text-black [&>a]:font-popins [&>a]:font-normal [&>a]:text-[16px] [&>a]:leading-6 flex flex-col gap-4">
                  {
  categories.map((category, index) => (
    <a
      key={index}
      className="cursor-pointer"
      onClick={() => setSortBy(category.slug)}
    >
      {category.name}
    </a>
  ))
}

             </div>
          </div>
          <div className="pt-10">
             <h3 className='font-popins font-bold text-[20px] text-[#262626] pb-4'>Shop by Color</h3>
              <div className='flex flex-col gap-4'>
                  {
                    colors.map(color => (
                      <div className='[&>label]:text-[#767676] [&>label]:font-popins [&>label]:font-normal [&>label]:text-[16px] [&>label]:leading-6'>
                        <input type="radio" name='color' id='1' className='hidden' />
                        <label htmlFor="1" className='cursor-pointer flex gap-2.5 items-center'>
                          <span style={{ backgroundColor:color.color }} className='w-3 h-3 rounded-full bg-[blue-400] inline-block'></span>
                          {color.name}
                        </label>
                      </div>
                    ))
                  }
                  
                </div>
          </div>
          </div>
          <div className="w-4/5">
           <div className='flex gap-3 justify-end items-center pb-7.5'>
                <span className='font-popins font-normal text-[16px] leading-6 text-black'>Show : </span>
                <input
                      type="number"
                      min="1"
                      value={visiblecount}
                      onChange={(e) => setVisibleCount(Number(e.target.value))}
                      className="w-24.25 border border-[#D9D9D9] rounded-[5px] py-1.5 text-center"
                      />
              </div>
              <div className="grid grid-cols-3 pb-29.5 gap-7.5">
              {
                  currentItems.map((product,index) => (
                      <div key={index}>
                          <div className='bg-[#F5F5F5] py-8.75 rounded-sm mb-4 relative group overflow-hidden'>
                            <Link to={`/Details/${product.id}`}>
                             <img className='mx-auto' src={product.thumbnail} alt="" />
                            </Link>
                              <div className='px-4 bg-[#DB4444] rounded-sm text-center py-1 pb-2 absolute top-3 left-3'>
                                  <span className='font-popins text-[#FAFAFA] text-[12px] font-normal leading-[18px]'>-{product.discountPercentage}%</span>
                              </div>
                              <a href="" className='bg-black absolute left-0 -bottom-10 w-full py-2 font-popins font-medium text-[16px] leading-6 text-white text-center rounded-b-sm group-hover:bottom-0 duration-300'>Add To Cart</a>
                              <div className='absolute top-3 right-3'>
                                  <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-2'>
                                      <FaRegHeart />
                                  </div>
                                  <div className='w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center'>
                                      <IoEyeOutline />
                                  </div>
                              </div>
                          </div>
                          <h3 className='font-popins font-medium text-black text-[16px] leading-6 pb-2'>
                              {product.title}
                          </h3>

                          <p className='font-popins font-medium text-black text-[16px] leading-6 flex gap-3'>
                              <span className='text-[#DB4444]'>${(product.price - product.price*product.discountPercentage / 100).toFixed(2)}</span> <del className='text-[rgba(0,0,0,0.5)]'>${product.price}</del>
                          </p>
                          <div className='flex gap-2 items-center'>
                              <div className='flex gap-1'>
                                  <FaStar className='text-[#FFAD33] text-[20px]' />
                                  <FaStar className='text-[#FFAD33] text-[20px]' />
                                  <FaStar className='text-[#FFAD33] text-[20px]' />
                                  <FaStar className='text-[#FFAD33] text-[20px]' />
                                  <FaStar className='text-[#FFAD33] text-[20px]' />
                              </div>
                              <div className='pt-2'>
                                  <span className='font-popins font-semibold text-[rgba(0,0,0,0.5)] text-[14px] leading-5'>(88)</span>
                              </div>
                          </div>
                      </div>
                  ))
              }

          </div>

           <ReactPaginate
                breakLabel="..."
                nextLabel={<FaChevronRight/>}
                previousLabel={<FaChevronLeft/>}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="flex gap-4 mt-6 items-center justify-center"
                pageClassName="px-3 py-1 border rounded"
                activeClassName="bg-red-500 text-white"
                previousClassName="px-2 py-2 border rounded"
                nextClassName="px-2 py-2 border rounded"
                disabledClassName="opacity-40 cursor-not-allowed"
                
              />

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Shop
