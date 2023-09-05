import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";

import ForumIcon from "@mui/icons-material/Forum";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import logoHome from "../../assets/logohome.png";
import EditIcon from "@mui/icons-material/Edit";
import "./NavBar.scss";

import {
  Avatar,
  Box,
  IconButton,
  Drawer,
  Typography,
  Switch,
  Grid,
} from "@mui/material";

const NavBar = ({ menuTitle }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton sx={{ p: 0, backgroundColor: "white" }}>
              <Avatar src={logoHome} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, color: "black" }}>
            <h4 className="menuTitle">{menuTitle ?? "NEST"}</h4>
          </Box>
          {/* MY MESSAGES */}
          <button className="moreBtn">
            <ForumIcon
              sx={{
                color: "gray",
                width: "30px",
                height: "30px",
                marginRight: "10px",
              }}
            />
          </button>

          {/* NOTIFICATIONS */}
          <button className="moreBtn">
            <svg
              width="28"
              height="30"
              viewBox="0 0 28 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="27.6923" height="30" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_364_659"
                    transform="matrix(0.0169271 0 0 0.015625 -0.0416667 0)"
                  />
                </pattern>
                <image
                  id="image0_364_659"
                  width="64"
                  height="64"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
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
            <Typography
              color={"white"}
              variant="h6"
              component={"div"}
              fontFamily={"Happy_Monkey"}
            >
              Cuenta de Usuario
            </Typography>
          </Box>

          {/* CUENTA DE USUARIO */}
          <Box display={"flex"} marginTop={"1rem"} paddingBottom={"1rem"}>
            <SettingsIcon
              sx={{
                color: "white",
                marginY: "auto",
                marginX: "5px",
              }}
            />
            <Typography
              color={"white"}
              variant="h6"
              component={"div"}
              fontFamily={"Happy_Monkey"}
            >
              Configuracion
            </Typography>
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
            <button className="btnFamily__Drawer">
              <Typography
                color={"white"}
                variant="h6"
                component={"div"}
                fontFamily={"Happy_Monkey"}
              >
                Cerrar Sesion
              </Typography>
            </button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default NavBar;
