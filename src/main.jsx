import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "./index.scss";
import Firebase from "./firebase/firebaseConfig";

Firebase.getInstance().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
