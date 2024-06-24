import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "cookies-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initialState = {
  create: false,
  isLoading: false,
  isError: false,
  tabs: 2,

  dialog: false,
  data: null,
  dataById: [],
  setGetDataByID: [],
};
const token = Cookies.get("token");
const url = "http://localhost:3000/api/v1";
export const getLoggedData = createAsyncThunk("auth", async (data, thunkAPI) => {
  const response = await axios
    .get(`${url}/getMe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((value) => {
      console.log(value);
      return thunkAPI.fulfillWithValue(value);
    })
    .catch((err) => {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    });
  return response;
});
export const login = createAsyncThunk("auth", async (data, thunkAPI) => {
  const response = await axios
    .post(`${url}/auth/login`, data, {})
    .then((value) => {
      return thunkAPI.fulfillWithValue(value);
    })
    .catch((err) => {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    });
  return response;
});

export const getUsers = createAsyncThunk("getData", async (data) => {
  const response = await axios.get(`${url}/${data}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
});
export const getUser = createAsyncThunk("getDataByID", async (data) => {
  const response = await axios.get(`${url}/${data.title}/${data.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
});
export const editUser = createAsyncThunk("user", async (data, thunkAPI) => {
  console.log(data);
  const response = await axios
    .put(`${url}/${data.api}/${data.id}`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((value) => {
      return thunkAPI.fulfillWithValue(value);
    })
    .catch((err) => {
      return thunkAPI.rejectWithValue(
        err.response.data.errors.map((e) => e.msg)
      );
    });
  return response;
});
export const deleteUser = createAsyncThunk("user", async (data, thunkAPI) => {
  const response = await axios
    .delete(`${url}/${data.api}/${data.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((value) => {
      return thunkAPI.fulfillWithValue(value);
    })
    .catch((err) => {
      return thunkAPI.rejectWithValue(
        err.response.data.errors.map((e) => e.msg)
      );
    });
  return response;
});
export const forgotPassword = createAsyncThunk("user", (data, params) => {
  const { dispatch } = params;

  axios
    .post(`${url}/auth/forgetPassword`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    })
    .then(
      dispatch(setOpen(true)),
      dispatch(setCreate("Send Code Successfully"))
    )
    .catch(() => {
      dispatch(setOpen(true));
      dispatch(setCreate("Something went wrong"));
    });

  setTimeout(() => {
    dispatch(setOpen(false));
  }, 5000);
});
export const restCode = createAsyncThunk("restCode", (data) => {
  axios.post(`${url}/auth/restCode`, data, {
    headers: {
      Accept: "application/json, text/plain, */*",
    },
  });
});
export const restNewPassword = createAsyncThunk(
  "restNewPassword",
  async (data, thunkAPI) => {
    const response = await axios
      .put(`${url}/${data.api}`, data, {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        return thunkAPI.fulfillWithValue(value);
      })
      .catch((err) => {
        return thunkAPI.rejectWithValue(err.response.data.errors);
      });
    return response;
  }
);

const AuthController = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setOpen(state, action) {
      state.islLoading = action.payload;
    },
    setCreate(state, action) {
      state.create = action.payload;
    },
    setTaps(state, action) {
      state.tabs = action.payload;
    },
    setID(state, action) {
      state.id = action.payload;
    },

    setDialog(state, action) {
      state.dialog = action.payload;
    },
    setGetData(state, action) {
      state.getData = action.payload;
    },
    setGetDataByID(state, action) {
      state.setGetDataByID = action.payload;
    },
  },
  extraReducers: {
    [getLoggedData.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getLoggedData.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.isError = false;
      console.log(payload);
    },
    [getLoggedData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;

      state.data = payload.data;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getUser.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [deleteUser.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [editUser.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [editUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [editUser.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});
export const StoreSliceAuth = AuthController.reducer;
export const {
  setOpen,
  setCreate,

  setDialog,
  setGetData,
  setGetDataByID,
  setID,
  setTaps,
} = AuthController.actions;
