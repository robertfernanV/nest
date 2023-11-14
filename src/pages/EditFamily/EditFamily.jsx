import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Face3Icon from "@mui/icons-material/Face3";

import "./EditFamily.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "1px solid #FB9825",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function EditFamily() {
  window.scrollTo(0, 0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddBaby = () => {
    navigate("/addBaby");
  };

  const handleAddMember = () => {
    navigate("/addMember");
  };

  const handleAddBabySister = () => {
    navigate("/addBabySister");
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/familyGroup");
  };

  const editFamily = (e) => {
    navigate(`/editBaby/${e.target.id}`);
  };

  const deleteFamily = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <Box>
        <button onClick={handleCancel} className="newFamily__previousBtn">
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
        <h1 className="newFamily__title">Editar Familia</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              borderRadius: "10px",
              border: "1px solid #878787",
              marginLeft: "2rem",
            }}
            width="150px"
            height="150px"
            src="https://valricherphotography.files.wordpress.com/2022/02/calgary-kananaskis-photographer-25.jpg"
            alt=""
          />
        </div>
        <div
          style={{
            marginRight: "1rem",
            marginLeft: "1rem",
          }}
        >
          <TextField
            label="Nombre de la familia"
            fullWidth
            sx={{
              marginTop: "2rem",
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

        <center>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Happy_Monkey",
            }}
          >
            Miembros
          </p>
        </center>
        <div
          style={{
            position: "relative",
            bottom: "2.2rem",
            textAlign: "end",
            marginRight: "2rem",
          }}
        >
          <button
            onClick={handleOpen}
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontSize: "16px",
              fontFamily: "Happy_Monkey",
              color: "#7DB649",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            +Nuevo
          </button>
        </div>

        {/* EDIT PARCTIPANTS */}

        {/* PARTICIPANT #1 */}
        <div
          style={{
            display: "flex",
            marginLeft: "2rem",
            marginRight: "2rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            justifyContent: "space-between",
          }}
        >
          <section
            style={{
              fontFamily: "Imprima",
              marginLeft: "1rem",
              marginTop: "auto",
              marginBottom: "auto",
              display: "flex",
            }}
          >
            <img
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid #D9D9D9",
              }}
              src="https://todaysparent.mblycdn.com/uploads/tp/2014/12/blanket-baby-article.jpg"
              alt=""
            />
            <div
              style={{
                marginLeft: "1rem",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "#FB9825",
                }}
              >
                Alan Luciano
              </p>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "#878787",
                }}
              >
                Niño
              </p>
            </div>
          </section>

          <div>
            {/* EDIT BUTTON */}
            <button
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "10px",
                background: "#FBBF13",
                color: "white",
                border: "none",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <EditIcon />
            </button>

            {/* DELETE BUTTON */}
            <button
              style={{
                marginLeft: "0.5rem",
                width: "35px",
                height: "35px",
                borderRadius: "10px",
                background: "#D32F2F",
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
        </div>

        {/* PARTICIPANT #2 */}
        <div
          style={{
            display: "flex",
            marginLeft: "2rem",
            marginRight: "2rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            justifyContent: "space-between",
          }}
        >
          <section
            style={{
              fontFamily: "Imprima",
              marginLeft: "1rem",
              marginTop: "auto",
              marginBottom: "auto",
              display: "flex",
            }}
          >
            <img
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                border: "1px solid #D9D9D9",
              }}
              src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk5NDc2NTQ1MDM3ODA0OTU4/the-effects-of-a-father-on-a-daughters-life.png"
              alt=""
            />
            <div
              style={{
                marginLeft: "1rem",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "#FB9825",
                }}
              >
                Roberto
              </p>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "#878787",
                }}
              >
                Familiar - Padre
              </p>
            </div>
          </section>

          <div>
            {/* EDIT BUTTON */}
            <button
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "10px",
                background: "#FBBF13",
                color: "white",
                border: "none",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <EditIcon />
            </button>

            {/* DELETE BUTTON */}
            <button
              style={{
                marginLeft: "0.5rem",
                width: "35px",
                height: "35px",
                borderRadius: "10px",
                background: "#D32F2F",
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
        </div>
      </Box>

      <Box
        sx={{
          position: "fixed",
          width: "100%",
          display: "flex",
          height: "35vh",
          alignItems: "end",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            background: "#AFAFAF",
            borderRadius: "10px",
          }}
          // onClick={handleOpen}
          className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
        >
          Cancelar
        </button>
        <button
          style={{
            borderRadius: "10px",
          }}
          className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
        >
          Guardar
        </button>
      </Box>

      {/* MODAL */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              fontFamily: "Happy_Monkey",
              fontSize: "24px",
              color: "#FB9825",
              textAlign: "center",
            }}
            id="modal-modal-title"
            component="h2"
          >
            Nuevo
          </Typography>
          <div
            style={{
              marginTop: "2rem",
            }}
          >
            {/* NIÑO */}
            <button
              onClick={handleAddBaby}
              style={{
                display: "flex",
                border: "none",
                background: "none",
              }}
            >
              <ChildCareIcon
                style={{
                  width: "45px",
                  height: "45px",
                  color: "#FBBF13",
                }}
              />
              <p
                style={{
                  marginBottom: "auto",
                  marginTop: "auto",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Happy_Monkey",
                }}
              >
                Niño
              </p>
            </button>

            {/* FAMILIAR */}
            <button
              onClick={handleAddMember}
              style={{
                display: "flex",
                border: "none",
                background: "none",
              }}
            >
              <PersonOutlineOutlinedIcon
                style={{
                  width: "45px",
                  height: "45px",
                  color: "#1E88E5",
                }}
              />
              <p
                style={{
                  marginBottom: "auto",
                  marginTop: "auto",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Happy_Monkey",
                }}
              >
                Familiar
              </p>
            </button>

            {/* NIÑERAA */}
            <button
              onClick={handleAddBabySister}
              style={{
                display: "flex",
                border: "none",
                background: "none",
              }}
            >
              <Face3Icon
                style={{
                  width: "45px",
                  height: "45px",
                  color: "#8EBD60",
                }}
              />
              <p
                style={{
                  marginBottom: "auto",
                  marginTop: "auto",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Happy_Monkey",
                }}
              >
                Niñera
              </p>
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default EditFamily;
