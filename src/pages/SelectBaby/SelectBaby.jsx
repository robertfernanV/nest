import Box from "@mui/material/Box";
import { TextField, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SelectBaby.scss";

function EditFamily() {
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const editFamily = (e) => {
    console.log(e.target);
  };

  const handleBack = () => {
    history.back();
  };

  const handleEdit = () => {
    navigate(`/editBaby/${'200'}`)
  }

  const deleteFamily = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <Box>
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
        <h1 className="newFamily__title">Alan Luciano</h1>
      </Box>
      {/* IMAGE */}
      <Box
        sx={{
          marginY: "2rem",
          textAlign: "center",
        }}
      >
        <img
          className="selectBaby__img"
          width={"100px"}
          src="https://img.freepik.com/foto-gratis/foto-linda-nina-mirando-camara_329181-19580.jpg"
          alt=""
        />
      </Box>
      <center>
        <h3
          style={{
            fontFamily: "Imprima",
            fontSize: "20px",
            color: "#FB9825",
          }}
        >
          Perfil
        </h3>
      </center>
      {/* TEXT CONTENT */}
      <Box
        sx={{
          width: "300px",
          textAlign: "left",
          fontFamily: "Imprima",
          fontSize: "16px",
          marginX: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Fecha de nacimiento:
          </Typography>
          <span>08/Sep/2021</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",

              fontFamily: "Imprima",
            }}
          >
            Edad:
          </Typography>
          <span>22 meses</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",

              fontFamily: "Imprima",
            }}
          >
            Género:
          </Typography>
          <span>Masculino</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Medicamentos y Vitaminas:
          </Typography>
          <span
            style={{
              width: "150px",
            }}
          >
            1- Vitaminas - 0,6 ml
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Enfermedades y Alergias:
          </Typography>
          <span
            style={{
              width: "150px",
            }}
          >
            1- Estreñimiento
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",

              fontFamily: "Imprima",
            }}
          >
            Notas:
          </Typography>
          <span
            style={{
              width: "150px",
            }}
          >
            Pediatra: Dra. Marcela Amezqueta, Corporación Médica de San Martín.
            Le tiene miedo al sonido de las motos.
          </span>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={handleEdit}
          className="createNewFamily__saveCancelBtn createNewFamily__save selectBaby__aceptar"
          style={{
            background: '#AFAFAF'
          }}
        >
          Editar
        </button>
        <button
          onClick={handleBack}
          className="createNewFamily__saveCancelBtn createNewFamily__save selectBaby__aceptar"
        >
          Aceptar
        </button>
      </Box>
    </>
  );
}

export default EditFamily;
