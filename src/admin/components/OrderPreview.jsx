import React from "react";
import { Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from "@mui/material";

const orders = [
  {
    title: "Nike Air Max",
    price: "₹9,999",
    image: "https://via.placeholder.com/40",
  },
  {
    title: "Adidas Ultraboost",
    price: "₹7,899",
    image: "https://via.placeholder.com/40",
  },
];

const OrderPreview = () => {
  return (
    <Card sx={{ bgcolor: "#242B2E", color: "white" }}>
      <CardContent>
        <Typography variant="h6">Recent Orders</Typography>
        <List>
          {orders.map((order, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar src={order.image} />
              </ListItemAvatar>
              <ListItemText primary={order.title} secondary={order.price} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default OrderPreview;
