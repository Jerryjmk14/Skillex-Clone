import React from "react";
import { heroData } from "../constants/data";
import { Paper, Stack } from "@mui/material";

export default function Services() {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{ width: "95%", margin: "2rem auto" }}>
      {heroData.map((data) => {
        return (
          <Paper elevation={0} key={data.id}>
            <img src={data.image} alt="image" />
            <h3>{data.dataTitle}</h3>
            <p>{data.duration}</p>
          </Paper>
        );
      })}
    </Stack>
  );
}
