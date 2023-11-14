import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ForumIcon from "@mui/icons-material/Forum";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import logoHome from "../../assets/logohome.png";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "./NavBar.scss";
import { cleanState } from "../../store/slices/authSlice";
import { clearState } from "../../store/slices/userSlice";

import { Avatar, Box, Drawer, Typography, Switch, Grid } from "@mui/material";
import Firebase from "../../firebase/firebaseConfig";
import { useDispatch } from "react-redux";

const NavBar = ({ menuTitle, backgroundProp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddFamily = () => {
    navigate("/newFamily");
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: backgroundProp, boxShadow: "none" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to={"/familyList"} sx={{ p: 0, backgroundColor: "white" }}>
              <Avatar src={logoHome} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, color: "black" }}>
            <h4 className="menuTitle">{menuTitle ?? "NEST"}</h4>
          </Box>
          {/* MY MESSAGES */}
          <button className="moreBtn">
            <Link to={"/familyChat"}>
              <ForumIcon
                sx={{
                  color: "gray",
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </Link>
          </button>

          {/* NOTIFICATIONS */}
          <button className="moreBtn">
            <Link to={"/notifications"}>
              <NotificationsIcon
                sx={{
                  color: "gray",
                  width: "30px",
                  height: "30px",
                }}
              />
            </Link>
          </button>
          {/* MORE OPTIONS */}
          <button onClick={() => setIsDrawerOpen(true)} className="moreBtn">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8.75C15.4945 8.75 15.9778 8.60338 16.3889 8.32868C16.8 8.05397 17.1205 7.66353 17.3097 7.20671C17.4989 6.74989 17.5484 6.24723 17.452 5.76228C17.3555 5.27732 17.1174 4.83187 16.7678 4.48223C16.4181 4.1326 15.9727 3.8945 15.4877 3.79804C15.0028 3.70157 14.5001 3.75108 14.0433 3.9403C13.5865 4.12952 13.196 4.44995 12.9213 4.86108C12.6466 5.2722 12.5 5.75555 12.5 6.25C12.5 6.91304 12.7634 7.54893 13.2322 8.01777C13.7011 8.48661 14.337 8.75 15 8.75ZM15 21.25C14.5055 21.25 14.0222 21.3966 13.6111 21.6713C13.2 21.946 12.8795 22.3365 12.6903 22.7933C12.5011 23.2501 12.4516 23.7528 12.548 24.2377C12.6445 24.7227 12.8826 25.1681 13.2322 25.5178C13.5819 25.8674 14.0273 26.1055 14.5123 26.202C14.9972 26.2984 15.4999 26.2489 15.9567 26.0597C16.4135 25.8705 16.804 25.55 17.0787 25.1389C17.3534 24.7278 17.5 24.2445 17.5 23.75C17.5 23.087 17.2366 22.4511 16.7678 21.9822C16.2989 21.5134 15.663 21.25 15 21.25ZM15 12.5C14.5055 12.5 14.0222 12.6466 13.6111 12.9213C13.2 13.196 12.8795 13.5865 12.6903 14.0433C12.5011 14.5001 12.4516 15.0028 12.548 15.4877C12.6445 15.9727 12.8826 16.4181 13.2322 16.7678C13.5819 17.1174 14.0273 17.3555 14.5123 17.452C14.9972 17.5484 15.4999 17.4989 15.9567 17.3097C16.4135 17.1205 16.804 16.8 17.0787 16.3889C17.3534 15.9778 17.5 15.4945 17.5 15C17.5 14.337 17.2366 13.7011 16.7678 13.2322C16.2989 12.7634 15.663 12.5 15 12.5Z"
                fill="#95A5A6"
              />
            </svg>
          </button>
        </Toolbar>
      </AppBar>

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
            <Link style={{ textDecoration: "none" }} to={"/familyGroup"}>
              <Typography
                color={"white"}
                variant="h6"
                component={"div"}
                fontFamily={"Happy_Monkey"}
              >
                Tu Grupo Familiar
              </Typography>
            </Link>
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
              component={"div"}
              fontFamily={"Happy_Monkey"}
            >
              Cambiar Grupo Familiar
            </Typography>
            <EditIcon
              sx={{
                color: "white",
              }}
            />
          </Box>
          <Grid width={"100%"} display={"flex"}>
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

            <button onClick={handleAddFamily} className="btnFamily__Drawer">
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

          {/* GRUPOS FAMILIARES */}
          <Box
            marginTop={"10px"}
            marginBottom={"1rem"}
            display={"flex"}
            justifyContent={"end"}
            fontFamily={"Happy_Monkey"}
            paddingBottom={"2rem"}
            borderBottom={"2px solid #FFFFFF"}
          >
            <Typography
              sx={{ textDecoration: "underline" }}
              color={"white"}
              component={"div"}
              fontFamily={"Happy_Monkey"}
            >
              Gestionar Familias
            </Typography>
          </Box>

          {/* CUENTA DE USUARIO */}
          <Box
            display={"flex"}
            marginTop={"1rem"}
            paddingBottom={"1rem"}
            borderBottom={"2px solid #FFFFFF"}
          >
            <InsertDriveFileIcon
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
                Reportes
              </Typography>
            </Link>
          </Box>

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
                console.log("CLICKKKK");

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
        sx={{ marginBottom: "2.8rem", border: "none", boxShadow: "none" }}
      ></Box>
    </>
  );
};
export default NavBar;
