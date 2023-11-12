import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx/Login";
import FamilyList from "./pages/FamilyList/FamilyList";
import FamilyParticipants from "./pages/FamilyParticipants.jsx/FamilyParticipants";
import BabyDetails from "./pages/BabyDetails/BabyDetails";
import ConfigurationMenu from "./pages/ConfigurationMenu/ConfigurationMenu";
// import UserAccount from "./pages/UserAccount/UserAccount";
import NewFamily from "./pages/NewFamily/NewFamily";
import CreateNewFamily from "./pages/NewFamily/CreateNewFamily";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import AddAction from "./pages/AddAction/AddAction";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <></>
          <Route
            exact
            path="/familyList"
            element={
              <>
                <NavBar menuTitle={"NEST"} backgroundProp={"white"} />
                <FamilyList />
              </>
            }
          />
          <Route
            exact
            path="/familyParticipants/:id"
            element={
              <>
                <NavBar
                  menuTitle={"FMLIA. Fernández"}
                  backgroundProp={"white"}
                />
                <FamilyParticipants />
                <Menu />
              </>
            }
          />
          <Route
            exact
            path="/newFamily"
            element={
              <>
                <NavBar
                  menuTitle={"FMLIA. Fernández"}
                  backgroundProp={"white"}
                />
                <NewFamily />
                <Menu />
              </>
            }
          />
          <Route
            exact
            path="/familyParticipants"
            element={
              <>
                <NavBar
                  menuTitle={"FMLIA. Fernández"}
                  backgroundProp={"white"}
                />
                <FamilyParticipants />
                <Menu />
              </>
            }
          />
          <Route
            exact
            path="/babyDetails"
            element={
              <>
                <BabyDetails />
              </>
            }
          />
          <Route exact path="/addAction/:actionId" element={<AddAction />} />
          <Route exact path="/createNewFamily" element={<CreateNewFamily />} />
          <Route exact path="/configuration" element={<ConfigurationMenu />} />
          <Route exact path="/babyDetails" element={<BabyDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
