import { Box } from "@mui/system";
import Footer from "../../layouts/Footer/Footer";
import bmiVisual from "../../assets/Images/bmiVisual.png";
import heightVisual from "../../assets/Images/heightVisual.png";
import weightVisual from "../../assets/Images/weightVisual.png";
import classes from "./Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SimpleProgramCard from "../../components/SimpleProgramCard/SimpleProgramCard";
import SimpleArticleCard from "../../components/SimpleArticleCard/SimpleArticleCard";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { didUserLogin } from "../../utils/roleUtils";
import { calculateBMI, getBMIStats } from "../../utils/otherUtils";
const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
  }, []);
  return (
    <div className={classes.homeContainer}>
      <h1 className={classes.nameSection}>Hello, {user.userName}!</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow: "4px 4px 50px rgba(255, 105, 78, 0.5)",
          borderRadius: "11px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexGrow: "1",
            width: "33%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            "& img": {
              width: "auto",
              height: "fit-content",
            },
            "& .weightTitle": {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "12px",
              color: "rgba(0, 0, 0, 0.5)",
            },
            "& .weightNumber": {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "24px",
              color: "rgba(0, 0, 0, 0.8)",
            },
            "& .weightNumber>span": {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14px",
              color: "rgba(0, 0, 0, 0.8)",
            },
          }}
        >
          <img src={weightVisual} alt="weight" />
          <Box>
            <p className="weightTitle">Weight</p>
            <p className="weightNumber">
              {user.userWeight} <span>kg</span>
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderLeft: "1px solid #8C8C8C",
            borderRight: "1px solid #8C8C8C",
            margin: "5px",
            padding: "5px",
            flexGrow: "1",
            width: "33%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            "& img": {
              width: "auto",
              height: "fit-content",
            },
            "& .heightTitle": {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "12px",
              color: "rgba(0, 0, 0, 0.5)",
            },
            "& .heightNumber": {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "24px",
              color: "rgba(0, 0, 0, 0.8)",
            },
            "& .heightNumber>span": {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14px",
              color: "rgba(0, 0, 0, 0.8)",
            },
          }}
        >
          <img src={heightVisual} alt="height" />
          <Box>
            <p className="heightTitle">Height</p>
            <p className="heightNumber">
              {user.userHeight} <span>cm</span>
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: "1",
            width: "33%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            "& img": {
              width: "auto",
              height: "fit-content",
            },
            "& .bmiCount": {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14px",
              color: "rgba(0, 0, 0, 0.8)",
            },
            "& .bmiDesc": {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "8px",
              lineHeight: "8px",
              color: "#FF694E",
            },
          }}
        >
          <img src={bmiVisual} alt="bmi" />
          <Box>
            <p className="bmiCount">
              {calculateBMI(user.userWeight, user.userHeight)}
            </p>
            <p className="bmiDesc">
              {getBMIStats(calculateBMI(user.userWeight, user.userHeight))}
            </p>
          </Box>
        </Box>
      </Box>
      <h2 className={classes.lastLeftSectionTitle}>
        Continue where you left!🔥
      </h2>
      <ProgramCard
        title={"5 Latihan Inti Terbaik yang Harus Anda Lakukan Setiap Hari"}
        type={"Core"}
        difficulty={"Intermediate"}
        duration={9}
        image={"/assets/workout/core1.png"}
        linkMessage={"Continue"}
        link={"https://youtu.be/GFus5TyIlCM"}
      />
      <h2 className={classes.programSectionTitle}>Programs!💪</h2>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        className={`mySwiper ${classes.swiper}`}
      >
        <SwiperSlide>
          <SimpleProgramCard
            title={"Abs"}
            image={"/assets/workout/abs-main.png"}
            link={"/workout/abs"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleProgramCard
            title={"Core"}
            image={"/assets/workout/core-main.png"}
            link={"/workout/core"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleProgramCard
            title={"Arm"}
            image={"/assets/workout/arm-main.png"}
            link={"/workout/arm"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleProgramCard
            title={"Leg"}
            image={"/assets/workout/leg-main.png"}
            link={"/workout/leg"}
          />
        </SwiperSlide>
      </Swiper>

      <h2 className={classes.articlesSectionTitle}>Articles for you!🧾</h2>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <SimpleArticleCard
          title={"Makanan Sehat"}
          writer={"dr. Rizal Fadli"}
          image={"/assets/article/article1.png"}
          link={"https://www.halodoc.com/kesehatan/makanan-sehat"}
        />
        <SimpleArticleCard
          title={"8 Kandungan Gizi Penting untuk Hidup Sehat"}
          writer={"Telemed"}
          image={"/assets/article/article3.png"}
          link={
            "https://telemed.ihc.id/artikel-detail-152-8-Kandungan-Gizi-Penting-untuk-Hidup-Sehat.html"
          }
        />
      </Box>

      <Footer currActivePage={0} />
    </div>
  );
};

export default Home;
