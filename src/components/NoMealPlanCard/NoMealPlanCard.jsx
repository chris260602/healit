import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import MultiColorArrowRightIcon from "../../assets/Icons/MultiColorArrowRightIcon";

const NoMealPlanCard = () => {
  return (
    <Box
      sx={{
        background: "rgba(255, 0, 0, 0.49)",
        boxShadow: "4px 4px 50px rgba(0, 255, 163, 0.1)",
        borderRadius: "11px",
        padding: "18px 5px",
        marginBottom: "20px",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& h3": {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "24px",
          marginBottom: "5px",
        },
        "& a": {
          color: "black",
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
          textDecoration: "none",
        },
      }}
    >
      <h3>{"NO MEAL PLAN YET!"}</h3>

      <Link to={"/meal"}>
        {"Check Menu"}
        <Box
          sx={{
            display: "inline",
            marginLeft: "5px",
          }}
        >
          <MultiColorArrowRightIcon color={"black"} />
        </Box>
      </Link>
    </Box>
  );
};

export default NoMealPlanCard;
