import { Grid, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, login } from "../../../state/Auth/Action";

const LoginForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    dispatch(login(data));

    // Add further validation or API calls here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12 }}>
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
          <Grid item size={{ xs: 12 }}>
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
          <Grid item size={{ xs: 12 }}>
            <Button
              type="submit"
              style={{ backgroundColor: "#4F46E5", color: "#FFFFFF" }}
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex py-3 justify-center items-center">
        <p>Don't have an account?</p>
        <Link to={"/register"} className="ml-2 text-blue-500 ">
          signup
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
