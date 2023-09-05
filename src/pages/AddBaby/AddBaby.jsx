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
} from "@mui/material";
import "./AddBaby.scss";
import { useState } from "react";

function AddBaby() {
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
    borderRadius: '10px',
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
        <h1 className="newFamily__title">Agregar Niño</h1>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            color: "#7F8C8D",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Ingrese datos del niño
        </Typography>

        <Button
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            background: "none",
            boxShadow: "none",
          }}
          component="label"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="99"
              height="99"
              rx="9.5"
              fill="white"
              stroke="#AFAFAF"
            />
            <path
              d="M49.9989 44.375C53.4524 44.375 56.2496 42.2773 56.2496 39.6875C56.2496 37.0977 53.4524 35 49.9989 35C46.5454 35 43.7482 37.0977 43.7482 39.6875C43.7482 42.2773 46.5454 44.375 49.9989 44.375ZM45.8266 58.9531L47.8268 57.0781L43.0216 54.0781L39.4352 57.4414C38.5445 58.2734 38.5211 59.457 39.3727 60.3125L43.1231 64.0625C43.7404 64.6777 44.678 65 45.6234 65C46.2719 65 46.9361 64.8477 47.4986 64.5312C48.8816 63.7578 49.1551 62.2871 48.1237 61.25L45.8266 58.9531ZM56.9763 54.0781L52.171 57.0781L54.1713 58.9531L51.8741 61.25C50.8428 62.2871 51.1162 63.7578 52.4992 64.5312C53.0618 64.8477 53.7181 65 54.3744 65C55.3277 65 56.2653 64.6777 56.8747 64.0625L60.6251 60.3125C61.4768 59.457 61.4534 58.2734 60.5626 57.4414L56.9763 54.0781ZM64.4303 43.4961C63.438 42.4355 61.4924 42.1836 60.0782 42.9219L56.906 44.5918C52.7883 46.7598 47.2017 46.7598 43.0919 44.5918L39.9197 42.9277C38.5054 42.1836 36.5599 42.4414 35.5676 43.4961C34.5753 44.5566 34.9191 46.0156 36.3255 46.7598L39.4977 48.4297C40.826 49.127 42.2637 49.6543 43.7482 50.0645V51.875H56.2496V50.0703C57.7342 49.6602 59.1718 49.1328 60.5001 48.4355L63.6724 46.7656C65.0866 46.0156 65.4226 44.5566 64.4303 43.4961Z"
              fill="#D9D9D9"
            />
            <g clipPath="url(#clip0_94_11)">
              <path
                d="M85.9496 84.2949L89.4502 87.4454L81.8489 94.2865L78.7279 94.5966C78.31 94.6382 77.957 94.3202 78.0035 93.9442L78.3508 91.1333L85.9496 84.2949ZM91.6152 83.8258L89.9716 82.3466C89.4589 81.8851 88.6274 81.8851 88.1147 82.3466L86.5684 83.7382L90.0689 86.8887L91.6152 85.497C92.1279 85.0354 92.1279 84.2873 91.6152 83.8258Z"
                fill="#6E6F6B"
                fillOpacity="0.57"
              />
            </g>
            <defs>
              <clipPath id="clip0_94_11">
                <rect
                  width="14"
                  height="12.6"
                  fill="white"
                  transform="translate(78 82)"
                />
              </clipPath>
            </defs>
          </svg>

          <input type="file" hidden />
        </Button>
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
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <TextField
          label="Fecha de Nacimiento"
          type="date"
          placeholder="20/08/2023"
          sx={{
            width: "320px",
            marginX: "1rem",
            marginBottom: "35px",
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
      </Box>

      <FormControl
        sx={{
          border: "1px solid #d4cfcf",
          width: "320px",
          display: "flex",
          justifyContent: "center",
          marginX: "auto",
          borderTopLeftRadius: "2rem",
          borderBottomLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
          borderBottomRightRadius: "2rem",
          marginBottom: "35px",
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
        <FormLabel
          sx={{
            marginX: "1rem",
            fontSize: "12px",
            position: "absolute",
            top: "-14px",
            color: "#FB9825",
          }}
          id="demo-controlled-radio-buttons-group"
        >
          Género
        </FormLabel>
        <RadioGroup
          sx={{
            marginX: "auto",
            flexDirection: "row",
            color: "#FB9825",
          }}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          // value={value}
          // onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Femenino"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Masculino"
          />
        </RadioGroup>
      </FormControl>

      {/* MEDICAMENTOS Y VITAMINAS */}
      <FormControl
        sx={{
          border: "1px solid #d4cfcf",
          width: "320px",
          display: "flex",
          justifyContent: "center",
          marginX: "auto",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem",
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
        <Typography
          sx={{
            marginX: "1rem",
            fontSize: "12px",
            position: "absolute",
            top: "-1.3rem",
            color: "#FB9825",
          }}
        >
          Medicamentos y Vitaminas
        </Typography>
        {/* VITAMINA */}
        <Box
          sx={{
            background: "#D9D9D938",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            marginX: "1rem",
            marginY: "0.5rem",
          }}
        >
          <Typography
            sx={{
              alignContent: "center",
              marginTop: "5px",
              marginX: "1rem",
            }}
          >
            Vitamina C - 0,6 ml
          </Typography>
          <Button>
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_94_18)">
                <path
                  d="M11.4357 10L16.0732 6.09102C16.6423 5.61133 16.6423 4.83359 16.0732 4.35352L15.0425 3.48477C14.4734 3.00508 13.5508 3.00508 12.9812 3.48477L8.34375 7.39375L3.70627 3.48477C3.13719 3.00508 2.21451 3.00508 1.64497 3.48477L0.614313 4.35352C0.0452291 4.8332 0.0452291 5.61094 0.614313 6.09102L5.25179 10L0.614313 13.909C0.0452291 14.3887 0.0452291 15.1664 0.614313 15.6465L1.64497 16.5152C2.21405 16.9949 3.13719 16.9949 3.70627 16.5152L8.34375 12.6062L12.9812 16.5152C13.5503 16.9949 14.4734 16.9949 15.0425 16.5152L16.0732 15.6465C16.6423 15.1668 16.6423 14.3891 16.0732 13.909L11.4357 10Z"
                  fill="#DB4B4B"
                />
              </g>
              <defs>
                <clipPath id="clip0_94_18">
                  <rect
                    width="16.3125"
                    height="20"
                    fill="white"
                    transform="translate(0.1875)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </Box>

        {/* HIERRO */}
        <Box
          sx={{
            background: "#D9D9D938",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            marginX: "1rem",
            marginY: "0.5rem",
          }}
        >
          <Typography
            sx={{
              alignContent: "center",
              marginTop: "5px",
              marginX: "1rem",
            }}
          >
            Hierro - 0,6 ml
          </Typography>
          <Button>
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_94_18)">
                <path
                  d="M11.4357 10L16.0732 6.09102C16.6423 5.61133 16.6423 4.83359 16.0732 4.35352L15.0425 3.48477C14.4734 3.00508 13.5508 3.00508 12.9812 3.48477L8.34375 7.39375L3.70627 3.48477C3.13719 3.00508 2.21451 3.00508 1.64497 3.48477L0.614313 4.35352C0.0452291 4.8332 0.0452291 5.61094 0.614313 6.09102L5.25179 10L0.614313 13.909C0.0452291 14.3887 0.0452291 15.1664 0.614313 15.6465L1.64497 16.5152C2.21405 16.9949 3.13719 16.9949 3.70627 16.5152L8.34375 12.6062L12.9812 16.5152C13.5503 16.9949 14.4734 16.9949 15.0425 16.5152L16.0732 15.6465C16.6423 15.1668 16.6423 14.3891 16.0732 13.909L11.4357 10Z"
                  fill="#DB4B4B"
                />
              </g>
              <defs>
                <clipPath id="clip0_94_18">
                  <rect
                    width="16.3125"
                    height="20"
                    fill="white"
                    transform="translate(0.1875)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </Box>

        <input
          className="AddBaby__inputDefault"
          placeholder="Nombre"
          type="text"
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <input
            className="AddBaby__inputDefaultCantidad"
            placeholder="Cantidad"
            type="text"
          />
          <select
            name="unidad"
            className="AddBaby__inputDefaultCantidadUnidad"
            id=""
          >
            <option value="ml">ml</option>
          </select>
          <Button
            sx={{
              height: "35px",
              width: "35px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <svg
              className="AddBaby__add"
              width="25"
              height="25"
              viewBox="0 0 21 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.41549 25.2386V9.14773H10.4837V25.2386H6.41549ZM0.40413 19.2273V15.1591H16.495V19.2273H0.40413Z"
                fill="#FFFDFD"
              />
            </svg>
          </Button>
        </Box>
      </FormControl>

      {/* Enfermedades y Alergias */}
      <FormControl
        sx={{
          border: "1px solid #d4cfcf",
          width: "320px",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          marginX: "auto",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem",
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
        <Typography
          sx={{
            marginX: "1rem",
            fontSize: "12px",
            position: "absolute",
            top: "-1.3rem",
            color: "#FB9825",
          }}
        >
          Enfermedades y Alergias
        </Typography>
        {/* Sensibilidad al Hipoglós */}
        <Box
          sx={{
            background: "#D9D9D938",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            marginX: "1rem",
            marginY: "0.5rem",
          }}
        >
          <Typography
            sx={{
              alignContent: "center",
              marginTop: "5px",
              marginX: "1rem",
            }}
          >
            Sensibilidad al Hipoglós
          </Typography>
          <Button>
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_94_18)">
                <path
                  d="M11.4357 10L16.0732 6.09102C16.6423 5.61133 16.6423 4.83359 16.0732 4.35352L15.0425 3.48477C14.4734 3.00508 13.5508 3.00508 12.9812 3.48477L8.34375 7.39375L3.70627 3.48477C3.13719 3.00508 2.21451 3.00508 1.64497 3.48477L0.614313 4.35352C0.0452291 4.8332 0.0452291 5.61094 0.614313 6.09102L5.25179 10L0.614313 13.909C0.0452291 14.3887 0.0452291 15.1664 0.614313 15.6465L1.64497 16.5152C2.21405 16.9949 3.13719 16.9949 3.70627 16.5152L8.34375 12.6062L12.9812 16.5152C13.5503 16.9949 14.4734 16.9949 15.0425 16.5152L16.0732 15.6465C16.6423 15.1668 16.6423 14.3891 16.0732 13.909L11.4357 10Z"
                  fill="#DB4B4B"
                />
              </g>
              <defs>
                <clipPath id="clip0_94_18">
                  <rect
                    width="16.3125"
                    height="20"
                    fill="white"
                    transform="translate(0.1875)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginY: "auto",
            justifyContent: "space-between",
          }}
        >
          <input
            className="AddBaby__inputDefaultEA"
            placeholder="Nombre"
            type="text"
          />
          <button className="AddBaby__btnDefault">
            <svg
              className="AddBaby__addEA"
              width="25"
              height="25"
              viewBox="0 0 21 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.41549 25.2386V9.14773H10.4837V25.2386H6.41549ZM0.40413 19.2273V15.1591H16.495V19.2273H0.40413Z"
                fill="#FFFDFD"
              />
            </svg>
          </button>
        </Box>
      </FormControl>

      <FormControl
        sx={{
          width: "320px",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          marginX: "auto",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem",
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
        <Typography
          sx={{
            marginX: "1rem",
            fontSize: "12px",
            position: "absolute",
            top: "-1.5rem",
            color: "#FB9825",
          }}
        >
          Notas
        </Typography>
        <textarea
          className="AddBaby__textArea"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
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
      </FormControl>

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
              marginX: '3rem',
              marginY: '1rem',
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
    </>
  );
}

export default AddBaby;
