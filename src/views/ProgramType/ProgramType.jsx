import { Box } from "@mui/system";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import Footer from "../../layouts/Footer/Footer";
import classes from "./ProgramType.module.css";
import { abs } from "../../data/workout/abs.js";
import { arm } from "../../data/workout/arm.js";
import { leg } from "../../data/workout/leg.js";
import { core } from "../../data/workout/core.js";
import { useState } from "react";
import { useEffect } from "react";
import { getColorFrontWorkoutType } from "../../utils/colorUtils";
import { upperCaseFirstLetter } from "../../utils/stringUtils";
import ArrowLeft from "../../assets/Icons/ArrowLeft";
const ProgramType = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getWorkoutData();
  }, []);

  const getWorkoutData = () => {
    if (params.type === "abs") {
      setData(abs);
    } else if (params.type === "arm") {
      setData(arm);
    } else if (params.type === "leg") {
      setData(leg);
    } else if (params.type === "core") {
      setData(core);
    } else {
      navigate("/home");
    }
  };
  const buildWorkoutHeader = (
    <Box
      sx={{
        position: "relative",
        height: "160px",
        background: () =>
          getColorFrontWorkoutType(upperCaseFirstLetter(params.type)),
        marginBottom: "30px",
        boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
        userSelect: "none",
        overflow: "hidden",
        "& img": {
          position: "absolute",
          width: "30%",
          bottom: "0",
          right: "0",
        },
        "& p": {
          color: "#FFFFFF",
        },
        "& .WorkoutHeaderTitle": {
          position: "absolute",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "29px",
          textDecoration: "none",
          bottom: "54px",
          left: "33px",
        },
        "& .WorkoutHeaderDesc": {
          position: "absolute",
          bottom: "24px",
          left: "33px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "14px",
          textDecoration: "none",
        },
        "& a": {
          position: "absolute",
          left: "16px",
          top: "19px",
        },
      }}
    >
      <Link to={"/workout"}>
        <ArrowLeft />
      </Link>
      <p className="WorkoutHeaderTitle">{params.type}</p>
      <p className="WorkoutHeaderDesc">{data.length} workouts</p>
      <img src={`/assets/workout/${params.type}-main.png`} alt="workout" />
    </Box>
  );
  const buildWorkoutList = data.map((workout) => (
    <ProgramCard
      title={workout.title}
      type={workout.type}
      difficulty={workout.difficulty}
      duration={workout.duration}
      image={workout.image}
      linkMessage={"Start Now"}
      link={workout.link}
    />
  ));

  return (
    <Box
      sx={{
        marginBottom: "23px",
      }}
    >
      {buildWorkoutHeader}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0 30px",
          gap: "20px",
        }}
      >
        {buildWorkoutList}
      </Box>

      <Footer currActivePage={2} />
    </Box>
  );
};
export default ProgramType;
