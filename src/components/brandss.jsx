import { useEffect, useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";

function FeatureBrands(){
    const [brands, setBrands] = useState([])

    useEffect(()=>{
        fetchPublicJson("/brands/brands.json")
            .then(data=>setBrands(data))
            .catch(()=>setBrands([]))
    },[])

    return(
        <div className="px-4 py-8 sm:px-6">
            <div className="mb-9 mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                     <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
Featured Brands
                    </h2>
                    
                </div>
                <div className="flex gap-3">
                    <button className="brands-swiper-prev text-2xl hover:bg-gray-300 px-3 py-1 rounded">‹</button>
                    <button className="brands-swiper-next text-2xl hover:bg-gray-300 px-3 py-1 rounded">›</button>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: '.brands-swiper-prev',
                    nextEl: '.brands-swiper-next',
                }}
                autoplay={{ delay: 4000 }}
                loop={false}
                slidesPerView={1.1}
                slidesPerGroup={1}
                spaceBetween={24}
                breakpoints={{
                    768: { slidesPerView: 2, slidesPerGroup: 2 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3 },
                }}
                className="mySwiper px-2"
            >
                {brands.map((brand) => (
                    <SwiperSlide key={brand.id} className="mt-2 py-2">
                        <div className="overflow-hidden rounded-xl border-b-3 border-b-lime-500 bg-white p-4 shadow-sm">
                            <img src={publicUrl(brand.image)} alt={brand.title} className="h-[260px] w-full object-cover sm:h-[340px]" />
                            <div className="mt-6 text-center sm:mt-9">
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
