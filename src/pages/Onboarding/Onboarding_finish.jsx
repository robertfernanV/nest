import { useNavigate } from "react-router-dom";

import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Face3OutlinedIcon from "@mui/icons-material/Face3Outlined";

const Onboarding_finish = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr
        style={{
          marginBottom: "10rem",
          border: "none",
        }}
      />
      <p
        style={{
          marginBottom: "2rem",
          marginTop: "0px",
          width: "198",
          marginLeft: "2rem",
          fontSize: "24px",
          fontFamily: "Kalam",
          color: "#FB9825",
          fontWeight: "lighter",
        }}
      >
        En Nest puedes:
      </p>

      <div style={{ display: "flex", marginLeft: "3rem", marginTop: "1rem" }}>
        <Diversity1OutlinedIcon
          style={{ width: "45px", height: "45px", color: "#FB9825" }}
        />
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Kalam",
            marginLeft: "1rem",
          }}
        >
          Gestionar el cuidado del niño
        </p>
      </div>

      <div style={{ display: "flex", marginLeft: "3rem", marginTop: "1rem" }}>
        <AssignmentOutlinedIcon
          style={{ width: "45px", height: "45px", color: "#FB9825" }}
        />

        <p
          style={{
            fontSize: "16px",
            fontFamily: "Kalam",
            marginLeft: "1rem",
          }}
        >
          Centralizar las tareas
        </p>
      </div>

      <div style={{ display: "flex", marginLeft: "3rem", marginTop: "1rem" }}>
        <PhotoLibraryOutlinedIcon
          style={{ width: "45px", height: "45px", color: "#FB9825" }}
        />
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Kalam",
            marginLeft: "1rem",
          }}
        >
          Coleccionar fotos
        </p>
      </div>

      <div style={{ display: "flex", marginLeft: "3rem", marginTop: "1rem" }}>
        <CalendarMonthOutlinedIcon
          style={{ width: "45px", height: "45px", color: "#FB9825" }}
        />
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Kalam",
            marginLeft: "1rem",
          }}
        >
          Planificar
        </p>
      </div>

      <div style={{ display: "flex", marginLeft: "3rem", marginTop: "1rem" }}>
        <Face3OutlinedIcon
          style={{ width: "45px", height: "45px", color: "#FB9825" }}
        />
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Kalam",
            marginLeft: "1rem",
          }}
        >
          Organizar el trabajo de la niñera
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          style={{
            marginBottom: "2rem",
            marginTop: "2rem",
            width: "198",
            marginRight: "2rem",
            fontSize: "24px",
            fontFamily: "Kalam",
            fontWeight: "lighter",
          }}
        >
          ...y más!
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            localStorage.setItem("onboarding", true);
            navigate("/");
          }}
          style={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "lighter",
            borderRadius: "10px",
            height: "40px",
            width: "163px",
          }}
          className="createNewFamily__saveCancelBtn createNewFamily__save selectBaby__aceptar"
        >
          Comenzar
        </button>
      </div>
    </>
  );
};

export default Onboarding_finish;
