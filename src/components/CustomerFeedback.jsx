import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { cardData } from "../constants/data";

export default function CustomerFeedback() {
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography variant="h3">What our customers say.</Typography>
      <Stack direction="row" spacing={5} my={4} mx={9}>
        {cardData.map((data) => {
          return (
            <Card
              elevation={15}
              sx={{ width: "300px", textAlign: "left", p: 3, fontSize: "20px" }}
              key={data.id}>
              <CardContent>{data.text}</CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Avatar>
                  <img src={data.image} alt={data.name} />
                </Avatar>
                <div style={{ fontSize: "15px" }}>
                  <p>{data.name}</p>
                  <span style={{ color: "green" }}>{data.position}</span>
                </div>
              </Box>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
}
