import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.jsx/Login.jsx";
import "./index.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import FamilyItem from "./components/FamilyItem/FamilyItem";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    {/* <NavBar menuTitle={"FAMILIA FERNANDEZ"} />
    <FamilyItem
      family={{
        id: "sadsadsada",
        name: "Fernández",
        image: "https://picsum.photos/200/300",
      }}
    />
    <FamilyItem
      family={{
        id: "sadsadsada",
        name: "López",
        image: "https://picsum.photos/200/300",
      }}
    />
    <FamilyItem
      family={{
        id: "sadsadsada",
        name: "Rivas",
      }}
    />
    <FamilyItem
      family={{
        id: "0",
        name: "Nueva Familia",
      }}
    /> */}
  </React.StrictMode>
);
