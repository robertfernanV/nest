import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  TextField,
  Typography,
  FormControl,
  FormLabel,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import "./AddMember.scss";
import { useState } from "react";

function AddMember() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
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
        <h1 className="newFamily__title">Agregar Familiar</h1>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            color: "#7F8C8D",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Ingrese datos del familiar
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <TextField
          label="Nombre"
          type="text"
          placeholder="Valentina"
          sx={{
            width: "320px",
            marginTop: "2rem",
            marginBottom: "1rem",
            marginX: "1rem",
            "& fieldset": {
              borderRadius: "50px",
            },
            "& .MuiOutlinedInput-root": {
              // "& fieldset": {
              //   borderColor: "#FB9825",
              // },
              // "&:hover fieldset": {
              //   borderColor: "#FB9825",
              // },
              "&.Mui-focused fieldset": {
                borderColor: "#FB9825",
              },
            },
            // "& .MuiFormLabel-root": {
            //   // color: "#FB9825",
            // },
            "& .MuiInputLabel-shrink": {
              color: "#FB9825 !important",
            },
          }}
        />

        <TextField
          label="Correo"
          type="text"
          placeholder="correo@ejemplo.com"
          sx={{
            width: "320px",
            marginBottom: "1rem",
            marginX: "1rem",
            "& fieldset": {
              borderRadius: "50px",
            },
            "& .MuiOutlinedInput-root": {
              // "& fieldset": {
              //   borderColor: "#FB9825",
              // },
              // "&:hover fieldset": {
              //   borderColor: "#FB9825",
              // },
              "&.Mui-focused fieldset": {
                borderColor: "#FB9825",
              },
            },
            // "& .MuiFormLabel-root": {
            //   // color: "#FB9825",
            // },
            "& .MuiInputLabel-shrink": {
              color: "#FB9825 !important",
            },
          }}
        />

        <FormControl
          sx={{
            width: "320px",
            "& fieldset": {
              borderRadius: "50px",
            },
            "& .MuiOutlinedInput-root": {
              // "& fieldset": {
              //   borderColor: "#FB9825",
              // },
              // "&:hover fieldset": {
              //   borderColor: "#FB9825",
              // },
              "&.Mui-focused fieldset": {
                borderColor: "#FB9825",
              },
            },
            // "& .MuiFormLabel-root": {
            //   // color: "#FB9825",
            // },
            "& .MuiInputLabel-shrink": {
              color: "#FB9825 !important",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">
            Parentesco del niño
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value="Tio">Tío</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* CANCEL CONFIRM */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Desea cancelar la operación?
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginX: "3rem",
              marginY: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                color: "black",
                background: "#FB9825",
              }}
            >
              Si
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                color: "black",

                background: "gray",
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={handleOpen}
          className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
        >
          Cancelar
        </button>
        <button className="createNewFamily__saveCancelBtn createNewFamily__save">
          Agregar
        </button>
      </Box>
    </>
  );
}

export default AddMember;
