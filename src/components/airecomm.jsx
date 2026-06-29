import { useEffect, useState } from "react";
import { PiRobotLight } from "react-icons/pi";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";
function AIRecommendation({ onAddToCart }){
    const[recommend,setRecommend]=useState([])
    useEffect(()=>{
        fetchPublicJson("/recommend/recommend.json")
        .then(data=>setRecommend(data))
        .catch(()=>setRecommend([]))
    },[])

    return(
         <div className="relative mx-6 py-8 mt-6">
            <div className="flex justify-between items-center mt-4 mb-9">
                <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-bold">
Chosen For you
                    </h2>
                    <div className="relative group">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-gray-100 transition">
                            <PiRobotLight className="text-2xl" />
                        </button>
                        <div className="absolute -top-16 left-0 hidden group-hover:block w-60 bg-white text-gray-800 p-3 rounded shadow-lg z-50">
                           We think you'll love these products, handpicked for you.
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
    <button className="ai-swiper-prev text-2xl  hover:bg-gray-300 px-3 py-1 rounded">‹</button>
    <button className="ai-swiper-next text-2xl  hover:bg-gray-300 px-3 py-1 rounded">›</button>
  </div>
            </div>
            <Swiper

modules={[Navigation]}

navigation={{
  prevEl: '.ai-swiper-prev',
  nextEl: '.ai-swiper-next',
}}

spaceBetween={25}
loop={false}
slidesPerGroup={1}
slidesPerView={1.2}
breakpoints={{
  768: { slidesPerView: 3, slidesPerGroup: 3 },
  1024: { slidesPerView: 5, slidesPerGroup: 5 },
}}

>

{
recommend.map((recom)=>(

<SwiperSlide key={recom.id}>


<div>

<div className="relative">
<img
src={publicUrl(recom.image)}
className="
w-full
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
  <button
    className="text-gray-400 hover:text-red-500 cursor-pointer ml-2 text-xl"
    type="button"
    aria-label="Add to cart"
    title="Add to cart"
    onClick={() => onAddToCart({
      id: `Chosen For You-${recom.id}`,
      source: "Chosen For You",
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

export default AIRecommendation;

