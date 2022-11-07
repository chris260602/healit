import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { useState } from "react";
import HomeIcon from "../../assets/Icons/HomeIcon";
import MealIcon from "../../assets/Icons/MealIcon";
import WorkoutIcon from "../../assets/Icons/WorkoutIcon";
import ArticleIcon from "../../assets/Icons/ArticleIcon";
import AccountIcon from "../../assets/Icons/AccountIcon";
import { Link } from "react-router-dom";

const Footer = ({ currActivePage }) => {
  const [value, setValue] = useState(currActivePage);
  return (
    <>
      <Box sx={{ height: "56px" }}></Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: "500px",
          margin: "auto",
        }}
        elevation={0}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{
              color: "rgba(0, 0, 0, 0.3)",
              "&.Mui-selected": {
                color: "#00FFA3",
              },
            }}
            label="Home"
            icon={<HomeIcon color={value === 0 ? "#00FFA3" : "#1C1C1E"} />}
            component={Link}
            to="/home"
          />
          <BottomNavigationAction
            sx={{
              color: "rgba(0, 0, 0, 0.3)",
              "&.Mui-selected": {
                color: "#00FFA3",
              },
            }}
            label="Meal"
            icon={<MealIcon color={value === 1 ? "#00FFA3" : "#1C1C1E"} />}
            component={Link}
            to="/meal"
          />
          <BottomNavigationAction
            sx={{
              color: "rgba(0, 0, 0, 0.3)",
              "&.Mui-selected": {
                color: "#00FFA3",
              },
            }}
            label="Workout"
            icon={<WorkoutIcon color={value === 2 ? "#00FFA3" : "#1C1C1E"} />}
            component={Link}
            to="/workout"
          />
          <BottomNavigationAction
            sx={{
              color: "rgba(0, 0, 0, 0.3)",
              "&.Mui-selected": {
                color: "#00FFA3",
              },
            }}
            label="Article"
            icon={<ArticleIcon color={value === 3 ? "#00FFA3" : "#1C1C1E"} />}
            component={Link}
            to="/article"
          />
          <BottomNavigationAction
            sx={{
              color: "rgba(0, 0, 0, 0.3)",
              "&.Mui-selected": {
                color: "#00FFA3",
              },
            }}
            label="Account"
            icon={<AccountIcon color={value === 4 ? "#00FFA3" : "#1C1C1E"} />}
            component={Link}
            to="/account"
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Footer;
