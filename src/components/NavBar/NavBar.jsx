import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logoHome from "../../assets/logohome.png";
import "./NavBar.scss";

import { Avatar, Box, IconButton } from "@mui/material";

const NavBar = ({ menuTitle }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#FB9825" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton sx={{ p: 0, backgroundColor: "white" }}>
            <Avatar src={logoHome} />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <h4 className="menuTitle">{menuTitle ?? "NEST"}</h4>
        </Box>
        <QuestionAnswerIcon sx={{ marginRight: "10px" }} />
        <NotificationsIcon />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
