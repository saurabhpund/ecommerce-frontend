import React, { useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../state/Auth/Action";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const auth = useSelector(store=>store);
    
    useEffect(() => {
        if(jwt){    
            dispatch(getUser(jwt));
        }
    }, [jwt, auth.jwt])


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    dispatch(register(data))
    console.log("Form Submitted:", data);
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            required
            type="text"
            name="firstName"
            id="firstName"
            label="First Name"
            autoComplete="given-name"
          />
        </Grid>
        <Grid item size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            required
            type="text"
            name="lastName"
            id="lastName"
            label="Last Name"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item size={{xs:12}}>
          <TextField
            fullWidth
            required
            type="email"
            name="email"
            id="email"
            label="Email"
            autoComplete="email"
          />
        </Grid>
        <Grid item size={{xs:12}}>
          <TextField
            fullWidth
            required
            type="password"
            name="password"
            id="password"
            label="Password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item size={{xs:12}}>
          <Button
            type="submit"
            style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
            fullWidth
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
    <div className="flex py-3 justify-center items-center">
        <p>
            If already have an account?
        </p>
        <Link to={"/login"} className="ml-2 text-blue-500 ">Login</Link>
    </div>
      </>
  );
};

export default RegistrationForm;
