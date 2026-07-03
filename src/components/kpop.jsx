import { useEffect, useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";
import { productDetailsUrl } from "../lib/products";
function Kpop({ onAddToCart }){
    const[kpop,setKpop]=useState([])
    useEffect(()=>{
        fetchPublicJson("/kpop/kpop.json")
        .then(data=>setKpop(data))
        .catch(()=>setKpop([]))
    },[])
    return(
        <div className="relative mx-4 mt-6 py-8 sm:mx-6">
                        <div className="mb-9 mt-4 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <h2 className="text-2xl font-bold sm:text-3xl">
            K-POP
                                </h2>
                                
                            </div>
                            <div className="shrink-0 gap-3 flex">
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
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              768: { slidesPerView: 3, slidesPerGroup: 3 },
              1024: { slidesPerView: 5, slidesPerGroup: 5 },
            }}
            
            >
            
            {
            kpop.map((pop)=>(
            
            <SwiperSlide key={pop.id}>
            
            
            <div className="min-w-0 overflow-hidden">
            
            <a href={productDetailsUrl(`K-POP-${pop.id}`)} className="relative block">
            <img
            src={publicUrl(pop.image)}
            alt={pop.album}
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
            
           
            </a>
            
            <div className="flex justify-between items-start mt-4">
              <a href={productDetailsUrl(`K-POP-${pop.id}`)} className="
            font-bold
            cursor-pointer
            flex-1
            min-w-0
            break-words
            hover:underline
            ">
            {pop.artist}
            </a>
              <button
                className="text-gray-400 hover:text-red-500 cursor-pointer ml-2 text-xl"
                type="button"
                aria-label="Add to cart"
                title="Add to cart"
                onClick={() => onAddToCart({
                  id: `K-POP-${pop.id}`,
                  source: "K-POP",
                  title: pop.artist,
                  text: pop.album,
                  image: pop.image,
                  price: pop.price,
                  rating: pop.rating,
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
            <a href={productDetailsUrl(`K-POP-${pop.id}`)} className="hover:underline">
            {pop.album}
            </a>
            </h3>
            
            
            
            
            <p className="
            text-red-500
            font-bold
            text-xl
            cursor-pointer
            break-words
            ">
            {pop.price}
            </p>
            
            {pop.rating && (
            <p className="
            text-gray-400
            mt-4
            flex
            gap-1
            cursor-pointer
            "><TiStarFullOutline className="mt-1"/>
            {pop.rating}
            </p>
            )}
            </div>
            
            
            </SwiperSlide>
            
            ))
            }
            
            
            </Swiper>
                     </div>
    )
}
export default Kpop
