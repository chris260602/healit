import { Box } from "@mui/material";
import MultiColorArrowRightIcon from "../../assets/Icons/MultiColorArrowRightIcon";

const MealCard = ({
  title,
  desc,
  price,
  backgroundColor,
  color,
  image,
  linkMessage,
  link,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        background: backgroundColor,
        border: "0.2px solid #000000",
        boxShadow: "4px 4px 50px rgba(0, 255, 163, 0.1)",
        borderRadius: "11px",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          background: "rgba(64, 64, 64, 0.9)",
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
        <img src={image} alt="Meal" />
      </Box>
      <Box
        sx={{
          marginLeft: "5px",
          width: "60%",
          position: "relative",
          "& h3": {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "14px",
            paddingLeft: "3px",
          },
        }}
      >
        <h3>{title}</h3>
        <Box
          sx={{
            paddingLeft: "3px",
            marginTop: "4px",
            fontWeight: "400",
            fontSize: "8px",
            lineHeight: "10px",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <p>{desc}</p>
        </Box>
        <Box
          sx={{
            paddingLeft: "3px",
            display: "flex",
            flexDirection: "column",
            marginTop: "6px",
            "& p": {
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "10px",
              letterSpacing: "-0.5px",
            },
            "& .mealCardPriceTitle": {
              color: "rgba(0, 0, 0, 0.4);",
              fontWeight: "400",
              fontSize: "8px",
              marginBottom: "3px",
            },
            "& .mealCardPriceNumber": {
              color: "#0000FF",
              fontSize: "12px",
              marginBottom: "40px",
            },
          }}
        >
          <p className="mealCardPriceTitle">Price starts from</p>
          <p className="mealCardPriceNumber">Rp {price}/week</p>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            bottom: "3px",
            right: "2px",
            "& a": {
              padding: "0.3em 0.4em",
              background: "white",
              border: "1px solid #FFFFFF",
              boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "10px",
              letterSpacing: "-0.5px",
              color: color,
              textDecoration: "none",
            },
          }}
        >
          <a
            href={`https://api.whatsapp.com/send?phone=${link}&text=Halo%2C%20Aku%20ingin%20pesan%20${title}.`}
            target="_blank"
            rel="noreferrer"
          >
            {linkMessage}
            <Box
              sx={{
                display: "inline",
                marginLeft: "5px",
              }}
            >
              <MultiColorArrowRightIcon color={color} />
            </Box>
          </a>
          {/* <MiniArrowRightIcon /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default MealCard;
