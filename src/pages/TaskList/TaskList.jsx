import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import { useState } from "react";
import Box from "@mui/material/Box";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

const TaskList = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  // MODAL #1
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // MODAL #2
  const [openModal2, setOpenModal2] = useState(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  // MODAL #3
  const [openModal3, setOpenModal3] = useState(false);
  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);

  const handleEdit = () => {
    navigate("/editTask");
  };

  const handleNewTask = () => {
    navigate("/newExtraTask");
  };

  const handleHistory = () => {
    navigate("/taskHistory");
  };

  return (
    <>
      <NavBar menuTitle={"LISTA DE TAREAS"} backgroundProp={"white"} />
      <hr
        style={{
          marginTop: "4rem",
          border: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={handleHistory}
          style={{
            border: "none",
            background: "none",
            width: "30px",
            height: "30px",
            marginRight: "1rem",
          }}
        >
          <img
            width={"30px"}
            height={"30px"}
            src="https://www.freeiconspng.com/thumbs/report-icon/call-report-icon-3.png"
            alt=""
          />
        </button>
        <button
          onClick={handleNewTask}
          style={{
            display: "flex",
            marginRight: "1rem",
            background: "#FB9825",
            border: "none",
            fontSize: "14px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          <AddIcon
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
          <p
            style={{
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Nueva Tarea
          </p>
        </button>
      </div>

      {/* TAREAS EXTRA */}
      <div
        style={{
          display: "flex",
        }}
      >
        <CheckIcon
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            color: "#E67E22",
            width: "30px",
            height: "30px",
          }}
        />
        <p
          style={{
            marginLeft: "5px",
            color: "#E67E22",
            fontFamily: "Inder",
            fontSize: "20px",
          }}
        >
          Tareas Extra
        </p>
      </div>

      {/* TAREA EXTRA #1 - PRIORIDAD ALTA */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <button
          onClick={handleOpenModal2}
          style={{
            border: "none",
            background: "none",
          }}
        >
          <CheckBoxOutlineBlankIcon />
        </button>
        <section
          onClick={handleOpenModal3}
          style={{
            width: "305px",
            display: "flex",
            borderRadius: "10px",
            border: "1px solid #D32F2F",
            marginRight: "5px",
          }}
        >
          <div
            style={{
              fontFamily: "Happy_Monkey",
            }}
          >
            {/* TÍTULO */}

            <p
              style={{
                marginTop: "5px",
                marginBottom: "0px",
                marginLeft: "1rem",
                fontSize: "16px",
              }}
            >
              Arreglar a los niños
            </p>

            {/* PARA */}
            <p
              style={{
                marginTop: "0px",
                marginLeft: "2rem",
                marginBottom: "0px",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Para: <span>Niñera</span>
            </p>

            {/* FECHA */}
            <div
              style={{
                width: "227px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  marginTop: "0px",
                  marginLeft: "2rem",
                  marginBottom: "0px",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Fecha: <span>26/sep/23</span>
              </p>
              {/* HORA */}
              <p
                style={{
                  position: "relative",
                  marginTop: "0px",
                  width: "87px",
                  left: "3rem",
                  marginBottom: "5px",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Hora: <span>15:00</span>
              </p>
            </div>

            {/* TIEMPO */}
            <p
              style={{
                fontFamily: "Inder",
                marginTop: "0px",
                marginLeft: "2rem",
                marginBottom: "5px",
                fontSize: "12px",
                color: "#DB4B4B",
              }}
            >
              Quedan: <span>4 días y 5 horas</span>
            </p>
          </div>
          <span
            style={{
              bottom: "0.8rem",
              right: "1rem",
              width: "58px",
              height: "15px",
              textAlign: "center",
              position: "relative",
              background: "#D32F2F",
              fontSize: "12px",
              fontFamily: "Inder",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              color: "white",
            }}
          >
            Alta
          </span>
        </section>

        {/* EDIT BUTTON */}
        <div
          style={{
            width: "35px",
            marginRight: "1rem",
          }}
        >
          <button
            onClick={handleEdit}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "10px",
              background: "#D9D9D9",
              color: "white",
              border: "none",
              marginBottom: "1rem",
            }}
          >
            <EditIcon />
          </button>

          {/* DELETE BUTTON */}
          <button
            style={{
              margin: "0px",
              width: "35px",
              height: "35px",
              borderRadius: "10px",
              background: "#FA8B8B",
              border: "none",
            }}
          >
            <DeleteOutlineOutlinedIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>
        </div>
      </div>

      {/* TAREA EXTRA #2 - PRIORIDAD MEDIA */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <button
          style={{
            border: "none",
            background: "none",
          }}
        >
          <CheckBoxOutlineBlankIcon />
        </button>
        <section
          style={{
            width: "305px",
            display: "flex",
            borderRadius: "10px",
            border: "1px solid #FDD402",
            marginRight: "5px",
          }}
        >
          <div
            style={{
              fontFamily: "Happy_Monkey",
            }}
          >
            {/* TÍTULO */}

            <p
              style={{
                marginTop: "5px",
                marginBottom: "0px",
                marginLeft: "1rem",
                fontSize: "16px",
              }}
            >
              Lavar oso de peluche
            </p>

            {/* PARA */}
            <p
              style={{
                marginTop: "0px",
                marginLeft: "2rem",
                marginBottom: "0px",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Para: <span>Niñera</span>
            </p>

            {/* FECHA */}
            <div
              style={{
                display: "flex",
                width: "227px",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  marginTop: "0px",
                  marginLeft: "2rem",
                  marginBottom: "0px",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Fecha: <span>-</span>
              </p>
              {/* HORA */}
              <p
                style={{
                  position: "relative",
                  marginTop: "0px",
                  width: "87px",
                  left: "3rem",
                  marginBottom: "5px",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Hora: <span>-</span>
              </p>
            </div>

            {/* TIEMPO */}
            <p
              style={{
                fontFamily: "Inder",
                marginTop: "0px",
                marginLeft: "2rem",
                marginBottom: "5px",
                fontSize: "12px",
                color: "#9B9C9C",
              }}
            >
              Creado <span>Hace 1 día</span>
            </p>
          </div>
          <span
            style={{
              bottom: "0.8rem",
              right: "1rem",
              width: "58px",
              height: "15px",
              textAlign: "center",
              position: "relative",
              background: "#FDD402",
              fontSize: "12px",
              fontFamily: "Inder",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              color: "white",
            }}
          >
            Media
          </span>
        </section>

        {/* EDIT BUTTON */}
        <div
          style={{
            width: "35px",
            marginRight: "1rem",
          }}
        >
          <button
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "10px",
              background: "#D9D9D9",
              color: "white",
              border: "none",
              marginBottom: "1rem",
            }}
          >
            <EditIcon />
          </button>

          {/* DELETE BUTTON */}
          <button
            onClick={handleOpen}
            style={{
              margin: "0px",
              width: "35px",
              height: "35px",
              borderRadius: "10px",
              background: "#FA8B8B",
              border: "none",
            }}
          >
            <DeleteOutlineOutlinedIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>
        </div>
      </div>

      {/* TAREA EXTRA #3 - PRIORIDAD BAJA */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <button
          style={{
            border: "none",
            background: "none",
          }}
        >
          <CheckBoxOutlineBlankIcon />
        </button>
        <section
          style={{
            width: "305px",
            display: "flex",
            borderRadius: "10px",
            border: "1px solid #9BCA92",
            marginRight: "5px",
          }}
        >
          <div
            style={{
              fontFamily: "Happy_Monkey",
            }}
          >
            {/* TÍTULO */}

            <p
              style={{
                marginTop: "5px",
                marginBottom: "0px",
                marginLeft: "1rem",
                fontSize: "16px",
              }}
            >
              Comprar pañales
            </p>

            {/* PARA */}
            <p
              style={{
                marginTop: "0px",
                marginLeft: "2rem",
                marginBottom: "0px",
                fontSize: "14px",
                color: "#454545",
              }}
            >
              Para: <span>Niñera</span>
            </p>

            {/* FECHA */}
            <div
              style={{
                display: "flex",
                width: "227px",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  marginTop: "0px",
                  marginLeft: "2rem",
                  marginBottom: "0px",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Fecha: <span>-</span>
              </p>
              {/* HORA */}
              <p
                style={{
                  position: "relative",
                  marginTop: "0px",
                  width: "87px",
                  left: "3rem",
                  marginBottom: "5px",
                  fontSize: "14px",
                  color: "#454545",
                }}
              >
                Hora: <span>-</span>
              </p>
            </div>

            {/* TIEMPO */}
            <p
              style={{
                fontFamily: "Inder",
                marginTop: "0px",
                marginLeft: "2rem",
                marginBottom: "5px",
                fontSize: "12px",
                color: "#9B9C9C",
              }}
            >
              Creado <span>Hace 3 días</span>
            </p>
          </div>
          <span
            style={{
              bottom: "0.8rem",
              right: "1rem",
              width: "58px",
              height: "15px",
              textAlign: "center",
              position: "relative",
              background: "#9BCA92",
              fontSize: "12px",
              fontFamily: "Inder",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              color: "white",
            }}
          >
            Baja
          </span>
        </section>

        {/* EDIT BUTTON */}
        <div
          style={{
            width: "35px",
            marginRight: "1rem",
          }}
        >
          <button
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "10px",
              background: "#D9D9D9",
              color: "white",
              border: "none",
              marginBottom: "1rem",
            }}
          >
            <EditIcon />
          </button>

          {/* DELETE BUTTON */}
          <button
            style={{
              margin: "0px",
              width: "35px",
              height: "35px",
              borderRadius: "10px",
              background: "#FA8B8B",
              border: "none",
            }}
          >
            <DeleteOutlineOutlinedIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>
        </div>
      </div>

      {/* TAREAS */}
      <div
        style={{
          display: "flex",
        }}
      >
        <CheckIcon
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            color: "#E67E22",
            width: "30px",
            height: "30px",
          }}
        />
        <p
          style={{
            marginLeft: "5px",
            color: "#E67E22",
            fontFamily: "Inder",
            fontSize: "20px",
          }}
        >
          Tareas
        </p>
      </div>

      {/* TAREA #1 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        <section
          style={{
            display: "flex",
          }}
        >
          <Checkbox />
          <p
            style={{
              fontFamily: "Happy_Monkey",
              fontSize: "16px",
            }}
          >
            Esterilizar biberones
          </p>
        </section>
        {/* DELETE BUTTON */}
        <button
          style={{
            marginLeft: "0.5rem",
            marginBottom: "auto",
            marginTop: "auto",
            marginRight: "1rem",
            width: "35px",
            height: "35px",
            borderRadius: "10px",
            background: "#FA8B8B",
            border: "none",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <DeleteOutlineOutlinedIcon
            style={{
              color: "#FFFFFF",
            }}
          />
        </button>
      </div>

      {/* TAREA #2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        <section
          style={{
            display: "flex",
          }}
        >
          <Checkbox />
          <p
            style={{
              fontFamily: "Happy_Monkey",
              fontSize: "16px",
            }}
          >
            Sacar bolsas de basura
          </p>
        </section>
        {/* DELETE BUTTON */}
        <button
          style={{
            marginLeft: "0.5rem",
            marginBottom: "auto",
            marginTop: "auto",
            marginRight: "1rem",
            width: "35px",
            height: "35px",
            borderRadius: "10px",
            background: "#FA8B8B",
            border: "none",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <DeleteOutlineOutlinedIcon
            style={{
              color: "#FFFFFF",
            }}
          />
        </button>
      </div>

      {/* TAREA #3 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        <section
          style={{
            display: "flex",
          }}
        >
          <Checkbox />
          <p
            style={{
              fontFamily: "Happy_Monkey",
              fontSize: "16px",
            }}
          >
            Hervir agua
          </p>
        </section>
        {/* DELETE BUTTON */}
        <button
          style={{
            marginLeft: "0.5rem",
            marginBottom: "auto",
            marginTop: "auto",
            marginRight: "1rem",
            width: "35px",
            height: "35px",
            borderRadius: "10px",
            background: "#FA8B8B",
            border: "none",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <DeleteOutlineOutlinedIcon
            style={{
              color: "#FFFFFF",
            }}
          />
        </button>
      </div>

      {/* MODAL - ELIMINAR */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
              marginBottom: "auto",
              marginTop: "auto",
              width: "60px",
              height: "50px",
              borderRadius: "3px",
              background: "#D32F2F",
              border: "none",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <DeleteOutlineOutlinedIcon
              style={{
                color: "#FFFFFF",
                width: "50x",
                height: "50px",
              }}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "Inder",
            }}
          >
            ¿Está seguro que quiere descartar esta tarea?
          </p>

          <center>
            <p
              style={{
                fontFamily: "Inder",
                fontSize: "24px",
                color: "#D32F2F",
              }}
            >
              Lavar oso de peluche
            </p>
          </center>

          <div>
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
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button
              onClick={handleClose}
              style={{
                borderRadius: "10px",
                background: "#AFAFAF",
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              No, Cancelar
            </button>
            <button
              style={{
                borderRadius: "10px",
                background: "#DB4B4B",
              }}
              className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
            >
              Sí, Descartar
            </button>
          </Box>
        </Box>
      </Modal>

      {/* MODAL - TAREA REALIZADA */}

      <Modal
        open={openModal2}
        onClose={handleCloseModal2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
              marginBottom: "auto",
              marginTop: "auto",
              width: "60px",
              height: "50px",
              borderRadius: "3px",
              background: "#9BCA92",
              border: "none",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <EditIcon
              style={{
                color: "#FFFFFF",
                width: "50x",
                height: "50px",
              }}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "Inder",
            }}
          >
            ¿Está seguro que quiere marcar esta tarea como realizada?
          </p>

          <center>
            <p
              style={{
                fontFamily: "Inder",
                fontSize: "24px",
                color: "#689F38",
              }}
            >
              Arreglar a los niños
            </p>
          </center>

          <div>
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
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button
              onClick={handleCloseModal2}
              style={{
                borderRadius: "10px",
                background: "#AFAFAF",
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              No, Cancelar
            </button>
            <button
              style={{
                borderRadius: "10px",
                background: "#AED581",
              }}
              className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
            >
              Sí, Realizada!
            </button>
          </Box>
        </Box>
      </Modal>

      {/* MODAL - DETALLES DE LA TAREA */}

      <Modal
        open={openModal3}
        onClose={handleCloseModal3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "1rem",
              fontFamily: "Happy_Monkey",
              fontSize: "12px",
            }}
          >
            <p
              style={{
                background: "#4FC3F7",
                borderRadius: "3px",
                width: "80px",
                textAlign: "center",
                padding: "0.3rem 0rem 0.3rem 0rem",
                marginRight: "0.5rem",
                marginLeft: "0.5rem",
              }}
            >
              Abierta
            </p>
            <p
              style={{
                background: "#D32F2F",
                borderRadius: "3px",
                width: "80px",
                textAlign: "center",
                padding: "0.3rem 0rem 0.3rem 0rem",
                marginLeft: "0.5rem",
              }}
            >
              Alta
            </p>
          </div>

          <h1
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "Happy_Monkey",
              marginBottom: "0px",
            }}
          >
            Arreglar a los niños
          </h1>
          <h3
            style={{
              marginTop: "0px",
              textAlign: "center",
              fontSize: "14px",
              fontFamily: "Happy_Monkey",
            }}
          >
            Tarea Extra
          </h3>

          {/* CONTENIDO */}
          <div
            style={{
              fontFamily: "Happy_Monkey",
              fontSize: "14px",
            }}
          >
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Para: Niñera
            </p>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Fecha: 26/sep/23
            </p>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Hora: 15:00
            </p>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Creado por: Jefe de Familia
            </p>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Fecha de Creación: 19/sep/2023
            </p>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Modificado por: -
            </p>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Fecha de Modificación: -
            </p>
            <p
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Descripción: <br></br> Bañar y vestir a los niños para ir a
              visitar a la abuela.
            </p>
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleCloseModal3}
              style={{
                borderRadius: "3px",
                fontSize: "16px",
                background: "#D9D9D9",
                height: "30px",
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              <EditIcon
                style={{
                  height: "20px",
                }}
              />
              Editar
            </button>

            <button
              onClick={handleCloseModal3}
              style={{
                borderRadius: "3px",
                fontSize: "16px",
                background: "#FA8B8B",
                height: "30px",
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              <DeleteOutlineOutlinedIcon
                style={{
                  height: "20px",
                }}
              />
              Descartar
            </button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleCloseModal3}
              style={{
                borderRadius: "10px",
                fontSize: "20px",
                background: "#FB9825",
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              Ok
            </button>
          </Box>
        </Box>
      </Modal>

      <Menu />
    </>
  );
};

export default TaskList;
