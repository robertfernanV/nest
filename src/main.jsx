import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import Login from "./pages/Login.jsx/Login.jsx";
import "./index.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
// import FamilyItem from "./components/FamilyItem/FamilyItem";
import FamilyList from "./pages/FamilyList/FamilyList";
import FamilyParticipants from "./pages/FamilyParticipants.jsx/FamilyParticipants";
import NewFamily from "./pages/NewFamily/NewFamily";
import BabyDetails from "./pages/BabyDetails/BabyDetails";
import CreateNewFamily from "./pages/NewFamily/CreateNewFamily";
import AddBaby from "./pages/AddBaby/AddBaby";
import AddMember from "./pages/AddMember/AddMember";
import AddBabysitter from "./pages/AddBabysitter/AddBabysitter";
import FamilyGroup from "./pages/FamilyGroup/FamilyGroup";
import EditFamily from "./pages/EditFamily/EditFamily";
import SelectBaby from "./pages/SelectBaby/SelectBaby";
import EditBaby from "./pages/EditBaby/EditBaby";
import ConfigurationMenu from "./pages/ConfigurationMenu/ConfigurationMenu";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
    {/* <NavBar menuTitle={"FLIA. FERNÁNDEZ"} /> */}
    {/* <FamilyList families={families} /> */}
    {/* <FamilyParticipants /> */}
    {/* <BabyDetails /> */}
    {/* <NewFamily /> */}
    {/* <CreateNewFamily /> */}
    {/* <AddBaby /> */}
    {/* <AddMember /> */}
    {/* <AddBabysitter /> */}
    {/* <FamilyGroup/> */}
    {/* <EditFamily/> */}
    {/* <SelectBaby/> */}
    {/* <EditBaby/> */}
    {/* <ConfigurationMenu /> */}
  </React.StrictMode>
);
