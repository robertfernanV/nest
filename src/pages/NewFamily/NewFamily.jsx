import "./newFamily.scss";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import { Modal, Typography } from "@mui/material";
import { useState } from "react";

function NewFamily() {
  window.scrollTo(0, 0);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBack = () => {
    navigate("/familyList");
  };

  const handleNewFamily = () => {
    navigate("/createNewFamily");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 25%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: "2rem 2rem 0rem 0rem",
    p: 4,
  };
  return (
    <>
      <Box>
        <button onClick={handleBack} className="newFamily__previousBtn">
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
        <h1 className="newFamily__title">Nueva Familia</h1>
      </Box>

      <div className="newFamily__container">
        {/* CREAR UNA FAMILIA */}
        <CardContent
          sx={{
            textAlign: "center",
            borderRadius: "40px",
            paddingY: "4rem",
            paddingX: "1rem",
            marginX: "1rem",
            marginY: "2rem",
            boxShadow: "0px 4px 4px 0px #00000040",
            background: "white",
            border: "1px solid #FB9825",
          }}
        >
          <button onClick={handleNewFamily} className="NewFamily__btnDefault">
            <svg
              width="99"
              height="100"
              viewBox="0 0 99 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.511963"
                width="97.5598"
                height="100"
                rx="10"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_79_241"
                    transform="matrix(0.00589088 0 0 0.00574713 -0.354177 0)"
                  />
                </pattern>
                <image
                  id="image0_79_241"
                  width="290"
                  height="174"
                  xlinkHref="data:image/jpeg;base64,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"
                />
              </defs>
            </svg>
            <p className="newFamily__textCard">Crear Nueva Familia</p>
          </button>
        </CardContent>

        {/* UNIRSE A UNA FAMILIA */}
        <CardContent
          sx={{
            textAlign: "center",
            borderRadius: "40px",
            paddingY: "3rem",
            paddingX: "1rem",
            marginX: "1rem",
            marginY: "2rem",
            boxShadow: "0px 4px 4px 0px #00000040",
            background: "white",
            border: "1px solid #FB9825",
          }}
        >
          <button onClick={handleOpen} className="NewFamily__btnDefault">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="100" height="100" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_79_242"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_79_242"
                  width="128"
                  height="128"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <p className="newFamily__textCard">Unirse a Familia</p>
          </button>
        </CardContent>
      </div>

      {/* CANCEL CONFIRM */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingrese el código de la familia
          </Typography>
          <input placeholder="4HD56K" className="NewFamily__inputUnirse" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button
              onClick={handleClose}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              Cancelar
            </button>
            <button className="createNewFamily__saveCancelBtn createNewFamily__save">
              Enviar Solicitud
            </button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default NewFamily;
