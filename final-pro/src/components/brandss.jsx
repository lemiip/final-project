import { useEffect, useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";

function FeatureBrands(){
    const [brands, useBrands] = useState([])
    const [current, setCurrent] = useState(1)

    useEffect(()=>{
        fetch("/brands/brands.json")
            .then(res=>res.json())
            .then(data=>useBrands(data))
    },[])

    return(
        <div className="py-8 px-6">
            <div className="flex justify-between items-center mt-4 mb-9">
                <div className="flex items-center gap-3">
                     <h2 className="text-3xl font-bold mt-5">
Featured Brands
                    </h2>
                    
                </div>
                <div className="flex gap-3">
                    <button className="swiper-button-prev-custom text-2xl hover:bg-gray-300 px-3 py-1 rounded">‹</button>
                    <button className="swiper-button-next-custom text-2xl hover:bg-gray-300 px-3 py-1 rounded">›</button>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                autoplay={{ delay: 4000 }}
                loop={false}
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={24}
                onSlideChange={(swiper)=>{
                    setCurrent(swiper.realIndex + 1)
                }}
                className="mySwiper px-2"
            >
                {brands.map((brand) => (
                    <SwiperSlide key={brand.id} className="mt-2 py-2">
                        <div className="rounded-xl overflow-hidden bg-white shadow-sm p-4 border-b-3 border-b-lime-500 h-[500px]">
                            <img src={brand.image} alt={brand.title} className="w-full h-86 object-fill " />
                            <div className="mt-9 text-center">
                                <h3 className="text-lg font-semibold">{brand.title}</h3>
                                <p className="text-gray-500 mt-2 ">{brand.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
     )
}
export default FeatureBrands;