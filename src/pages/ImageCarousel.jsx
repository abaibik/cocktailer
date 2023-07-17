import "../index.css";
import {
  CocktailsMain,
  OldFashion,
  Thyme,
  Barkeeper,
  Pineapple,
  Lime,
  Glasses,
} from "../images/index";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  Mousewheel,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

export default function ImageCarousel() {
  const images = [
    CocktailsMain,
    OldFashion,
    Thyme,
    Barkeeper,
    Pineapple,
    Lime,
    Glasses,
  ];
  return (
    <Swiper
      className="slide-show"
      direction={"vertical"}
      mousewheel={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Mousewheel, Autoplay, Pagination, EffectCreative]}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-125%", 0, -800],
          rotate: [0, 0, -90],
        },
        next: {
          shadow: true,
          translate: ["125%", 0, -800],
          rotate: [0, 0, 90],
        },
      }}
    >
      {images.map((el, index) => {
        return (
          <SwiperSlide>
            <img alt={index} src={el}></img>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
