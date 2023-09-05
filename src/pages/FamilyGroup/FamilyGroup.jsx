import Box from "@mui/material/Box";
import { TextField, Typography, Grid } from "@mui/material";
import "./FamilyGroup.scss";

function FamilyGroup() {
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
        <h1 className="newFamily__title">Familia Fernández</h1>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
           <img width='150px' src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-family-day-family-of-five-pattern-png-image_9124572.png" alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#FB9825",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 700,
            marginTop: "3.5rem",
            lineHeight: "19px",
            letterSpacing: "0em",
            marginBottom: "1rem",
          }}
        >
          MIEMBROS
        </Typography>
      </Box>
      {/* NIÑOS - PANEL */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            border: "1px solid #C4C74A",
          }}
        ></Box>
        <Box
          sx={{
            width: "113px",
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "Inter",
            color: "#FFFFFF",
            height: "19px",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            background: "#C4C74A",
          }}
        >
          Niños
        </Box>
      </Box>
      <Grid xs={12} container>
        {/* NIÑO 1 */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <img
            width="60px"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-family-day-family-of-five-pattern-png-image_9124572.png"
            alt=""
          />

          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Alan Luciano
          </Typography>
        </Grid>

        {/* NIÑO 2 */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <img
            width="60px"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-family-day-family-of-five-pattern-png-image_9124572.png"
            alt=""
          />

          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Zoe Camila
          </Typography>
        </Grid>
      </Grid>

      {/* Familiares - PANEL */}
      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            border: "1px solid #C4C74A",
          }}
        ></Box>
        <Box
          sx={{
            width: "113px",
            textAlign: "center",
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#FFFFFF",
            height: "19px",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            background: "#C4C74A",
          }}
        >
          Familiares
        </Box>
      </Box>

      <Grid xs={12} container>
        {/* FAMILIAR */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <img
            width="60px"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-family-day-family-of-five-pattern-png-image_9124572.png"
            alt=""
          />

          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Roberto
          </Typography>
        </Grid>
      </Grid>

      {/* Niñeras - PANEL */}
      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            border: "1px solid #C4C74A",
          }}
        ></Box>
        <Box
          sx={{
            width: "113px",
            textAlign: "center",
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#FFFFFF",
            height: "19px",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            background: "#C4C74A",
          }}
        >
          Niñeras
        </Box>
      </Box>

      <Grid xs={12} container>
        {/* NIÑERA */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <svg
            className="createNewFamily__svg"
            width="50"
            height="50"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.75 23.44C38.75 22.2669 38.1919 21.0862 37.1169 20.46C37.3612 19.2419 37.5406 17.8325 37.5406 16.2513C37.54 9.37563 32.6281 1.25 20 1.25C7.37062 1.25 2.46 9.37563 2.46 16.2513C2.46 17.8319 2.63937 19.2406 2.88375 20.4588C1.80687 21.085 1.25 22.2669 1.25 23.44C1.25 24.7537 1.95312 26.0719 3.29813 26.6138C1.83125 29.3775 1.21187 33.3469 2.74437 36.1475C3.4075 37.3594 9.43125 41.2219 11.4319 36.3613C13.7194 37.4463 16.5625 38.1287 20 38.1287C23.4375 38.1287 26.2794 37.4463 28.5669 36.3613C30.5688 41.2219 36.5919 37.36 37.2556 36.1475C38.7863 33.3475 38.1675 29.3787 36.7 26.6138C38.0456 26.0719 38.75 24.7544 38.75 23.44ZM20.0062 3.75C29.2556 3.75 35.4238 8.75063 35.4238 15.0013C35.4238 15.0013 33.5731 5.62563 20.0062 5.62563C6.43937 5.62563 3.97125 15.0013 3.97125 15.0013C3.97125 8.75063 10.7556 3.75 20.0062 3.75ZM34.7194 25.6275V26.2525C34.7194 30.6656 30.1525 36.8787 20 36.8787C9.84625 36.8787 5.27937 30.6656 5.27937 26.2525V25.6275H4.675C3.14438 25.6275 2.45937 24.5288 2.45937 23.44C2.45937 22.3512 3.14438 21.2525 4.675 21.2525H4.79L4.8975 21.2087C4.955 21.1856 10.1637 18.9794 10.1075 12.5106C16.0294 18.2444 31.4431 19.2125 34.7194 19.3556V21.2531H35.325C36.8544 21.2531 37.5406 22.3519 37.5406 23.4406C37.5406 24.5294 36.8544 25.6281 35.325 25.6281L34.7194 25.6275Z"
              fill="#FB9825"
            />
            <path
              d="M27.8125 25.9399C29.5384 25.9399 30.9375 24.5408 30.9375 22.8149C30.9375 21.0891 29.5384 19.6899 27.8125 19.6899C26.0866 19.6899 24.6875 21.0891 24.6875 22.8149C24.6875 24.5408 26.0866 25.9399 27.8125 25.9399Z"
              fill="#FB9825"
            />
            <path
              d="M12.1875 25.9399C13.9134 25.9399 15.3125 24.5408 15.3125 22.8149C15.3125 21.0891 13.9134 19.6899 12.1875 19.6899C10.4616 19.6899 9.0625 21.0891 9.0625 22.8149C9.0625 24.5408 10.4616 25.9399 12.1875 25.9399Z"
              fill="#FB9825"
            />
            <path
              d="M25.0563 30.0818C21.7969 32.3318 18.1813 32.3181 14.9425 30.0818C14.5544 29.8118 14.2025 30.2781 14.4663 30.7106C15.4513 32.3181 17.4463 33.7524 19.9988 33.7524C22.5525 33.7524 24.5469 32.3181 25.5325 30.7106C25.7981 30.2781 25.4469 29.8118 25.0563 30.0818Z"
              fill="#FB9825"
            />
          </svg>
          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Angie
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button className="createNewFamily__saveCancelBtn ">Editar</button>
        <button className="createNewFamily__saveCancelBtn createNewFamily__save">
          Aceptar
        </button>
      </Box>
    </>
  );
}

export default FamilyGroup;
