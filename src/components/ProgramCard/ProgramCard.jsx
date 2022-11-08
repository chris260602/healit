import { Box } from "@mui/material";
import MiniArrowRightIcon from "../../assets/Icons/MiniArrowRightIcon";
import StopWatchIcon from "../../assets/Icons/StopWatchIcon";
import {
  getColorFromDifficulty,
  getColorFrontWorkoutType,
} from "../../utils/colorUtils";

const ProgramCard = ({
  title,
  type,
  difficulty,
  duration,
  image,
  linkMessage,
  link,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: () => getColorFrontWorkoutType(type),
          borderRadius: "11px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          height: "85px",
          overflow: "hidden",
          "& img": {
            width: "90%",
          },
        }}
      >
        <img src={image} alt="Workout" />
      </Box>
      <Box
        sx={{
          marginLeft: "5px",
          width: "60%",
          position: "relative",
          "& h3": {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "17px",
            paddingLeft: "3px",
          },
        }}
      >
        <h3>{title}</h3>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginTop: "4px",
            color: () => getColorFromDifficulty(difficulty),
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              background: () => getColorFromDifficulty(difficulty),
              width: "10px",
              height: "10px",
              marginLeft: "3px",
              "& p": {
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "10px",
                letterSpacing: "-0.5px",
              },
            }}
          />
          <p>{difficulty}</p>
        </Box>
        <Box
          sx={{
            color: "#F4B558",
            display: "flex",
            alignItems: "center",
            marginTop: "6px",
            "& p": {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "10px",
              letterSpacing: "-0.5px",
            },
          }}
        >
          <StopWatchIcon />
          <p>{duration} Mins</p>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            bottom: "10px",
            right: "5px",

            "& a": {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "10px",
              letterSpacing: "-0.5px",
              color: "#FF694E",
              textDecoration: "none",
              marginRight: "5px",
            },
          }}
        >
          <a href={link} target="_blank" rel="noreferrer">
            {linkMessage}
          </a>
          <MiniArrowRightIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default ProgramCard;
