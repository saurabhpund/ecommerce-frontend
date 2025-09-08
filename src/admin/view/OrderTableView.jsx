import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import {
  getOrders,
  confirmOrder,
  shipOrder,
  deliveryOrder,
  deleteOrder,
} from "../../state/Admin/Order/Action";

const orderStatusStyles = {
  PENDING: { bg: "#FFF8DC", color: "#b58900" },
  CONFIRMED: { bg: "#E0F7FA", color: "#00796B" },
  SHIPPED: { bg: "#FFE0B2", color: "#E65100" },
  DELIVERED: { bg: "#C8E6C9", color: "#2E7D32" },
};

const OrderTableView = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.shipped,
    adminOrder.placed,
    adminOrder.confirmed,
    adminOrder.delivered,
    adminOrder.deletedOrder,
  ]);

  const handleMenuOpen = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleStatusChange = (status) => {
    switch (status) {
      case "CONFIRMED":
        dispatch(confirmOrder(selectedOrderId));
        break;
      case "SHIPPED":
        dispatch(shipOrder(selectedOrderId));
        break;
      case "DELIVERED":
        dispatch(deliveryOrder(selectedOrderId));
        break;
      default:
        break;
    }
    handleMenuClose();
  };

  const openDeleteDialog = (orderId) => {
    setOrderToDelete(orderId);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setOrderToDelete(null);
  };

  const confirmDelete = () => {
    dispatch(deleteOrder(orderToDelete));
    closeDeleteDialog();
  };

  return (
    <div className="w-full p-5">
      <Card>
        <CardHeader sx={{ textAlign: "center" }} title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Orders Table">
            <TableHead>
              <TableRow>
                <TableCell>Images</TableCell>
                <TableCell>Title</TableCell>
                <TableCell align="center">Total Items</TableCell>
                <TableCell align="center">Total Price</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <AvatarGroup max={2}>
                      {order.orderItem.map((item, index) => (
                        <Avatar
                          key={index}
                          src={item.product.imageUrl}
                          alt="product"
                        />
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell>
                    <Typography variant="subtitle1">
                      {order.orderItem
                        .map((item) => item.product.title)
                        .join(", ")}
                    </Typography>
                  </TableCell>

                  <TableCell align="center">{order.totalItem}</TableCell>
                  <TableCell align="center">₹{order.totalPrice}</TableCell>

                  <TableCell align="center">
                    <Box
                      sx={{
                        bgcolor:
                          orderStatusStyles[order.orderStatus]?.bg || "#eee",
                        color:
                          orderStatusStyles[order.orderStatus]?.color || "#000",
                        px: 2,
                        py: 0.5,
                        borderRadius: "20px",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        display: "inline-block",
                        minWidth: "100px",
                        textAlign: "center",
                        textTransform: "capitalize",
                      }}
                    >
                      {order.orderStatus}
                    </Box>
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      onClick={(e) => handleMenuOpen(e, order.id)}
                    >
                      Update
                    </Button>
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => openDeleteDialog(order.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Status Update Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleStatusChange("CONFIRMED")}>
            Confirm Order
          </MenuItem>
          <MenuItem onClick={() => handleStatusChange("SHIPPED")}>
            Mark as Shipped
          </MenuItem>
          <MenuItem onClick={() => handleStatusChange("DELIVERED")}>
            Mark as Delivered
          </MenuItem>
        </Menu>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={closeDeleteDialog}
        >
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this order? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDeleteDialog} variant="outlined">
              Cancel
            </Button>
            <Button onClick={confirmDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </div>
  );
};

export default OrderTableView;
