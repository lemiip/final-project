import { useEffect, useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";
import { productDetailsUrl } from "../lib/products";
function ForYou({ onAddToCart }){
    const[foryou,setForyou]=useState([])
    useEffect(()=>{
        fetchPublicJson("/foryou/foryou.json")
        .then(data=>setForyou(data))
        .catch(()=>setForyou([]))
    },[])
    return(
             <div className="relative mx-4 mt-6 py-8 sm:mx-6">
                <div className="mb-9 mt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold sm:text-3xl">
    Recommendations
                        </h2>
                        
                    </div>
                    <div className="shrink-0 gap-3 flex">
        <button className="foryou-swiper-prev text-2xl  hover:bg-gray-300 px-3 py-1 rounded">‹</button>
        <button className="foryou-swiper-next text-2xl  hover:bg-gray-300 px-3 py-1 rounded">›</button>
      </div>
                </div>
                <Swiper
    
    modules={[Navigation]}
    
    navigation={{
      prevEl: '.foryou-swiper-prev',
      nextEl: '.foryou-swiper-next',
    }}
    
    spaceBetween={25}
    loop={false}
    slidesPerGroup={1}
    slidesPerView={1.2}
    breakpoints={{
      640: { slidesPerView: 2, slidesPerGroup: 2 },
      768: { slidesPerView: 3, slidesPerGroup: 3 },
      1024: { slidesPerView: 5, slidesPerGroup: 5 },
    }}
    
    >
    
    {
    foryou.map((recom)=>(
    
    <SwiperSlide key={recom.id}>
    
    
    <div className="min-w-0 overflow-hidden">
    
    <a href={productDetailsUrl(`Recommendations-${recom.id}`)} className="relative block">
    <img
    src={publicUrl(recom.image)}
    alt={recom.title}
    className="
    w-full
    h-[220px]
    object-contain
    bg-gray-50
    lg:object-cover
    lg:bg-transparent
    cursor-pointer
    "
    />
    
    <div className="absolute top-0 left-0 bg-lime-400 text-white px-2 py-1 text-sm font-bold">
    BEST
    </div>
    </a>
    
    <div className="flex justify-between items-start mt-4">
      <a href={productDetailsUrl(`Recommendations-${recom.id}`)} className="
    font-bold
    cursor-pointer
    flex-1
    min-w-0
    break-words
    hover:underline
    ">
    {recom.title}
    </a>
      <button
        className="text-gray-400 hover:text-red-500 cursor-pointer ml-2 text-xl"
        type="button"
        aria-label="Add to cart"
        title="Add to cart"
        onClick={() => onAddToCart({
          id: `Recommendations-${recom.id}`,
          source: "Recommendations",
          title: recom.title,
          text: recom.text,
          image: recom.image,
          discount: recom.discount,
          price: recom.price,
          rating: recom.rating,
        })}
      >
        <HiOutlineShoppingBag />
      </button>
    </div>
    
    
    <h3 className="
    text-sm
    line-clamp-2
    mt-2
    cursor-pointer
    break-words
    ">
    <a href={productDetailsUrl(`Recommendations-${recom.id}`)} className="hover:underline">
    {recom.text}
    </a>
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
    break-words
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
