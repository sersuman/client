import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
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

export const LayoutLoader = () => {
  return (
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
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          animation="wave"
          sx={{
            bgcolor: "grey.300",
            borderRadius: 2,
          }}
        />
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
        <Stack spacing={1} height={"100%"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={"100%"}
              height={"10rem"}
              animation="wave"
            />
          ))}
        </Stack>
      </Grid>
      <Grid
        height={"100%"}
        size={{ md: 4, lg: 3, display: { xs: "none", sm: "block" } }}
      >
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          animation="wave"
          sx={{
            bgcolor: "grey.300",
            borderRadius: 2,
          }}
        />
      </Grid>
    </Grid>
  );
};
