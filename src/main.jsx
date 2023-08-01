import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.jsx/Login.jsx";
import "./index.scss";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

// import NavBar from "./components/NavBar/NavBar.jsx";
// import FamilyItem from "./components/FamilyItem/FamilyItem";
// import FamilyList from "./pages/FamilyList/FamilyList";

// const families = [
//   {
//     id: "sadsadsada",
//     name: "Fernández",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: "sadsadsada",
//     name: "López",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: "sadsadsada",
//     name: "Rivas",
//   },
//   {
//     id: "sadsadsada",
//     name: "González",
//   },
//   {
//     id: "0",
//     name: "Nueva Familia",
//   },
// ];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Login />
      {/* <NavBar menuTitle={"FAMILIA FERNANDEZ"} /> */}
      {/* <FamilyList families={families} /> */}
    </Provider>
  </React.StrictMode>
);
