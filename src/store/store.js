import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import childrenReducer from "./slices/childrenSlice";
import actionReducer from "./slices/actionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    children: childrenReducer,
    action: actionReducer,
  },
});
