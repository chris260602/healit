import { Avatar, Box } from "@mui/material";
import Footer from "../../layouts/Footer/Footer";
import MealCard from "../../components/MealCard/MealCard";
import { Link, useNavigate } from "react-router-dom";
import NoMealPlanCard from "../../components/NoMealPlanCard/NoMealPlanCard";
import { stringAvatar } from "../../utils/colorUtils";
import MealIcon from "../../assets/Icons/MealIcon";
import WorkoutIcon from "../../assets/Icons/WorkoutIcon";
import MultiColorArrowRightIcon from "../../assets/Icons/MultiColorArrowRightIcon";
import LogoutIcon from "../../assets/Icons/LogoutIcon";
import classes from "./Account.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { didUserLogin } from "../../utils/roleUtils";
import { logoff } from "../../store/reducers/userReducer/userReducer";
import { meal } from "../../data/meal/meal";

const Account = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
  }, []);
  const logoutHandler = () => {
    dispatch(logoff());
  };
  return (
    <Box
      sx={{
        padding: "23px 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          paddingBottom: "15px",
          marginBottom: "15px",
        }}
      >
        <Avatar
          children={user.userName[0]}
          variant="square"
          sx={{
            borderRadius: "10px",
            width: "60px",
            height: "60px",
          }}
        />
        <Box
          sx={{
            marginLeft: "15px",
            "& .accountName": {
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",
            },
            "& .accountNumber": {
              fontWeight: "400",
              fontSize: "8px",
              lineHeight: "10px",
              color: "rgba(0, 0, 0, 0.4)",
            },
          }}
        >
          <p className="accountName">{user.userName}</p>
          {/* <p className="accountNumber">+62 812 7075 561</p> */}
        </Box>
      </Box>
      {user.currMeal > 0 && meal.length >= user.currMeal ? (
        <Box
          sx={{
            marginBottom: "25px",
            "&>p": {
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "15px",
              color: "rgba(0, 0, 0, 0.4)",
              marginBottom: "10px",
            },
          }}
        >
          <p>Meal plans:</p>

          <MealCard
            title={meal[user.currMeal - 1].title}
            desc={meal[user.currMeal - 1].desc}
            price={meal[user.currMeal - 1].price}
            backgroundColor={"rgba(237, 114, 103, 0.5)"}
            color={"#ED7267"}
            image={meal[user.currMeal - 1].image}
            linkMessage={"Renew Now"}
            link={meal[user.currMeal - 1].link}
          />
        </Box>
      ) : (
        <NoMealPlanCard />
      )}

      <Box
        sx={{
          marginBottom: "25px",
          "&>p": {
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "15px",
            color: "rgba(0, 0, 0, 0.4)",
            marginBottom: "10px",
          },
        }}
      >
        <p>Account</p>
        <Box>
          <Link to={"/meal"} className={classes.accountLink}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& p": {
                  color: "#000000",
                },
              }}
            >
              <Box
                sx={{
                  width: "35px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <MealIcon color={"#000000"} />
              </Box>

              <p>Meal</p>
            </Box>

            <MultiColorArrowRightIcon color={"black"} />
          </Link>
          <Link to={"/workout"} className={classes.accountLink}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& p": {
                  color: "#000000",
                },
              }}
            >
              <Box
                sx={{
                  width: "35px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: "5px",
                }}
              >
                <WorkoutIcon color={"black"} />
              </Box>

              <p>Workout</p>
            </Box>

            <MultiColorArrowRightIcon color={"black"} />
          </Link>
          <Box
            onClick={logoutHandler}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "& p": {
                color: "#D83231",
              },
            }}
            className={classes.loginLink}
          >
            <Box
              sx={{
                width: "35px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <LogoutIcon />
            </Box>

            <p>Log Out</p>
          </Box>
        </Box>
      </Box>

      <Footer currActivePage={4} />
    </Box>
  );
};

export default Account;
