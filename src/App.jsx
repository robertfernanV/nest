// import "./App.css";
import Button from "@mui/material/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx/Login";
import FamilyList from "./pages/FamilyList/FamilyList";
import FamilyParticipants from "./pages/FamilyParticipants.jsx/FamilyParticipants";
import BabyDetails from "./pages/BabyDetails/BabyDetails";
import ConfigurationMenu from "./pages/ConfigurationMenu/ConfigurationMenu";
import UserAccount from "./pages/UserAccount/UserAccount";

function App() {
  const families = [
    {
      id: "sadsadsada",
      name: "Fernández",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "sadsadsada",
      name: "López",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "sadsadsada",
      name: "Rivas",
    },
    {
      id: "sadsadsada",
      name: "González",
    },
    {
      id: "0",
      name: "Nueva Familia",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/familyList"
            element={<FamilyList families={families} />}
          />
          <Route exact path="/familyParticipants" element={<FamilyParticipants />} />
          <Route exact path="/configuration" element={<ConfigurationMenu />} />
          <Route exact path="/babyDetails" element={<BabyDetails />} />

        </Routes>
        {/* <Button variant="contained">Hello World</Button> */}
      </BrowserRouter>
    </>
  );
}

export default App;
