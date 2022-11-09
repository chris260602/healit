import { Box } from "@mui/material";
import Footer from "../../layouts/Footer/Footer";
import MealCard from "../../components/MealCard/MealCard";
import ArrowLeftBlack from "../../assets/Icons/ArrowLeftBlack";
import { Link, useNavigate } from "react-router-dom";
import { meal } from "../../data/meal/meal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { didUserLogin } from "../../utils/roleUtils";
const Meal = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
  }, []);
  const currentMeal = (
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
      <p>Current meal plan:</p>
      {user.currMeal > 0 && meal.length >= user.currMeal && (
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
      )}
    </Box>
  );
  return (
    <Box
      sx={{
        padding: "23px 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "15px",
          "& h1": {
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
          },
        }}
      >
        <Link to={"/home"}>
          <ArrowLeftBlack />
        </Link>

        <h1>Meal Plans</h1>
      </Box>
      {user.currMeal !== -1 && currentMeal}
      <Box
        sx={{
          "&>p": {
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "15px",
            color: "rgba(0, 0, 0, 0.4)",
            marginBottom: "10px",
          },
        }}
      >
        <p>Choose meal plan:</p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          {meal.map((data) => (
            <MealCard
              title={data.title}
              desc={data.desc}
              price={data.price}
              backgroundColor={data.backgroundColor}
              color={data.color}
              image={data.image}
              linkMessage={"Choose Plan"}
              link={data.link}
            />
          ))}
        </Box>
      </Box>
      <Footer currActivePage={1} />
    </Box>
  );
};
export default Meal;
