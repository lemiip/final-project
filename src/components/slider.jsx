import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";

function Slider() {
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetchPublicJson("/banners/banners.json")
      .then((data) => {
        setBanners(data);
        setCurrent(data.length ? 1 : 0);
      })
      .catch(() => setBanners([]));
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setIsDesktop(query.matches);

    updateViewport();
    query.addEventListener("change", updateViewport);

    return () => query.removeEventListener("change", updateViewport);
  }, []);

  return (
    <div className="mt-3 overflow-hidden sm:mt-5 lg:overflow-visible">
      {banners.length > 0 && (
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={banners.length > 1}
          slidesPerView={isDesktop ? 1.15 : 1}
          spaceBetween={isDesktop ? 20 : 0}
          centeredSlides={isDesktop}
          onSlideChange={(swiper) => {
            setCurrent(swiper.realIndex + 1);
          }}
          className="mySwiper overflow-hidden lg:overflow-visible"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="relative h-[280px] overflow-hidden bg-cover bg-center sm:h-[360px] sm:rounded-2xl lg:h-[430px]"
                style={{
                  backgroundImage: `url(${publicUrl(banner.img)})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent"></div>

                <div className="absolute left-6 right-6 top-14 z-10 text-white sm:left-10 sm:top-1/3 sm:-translate-y-1/2 lg:left-20 lg:right-auto">
                  <h1 className="pere-xod w-full max-w-[560px] whitespace-pre-line text-xl font-bold sm:text-3xl lg:text-4xl">
                    {banner.title}
                  </h1>

                  <p className="swipe-xod mt-4 w-full max-w-[440px] whitespace-pre-line text-sm sm:text-lg lg:text-xl">
                    {banner.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="mt-5 flex items-center justify-center gap-5">
        <button className="text-3xl" type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous banner">
          ‹
        </button>

        <div className="rounded-full bg-gray-200 px-5 py-2">
          {banners.length ? current : 0} / {banners.length}
        </div>

        <button className="text-3xl" type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next banner">
          ›
        </button>
      </div>
    </div>
  );
}

export default Slider;
