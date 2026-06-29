import { useState,useEffect } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { PiGreaterThanLight } from "react-icons/pi";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";
function CardsSection(){
  const[cards,setCards]=useState([])
  useEffect(()=>{
   
    fetchPublicJson("/cards/cards.json")
    .then(data=>setCards(data))
    .catch(()=>setCards([]))
  },[])

    return(
        <div className="relative mx-6 py-8 mt-6">

<div className="flex justify-between items-center mt-4 mb-9">
  <div className="flex items-center gap-6">
    <h2 className="
text-3xl
font-bold
">
Best Sellers
</h2>
   
  </div>
  <div className="flex gap-3">
    <button className="cards-swiper-prev text-2xl  hover:bg-gray-300 px-3 py-1 rounded">‹</button>
    <button className="cards-swiper-next text-2xl  hover:bg-gray-300 px-3 py-1 rounded">›</button>
  </div>
</div>

<Swiper

modules={[Navigation]}

navigation={{
  prevEl: '.cards-swiper-prev',
  nextEl: '.cards-swiper-next',
}}

spaceBetween={25}

slidesPerView={1.2}
slidesPerGroup={1}
breakpoints={{
  768: { slidesPerView: 3, slidesPerGroup: 3 },
  1024: { slidesPerView: 5, slidesPerGroup: 5 },
}}

>

{
cards.map((card, index)=>(

<SwiperSlide key={card.id}>


<div>

<div className="relative">
<img
src={publicUrl(card.image)}
className="
w-full
h-[220px]
object-cover
cursor-pointer
"
/>

<div className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-sm font-bold">
{index + 1}
</div>
</div>

<div className="flex justify-between items-start mt-4">
  <p className="
font-bold
cursor-pointer
flex-1
">
{card.title}
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
{card.text}
</h3>


<p className="
text-gray-400
line-through
mt-5
cursor-pointer
">
{card.discount}
</p>


<p className="
text-red-500
font-bold
text-xl
cursor-pointer
">
{card.price}
</p>

<p className="
text-gray-400
mt-4
flex
gap-1
cursor-pointer
"><TiStarFullOutline className="mt-1"/>
{card.rating}
</p>
</div>


</SwiperSlide>

))
}


</Swiper>
    <div className="flex justify-center items-center mt-5">
        <button className="border text-emerald-900 border-lime-500 rounded flex justify-center items-center gap-2 mt-8 w-[160px] h-[50px] hover:bg-lime-200">View More<PiGreaterThanLight className="mt-1" /></button>
    </div>
        </div>
    )
}
export default CardsSection
