import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx/Login";
import FamilyList from "./pages/FamilyList/FamilyList";
import FamilyParticipants from "./pages/FamilyParticipants.jsx/FamilyParticipants";
import BabyDetails from "./pages/BabyDetails/BabyDetails";
import ConfigurationMenu from "./pages/ConfigurationMenu/ConfigurationMenu";
import UserAccount from "./pages/UserAccount/UserAccount";
import NewFamily from "./pages/NewFamily/NewFamily";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import AddAction from "./pages/AddAction/AddAction";
import FamilyChat from "./pages/FamilyChat/FamilyChat";
import TaskList from "./pages/TaskList/TaskList";
import BabySister from "./pages/BabySister/BabySister";
import Galery from "./pages/Galery/Galery";
import TaskHistory from "./pages/TaskList/TaskHistory";
import NewExtraTask from "./pages/TaskList/NewExtraTask";
import NewTask from "./pages/TaskList/NewTask";
import EditTask from "./pages/TaskList/EditTask";
import Calendar from "./pages/Calendar/Calendar";
import Notifications from "./pages/Notifications/Notifications";
import FamilyGroup from "./pages/FamilyGroup/FamilyGroup";
import EditFamily from "./pages/EditFamily/EditFamily";
import SelectBaby from "./pages/SelectBaby/SelectBaby";
import SelectBabySister from "./pages/SelectBabySister/SelectBabySister";
import EditBaby from "./pages/EditBaby/EditBaby";
import CreateNewFamily from "./pages/NewFamily/CreateNewFamily";
import AddBaby from "./pages/AddBaby/AddBaby";
import AddBabysitter from "./pages/AddBabysitter/AddBabysitter";
import AddMember from "./pages/AddMember/AddMember";
import Acuerdos from "./pages/BabySister/Acuerdos";
import AcuerdosEstablecidos from "./pages/BabySister/AcuerdosEstablecidos";
import CronogramaDeTrabajo from "./pages/BabySister/CronogramaDeTrabajo";
import SueldoYPago from "./pages/BabySister/SueldoYPago";
import Funciones from "./pages/BabySister/Funciones";
import Onboarding_options from "./pages/Onboarding/Onboarding_options";
import Onboarding_1 from "./pages/Onboarding/Onboarding_1";
import Onboarding_2 from "./pages/Onboarding/Onboarding_2";
import Onboarding_3 from "./pages/Onboarding/Onboarding_3";
import Onboarding_4 from "./pages/Onboarding/Onboarding_4";
import Onboarding_5 from "./pages/Onboarding/Onboarding_5";
import Onboarding_finish from "./pages/Onboarding/Onboarding_finish";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import NuevaHoraExtra from "./pages/Calendar/NuevaHoraExtra";
import NuevoEvento from "./pages/Calendar/NuevoEvento";

const FirstRoute = () => {
  const [readyOnboarding] = useState(localStorage.getItem("onboarding"));

  return (
    <>
      {readyOnboarding ? (
        <Navigate to="/login" />
      ) : (
        <Navigate to="/onboardingIntro" />
      )}
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstRoute />} />

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
          <Route exact path="/login" element={<Login />} />
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
          <Route exact path="/configuration" element={<ConfigurationMenu />} />
          <Route
            exact
            path="/babyDetails"
            element={
              <>
                <BabyDetails />
              </>
            }
          />
          <Route exact path="/galery" element={<Galery />} />
          <Route exact path="/taskList" element={<TaskList />} />
          <Route exact path="/taskHistory" element={<TaskHistory />} />
          <Route exact path="/newExtraTask" element={<NewExtraTask />} />
          <Route exact path="/newTask" element={<NewTask />} />
          <Route exact path="/editTask" element={<EditTask />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/babySister" element={<BabySister />} />
          <Route exact path="/familyChat" element={<FamilyChat />} />
          <Route exact path="/notifications" element={<Notifications />} />
          <Route exact path="/userAccount" element={<UserAccount />} />
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
          <Route exact path="/familyGroup" element={<FamilyGroup />} />
          <Route exact path="/editFamily" element={<EditFamily />} />
          <Route exact path="/selectBaby" element={<SelectBaby />} />
          <Route
            exact
            path="/selectBabySister/:babySisterId"
            element={<SelectBabySister />}
          />
          <Route exact path="/editBaby/:babyId" element={<EditBaby />} />
          <Route exact path="/createNewFamily" element={<CreateNewFamily />} />
          <Route exact path="/addBaby" element={<AddBaby />} />
          <Route exact path="/addBabySister" element={<AddBabysitter />} />
          <Route exact path="/addMember" element={<AddMember />} />
          <Route exact path="/addAction/:actionId" element={<AddAction />} />
          <Route exact path="/babySisterAcuerdos" element={<Acuerdos />} />
          <Route
            exact
            path="/acuerdosEstablecidos"
            element={<AcuerdosEstablecidos />}
          />
          <Route
            exact
            path="/cronogramaDeTrabajo"
            element={<CronogramaDeTrabajo />}
          />
          <Route exact path="/sueldoYPago" element={<SueldoYPago />} />
          <Route exact path="/funciones" element={<Funciones />} />
          <Route exact path="/newOvertime" element={<NuevaHoraExtra />} />
          <Route exact path="/newEvent" element={<NuevoEvento />} />

          <Route
            exact
            path="/onboardingIntro"
            element={<Onboarding_options />}
          />
          <Route exact path="/onboarding_1" element={<Onboarding_1 />} />
          <Route exact path="/onboarding_2" element={<Onboarding_2 />} />
          <Route exact path="/onboarding_3" element={<Onboarding_3 />} />
          <Route exact path="/onboarding_4" element={<Onboarding_4 />} />
          <Route exact path="/onboarding_5" element={<Onboarding_5 />} />
          <Route
            exact
            path="/onboardingFinish"
            element={<Onboarding_finish />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
