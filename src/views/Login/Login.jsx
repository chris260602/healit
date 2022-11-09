import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import EmailIcon from "../../assets/Icons/EmailIcon";
import LockIcon from "../../assets/Icons/LockIcon";
import logo1 from "../../assets/Images/logo1.png";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import * as yup from "yup";
import classes from "./Login.module.css";
import {auth} from "../../controller/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const WithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        remember: false,
      },
      validationSchema: validationSchema,
      onSubmit: async(values) => {
        await signIn(values.email,values.password);
        alert(JSON.stringify(values, null, 2));
      },
    });

    const signIn = async(email, password)=>{
      try{
        await signInWithEmailAndPassword(auth, email, password)
        alert("Succes")
      }catch(e){
        formik.isSubmitting=false;
        console.log(e);
      }
      
      // console.log(auth)
      // .catch(error=>console.error(error));
  }

    return (
      <div className={classes.formikContainer}>
        {console.log(formik)}
        <form onSubmit={formik.handleSubmit} className={classes.formContainer}>
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

          <FormControlLabel
            name="remember"
            onChange={formik.handleChange}
            control={
              <Checkbox
                checked={formik.values.remember}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon color="#74E6B7" />}
              />
            }
            label="Remember Me"
          />

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
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress color="inherit" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div className={classes.loginContainer}>
      <img src={logo1} alt="Healit" />
      <h1 className={classes.logoTitle}>Healit</h1>
      {<WithMaterialUI />}
      <p className={classes.regisLink}>
        Don’t have an account? <Link to={"/register"}>Sign up here!</Link>
      </p>
    </div>
  );
};

export default Login;
