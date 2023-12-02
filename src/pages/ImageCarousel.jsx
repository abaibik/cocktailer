import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export default function ImageCarousel() {
  const SliderImages = [
    {
      title: "A carafe and glasses",
      src: "./images/carafe.jpg",
    },
    {
      title: "Old Fashion Cocktail",
      src: "./images/oldFashion.jpg",
    },
    {
      title: "Lime Cocktail",
      src: "./images/lime-cocktail.jpg",
    },

    { title: "Thyme Cocktail", src: "./images/thyme.jpg" },
    { title: "Blueberry Cocktail", src: "./images/blueberry.jpg" },
    {
      title: "Pineapple Cocktail",
      src: "./images/pineapple.jpg",
    },

    { title: "Lime", src: "./images/lime.jpg" },
    { title: "Cocktail Glasses", src: "./images/glasses.jpg" },
  ];

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, Pagination, EffectCube]}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {SliderImages.map(({ title, src }) => (
        <SwiperSlide>
          <img
            key={title}
            alt={title}
            src={src}
            style={{ height: "100%", aspectRatio: 1, objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
