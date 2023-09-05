import Box from "@mui/material/Box";
import { TextField, Typography, Grid } from "@mui/material";
import "./SelectBaby.scss";

function EditFamily() {
  const editFamily = (e) => {
    console.log(e.target);
  };

  const deleteFamily = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <Box>
        <button className="newFamily__previousBtn">
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
          src="https://scontent.fccs4-2.fna.fbcdn.net/v/t39.30808-6/294896485_10158873039398603_1111288742379991121_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zql-tsl7JnwAX__n-nM&_nc_ht=scontent.fccs4-2.fna&oh=00_AfBPkDDBoc14CV49sK-RKAkEELx10v4xdiiaDk5qqwfWTg&oe=64EA2AEC"
          alt=""
        />
      </Box>
      {/* TEXT CONTENT */}
      <Box
        sx={{
          width: "300px",
          textAlign: "left",
          fontFamily: "Inter",
          fontSize: "16px",
          marginX: "auto",
        }}
      >
        <Typography
          sx={{
            marginY: "5px",
          }}
        >
          Fecha de nacimiento: 08/Sep/2021
        </Typography>
        <Typography
          sx={{
            marginY: "5px",
          }}
        >
          Edad: 22 meses
        </Typography>
        <Typography
          sx={{
            marginY: "5px",
          }}
        >
          Género: Masculino
        </Typography>

        <Typography
          sx={{
            marginY: "5px",
          }}
        >
          Medicamentos y Vitaminas:
          <Typography
            sx={{
              marginX: "2rem",
            }}
          >
            1- Vitaminas - 0,6 ml
          </Typography>
        </Typography>

        <Typography
          sx={{
            marginY: "5px",
          }}
        >
          Enfermedades y Alergias:
          <Typography
            sx={{
              marginX: "2rem",
            }}
          >
            1- Estreñimiento
          </Typography>
        </Typography>

        <Typography
          sx={{
            marginY: "5px",
          }}
        >
          Notas:
          <Typography
            sx={{
                marginTop: '0.3rem',
              marginX: "1rem",
              textAlign: 'justify',
              lineHeight: '18px'
            }}
          >
            Pediatra: Dra. Marcela Amezqueta, Corporación Médica de San Martín.
            Le tiene miedo al sonido de las motos.
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button className="createNewFamily__saveCancelBtn createNewFamily__save selectBaby__aceptar">
          Aceptar
        </button>
      </Box>
    </>
  );
}

export default EditFamily;
