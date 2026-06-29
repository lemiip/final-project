import { useEffect, useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";
function Kpop(){
    const[kpop,setKpop]=useState([])
    useEffect(()=>{
        fetchPublicJson("/kpop/kpop.json")
        .then(data=>setKpop(data))
        .catch(()=>setKpop([]))
    },[])
    return(
        <div className="relative mx-6 py-8 mt-6">
                        <div className="flex justify-between items-center mt-4 mb-9">
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold">
            K-POP
                                </h2>
                                
                            </div>
                            <div className="flex gap-3">
                <button className="kpop-swiper-prev text-2xl  hover:bg-gray-300 px-3 py-1 rounded">‹</button>
                <button className="kpop-swiper-next text-2xl  hover:bg-gray-300 px-3 py-1 rounded">›</button>
              </div>
                        </div>
                        <Swiper
            
            modules={[Navigation]}
            
            navigation={{
              prevEl: '.kpop-swiper-prev',
              nextEl: '.kpop-swiper-next',
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
            kpop.map((pop)=>(
            
            <SwiperSlide key={pop.id}>
            
            
            <div>
            
            <div className="relative">
            <img
            src={publicUrl(pop.image)}
            className="
            w-full
            h-[220px]
            object-cover
            cursor-pointer
            "
            />
            
           
            </div>
            
            <div className="flex justify-between items-start mt-4">
              <p className="
            font-bold
            cursor-pointer
            flex-1
            ">
            {pop.artist}
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
            {pop.album}
            </h3>
            
            
            
            
            <p className="
            text-red-500
            font-bold
            text-xl
            cursor-pointer
            ">
            {pop.price}
            </p>
            
            <p className="
            text-gray-400
            mt-4
            flex
            gap-1
            cursor-pointer
            "><TiStarFullOutline className="mt-1"/>
            {pop.rating}
            </p>
            </div>
            
            
            </SwiperSlide>
            
            ))
            }
            
            
            </Swiper>
                     </div>
    )
}
export default Kpop
