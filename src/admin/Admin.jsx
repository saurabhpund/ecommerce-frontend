import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import {
  ChartBarIcon,
  InboxIcon,
  UsersIcon,
  MegaphoneIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductTable from "./components/ProductTable";
import OrderTable from "./components/OrderTable";
import CustomerTable from "./components/CustomerTable";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <ChartBarIcon className="h-5 w-5" />,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: <InboxIcon className="h-5 w-5" />,
  },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: <MegaphoneIcon className="h-5 w-5" />,
  },
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <PlusCircleIcon className="h-5 w-5" />,
  },
];

const drawerWidth = 240;

const Admin = () => {
  const isLargerScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full h-full">
        <CustomDrawer isLargerScreen={isLargerScreen} navigate={navigate} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product/create" element={<CreateProductForm />} />
            <Route path="/products" element={<ProductTable />} />
            <Route path="/orders" element={<OrderTable />} />
            <Route path="/customers" element={<CustomerTable />} />
          </Routes>
      </div>
    </>
  );
};

const CustomDrawer = ({ isLargerScreen, navigate }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant={isLargerScreen ? "permanent" : "temporary"}
        open={isLargerScreen ? true : undefined}
        onClose={() => {}}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex", // Enable flex layout
            flexDirection: "column", // Vertical direction
            justifyContent: "space-between", // Space between top and bottom
          },
        }}
      >
        <Box>
          <Toolbar />
          <List>
            {menu.map((item, i) => (
              <ListItem
                key={i}
                disablePadding
                onClick={() => navigate(item.path)}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Bottom section for Account */}
        <Box>
          <List>
            <ListItem disablePadding onClick={() => navigate("/account")}>
              <ListItemButton>
                <ListItemIcon>
                  <UserIcon className="h-5 w-5" />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Admin;
