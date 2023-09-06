import { Switch, Typography, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import "./ConfigurationMenu.scss";

const ConfigurationMenu = () => {

  const handleBack = () => {
    history.back();
  }

  return (
    <>
      <Box marginBottom={"4rem"}>
        <button onClick={handleBack} className="newFamily__previousBtn">
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.926624 10.9393C0.340837 11.5251 0.340837 12.4749 0.926624 13.0607L10.4726 22.6066C11.0584 23.1924 12.0081 23.1924 12.5939 22.6066C13.1797 22.0208 13.1797 21.0711 12.5939 20.4853L4.1086 12L12.5939 3.51472C13.1797 2.92893 13.1797 1.97919 12.5939 1.3934C12.0081 0.807611 11.0584 0.807611 10.4726 1.3934L0.926624 10.9393ZM23 10.5L1.98728 10.5V13.5L23 13.5V10.5Z"
              fill="#FB9825"
            />
          </svg>
        </button>
        <h1 className="newFamily__title">Configuración</h1>
      </Box>

      {/* NOTIFICACIONES */}
      <Box display={"flex"} marginX={"1rem"} marginY={"10px"}>
        <NotificationsIcon
          sx={{
            color: "#FB9825",
            marginRight: "1rem",
          }}
        />
        <Typography fontFamily={"Inter"}>Notificaciones</Typography>
      </Box>

      {/* SONIDO */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginX={"1rem"}
        marginTop={"1.5rem"}
        marginBottom={"0.5rem"}
      >
        <Box display={"flex"}>
          <VolumeUpIcon
            sx={{
              color: "#FB9825",
              marginRight: "1rem",
            }}
          />
          <Typography fontFamily={"Inter"}>Sonido</Typography>
        </Box>
        <div>
          <label className="labelConfigurationMenu" htmlFor="">
            Si
          </label>
          <Switch defaultChecked="checked" background="#FB9825" />
          <label className="labelConfigurationMenu" htmlFor="">
            No
          </label>
        </div>
      </Box>

      {/* TEMA */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginX={"1rem"}
        marginY={"10px"}
      >
        <Box display={"flex"}>
          <DarkModeIcon
            sx={{
              color: "#FB9825",
              marginRight: "1rem",
            }}
          />
          <Typography fontFamily={"Inter"}>Tema</Typography>
        </Box>
        <div>
          <label className="labelConfigurationMenu" htmlFor="">
            Claro
          </label>
          <Switch defaultChecked="checked" background="#FB9825" />
          <label className="labelConfigurationMenu" htmlFor="">
            Oscuro
          </label>
        </div>
      </Box>

      {/* SEGURIDAD */}
      <Box justifyContent={"space-between"} marginX={"1rem"} marginY={"10px"}>
        <Box display={"flex"}>
          <VpnKeyIcon
            sx={{
              color: "#FB9825",
              marginRight: "1rem",
            }}
          />
          <Typography fontFamily={"Inter"}>Seguridad</Typography>
        </Box>

        <Box display={"flex"} justifyContent={'space-between'} marginX={'4rem'}>
          <Typography fontFamily={"Inter"}>Contrasena</Typography>
          <Typography color={'gray'} fontFamily={"Inter"}>Desactivada</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ConfigurationMenu;
