import classes from "./Landing.module.css";
import { Button } from "@mui/material";
import GreenLight from "../../assets/Icons/GreenLight";
import ArrowRight from "../../assets/Icons/ArrowRight";
import Landing1 from "../../assets/Images/landing1.png";
import Landing2 from "../../assets/Images/landing2.png";
import Landing3 from "../../assets/Images/landing3.png";
import { useEffect, useRef, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { checkFirstVisit, didUserLogin } from "../../utils/roleUtils";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const [progress, setProgress] = useState(1);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!checkFirstVisit()) {
      if (didUserLogin(user)) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }
  }, []);
  const incrementProgress = () => {
    if (progress === 3) {
      localStorage.setItem("firstVisit", "true");
      navigate("/register");
    } else {
      const newProgress = progress + 1;
      swiperRef.current.swiper.slideTo(newProgress - 1);
      setProgress(newProgress);
    }
  };
  return (
    <div className={classes.landingSection}>
      <div className={classes.greenLight}>
        <GreenLight />
      </div>

      <div className={classes.landingContainer}>
        <h2 className={classes.welcome}>Welcome to</h2>
        <h1 className={classes.healit}>Healit</h1>
        <p className={classes.titleDesc}>your new super lifestyle app</p>
        <div className={classes.slideContainer}>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
            allowTouchMove={false}
            className={`mySwiper ${classes.swiper}`}
          >
            <SwiperSlide>
              <div className={classes.slideChildContainer}>
                <img src={Landing1} alt="Healit" />
                <p>Exercise regularly, Keep doctor away!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.slideChildContainer}>
                <img src={Landing2} alt="Healit" />
                <p>Eat Healthy, Live till Ninety!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.slideChildContainer}>
                <img src={Landing3} alt="Healit" />
                <p>Sleep well, Recharge your energy! </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Button
            variant="outlined"
            onClick={incrementProgress}
            className={classes.landingButton}
          >
            <span className={classes.landingButtonText}>Get Started</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Landing;
