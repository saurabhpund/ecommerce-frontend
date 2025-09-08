import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  EllipsisVerticalIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { color } from "../../customer/components/Product/FilterData";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const MonthlyOverview = () => {
  const stats = [
    {
      stats: "245K",
      title: "Sales",
      color: "#6630B0",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      stats: "12.5K",
      title: "Customers",
      color: "#FF1F26",
      icon: <UserIcon />,
    },
    {
      stats: "1.54K",
      title: "Products",
      color: "#0262B6",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      stats: "88K",
      title: "Revenue",
      color: "#1B9D51",
      icon: <CurrencyDollarIcon />,
    },
  ];

  const RenderStats = () => {
    return stats.map((item, i) => (
      <Grid item xs={12} sm={6} md={3} key={i}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: "white",
              bgcolor: `${item.color}`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption">{item.title}</Typography>
            <Typography variant="h6">{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ));
  };

  return (
    <>
      <Card sx={{bgcolor: "#242B2E", color: "white"}}>
        <CardHeader
          title={
            <Typography sx={{mb: 2.5, lineHeight: "2rem !important", letterSpacing: ".15px !important"}}>
                Monthly Overview
            </Typography>
          }
          action={
            <IconButton size="small">
              <EllipsisVerticalIcon />
            </IconButton>
          }
          subheader={
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: 600, color: "primary", mx: 1 }}>
                Total 48.5% growth 😎
              </Box>
              this month
            </Typography>
          }
        />

        <Grid container spacing={5} padding={2} marginTop={1}>
          {RenderStats()}
        </Grid>
      </Card>
    </>
  );
};

export default MonthlyOverview;
