import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import pic4 from "../assets/images/working2.jpg";
import { skillsData } from "../constants/data";

export default function SkillsSection() {
  return (
    <Box sx={{ my: 6, px: 5 }}>
      <Stack direction="row" spacing={20}>
        <Typography variant="h2" sx={{ width: "40%" }}>
          Get the skills you need for a job that is in demand
        </Typography>
        <Typography
          sx={{ width: "40%", fontSize: "20px", wordSpacing: "10px" }}>
          The modern labour market dictates it's own terms. Today to be a
          competitive specialist requires more than professional skills.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 6,
          background: "#f7eddc",
          p: 10,
        }}>
        <Typography sx={{ width: "30%" }}>
          {skillsData.map((data) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  background: "#f7eddc",
                  fontSize: "20px",
                  wordSpacing: "10px",
                }}
                key={data.title}>
                {data.icon}
                <div>
                  <p>{data.title}</p>
                  <p>{data.text}</p>
                </div>
              </Box>
            );
          })}
        </Typography>
        <img src={pic4} alt="image" style={{ width: "60%" }} />
      </Box>
    </Box>
  );
}
