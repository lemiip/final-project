import { useEffect, useState } from "react";
import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
function ForYou(){
    const[foryou,setForyou]=useState([])
    useEffect(()=>{
        fetch("/foryou/foryou.json")
        .then(res=>res.json())
        .then(data=>setForyou(data))
    },[])
    return(
             <div className="relative mx-6 py-8 mt-6">
                <div className="flex justify-between items-center mt-4 mb-9">
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold">
    Recommendations
                        </h2>
                        
                    </div>
                    <div className="flex gap-3">
        <button className="swiper-button-prev-custom text-2xl  hover:bg-gray-300 px-3 py-1 rounded">‹</button>
        <button className="swiper-button-next-custom text-2xl  hover:bg-gray-300 px-3 py-1 rounded">›</button>
      </div>
                </div>
                <Swiper
    
    modules={[Navigation]}
    
    navigation={{
      prevEl: '.swiper-button-prev-custom',
      nextEl: '.swiper-button-next-custom',
    }}
    
    spaceBetween={25}
    loop={false}
    slidesPerGroup={5}
    slidesPerView={5}
    
    >
    
    {
    foryou.map((recom, index)=>(
    
    <SwiperSlide key={recom.id}>
    
    
    <div>
    
    <div className="relative">
    <img
    src={recom.image}
    className="
    w-[280px]
    h-[220px]
    object-cover
    cursor-pointer
    "
    />
    
    <div className="absolute top-0 left-0 bg-lime-400 text-white px-2 py-1 text-sm font-bold">
    BEST
    </div>
    </div>
    
    <div className="flex justify-between items-start mt-4">
      <p className="
    font-bold
    cursor-pointer
    flex-1
    ">
    {recom.title}
    </p>
      <button className="text-gray-400 hover:text-red-500 cursor-pointer ml-2 text-xl">
        <HiOutlineShoppingBag />
      </button>
    </div>
    
    
    <h3 className="
    text-sm
    line-clamp-2
    mt-2
    cursor-pointer
    ">
    {recom.text}
    </h3>
    
    
    <p className="
    text-gray-400
    line-through
    mt-5
    cursor-pointer
    ">
    {recom.discount}
    </p>
    
    
    <p className="
    text-red-500
    font-bold
    text-xl
    cursor-pointer
    ">
    {recom.price}
    </p>
    
    <p className="
    text-gray-400
    mt-4
    flex
    gap-1
    cursor-pointer
    "><TiStarFullOutline className="mt-1"/>
    {recom.rating}
    </p>
    </div>
    
    
    </SwiperSlide>
    
    ))
    }
    
    
    </Swiper>
             </div>
    )
}
export default ForYou