import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { getColorFrontWorkoutType } from "../../utils/colorUtils";
import classes from "./MainWorkout.module.css";
import WhiteArrowRight from "../../assets/Icons/WhiteArrowRight";
const MainWorkoutCard = ({ link, title, desc, image }) => {
  return (
    <Link to={link} className={classes.cardLink}>
      <Box
        sx={{
          position: "relative",
          height: "85px",
          background: () => getColorFrontWorkoutType(title),
          boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: "11px",
          userSelect: "none",
          overflow: "hidden",
          "& img": {
            position: "absolute",
            width: "30%",
            top: "100%",
            right: "30px",
            transform: "translateY(-100%)",
          },
          "& p": {
            color: "#FFFFFF",
          },
          "& .MainWorkoutCardTitle": {
            position: "absolute",
            fontWeight: "800",
            fontSize: "20px",
            lineHeight: "24px",
            textDecoration: "none",
            marginTop: "14px",
            marginLeft: "14px",
          },
          "& .MainWorkoutCardDesc": {
            position: "absolute",
            bottom: "14px",
            left: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "12px",
            textDecoration: "none",
          },
        }}
      >
        <p className="MainWorkoutCardTitle">{title}</p>
        <p className="MainWorkoutCardDesc">{desc}</p>
        <img src={image} alt={title} />
        <Box
          sx={{
            position: "absolute",
            bottom: "4px",
            right: "4px",
          }}
        >
          {" "}
          <WhiteArrowRight />
        </Box>
      </Box>
    </Link>
  );
};
export default MainWorkoutCard;
