import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "280px",
  bgcolor: "background.paper",
  border: "1px solid #D32F2F",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function TaskHistory() {
  window.scrollTo(0, 0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/taskList");
  };
  const handleNewTask = () => {
    navigate("/newTask");
  };
  return (
    <>
      <div style={{ position: "fixed", width: "100%" }}>
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
        <h1 className="newFamily__title">Historial de Tareas</h1>
      </div>

      <hr style={{ border: "none", paddingTop: "3rem" }} />

      <div
        style={{
          display: "flex",
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      >
        <section
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <input
            placeholder="Buscar en el historial..."
            style={{
              padding: "0.5rem 5px 0.5rem 5px",
              width: "100%",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              border: "1px solid #8A8A8A",
              borderRight: "none",
              fontFamily: "Inder",
              fontSize: "16px",
            }}
            type="text"
          />
          <button
            style={{
              border: "1px solid #8A8A8A",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              borderLeft: "none",
              background: "transparent",
            }}
          >
            <SearchIcon
              style={{
                color: "orange",
              }}
            />
          </button>
        </section>
        <button
          onClick={handleOpen}
          style={{
            marginRight: "1rem",
            marginLeft: "1rem",
            marginTop: "auto",
            marginBottom: "auto",
            width: "25px",
            height: "25px",
            border: "none",
            background: "transparent",
          }}
        >
          <img
            style={{ width: "25px", height: "25px" }}
            src="https://cdn-icons-png.flaticon.com/512/6590/6590958.png"
            alt=""
          />
        </button>
      </div>

      {/* CONTENT */}
      <p
        style={{
          fontFamily: "Inder",
          fontSize: "16px",
          color: "#FB9825",
          marginLeft: "1.3rem",
        }}
      >
        Hoy - <span>22/sep/2023</span>
      </p>

      {/* EVENTS */}
      <div
        onClick={handleOpen2}
        style={{
          fontFamily: "Happy_Monkey",
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 1.3rem 1rem 1.3rem",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "0px", marginBottom: "0px" }}>
          Ordenar juguetes
        </p>
        <button
          style={{
            width: "80px",
            padding: "0.5rem 0.5rem 0.5rem 0.3rem",
            borderRadius: "3px",
            color: "#FFFFFF",
            fontFamily: "Happy_Monkey",
            fontSize: "12px",
            background: "#D32F2F",
            border: "none",
          }}
        >
          Descartada
        </button>
      </div>

      <div
        style={{
          fontFamily: "Happy_Monkey",
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 1.3rem 1rem 1.3rem",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "0px", marginBottom: "0px" }}>
          Lavar ropa de natación
        </p>
        <button
          style={{
            width: "80px",
            padding: "0.5rem 0.5rem 0.5rem 0.5rem",
            borderRadius: "3px",
            color: "#FFFFFF",
            fontFamily: "Happy_Monkey",
            fontSize: "12px",
            background: "#AED581",
            border: "none",
          }}
        >
          Cumplida
        </button>
      </div>

      <p
        style={{
          fontFamily: "Inder",
          fontSize: "16px",
          marginTop: "2rem",
          color: "#FB9825",
          marginLeft: "1.3rem",
        }}
      >
        Ayer - <span>21/sep/2023</span>
      </p>

      <div
        style={{
          fontFamily: "Happy_Monkey",
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 1.3rem 1rem 1.3rem",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "0px", marginBottom: "0px" }}>
          Hervir agua
        </p>
        <button
          style={{
            width: "80px",
            padding: "0.5rem 0.5rem 0.5rem 0.5rem",
            borderRadius: "3px",
            color: "#FFFFFF",
            fontFamily: "Happy_Monkey",
            fontSize: "12px",
            background: "#AED581",
            border: "none",
          }}
        >
          Cumplida
        </button>
      </div>

      <div
        style={{
          fontFamily: "Happy_Monkey",
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 1.3rem 1rem 1.3rem",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "0px", marginBottom: "0px" }}>
          Esterilizar biberones
        </p>
        <button
          style={{
            width: "80px",
            padding: "0.5rem 0.5rem 0.5rem 0.3rem",
            borderRadius: "3px",
            color: "#FFFFFF",
            fontFamily: "Happy_Monkey",
            fontSize: "12px",
            background: "#D32F2F",
            border: "none",
          }}
        >
          Descartada
        </button>
      </div>

      <p
        style={{
          fontFamily: "Inder",
          fontSize: "16px",
          marginTop: "2rem",
          color: "#FB9825",
          marginLeft: "1.3rem",
        }}
      >
        Miércoles - <span>20/sep/2023</span>
      </p>

      <div
        style={{
          fontFamily: "Happy_Monkey",
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 1.3rem 1rem 1.3rem",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "0px", marginBottom: "0px" }}>
          Hervir agua
        </p>
        <button
          style={{
            width: "80px",
            padding: "0.5rem 0.5rem 0.5rem 0.5rem",
            borderRadius: "3px",
            color: "#FFFFFF",
            fontFamily: "Happy_Monkey",
            fontSize: "12px",
            background: "#AED581",
            border: "none",
          }}
        >
          Cumplida
        </button>
      </div>

      <div
        style={{
          fontFamily: "Happy_Monkey",
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 1.3rem 1rem 1.3rem",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "0px", marginBottom: "0px" }}>
          Esterilizar biberones
        </p>
        <button
          style={{
            width: "80px",
            padding: "0.5rem 0.5rem 0.5rem 0.5rem",
            borderRadius: "3px",
            color: "#FFFFFF",
            fontFamily: "Happy_Monkey",
            fontSize: "12px",
            background: "#AED581",
            border: "none",
          }}
        >
          Cumplida
        </button>
      </div>

      {/* MODAL */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Inder",
                color: "#FB9825",
                marginTop: "0px",
              }}
            >
              Filtrar Búsqueda
            </p>
          </center>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{
                border: "none",
                background: "transparent",
                textDecoration: "underline",
                fontFamily: "Inder",
                color: "#878787",
              }}
            >
              Limpiar filtros
            </button>
          </div>

          <p style={{ fontFamily: "Inder", color: "#FB9825" }}>Estado</p>
          <div style={{ display: "flex", margin: "0px 1rem 0.3rem 1rem" }}>
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              name=""
              id=""
            />
            <p
              style={{
                marginLeft: "0.5rem",
                fontFamily: "Inder",
                fontSize: "14px",
                margin: "auto 0px auto 0px",
              }}
            >
              Completada
            </p>
          </div>
          <div style={{ display: "flex", margin: "0px 1rem 0.3px 1rem" }}>
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              name=""
              id=""
            />
            <p
              style={{
                marginLeft: "0.5rem",
                fontFamily: "Inder",
                fontSize: "14px",
                margin: "auto 0px auto 0px",
              }}
            >
              Descartada
            </p>
          </div>

          <p
            style={{ fontFamily: "Inder", color: "#FB9825", marginTop: "2rem" }}
          >
            Tipo de tarea
          </p>
          <div style={{ display: "flex", margin: "0px 1rem 0.3rem 1rem" }}>
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              name=""
              id=""
            />
            <p
              style={{
                marginLeft: "0.5rem",
                fontFamily: "Inder",
                fontSize: "14px",
                margin: "auto 0px auto 0px",
              }}
            >
              Regular
            </p>
          </div>
          <div style={{ display: "flex", margin: "0px 1rem 0.3px 1rem" }}>
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              name=""
              id=""
            />
            <p
              style={{
                marginLeft: "0.5rem",
                fontFamily: "Inder",
                fontSize: "14px",
                margin: "auto 0px auto 0px",
              }}
            >
              Extra
            </p>
          </div>
          <div style={{ display: "flex", margin: "0px 1rem 0.3px 1rem" }}>
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              name=""
              id=""
            />
            <p
              style={{
                marginLeft: "0.5rem",
                fontFamily: "Inder",
                fontSize: "14px",
                margin: "auto 0px auto 0px",
              }}
            >
              Extra Programada
            </p>
          </div>

          <p
            style={{
              fontFamily: "Inder",
              color: "#FB9825",
              marginBottom: "2rem",
            }}
          >
            Fecha
          </p>

          <div style={{ display: "flex", fontFamily: "Inter" }}>
            <label
              style={{
                position: "absolute",
                fontSize: "14px",
                left: "40px",
                bottom: "12.4rem",
                color: "#AFAFAF",
              }}
              htmlFor="startDate"
            >
              Desde
            </label>
            <input
              placeholder="Desde"
              style={{
                marginRight: "0.3rem",
                textAlign: "center",
                borderRadius: "10px",
                color: "#AFAFAF",
                fontSize: "14px",
                fontFamily: "Inter",
                background: "transparent",
                height: "40px",
                border: "1px solid #FB9825",
              }}
              type="date"
              name="startDate"
              id="startDate"
            />
            <label
              style={{
                position: "absolute",
                fontSize: "14px",
                right: "8rem",
                bottom: "12.4rem",
                color: "#AFAFAF",
              }}
              htmlFor="endDate"
            >
              Hasta
            </label>

            <input
              style={{
                marginLeft: "0.3rem",
                textAlign: "center",
                borderRadius: "10px",
                color: "#AFAFAF",
                fontSize: "14px",
                fontFamily: "Inter",
                background: "transparent",
                height: "40px",
                border: "1px solid #FB9825",
              }}
              type="date"
              name="endDate"
              id="endDate"
            />
          </div>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleClose}
              style={{
                borderRadius: "10px",
                fontSize: "16px",
                background: "#FB9825",
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              Aplicar
            </button>
          </Box>
        </Box>
      </Modal>

      {/* MODAL 2 */}

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "Inder",
                color: "#FB9825",
                marginTop: "0px",
              }}
            >
              Detalle de Tarea
            </p>
          </center>
          <div
            style={{
              marginBottom: "2rem",
              borderRadius: "10px",
              border: "1px solid #9B9B9B",
              padding: "0.5rem",
              fontFamily: "Happy_Monkey",
            }}
          >
            <h6
              style={{
                fontSize: "16px",
                marginBottom: "0px",
                marginTop: "5px",
              }}
            >
              Lavar ropa de natación{" "}
            </h6>

            <p
              style={{
                margin: "0.3rem 0px 0px 0.3rem",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Tipo: <span>Extra</span>
            </p>
            <p
              style={{
                margin: "0.3rem 0px 0px 0.3rem",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Prioridad: <span>Media</span>
            </p>
            <p
              style={{
                margin: "0.3rem 0px 0px 0.3rem",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Para: <span>Niñera</span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  margin: "0.3rem 0px 0px 0.3rem",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Fecha: <span>-</span>
              </p>
              <p
                style={{
                  margin: "0.3rem 3rem 0px 0.3rem",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Hora: <span>-</span>
              </p>
            </div>
            <p
              style={{
                margin: "0.3rem 0px 0px 0.3rem",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Creado por: <span>Jefe de Familia</span>
            </p>
            <p
              style={{
                margin: "0.3rem 0px 0px 0.3rem",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Fecha de creación: <span>19/sep/2023</span>
            </p>
            <p
              style={{
                margin: "0.3rem 0px 0px 0.3rem",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Modificado por: <span>-</span>
            </p>
            <p
              style={{
                margin: "0.3rem 0px 0px 0.3rem",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Fecha de Modificación: <span>-</span>
            </p>
          </div>

          {/* ESTADO */}
          <div
            style={{
              display: "flex",
              marginBottom: "1rem",
              justifyContent: "space-between",
              fontFamily: "Happy_Monkey",
              fontSize: "14px",
            }}
          >
            <p style={{ margin: "auto 0px auto 0px" }}>Estado:</p>
            <button
              style={{
                width: "80px",
                padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                borderRadius: "3px",
                color: "#FFFFFF",
                fontFamily: "Happy_Monkey",
                fontSize: "12px",
                background: "#AED581",
                border: "none",
              }}
            >
              Cumplida
            </button>
          </div>

          {/* CERRADA POR */}
          <div
            style={{
              fontSize: "14px",

              display: "flex",
              marginBottom: "1rem",
              justifyContent: "space-between",
              fontFamily: "Happy_Monkey",
            }}
          >
            <p style={{ margin: "auto 0px auto 0px" }}>Cerrada por:</p>
            <p style={{ margin: "auto 0px auto 0px" }}>Niñera</p>
          </div>

          {/* FECHA */}
          <div
            style={{
              fontSize: "14px",

              display: "flex",
              marginBottom: "1rem",
              justifyContent: "space-between",
              fontFamily: "Happy_Monkey",
            }}
          >
            <p style={{ margin: "auto 0px auto 0px" }}>Fecha:</p>
            <p style={{ margin: "auto 0px auto 0px" }}>20/sept/2023</p>
          </div>

          {/* NOTA */}
          <div
            style={{
              fontSize: "14px",

              display: "flex",
              marginBottom: "1rem",
              justifyContent: "space-between",
              fontFamily: "Happy_Monkey",
            }}
          >
            <p style={{ margin: "auto 0px auto 0px" }}>Nota:</p>
            <p style={{ margin: "auto 0px auto 0px", width: "200px" }}>
              La toalla tiene una manacha que no sale.
            </p>
          </div>

          <center>
            <button
              onClick={handleClose2}
              style={{
                fontFamily: 'Inder',
                borderRadius: "10px",
                fontSize: "20px",
                background: "#FB9825",
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              Ok
            </button>
          </center>
        </Box>
      </Modal>
    </>
  );
}
