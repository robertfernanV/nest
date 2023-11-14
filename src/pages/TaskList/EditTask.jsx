import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

export default function NewExtraTask() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/taskList");
  };
  const handleNewTask = () => {
    navigate("/newTask");
  };
  return (
    <>
      <button onClick={handleMenu} className="newFamily__previousBtn">
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
      <h1 style={{
        marginBottom: '2rem'
      }} className="newFamily__title">Editar Tarea</h1>


      {/* CONTENT */}
      <div
        style={{
          marginLeft: "1rem",
          marginRight: "1rem",
          borderRadius: "5px",
          border: "1px solid #DDE3E6",
          padding: "5px",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <TextField
            label="Título"
            type="text"
            sx={{
              width: "280px",
              marginTop: "1rem",
              marginBottom: "1rem",
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
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          <FormControl>
            <InputLabel id="demo-simple-select-label">Responsable</InputLabel>
            <Select
              style={{
                borderRadius: "10px",
                width: "280px",
                textAlign: "center",
              }}
              sx={{
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Responsable"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Niñera</MenuItem>
              <MenuItem value={20}>Padre de Familia</MenuItem>
              <MenuItem value={30}>Etc</MenuItem>
            </Select>
          </FormControl>
        </div>

        <p
          style={{
            fontSize: "12px",
            fontFamily: "Inter",
            color: "#FB9825",
            marginLeft: "2.5rem",
          }}
        >
          Prioridad
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            style={{
              width: "90px",
              color: "#FFFFFF",
              fontFamily: "Inter",
              borderRadius: "10px",
              border: "none",
              padding: "5px 1rem 5px 1rem",
              background: "#8EBD60",
              outline: "1px solid black",
            }}
          >
            Baja
          </button>
          <button
            style={{
              width: "90px",
              color: "#FFFFFF",
              fontFamily: "Inter",
              borderRadius: "10px",
              border: "none",
              padding: "5px 1rem 5px 1rem",
              background: "#FDD402",
            }}
          >
            Media
          </button>
          <button
            style={{
              width: "90px",
              color: "#FFFFFF",
              fontFamily: "Inter",
              borderRadius: "10px",
              border: "none",
              padding: "5px 1rem 5px 1rem",
              background: "#DB4B4B",
            }}
          >
            Alta
          </button>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <input
            style={{
              textAlign: "center",
              borderRadius: "20px",
              color: "#D9D9D9",
              fontSize: "16px",
              fontFamily: "Inter",
              background: "transparent",
              height: "40px",
              border: "1px solid #FB9825",
            }}
            type="date"
            name=""
            id=""
          />
          <input
            style={{
              textAlign: "center",
              marginLeft: "0.5rem",
              width: "120px",
              borderRadius: "20px",
              color: "#D9D9D9",
              fontSize: "16px",
              fontFamily: "Inter",
              background: "transparent",
              height: "40px",
              border: "1px solid #FB9825",
            }}
            type="text"
            name=""
            id=""
          />
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Checkbox />
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Inter",
            }}
          >
            No tiene fecha de vencimiento
          </p>
        </div>

        <p
          style={{
            fontSize: "12px",
            fontFamily: "Inter",
            color: "#FB9825",
            marginLeft: "2.5rem",
          }}
        >
          Descripción
        </p>
        <center>
          <textarea
            style={{
              marginBottom: "1rem",
              fontSize: "20px",
              fontFamily: "Inder",
              minHeight: "50px",
              maxHeight: "50px",
              minWidth: "250px",
              maxWidth: "250px",
              borderRadius: "10px",
              padding: "1rem",
            }}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </center>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={handleMenu}
          style={{
            borderRadius: "5px",
            background: "#AFAFAF",
          }}
          className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
        >
          Cancelar
        </button>
        <button
          style={{
            borderRadius: "5px",
          }}
          className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
        >
          Guardar
        </button>
      </Box>
    </>
  );
}
