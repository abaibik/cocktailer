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
import { EffectFlip, Mousewheel, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
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
      modules={[Mousewheel, Autoplay, Pagination, EffectFlip]}
      effect={"flip"}
      autoHeight={true}
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
