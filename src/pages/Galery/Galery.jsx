import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import Grid from "@mui/material/Grid";
const Galery = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <NavBar menuTitle={"GALERÍA"} backgroundProp={"white"} />
      <hr style={{ marginTop: "2rem", border: "none" }} />

      <Grid container alignItems="center">
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9D9D9",
              width: "110px",
              height: "110px",
              marginTop: "1rem",
              marginLeft: "0.5rem",
            }}
          ></div>
        </Grid>
      </Grid>

      <Menu />
    </>
  );
};

export default Galery;
