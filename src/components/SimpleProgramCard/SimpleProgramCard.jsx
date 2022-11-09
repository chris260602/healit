import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { getColorFrontWorkoutType } from "../../utils/colorUtils";
import classes from "./SimpleProgramCard.module.css";
const SimpleProgramCard = ({ link, title, image }) => {
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
          "& img": {
            position: "absolute",
            width: "70%",
            top: "100%",
            right: "0",
            transform: "translateY(-100%)",
          },
          "& p": {
            color: "#FFFFFF",
            position: "absolute",
            bottom: "10px",
            left: "10px",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "22px",
            textDecoration: "none",
          },
        }}
      >
        <p>{title}</p>
        <img src={image} alt={title} />
      </Box>
    </Link>
  );
};
export default SimpleProgramCard;
