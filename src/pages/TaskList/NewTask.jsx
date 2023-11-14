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

export default function NewTask() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/taskList");
  };
  const handleNewExtraTask = () => {
    navigate("/newExtraTask");
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          background: "white",
          margin: "0px 0px 0px 0px",
        }}
      >
        <button
          style={{ top: "0.7rem" }}
          onClick={handleMenu}
          className="newFamily__previousBtn"
        >
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
        <h1 className="newFamily__title">Nueva Tarea</h1>
      </div>

      <hr style={{ border: "none", paddingTop: "3rem" }} />


      <div
        style={{
          display: "flex",
          marginTop: "2rem",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={handleNewExtraTask}
          style={{
            background: "transparent",
            border: "none",
          }}
        >
          <TaskAltIcon
            style={{
              width: "50px",
              height: "50px",
              color: "#689F38",
            }}
          />
        </button>
        <button
          style={{
            background: "transparent",
            border: "none",
            borderBottom: "2px solid #FB9825",
          }}
        >
          <ChecklistIcon
            style={{
              width: "50px",
              height: "50px",
              color: "#1E88E5",
            }}
          />
        </button>
      </div>

      <center>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Inter",
            color: "#FB9825",
          }}
        >
          Nueva Tarea Extra
        </p>
      </center>

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

        <p
          style={{
            fontSize: "12px",
            fontFamily: "Inter",
            color: "#FB9825",
            marginLeft: "2.5rem",
          }}
        >
          Frecuencia
        </p>
        <div
          style={{
            marginLeft: "1.5rem",
            fontFamily: "Inter",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              marginTop: "0.3rem",
              marginBottom: "0.3rem",
            }}
          >
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
            />
            <label
              style={{
                marginLeft: "0.5rem",
              }}
              for="contactChoice1"
            >
              Lun - Vie
            </label>
          </div>

          <div
            style={{
              marginTop: "0.3rem",
              marginBottom: "0.3rem",
            }}
          >
            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="telephone"
            />
            <label
              style={{
                marginLeft: "0.5rem",
              }}
              for="contactChoice2"
            >
              Sab - Dom
            </label>
          </div>

          <div
            style={{
              marginTop: "0.3rem",
              marginBottom: "0.3rem",
            }}
          >
            <input
              type="radio"
              id="contactChoice3"
              name="contact"
              value="courrier"
            />
            <label
              style={{
                marginLeft: "0.5rem",
              }}
              for="contactChoice3"
            >
              Diario
            </label>
          </div>

          <div
            style={{
              marginTop: "0.3rem",
              marginBottom: "0.3rem",
            }}
          >
            <input
              type="radio"
              id="contactChoice4"
              name="contact"
              value="courrier"
            />
            <label
              style={{
                marginLeft: "0.5rem",
              }}
              for="contactChoice4"
            >
              Semana
            </label>
          </div>

          <div
            style={{
              marginTop: "0.3rem",
              marginBottom: "0.3rem",
            }}
          >
            <input
              type="radio"
              id="contactChoice5"
              name="contact"
              value="courrier"
            />
            <label
              style={{
                marginLeft: "0.5rem",
              }}
              for="contactChoice5"
            >
              Quincenal
            </label>
          </div>

          <div
            style={{
              marginTop: "0.3rem",
              marginBottom: "0.3rem",
            }}
          >
            <input
              type="radio"
              id="contactChoice6"
              name="contact"
              value="courrier"
            />
            <label
              style={{
                marginLeft: "0.5rem",
              }}
              for="contactChoice6"
            >
              Mensual
            </label>
          </div>
        </div>

        <p
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            fontSize: "12px",
            fontFamily: "Inter",
            color: "#FB9825",
            marginLeft: "2.5rem",
          }}
        >
          Inicio
        </p>
        <input
          style={{
            marginLeft: "1.5rem",
            marginBottom: "1rem",
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
