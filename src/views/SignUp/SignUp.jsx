import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import EmailIcon from "../../assets/Icons/EmailIcon";
import LockIcon from "../../assets/Icons/LockIcon";
import NameIcon from "../../assets/Icons/NameIcon";
import CalendarIcon from "../../assets/Icons/CalendarIcon";
import RulerIcon from "../../assets/Icons/RulerIcon";
import ScaleMassIcon from "../../assets/Icons/ScaleMassIcon";
import classes from "./SignUp.module.css";
import { userRegister } from "../../controller/Firebase";
import { useEffect } from "react";
import { didUserLogin } from "../../utils/roleUtils";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../store/reducers/userReducer/userReducer";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpSucess, setSignUpSucess] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    didUserLogin(user) && navigate("/home");
  }, []);

  const handleSignUp = async (values, formik) => {
    try {
      const userSignUp = await userRegister(
        values.email,
        values.password,
        values.name,
        values.birth,
        values.height,
        values.weight
      );
      setSignUpSucess(userSignUp);
    } catch (e) {
      formik.errors.account = "Something went wrong";
    }
  };

  const handleToHomePage = () => {
    dispatch(login(signUpSucess));
    navigate("/home");
  };
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    name: yup.string("Enter your name").required("Name is required"),
    birth: yup.date("Enter your Birth Date").required("Birth date is required"),
    height: yup.number("Enter your height").required("Height is required"),
    weight: yup.number("Enter your weight").required("Weight is required"),
  });

  const WithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        name: "",
        birth: "",
        height: "",
        weight: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        await handleSignUp(values, formik);
      },
    });

    return (
      <div className={classes.formikContainer}>
        {console.log(formik)}
        <form onSubmit={formik.handleSubmit} className={classes.formContainer}>
          {formik.errors.account && (
            <p className={classes.signUpError}>{formik.errors.account}</p>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <EmailIcon />
            <TextField
              sx={{
                marginLeft: "20px",
                marginTop: "15px",
                marginBottom: "5px",
                width: "100%",
                color: "black",
              }}
              className={classes.textField}
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              id="input-with-icon-adornment"
              label="Email Address"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <LockIcon />
            <TextField
              sx={{
                marginLeft: "20px",
                marginTop: "15px",
                marginBottom: "5px",
                width: "100%",
                color: "black",
              }}
              className={classes.textField}
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              id="input-with-icon-adornment"
              label="Password"
              variant="standard"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <NameIcon />
            <TextField
              sx={{
                marginLeft: "20px",
                marginTop: "15px",
                marginBottom: "5px",
                width: "100%",
                color: "black",
              }}
              className={classes.textField}
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              id="input-with-icon-adornment"
              label="Name"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <CalendarIcon />
            <TextField
              sx={{
                marginLeft: "20px",
                marginTop: "15px",
                marginBottom: "5px",
                width: "100%",
                color: "black",
              }}
              InputLabelProps={{ shrink: true }}
              className={classes.textField}
              type="date"
              name="birth"
              onChange={formik.handleChange}
              value={formik.values.birth}
              error={formik.touched.birth && Boolean(formik.errors.birth)}
              helperText={formik.touched.birth && formik.errors.birth}
              id="input-with-icon-adornment"
              label="Birth Date"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "30px",
              marginBotton: "15px",
              width: "100%",
            }}
          >
            <p className={classes.metrics}>Metrics</p>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <RulerIcon />
            <TextField
              sx={{
                marginLeft: "20px",
                marginTop: "15px",
                marginBottom: "5px",
                width: "100%",
                color: "black",
              }}
              className={classes.textField}
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              name="height"
              onChange={formik.handleChange}
              value={formik.values.height}
              error={formik.touched.height && Boolean(formik.errors.height)}
              helperText={formik.touched.height && formik.errors.height}
              id="input-with-icon-adornment"
              label="Height"
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ScaleMassIcon />
            <TextField
              sx={{
                marginLeft: "20px",
                marginTop: "15px",
                marginBottom: "5px",
                width: "100%",
                color: "black",
              }}
              className={classes.textField}
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              name="weight"
              onChange={formik.handleChange}
              value={formik.values.weight}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              helperText={formik.touched.weight && formik.errors.weight}
              id="input-with-icon-adornment"
              label="Weight"
              variant="standard"
            />
          </Box>
          <Button
            sx={{
              fontSize: "18px",
              padding: "18px 0",
              border: " 3px solid #74E6B7",
              color: "#74E6B7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "22px",
              marginTop: "57px",
              marginBottom: "13px",
              "&:hover": {
                border: " 3px solid #62c49c",
              },
            }}
            variant="outlined"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress color="inherit" />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </div>
    );
  };

  const SuccessBox = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
        borderRadius: "22px",
        padding: "30px 50px",
        margin: "35px",
        textAlign: "center",
      }}
    >
      <h2 className={classes.createAccountTitle}>Account Created!🎉</h2>
      <p>
        Your account has been created! Continue to Homepage to view details.
      </p>
      <Button
        sx={{
          fontSize: "18px",
          padding: "18px 0",
          background: "#74E6B7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "22px",
          marginTop: "57px",
          marginBottom: "13px",
          "&:hover": {
            background: "#62c49c",
          },
        }}
        variant="contained"
        onClick={handleToHomePage}
      >
        <p className={classes.buttonText}>Back to Homepage</p>
      </Button>
    </Box>
  );

  return (
    <div className={classes.registerContainer}>
      <h1 className={classes.logoTitle}>Healit</h1>
      {signUpSucess === null && (
        <>
          <p className={classes.personalInformation}>Personal Information</p>
          {<WithMaterialUI />}
          <p className={classes.regisLink}>
            Already have an account? <Link to={"/login"}>Sign in here!</Link>
          </p>
        </>
      )}
      {signUpSucess !== null && SuccessBox}
    </div>
  );
};

export default SignUp;
