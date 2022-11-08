import { Box } from "@mui/material";
import MainWorkoutCard from "../../components/MainWorkoutCard/MainWorkoutCard";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import Footer from "../../layouts/Footer/Footer";

import classes from "./Program.module.css";

const Program = () => {
  return (
    <Box className={classes.programContainer}>
      <h1 className={classes.workoutTitle}>Workout</h1>
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
      <Box
        sx={{
          borderBottom: "1px solid rgba(119, 119, 119, 0.1)",
          maxWidth: "500px",
          height: "10px",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        <MainWorkoutCard
          title={"Abs"}
          desc={"Lose stubborn belly fat."}
          image={"/assets/workout/abs-main.png"}
          link={"abs"}
        />
        <MainWorkoutCard
          title={"Leg"}
          desc={"Lose thigh fat."}
          image={"/assets/workout/Leg-main.png"}
          link={"leg"}
        />
        <MainWorkoutCard
          title={"Core"}
          desc={"Lose weight & keep fit."}
          image={"/assets/workout/core-main.png"}
          link={"core"}
        />
        <MainWorkoutCard
          title={"Arm"}
          desc={"Burn fat & build muscle."}
          image={"/assets/workout/Arm-main.png"}
          link={"arm"}
        />
      </Box>

      <Footer currActivePage={2} />
    </Box>
  );
};

export default Program;
