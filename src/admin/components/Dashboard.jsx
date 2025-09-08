import { Box } from "@mui/material";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import WeeklyOverview from "./WeeklyOverview";
import TotalEarning from "./TotalEarning";
import KpiCards from "./KpiCards";
import OrderPreview from "./OrderPreview";

const Dashboard = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)", // 8 columns
          gridTemplateRows: "repeat(6, 1fr)", // 6 equal height rows
          gap: 2,
          width: "100%",
          p: 3,
          overflowY: "auto", // allows scroll if content exceeds screen
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* C1: Achievement */}
        <Box sx={{ gridColumn: "span 2", gridRow: "span 2", height: "100%" }}>
          <Achievement />
        </Box>

        {/* C2: Monthly Overview */}
        <Box sx={{ gridColumn: "span 6", gridRow: "span 2", height: "100%" }}>
          <MonthlyOverview />
        </Box>

        {/* C3: Weekly Overview */}
        <Box
          sx={{ gridColumn: "span 2", gridRow: "3 / span 4", height: "100%" }}
        >
          <WeeklyOverview />
        </Box>

        {/* C4: Total Earning */}
        <Box
          sx={{ gridColumn: "span 2", gridRow: "3 / span 4", height: "100%" }}
        >
          <TotalEarning />
        </Box>

        {/* C5: KPI Cards (2x2 grid) */}
        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "3 / span 4",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 2,
            height: "100%",
          }}
        >
          <KpiCards />
        </Box>

        {/* Optional: Full-width Order Preview (bottom section) */}
        <Box sx={{ gridColumn: "1 / -1", mt: 3 }}>
          <OrderPreview />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
