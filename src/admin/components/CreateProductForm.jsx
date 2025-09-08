import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../state/Product/Action";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const initialState = {
  imageUrl: "",
  brand: "",
  title: "",
  color: "",
  discountedPrice: "",
  price: "",
  discountedPercent: "",
  size: initialSizes,
  quantity: "",
  topLevelCategory: "",
  secondLevelCategory: "",
  thirdLevelCategory: "",
  description: "",
};

const CreateProductForm = () => {
  const [productData, setProductData] = useState(initialState);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size-quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ data: productData }));
    console.log(productData);
  };

  return (
    <>
      <div className="flex flex-col p-10">
        <Typography variant="h3" sx={{ textAlign: "center", mb: 3 }}>
          Add New Product
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="createProductContainer min-h-screen"
        >
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Image Url"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Brand"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={productData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={productData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 6, sm: 4 }}>
              <FormControl fullWidth>
                <InputLabel> Top Level Category </InputLabel>
                <Select
                  name="topLevelCategory"
                  value={productData.topLevelCategory}
                  onChange={handleChange}
                  label="Top Level Category"
                >
                  <MenuItem value="men">Men</MenuItem>
                  <MenuItem value="women">Women</MenuItem>
                  <MenuItem value="kids">Kids</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={{ xs: 6, sm: 4 }}>
              <FormControl fullWidth>
                <InputLabel> Second Level Category </InputLabel>
                <Select
                  name="secondLevelCategory"
                  value={productData.secondLevelCategory}
                  onChange={handleChange}
                  label="Top Level Category"
                >
                  <MenuItem value="clothing">Clothing</MenuItem>
                  <MenuItem value="accessories">Accessories</MenuItem>
                  <MenuItem value="brands">Brands</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={{ xs: 6, sm: 4 }}>
              <FormControl fullWidth>
                <InputLabel> Third Level Category </InputLabel>
                <Select
                  name="thirdLevelCategory"
                  value={productData.thirdLevelCategory}
                  onChange={handleChange}
                  label="Top Level Category"
                >
                  <MenuItem value="top">Top</MenuItem>
                  <MenuItem value="women_dress">Women Dress</MenuItem>
                  <MenuItem value="t-shirts">T-Shirts</MenuItem>
                  <MenuItem value="saree">Saree</MenuItem>
                  <MenuItem value="lengha_choli">Lengha Choli</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                multiline
                name="description"
                rows={3}
                onChange={handleChange}
                value={productData.description}
              />
            </Grid>
            {productData?.size?.map((elem, i) => (
              <>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Size Name"
                    name="name"
                    value={elem.name}
                    onChange={(e) => handleSizeChange(e, i)}
                    required
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Quantity"
                    name="size-quantity"
                    type="number"
                    value={elem.quantity}
                    onChange={(e) => handleSizeChange(e, i)}
                    required
                    fullWidth
                  />
                </Grid>
              </>
            ))}

            <Grid item size={{ xs: 12 }}>
              <Button
                variant="contained"
                sx={{ p: 1.8 }}
                className="py-20"
                size="large"
                type="submit"
              >
                Add New Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default CreateProductForm;
