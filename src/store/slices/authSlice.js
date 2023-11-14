import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  let auth = JSON.parse(localStorage.getItem("auth")) || {
    user: {
      email: "",
    },
    loading: false,
    error: null,
    auth: false,
  };
  return auth;
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState(),
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload.email;
      state.auth = true;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: {
            ...state.user,
          },
          loading: false,
          error: null,
          auth: true,
        })
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    cleanState: () => {
      return {
        user: {
          email: "",
        },
        loading: false,
        error: null,
        auth: false,
      };
    },
  },
});

export const { setUser, setLoading, setError, cleanState } = authSlice.actions;
export default authSlice.reducer;
