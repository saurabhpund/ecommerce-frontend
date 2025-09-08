import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TotalEarning = () => {
  return (
    <Card sx={{ bgcolor: "#242B2E", color: "white" }}>
      <CardContent>
        <Typography variant="h6">Total Earnings</Typography>
        <Typography variant="h3" mt={2}>₹1,24,500</Typography>
        <Typography variant="body2" mt={1}>Compared to last week: +12%</Typography>
      </CardContent>
    </Card>
  );
};

export default TotalEarning;
