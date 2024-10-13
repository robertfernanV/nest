import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Face3OutlinedIcon from "@mui/icons-material/Face3Outlined";
import "./Menu.scss";
import { useNavigate } from "react-router-dom";
import Firebase from "../../firebase/firebaseConfig";
import { cleanState } from "../../store/slices/authSlice";
import { clearState } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

import { Box, Drawer, Typography, Switch, Grid } from "@mui/material";

const Menu = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [activateRoutes, setActivateRoutes] = useState({
  const [activateRoutes] = useState({
    babyDetailRoute: "#00000040",
    taskListRoute: "#00000040",
    galeryRoute: "#00000040",
    calendarRoute: "#00000040",
    babySisterRouter: "#00000040",
  });
  useEffect(() => {
    // if (
    //   location.pathname == "/familyParticipants" ||
    //   location.pathname == "/babyDetails"
    // ) {
    //   setActivateRoutes({ ...activateRoutes, babyDetailRoute: "#FFFFFF" });
    // } else if (location.pathname == "/galery") {
    //   setActivateRoutes({ ...activateRoutes, galeryRoute: "#FFFFFF" });
    // } else if (location.pathname == "/taskList") {
    //   setActivateRoutes({ ...activateRoutes, taskListRoute: "#FFFFFF" });
    // } else if (location.pathname == "/calendar") {
    //   setActivateRoutes({ ...activateRoutes, calendarRoute: "#FFFFFF" });
    // } else if (location.pathname == "/babySister") {
    //   setActivateRoutes({ ...activateRoutes, babySisterRouter: "#FFFFFF" });
    // }
    // console.log(location.pathname);
  }, []);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className="Bar__bottom">
        {/* <Grid margin={'auto'} container spacing={2} textAlign={'center'} display={'flex'}> */}
        <div className="Menu__div">
          <Link className="Menu__items" to={"/familyParticipants"}>
            <Diversity1OutlinedIcon
              sx={{ color: activateRoutes?.babyDetailRoute, fontSize: "2rem" }}
            />
          </Link>
          <Link className="Menu__items" to={"/taskList"}>
            <AssignmentOutlinedIcon
              sx={{ color: activateRoutes?.taskListRoute, fontSize: "2rem" }}
            />
          </Link>
          <Link className="Menu__items" to={"/galery"}>
            <PhotoLibraryOutlinedIcon
              sx={{ color: activateRoutes?.galeryRoute, fontSize: "2rem" }}
            />
          </Link>
          <Link className="Menu__items" to={"/calendar"}>
            <CalendarMonthOutlinedIcon
              sx={{ color: activateRoutes?.calendarRoute, fontSize: "2rem" }}
            />
          </Link>
          <Link className="Menu__items" to={"/babySister"}>
            <Face3OutlinedIcon
              sx={{ color: activateRoutes?.babySisterRouter, fontSize: "2rem" }}
            />
          </Link>
        </div>
      </div>

      {/* </Grid> */}

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          bgcolor={"#E67E22"}
          height={"100%"}
          width={"250px"}
          textAlign={"center"}
          role="presentation"
        >
          {/* CUIDADORA */}
          <Box
            marginTop={"2rem"}
            display={"flex"}
            justifyContent={"space-between"}
            fontFamily={"Happy_Monkey"}
          >
            <Typography
              color={"white"}
              variant="h6"
              component={"div"}
              fontFamily={"Happy_Monkey"}
            >
              Cuidador
            </Typography>
            <div>
              <label className="labelDrawer" htmlFor="">
                Si
              </label>
              <Switch defaultChecked="checked" background="#FB9825" />
              <label className="labelDrawer" htmlFor="">
                No
              </label>
            </div>
          </Box>

          {/* PERFIL DE FAMILIA */}
          <Box
            marginTop={"5px"}
            display={"flex"}
            justifyContent={"space-between"}
            fontFamily={"Happy_Monkey"}
          >
            <Typography
              color={"white"}
              variant="h6"
              component={"div"}
              fontFamily={"Happy_Monkey"}
            >
              Perfil de Familia
            </Typography>
          </Box>

          {/* GRUPOS FAMILIARES */}
          <Box
            marginTop={"10px"}
            marginBottom={"1rem"}
            display={"flex"}
            justifyContent={"space-between"}
            fontFamily={"Happy_Monkey"}
          >
            <Typography
              color={"white"}
              variant="h6"
              component={"div"}
              fontFamily={"Happy_Monkey"}
            >
              Grupos Familiares
            </Typography>
            <EditIcon
              sx={{
                color: "white",
              }}
            />
          </Box>
          <Grid
            width={"100%"}
            display={"flex"}
            paddingBottom={"2rem"}
            borderBottom={"2px solid #FFFFFF"}
          >
            <button className="btnFamily__Drawer">
              <img
                className="imgFamily__Drawer"
                width={"50px"}
                height={"50px"}
                src="https://img.freepik.com/foto-gratis/familia-feliz-tiro-medio-interior_23-2148880377.jpg?w=1060&t=st=1693186543~exp=1693187143~hmac=6cea789444504aafd951c422ab238825d0f590481fa25e90cfeadb775e427ada"
                alt=""
              />
            </button>

            <button className="btnFamily__Drawer">
              <img
                className="imgFamily__Drawer"
                width={"50px"}
                height={"50px"}
                src="https://img.freepik.com/foto-gratis/familia-feliz-tiro-medio-interior_23-2148880377.jpg?w=1060&t=st=1693186543~exp=1693187143~hmac=6cea789444504aafd951c422ab238825d0f590481fa25e90cfeadb775e427ada"
                alt=""
              />
            </button>
            <button className="btnFamily__Drawer">
              <img
                className="imgFamily__Drawer"
                width={"50px"}
                height={"50px"}
                src="https://img.freepik.com/foto-gratis/familia-feliz-tiro-medio-interior_23-2148880377.jpg?w=1060&t=st=1693186543~exp=1693187143~hmac=6cea789444504aafd951c422ab238825d0f590481fa25e90cfeadb775e427ada"
                alt=""
              />
            </button>

            <button className="btnFamily__Drawer">
              <AddIcon
                sx={{
                  padding: "1rem",
                  color: "#FB9825",
                  textAlign: "center",
                  background: "white",
                }}
              />
            </button>
          </Grid>
          {/* CUENTA DE USUARIO */}
          <Box
            display={"flex"}
            marginTop={"1rem"}
            paddingBottom={"1rem"}
            borderBottom={"2px solid #FFFFFF"}
          >
            <PersonOutlineIcon
              sx={{
                color: "white",
                marginY: "auto",
                marginX: "5px",
              }}
            />
            <Link style={{ textDecoration: "none" }} to={"/userAccount"}>
              <Typography
                color={"white"}
                variant="h6"
                component={"div"}
                fontFamily={"Happy_Monkey"}
              >
                Cuenta de Usuario
              </Typography>
            </Link>
          </Box>

          {/* CONFIGURACION */}
          <Box display={"flex"} marginTop={"1rem"} paddingBottom={"1rem"}>
            <SettingsIcon
              sx={{
                color: "white",
                marginY: "auto",
                marginX: "5px",
              }}
            />
            <Link style={{ textDecoration: "none" }} to={"/configuration"}>
              <Typography
                color={"white"}
                variant="h6"
                component={"div"}
                fontFamily={"Happy_Monkey"}
              >
                Configuracion
              </Typography>
            </Link>
          </Box>

          {/* CERRAR SESION */}
          <Box
            sx={{
              position: "fixed",
              bottom: "0",
              width: "68%",
              height: "50px",
            }}
          >
            <div
              style={{ textDecoration: "none" }}
              className="no-underline btnFamily__Drawer"
              onClick={() => {
                console.log("aaaaa");
                Firebase.logout()
                  .then(() => {
                    console.log("JHERE2");
                    localStorage.clear();
                    localStorage.setItem("onboarding", true);
                    dispatch(cleanState());
                    dispatch(clearState());
                    navigate("/login");
                  })
                  .catch(() => console.log("eeeeee"));
              }}
            >
              <Typography
                color={"white"}
                variant="h6"
                component={"div"}
                fontFamily={"Happy_Monkey"}
              >
                Cerrar Sesion
              </Typography>
            </div>
          </Box>
        </Box>
      </Drawer>

      <Box
        sx={{ marginBottom: "4rem", border: "none", boxShadow: "none" }}
      ></Box>
    </>
  );
};
export default Menu;
