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
        <div className="py-8 px-6">
            <div className="flex justify-between items-center mt-4 mb-9">
                <div className="flex items-center gap-3">
                     <h2 className="text-3xl font-bold mt-5">
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
                        <div className="rounded-xl overflow-hidden bg-white shadow-sm p-4 border-b-3 border-b-lime-500 h-[500px]">
                            <img src={publicUrl(brand.image)} alt={brand.title} className="w-full h-86 object-fill " />
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
