import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { UserIcon, CurrencyDollarIcon, InboxIcon, MegaphoneIcon } from "@heroicons/react/24/outline";

const kpiData = [
  { label: "Profit", value: "₹88K", icon: <CurrencyDollarIcon />, color: "#2ECC71" },
  { label: "Refunds", value: "₹12K", icon: <InboxIcon />, color: "#E74C3C" },
  { label: "New Orders", value: "1.2K", icon: <MegaphoneIcon />, color: "#3498DB" },
  { label: "Sales Queries", value: "540", icon: <UserIcon />, color: "#9B59B6" },
];

const KpiCards = () => {
  return (
    <>
      {kpiData.map((item, i) => (
        <Card key={i} sx={{ bgcolor: "#242B2E", color: "white" }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: item.color, mr: 2, width: 44, height: 44 }}>
              {item.icon}
            </Avatar>
            <Box>
              <Typography variant="body2">{item.label}</Typography>
              <Typography variant="h6">{item.value}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default KpiCards;
