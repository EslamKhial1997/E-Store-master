import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "cookies-js";
import axios from "axios";
const initialState = {
  create: false,
  isLoading: false,
  isError: false,
  tabs: 2,
  // userInfo: null,
  dialog: false,
  // extands: false,
  // target: null,
  // id: null,
  data: [],
  dataById: [],
  setGetDataByID: [],
};
const token = Cookies.get("token");
const url = "http://localhost:3000/api/v1";
export const createUsers = createAsyncThunk(
  "createUser",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await axios
      .post(`${url}/${data.api}`, data, {
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
        return thunkAPI.rejectWithValue(err.response.data.errors);
      });
    return response;
  }
);

export const getData = createAsyncThunk("getData", async (data) => {
  const response = await axios.get(`${url}/${data}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
});
export const getDataByID = createAsyncThunk("getDataByID", async (data) => {
  const response = await axios.get(`${url}/${data.title}/${data.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
});
export const editUsers = createAsyncThunk(
  "EditUsers",
  async (data, thunkAPI) => {
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
  }
);
export const deleteUsers = createAsyncThunk(
  "DeleteUsers",
  async (data, thunkAPI) => {
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
  }
);
export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  (data, params) => {
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
  }
);
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

const Store = createSlice({
  name: "user",
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

    // setUserInfo(state, action) {
    //   state.userInfo = action.payload;
    // },
    // setApiUser(state, action) {
    //   state.api = action.payload;
    // },
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
    [Auth.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [Auth.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [Auth.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [createUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [createUsers.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [createUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getData.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getDataByID.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getDataByID.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getDataByID.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [deleteUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [deleteUsers.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [deleteUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [editUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [editUsers.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [editUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [restNewPassword.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [restNewPassword.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [restNewPassword.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});
export const StoreSlice = Store.reducer;
export const {
  setOpen,
  setCreate,

  setDialog,
  setGetData,
  setGetDataByID,
  setID,
  setTaps,
} = Store.actions;
