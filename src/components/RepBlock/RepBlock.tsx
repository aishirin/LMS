import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Parallax,Autoplay, EffectCube, EffectFlip, EffectCards, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import BasicCard from "../UI/Card";
import Danil from "../../assets/Danil.jpg"
import Barsbek from "../../assets/Barsbek.jpg"
import Gulnarida from "../../assets/Gulnarida.jpg"
import Nurmurok from "../../assets/Nurmurok.jpg"
import TeacherBlock from "../TeacherBlocks/TeacherBlock";
import css from "./RepBlock.module.css"
import { Flip, Loop } from "@mui/icons-material";

const RepBlock = () => {
  return (
   <div className={css.bigblock}>
    <div className={css.block}>
    <Swiper className={css.swiper}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay,EffectCoverflow]}
      spaceBetween={25}
      slidesPerView={3}
      loop={true}
      navigation
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 0,
        modifier:1,
        slideShadows: false
      }}
//     cubeEffect={{slideShadows:true,
//     shadow:true,
// shadowOffset:20, shadowScale:0.94}}
      autoplay={{delay:3000, disableOnInteraction:false}}
      pagination={{ clickable: true }}
      parallax={true}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide><TeacherBlock image={Nurmurok}
        title="Нурмурок"
        name="Математика"
        schedule="График работы: 9:00-17:00"
        description="С радостью готова показать вам, как математика может стать захватывающей и максимально понятной для каждого. Покорим вместе мир цифр и формул."/></SwiperSlide>
         <SwiperSlide><TeacherBlock image={Barsbek}
        title="Барсбек"
        name="Математика"
        schedule="График работы: 9:00-17:00"
        description="Увлекаюсь математикой и люблю использовать ее в програмировании. С удовольствием помогу вам пробудить в себе интерес и любовь к математике."/></SwiperSlide>
         <SwiperSlide><TeacherBlock image={Gulnarida}
        title="Гулнарида"
        name="Физика"
        schedule="График работы: 9:00-17:00"
        description="Физика для меня- наука о мире вокруг нас. Я стремлюсь поделиться ее красотой и глубиной. Давайте вместе исследовать красоты этой чудесной науки!"/></SwiperSlide>
         <SwiperSlide><TeacherBlock image={Danil}
        title="Данил"
        name="Физика"
        schedule="График работы: 9:00-17:00"
        description="Я погружен в квантовую физику и оптические эффекты. Предлагаю и вам погрузиться в мир физики, где мы будем исследовать ее захватывающие аспекты."/></SwiperSlide>
      
      {/* ... additional slides */}
    </Swiper>
    </div>
   </div>
  );
};

export default RepBlock;