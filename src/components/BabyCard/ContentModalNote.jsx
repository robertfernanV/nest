import { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import "./ContentModal.scss";

function ContentModalNote() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #FB9825",
    boxShadow: 24,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* BIBERÓN */}
      <>
        {/* HORA */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "85px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                stroke="#FB9825"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                stroke="#FB9825"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="contentModal__text">Hora: </p>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              9:00am
            </Typography>
          </Box>
        </Box>

        {/* CUIDADORA */}
        <Box
          sx={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "120px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0917 10.5917C13.9087 9.94891 14.505 9.06746 14.7977 8.06997C15.0904 7.07249 15.0649 6.00858 14.7248 5.02625C14.3847 4.04391 13.7469 3.19202 12.9001 2.58907C12.0532 1.98612 11.0395 1.66211 10 1.66211C8.96045 1.66211 7.94676 1.98612 7.09994 2.58907C6.25312 3.19202 5.61528 4.04391 5.27517 5.02625C4.93506 6.00858 4.90959 7.07249 5.2023 8.06997C5.49501 9.06746 6.09134 9.94891 6.90833 10.5917C5.5084 11.1526 4.2869 12.0828 3.37407 13.2833C2.46125 14.4838 1.8913 15.9094 1.725 17.4084C1.71296 17.5178 1.72259 17.6285 1.75335 17.7342C1.78411 17.8399 1.83539 17.9386 1.90426 18.0245C2.04335 18.1979 2.24565 18.309 2.46666 18.3334C2.68768 18.3577 2.9093 18.2932 3.08277 18.1541C3.25624 18.015 3.36735 17.8127 3.39166 17.5917C3.57465 15.9627 4.3514 14.4582 5.57351 13.3657C6.79562 12.2732 8.37741 11.6692 10.0167 11.6692C11.6559 11.6692 13.2377 12.2732 14.4598 13.3657C15.6819 14.4582 16.4587 15.9627 16.6417 17.5917C16.6643 17.7965 16.762 17.9856 16.9159 18.1225C17.0698 18.2595 17.269 18.3346 17.475 18.3334H17.5667C17.7851 18.3082 17.9848 18.1978 18.1221 18.0261C18.2595 17.8544 18.3234 17.6353 18.3 17.4167C18.1329 15.9135 17.5599 14.4842 16.6424 13.2819C15.7249 12.0795 14.4974 11.1496 13.0917 10.5917ZM10 10C9.34073 10 8.69626 9.80453 8.1481 9.43825C7.59993 9.07198 7.17269 8.55139 6.9204 7.9423C6.66811 7.33321 6.6021 6.66299 6.73071 6.01639C6.85933 5.36979 7.1768 4.77584 7.64297 4.30967C8.10915 3.84349 8.70309 3.52602 9.3497 3.39741C9.9963 3.26879 10.6665 3.3348 11.2756 3.58709C11.8847 3.83938 12.4053 4.26662 12.7716 4.81479C13.1378 5.36295 13.3333 6.00742 13.3333 6.66669C13.3333 7.55074 12.9821 8.39859 12.357 9.02371C11.7319 9.64883 10.8841 10 10 10Z"
                fill="#FB9825"
              />
            </svg>

            <Typography
              sx={{
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Cuidador:
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Angie
            </Typography>
          </Box>
        </Box>

        {/* NOTA */}
        <Box
          sx={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "85px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66671 4.16667H5.00004C4.55801 4.16667 4.13409 4.34226 3.82153 4.65482C3.50897 4.96738 3.33337 5.39131 3.33337 5.83333V15.8333C3.33337 16.2754 3.50897 16.6993 3.82153 17.0118C4.13409 17.3244 4.55801 17.5 5.00004 17.5H15C15.4421 17.5 15.866 17.3244 16.1786 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333V5.83333C16.6667 5.39131 16.4911 4.96738 16.1786 4.65482C15.866 4.34226 15.4421 4.16667 15 4.16667H13.3334M6.66671 4.16667C6.66671 3.72464 6.8423 3.30072 7.15486 2.98816C7.46742 2.67559 7.89135 2.5 8.33337 2.5H11.6667C12.1087 2.5 12.5327 2.67559 12.8452 2.98816C13.1578 3.30072 13.3334 3.72464 13.3334 4.16667M6.66671 4.16667C6.66671 4.60869 6.8423 5.03262 7.15486 5.34518C7.46742 5.65774 7.89135 5.83333 8.33337 5.83333H11.6667C12.1087 5.83333 12.5327 5.65774 12.8452 5.34518C13.1578 5.03262 13.3334 4.60869 13.3334 4.16667M6.66671 9.16667H13.3334M6.66671 12.5H10"
                stroke="#FB9825"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Typography
              sx={{
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Nota:
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              -
            </Typography>
          </Box>
        </Box>
        {/* SRC CON DESCRIPCIÓN */}
        <Box
          sx={{
            marginX: "auto",
            textAlign: "center",
            marginY: "1rem",
          }}
        >
          <p className="contentModal__titleSrc">La Descrición de la imagen</p>
          <button className="contentModal__btnOpenModal" onClick={handleOpen}>
            <img
              className="contentModal__image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZgpadvnLQBPqEzSM5yQ32yOUqH5tGtEFKpGIiqQ8ReSGPQHn-N8XvxAjHoZ9lBFu_g&usqp=CAU"
              alt=""
            />
          </button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              className="contentModal__imageFull"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZgpadvnLQBPqEzSM5yQ32yOUqH5tGtEFKpGIiqQ8ReSGPQHn-N8XvxAjHoZ9lBFu_g&usqp=CAU"
              alt=""
            />
          </Box>
        </Modal>
        {/* <button className="contentModal__btnAceptar">Aceptar</button> */}
      </>
    </>
  );
}

export default ContentModalNote;
