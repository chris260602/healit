import { Box } from "@mui/system";
import MiniArrowRightIcon from "../../assets/Icons/MiniArrowRightIcon";
import classes from "./SimpleArticleCard.module.css";

const SimpleArticleCard = ({ title, writer, image, link }) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
        borderRadius: "11px",
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        "& a": {
          color: "#FF694E",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "10px",
          letterSpacing: "-0.5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "10px",
          textDecoration: "none",
        },
        "& a p": {
          marginRight: "5px",
        },
        "& .simpleArticleTitle": {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "10px",
          lineHeight: "15px",
          letterSpacing: "-0.5px",
        },
        "& .simpleArticleWriter": {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "8px",
          lineHeight: "15px",
          color: "rgba(0, 0, 0, 0.3)",
          marginTop: "4px",
          marginBottom: "5px",
        },
        "& img": {
          marginBottom: "20px",
          width: "100%",
        },
      }}
    >
      <p className="simpleArticleTitle">{title}</p>
      <p className="simpleArticleWriter">Writer: {writer}</p>
      <img src={image} alt="title" />
      <a href={link}>
        <p>Read Now</p> <MiniArrowRightIcon />
      </a>
    </Box>
  );
};
export default SimpleArticleCard;
