import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            xs={4} // ✅
            height={"100%"}
            bgcolor="primary.main"
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid item xs={4} bgcolor="primary.main" height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item xs={4} bgcolor="primary.main" height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
        </Grid>
        {/* <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            xs={4} // ✅ Fixed "xm" to "xs"
            md={3}
            height={"100%"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            first
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
            sx={{ backgroundColor: "#f0f0f0" }}
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={6}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0, 0, 0, 0.85)", // ✅ Fixed: wrapped in quotes
            }}
          >
            first
          </Grid>
        </Grid> */}
      </>
    );
  };
};

export default AppLayout;
