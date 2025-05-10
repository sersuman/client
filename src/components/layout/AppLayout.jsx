import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  height: "100%",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container spacing={1} height={"calc(100vh - 64px)"}>
          <Grid
            height={"100%"}
            size={{
              sm: 4,
              md: 3,
              display: { xs: "none", sm: "block" },
              backgroundColor: "red",
            }}
          >
            <Item>First</Item>
          </Grid>
          <Grid
            height={"100%"}
            size={{
              xs: 12,
              sm: 8,
              md: 5,
              lg: 6,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Item>Second</Item>
          </Grid>
          <Grid
            height={"100%"}
            size={{ md: 4, lg: 3, display: { xs: "none", sm: "block" } }}
          >
            <Item>Third</Item>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
