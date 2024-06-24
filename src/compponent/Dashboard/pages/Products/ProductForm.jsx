import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { createUsers, editUsers, getData, setDialog } from "../../../Store/store";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { colors } from "@mui/material";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const ProductForm =(id)=> {
  const initState = {
    title: "",
    description: "",
    price: "",
    discount: "",
    quantity: "",
    priceAfterDiscount: "",
    ratting: 3.5,
    rattingQuantity: "",
    api: "products",
    id: null,

    color: [],
    images: undefined,
    imageCover: [],
    category: undefined,
    subCategory: undefined,
    brand: undefined,
  };
  const [State, setState] = React.useState(initState);
  const [image, setimage] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [categoryID, setCategoryID] = React.useState([]);
  const [subCategoryID, setsubCategoryID] = React.useState([]);
  const [BrandsID, setBrandsID] = React.useState([]);
  const [cover, setCover] = React.useState("");
  const fixedOptions = [{ title: "Color", year: 1994 }];
  const [value, setValue] = React.useState([]);
  const selector = useSelector((state) => state.StoreSlice);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setDialog(false));
  };
  const handleChange = (e) => {
    const newData = { ...State };
    newData[e.target.name] = e.target.value;
    setState(newData);
  };
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", State.title);
    data.append("description", State.description);
    data.append("price", State.price);
    data.append("imageCover", cover);
    data.append("priceAfterDiscount", State.priceAfterDiscount);
    data.append("discount", State.discount);
    data.append("ratting", State.ratting);
    data.append("quantity", State.quantity);
    data.append("rattingQuantity", State.rattingQuantity);
    data.append("category", categoryID.id);
    data.append("subCategory", subCategoryID.id);
    data.append("brand", BrandsID.id);

    data.append("api", State.api);

    for (let index = 0; index < image.length; index++) {
      data.append("images", image[index]);
    }
    for (let index = 0; index < value.length; index++) {
      data.append("colors", value[index]);
    }
    dispatch(createUsers(data));
  };

  const buttonData = (data) => {
    axios
      .get(`http://localhost:8008/api/v1/${data}`)
      .then((e) => {
        setCategoryData(e.data.data);
      })
      .catch((err) => {});
  };
  // useEffect(() => {
  //   dispatch(getData({ title: "products" }));
  // }, []);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={selector.dialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {id === null || id === undefined || id === ""
            ? "Create Category"
            : "Edit Category"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="p-lg-3">
          <form
            className="container flex-wrap justify-content-center "
            onSubmit={submit}
          >
            <div className="d-flex flex-wrap align-items-center justify-content-between  mt-2">
              {" "}
              <div className="col-4 p-1">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className=" p-2 w-100 border rounded"
                  placeholder="Product title"
                  onChange={(e) => handleChange(e)}
                  name="title"
                  value={State.title}
                />
              </div>
              <div className="col-7">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className=" p-2 w-100 border rounded"
                  placeholder="Description"
                  onChange={(e) => handleChange(e)}
                  name="description"
                  value={State.description}
                />
              </div>
              <div className="col-4 p-1">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className="w-100 p-2  border rounded"
                  placeholder="Price"
                  onChange={(e) => handleChange(e)}
                  name="price"
                  value={State.price}
                />
              </div>
              <div className="col-4 p-1">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className="w-100 p-2  border rounded"
                  placeholder="Discount"
                  onChange={(e) => handleChange(e)}
                  name="discount"
                  value={State.discount}
                />
              </div>
              <div className="col-4 p-1">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className="w-100 p-2  border rounded"
                  placeholder="Quantity"
                  onChange={(e) => handleChange(e)}
                  name="quantity"
                  value={State.quantity}
                />
              </div>
              <div className="col-4 p-1">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className="w-100 p-2  border rounded"
                  placeholder="Price After Discount"
                  onChange={(e) => handleChange(e)}
                  name="priceAfterDiscount"
                  value={State.priceAfterDiscount}
                />
              </div>
              <div className="col-4 p-1">
                <Stack spacing={1}>
                  <Rating
                    name="ratting"
                    value={State.ratting}
                    precision={0.5}
                    onChange={(e) => handleChange(e)}
                  />
                </Stack>
              </div>
              <div className="col-4 p-1">
                {" "}
                <input
                  type="text"
                  id="form12"
                  className="w-100 p-2  border rounded"
                  placeholder="Ratting Quantity"
                  onChange={(e) => handleChange(e)}
                  name="rattingQuantity"
                  value={State.rattingQuantity}
                />
              </div>
              <div className="d-flex justify-content-between my-2 col-12">
                {" "}
                <div className="col-4 p-1">
                  <Autocomplete
                    className="p-0 w-100"
                    multiple
                    id="fixed-tags-demo"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue([
                        ...newValue.filter(
                          (option) => fixedOptions.indexOf(option) === -1
                        ),
                      ]);
                    }}
                    options={["red", "green", "blue"]}
                    getOptionLabel={(option) => option}
                    renderTags={(tagValue) =>
                      tagValue.map((option) => (
                        <Chip
                          className="p-0 m-1"
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 50,
                            backgroundColor: option,
                          }}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Color"
                        className="p-0"
                      />
                    )}
                  />
                </div>{" "}
                <div className="col-4 p-1">
                  <Button
                    className="w-100 h-100"
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    href="#file-upload"
                  >
                    Image
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => setimage(e.target.files)}
                      multiple
                      name="images"
                    />
                  </Button>
                </div>
                <div className="col-4 p-1">
                  {" "}
                  <Button
                    className="w-100 h-100"
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    href="#file-upload"
                  >
                    Cover
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => {
                        setCover(e.target.files[0]);
                      }}
                    />
                  </Button>
                </div>
              </div>
              <div className="col-4 p-1">
                <Autocomplete
                  className="p-0 w-100"
                  id="fixed-tags-demo"
                  // value={categoryID.length >0 ? categoryID[0].title :""}

                  onChange={(event, newValue) => {
                    setCategoryID(newValue);
                  }}
                  options={categoryData.map((e) => ({
                    title: e.name,
                    id: e._id,
                  }))}
                  getOptionLabel={(option) => option.title}
                  renderTags={(tagValue) =>
                    tagValue.map((option) => (
                      <Chip
                        className="p-0 m-1"
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 50,
                          backgroundColor: option,
                        }}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Categories"
                      className="p-0"
                      onClick={() => {
                        buttonData("categories");
                      }}
                    />
                  )}
                />
              </div>
              <div className="col-4 p-1">
                <Autocomplete
                  className="p-0 w-100"
                  id="fixed-tags-demo"
                  // value={subCategoryID.map((e) => e.title)}
                  onChange={(event, newValue) => {
                    setsubCategoryID(newValue);
                  }}
                  options={categoryData.map((e) => ({
                    title: e.name,
                    id: e._id,
                  }))}
                  getOptionLabel={(option) => option.title}
                  renderTags={(tagValue) =>
                    tagValue.map((option, inx) => (
                      <Chip
                        className="p-0 m-1"
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 50,
                          backgroundColor: option,
                          key: inx,
                        }}
                      />
                    ))
                  }
                  renderInput={(params, inx) => (
                    <TextField
                      {...params}
                      placeholder="SubCategories"
                      className="p-0"
                      key={inx}
                      onClick={() => {
                        buttonData("Subcategories");
                      }}
                    />
                  )}
                />
              </div>
              <div className="col-4 p-1">
                <Autocomplete
                  className="p-0 w-100"
                  id="fixed-tags-demo"
                  onChange={(event, newValue) => {
                    setBrandsID(newValue);
                  }}
                  options={categoryData.map((e) => ({
                    title: e.name,
                    id: e._id,
                  }))}
                  getOptionLabel={(option) => option.title}
                  renderTags={(tagValue) =>
                    tagValue.map((option) => (
                      <Chip
                        className="p-0 m-1"
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 50,
                          backgroundColor: option,
                        }}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Brands"
                      className="p-0"
                      onClick={() => {
                        buttonData("brands");
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-sm m-2" type="submit">
              Save changes
            </button>
          </form>
        </div>
      </BootstrapDialog>
    </div>
  );
}

export default ProductForm