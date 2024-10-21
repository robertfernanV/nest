import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import childrenReducer from "./slices/childrenSlice";
import actionReducer from "./slices/actionSlice";
import firestoreMiddleware from "./middlewares/firestoreMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    children: childrenReducer,
    action: actionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firestoreMiddleware),
});

// Inicializar la aplicación con una acción personalizada
store.dispatch({ type: "APP/INITIALIZE" });
