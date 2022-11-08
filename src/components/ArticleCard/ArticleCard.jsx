import { Box } from "@mui/material";
import MiniArrowRightIcon from "../../assets/Icons/MiniArrowRightIcon";

const ArticleCard = ({ title, writer, image, linkMessage, link }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderRadius: "11px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          height: "100px",
          overflow: "hidden",
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <img src={image} alt="Article" />
      </Box>
      <Box
        sx={{
          marginLeft: "5px",
          width: "60%",
          position: "relative",
          "& h3": {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "15px",
            paddingLeft: "3px",
          },
          "& p": {
            paddingTop: "3px",
            paddingLeft: "3px",
            fontWeight: "500",
            fontSize: "8px",
            lineHeight: "15px",
            color: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <h3>{title}</h3>
        <p>{writer}</p>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            bottom: "0",
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

export default ArticleCard;
