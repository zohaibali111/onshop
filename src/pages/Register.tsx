import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "./bg/signin.svg";
import bgimg from "./bg/backimg.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { Email, Phone } from "@mui/icons-material";
import ReactGA from "react-ga4"

const schema = yup
  .object({
    name: yup.string().min(3).max(10).required(),
    password: yup.string().min(3).required(),
    email: yup.string().email().required(),
    mobile: yup
      .string()
      .matches(/^\d+$/, "Must be only digits")
      .min(6)
      .required(),
  })
  .required();

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const center = {
  position: "relative",
  top: "50%",
  left: "30%",
};

const Register = () => {

  ReactGA.send({
    hitType: "pageview",
    page: "/register",
    title: "Home",
  });

  const [open, setOpen] = useState(false);
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Your onSubmit function
  const onSubmit = async (data: any) => {

const payload={
  name:data.name,
  phone:data.mobile,
  email:data.email,
  password:data.password
}
console.log(payload)
    try {
      const response = await axios.post(
        "http://localhost:5000/user/create-user",
       payload
      );

      console.log(response.data); 
      navigate("/");

    } catch (error) {
      console.error("There was an error!", error);
   
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function TransitionLeft(props: any) {
    return <Slide {...props} direction="left" />;
  }


  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  marginTop: "40px",
                  marginLeft: "15px",
                  marginRight: "15px",
                  height: "63vh",
                  color: "#f5f5f5",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#3b33d5",
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={25} />
                    <Box sx={center}>
                      <Typography component="h1" variant="h4">
                        Create Account
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <TextField
                            {...register("name")}
                            fullWidth
                            label="name"
                            size="small"
                            name="name"
                            // onChange={(e)=>{setName(e)}}
                          />
                          {errors.name && (
                            <span
                              style={{ color: "#f7d643", fontSize: "12px" }}
                            >
                              {errors.name?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            type="email"
                            size="small"
                            {...register("email")}
                            aria-invalid={errors.email ? "true" : "false"}
                          />
                          {errors.email && (
                            <span
                              style={{ color: "#f7d643", fontSize: "12px" }}
                            >
                              {errors.email?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            {...register("password")}
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            size="small"
                            id="password"
                            autoComplete="new-password"
                          />
                          {errors.password && (
                            <span
                              style={{ color: "#f7d643", fontSize: "12px" }}
                            >
                              {errors.password?.message}
                            </span>
                          )}
                        </Grid>
              
                        <Grid item xs={6}>
                          <TextField
                            {...register("mobile")}
                            fullWidth
                            name="mobile"
                            label="Contact Number"
                            type="number"
                            size="small"
                          />
                          {errors.mobile && (
                            <span
                              style={{ color: "#f7d643", fontSize: "12px" }}
                            >
                              {errors.mobile?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{
                              mt: "15px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "#FF9A01",
                            }}
                          >
                            Register
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{ marginTop: "10px" }}
                            >
                              Already have an Account?{" "}
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {
                                  navigate("/login");
                                }}
                              >
                                Sign In
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </form>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Register;
