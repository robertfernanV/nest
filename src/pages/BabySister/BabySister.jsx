import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import { Card } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "1px solid #FB9825",
  p: 4,
};

const BabySister = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // FIN
  const [openFin, setOpenFin] = useState(false);
  const handleOpenFin = () => setOpenFin(true);
  const handleCloseFin = () => setOpenFin(false);

  // ACUERDOS
  const [openAcuerdos, setOpenAcuerdos] = useState(false);
  const handleOpenAcuerdos = () => setOpenAcuerdos(true);
  const handleCloseAcuerdos = () => setOpenAcuerdos(false);

  const handleBabySisterSelect = () => {
    navigate(`/selectBabySister/${20}`)
  }

  return (
    <>
      <NavBar menuTitle={"NIÑERA"} backgroundProp={"#FFEEDA"} />
      <>
        <Card
          sx={{
            top: "60px",
            position: "fixed",
            width: "100%",
            background: "#FFEEDA",

            paddingX: "0.5rem",
            paddingTop: "1rem",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div style={{ display: "flex" }}>
            <button
            onClick={handleBabySisterSelect}
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
                background: "#FFFFFF",
                borderRadius: "10px",
                padding: "1rem",
                border: "1px solid #D9D9D9",
              }}
            >
              <svg
                style={{}}
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.9167 39.0663C64.9167 37.1111 63.9865 35.1434 62.1948 34.0997C62.6021 32.0695 62.9011 29.7205 62.9011 27.0851C62.9 15.6257 54.7136 2.08301 33.6667 2.08301C12.6177 2.08301 4.43335 15.6257 4.43335 27.0851C4.43335 29.7195 4.73231 32.0674 5.1396 34.0976C3.34481 35.1413 2.41669 37.1111 2.41669 39.0663C2.41669 41.2559 3.58856 43.4528 5.83023 44.3559C3.38544 48.9622 2.35315 55.5778 4.90731 60.2455C6.01252 62.2653 16.0521 68.7028 19.3865 60.6018C23.199 62.4101 27.9375 63.5476 33.6667 63.5476C39.3959 63.5476 44.1323 62.4101 47.9448 60.6018C51.2813 68.7028 61.3198 62.2663 62.4261 60.2455C64.9771 55.5788 63.9459 48.9643 61.5 44.3559C63.7427 43.4528 64.9167 41.257 64.9167 39.0663ZM33.6771 6.24967C49.0927 6.24967 59.3729 14.584 59.3729 25.0018C59.3729 25.0018 56.2886 9.37572 33.6771 9.37572C11.0656 9.37572 6.9521 25.0018 6.9521 25.0018C6.9521 14.584 18.2594 6.24967 33.6771 6.24967ZM58.199 42.7122V43.7538C58.199 51.1091 50.5875 61.4643 33.6667 61.4643C16.7438 61.4643 9.13231 51.1091 9.13231 43.7538V42.7122H8.12502C5.57398 42.7122 4.43231 40.8809 4.43231 39.0663C4.43231 37.2518 5.57398 35.4205 8.12502 35.4205H8.31669L8.49585 35.3476C8.59169 35.309 17.2729 31.632 17.1792 20.8507C27.049 30.407 52.7386 32.0205 58.199 32.259V35.4216H59.2084C61.7573 35.4216 62.9011 37.2528 62.9011 39.0674C62.9011 40.882 61.7573 42.7132 59.2084 42.7132L58.199 42.7122Z"
                  fill="#FB9825"
                />
                <path
                  d="M46.6875 43.2331C49.564 43.2331 51.8958 40.9012 51.8958 38.0247C51.8958 35.1483 49.564 32.8164 46.6875 32.8164C43.811 32.8164 41.4792 35.1483 41.4792 38.0247C41.4792 40.9012 43.811 43.2331 46.6875 43.2331Z"
                  fill="#FB9825"
                />
                <path
                  d="M20.6458 43.2331C23.5223 43.2331 25.8542 40.9012 25.8542 38.0247C25.8542 35.1483 23.5223 32.8164 20.6458 32.8164C17.7694 32.8164 15.4375 35.1483 15.4375 38.0247C15.4375 40.9012 17.7694 43.2331 20.6458 43.2331Z"
                  fill="#FB9825"
                />
                <path
                  d="M42.0938 50.136C36.6615 53.886 30.6354 53.8631 25.2375 50.136C24.5906 49.686 24.0042 50.4631 24.4438 51.1839C26.0854 53.8631 29.4104 56.2537 33.6646 56.2537C37.9208 56.2537 41.2448 53.8631 42.8875 51.1839C43.3302 50.4631 42.7448 49.686 42.0938 50.136Z"
                  fill="#FB9825"
                />
              </svg>
            </button>
            <section>
              <p
                style={{
                  fontFamily: "Happy_Monkey",
                  fontSize: "20px",
                  marginBottom: "0.5rem",
                  marginTop: "0px",
                  color: "#E67E22",
                }}
              >
                Angie Catamarca
              </p>
              <button
              onClick={handleOpenAcuerdos}
                style={{
                  fontFamily: "Happy_Monkey",
                  border: "none",
                  marginBottom: "0.5rem",
                  background: "transparent",
                  textDecoration: "underline",
                  color: "#5B5B5B",
                }}
              >
                Acuerdos
              </button>
              <br />
              <button
                style={{
                  fontFamily: "Happy_Monkey",
                  border: "none",
                  marginBottom: "0.5rem",
                  background: "transparent",
                  textDecoration: "underline",
                  color: "#5B5B5B",
                }}
              >
                Pagos
              </button>
            </section>
          </div>

          {/* TIME/DAYS */}
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Inter",
              textAlign: "center",
            }}
          >
            <strong style={{ marginLeft: "1rem" }}>17</strong>{" "}
            <span style={{ fontFamily: "Happy_Monkey" }}> Días/</span>
            <strong style={{ marginLeft: "1rem" }}>136</strong>
            <span style={{ fontFamily: "Happy_Monkey" }}> Horas/ </span>
            <strong style={{ marginLeft: "1rem" }}>7</strong>
            <span style={{ fontFamily: "Happy_Monkey" }}> horas extras </span>
          </p>
        </Card>

        {/* FIXED BAR - DOWN */}
        <div
          style={{
            position: "fixed",
            bottom: "3rem",
            padding: "0.5rem 0.5rem 0.5rem 0.5rem",
            width: "100%",
            height: "40px",
            background: "#FFFFFF",
            border: "1px solid #D32F2F",
          }}
        >
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                Inicio:{" "}
                <span
                  style={{ fontWeight: "lighter", fontFamily: "Happy_Monkey" }}
                >
                  8:00
                </span>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                Acumulado:{" "}
                <span
                  style={{ fontWeight: "lighter", fontFamily: "Happy_Monkey" }}
                >
                  5:43 h
                </span>
              </p>
            </div>
            <button
              onClick={handleOpenFin}
              style={{
                position: "relative",
                top: "0.3rem",
                background: "#D32F2F",
                boxShadow: "0px 4px 4px 0px #00000040",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontFamily: "Happy_Monkey",
                color: "#FFFFFF",
                width: "79px",
                height: "30px",
                marginRight: "2rem",
              }}
            >
              Fin
            </button>
          </section>
        </div>
      </>
      <Menu />

      <hr
        style={{
          border: "none",
          paddingBottom: "10rem",
        }}
      />
      <div
        style={{
          display: "flex",
          fontFamily: "Inder",
          justifyContent: "space-around",
        }}
      >
        <p style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          Control de horas
        </p>
        <select
          style={{
            border: "1px solid #D9D9D9",
            borderRadius: "5px",
            width: "132px",
            height: "30px",
            fontSize: "16px",
            fontFamily: "Inter",
            color: "#878787",
            margin: "auto",
          }}
          name=""
          id=""
        >
          <option value="Enero">Enero</option>
          <option value="Febrero">Febrero</option>
          <option value="Marzo">Marzo</option>
          <option value="Abril">Abril</option>
          <option value="Mayo">Mayo</option>
          <option value="Junio">Junio</option>
          <option value="Julio">Julio</option>
          <option value="Agosto">Agosto</option>
          <option value="Septiembre">Septiembre</option>
          <option value="Octubre">Octubre</option>
          <option value="Noviembre">Noviembre</option>
          <option value="Diciembre">Diciembre</option>
        </select>
        <button style={{ border: "none", background: "transparent" }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1896 9.52082L19.2411 5.06719C17.8314 3.79836 17.1265 3.16393 16.2615 2.83203L16.25 6.25014C16.25 9.19642 16.25 10.6696 17.1652 11.5848C18.0806 12.5001 19.5537 12.5001 22.5 12.5001H26.9751C26.5219 11.6199 25.7105 10.8896 24.1896 9.52082Z"
              fill="#878787"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 27.5H17.5C22.214 27.5 24.5711 27.5 26.0355 26.0355C27.5 24.5711 27.5 22.214 27.5 17.5V16.9536C27.5 15.8626 27.5 15.043 27.4467 14.3751H22.5H22.3814C21.01 14.3752 19.7981 14.3754 18.8211 14.244C17.7622 14.1016 16.7035 13.7747 15.8395 12.9106C14.9754 12.0466 14.6485 10.9878 14.5061 9.92895C14.3747 8.95205 14.3749 7.74009 14.375 6.36871L14.3865 2.82571C14.3869 2.72266 14.3957 2.62074 14.4125 2.52082C13.9017 2.5 13.2947 2.5 12.5373 2.5C7.79836 2.5 5.42894 2.5 3.96446 3.96446C2.5 5.42894 2.5 7.78595 2.5 12.5V17.5C2.5 22.214 2.5 24.5711 3.96446 26.0355C5.42894 27.5 7.78595 27.5 12.5 27.5ZM9.9838 23.809C10.3444 24.147 10.9056 24.147 11.2662 23.809L13.7662 21.4652C14.1439 21.1111 14.1631 20.5177 13.809 20.14C13.4549 19.7624 12.8615 19.7431 12.4838 20.0972L11.5625 20.961V16.875C11.5625 16.3572 11.1428 15.9375 10.625 15.9375C10.1072 15.9375 9.6875 16.3572 9.6875 16.875V20.961L8.7662 20.0972C8.38846 19.7431 7.79519 19.7624 7.44106 20.14C7.08694 20.5177 7.10608 21.1111 7.4838 21.4652L9.9838 23.809Z"
              fill="#878787"
            />
          </svg>
        </button>
      </div>

      {/* CONTENIDO */}
      <div
        onClick={handleOpen}
        style={{
          display: "flex",
          marginRight: "1rem",
          marginLeft: "1rem",
          borderRadius: "10px",
          border: "1px solid #D9D9D9",
          background: "white",
          padding: "5px",
          marginBottom: "0.5rem",
        }}
      >
        {/* 1 DIV */}
        <div
          style={{
            width: "40px",
            textAlign: "center",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "32px",
              fontFamily: "Happy_Monkey",
              color: "#FB9825",
            }}
          >
            22
          </p>
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "16px",
              fontFamily: "Happy_Monkey",
            }}
          >
            Vie
          </p>
        </div>

        {/* 2 DIV */}
        <div style={{ fontFamily: "Happy_Monkey", width: "100%" }}>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8:00 - 16:00
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8 Horas
            </p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              Sin hora extra
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              -
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginRight: "1rem",
          marginLeft: "1rem",
          borderRadius: "10px",
          border: "1px solid #D9D9D9",
          background: "white",
          padding: "5px",
          marginBottom: "0.5rem",
        }}
      >
        {/* 1 DIV */}
        <div
          style={{
            width: "40px",
            textAlign: "center",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "32px",
              fontFamily: "Happy_Monkey",
              color: "#FB9825",
            }}
          >
            21
          </p>
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "16px",
              fontFamily: "Happy_Monkey",
            }}
          >
            Jue
          </p>
        </div>

        {/* 2 DIV */}
        <div style={{ fontFamily: "Happy_Monkey", width: "100%" }}>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8:00 - 16:00
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8 Horas
            </p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              Sin hora extra
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              -
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginRight: "1rem",
          marginLeft: "1rem",
          borderRadius: "10px",
          border: "1px solid #D9D9D9",
          background: "white",
          padding: "5px",
          marginBottom: "0.5rem",
        }}
      >
        {/* 1 DIV */}
        <div
          style={{
            width: "40px",
            textAlign: "center",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "32px",
              fontFamily: "Happy_Monkey",
              color: "#FB9825",
            }}
          >
            20
          </p>
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "16px",
              fontFamily: "Happy_Monkey",
            }}
          >
            Mie
          </p>
        </div>

        {/* 2 DIV */}
        <div style={{ fontFamily: "Happy_Monkey", width: "100%" }}>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8:00 - 16:00
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8 Horas
            </p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              Sin hora extra
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              -
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginRight: "1rem",
          marginLeft: "1rem",
          borderRadius: "10px",
          border: "1px solid #D9D9D9",
          background: "white",
          padding: "5px",
          marginBottom: "0.5rem",
        }}
      >
        {/* 1 DIV */}
        <div
          style={{
            width: "40px",
            textAlign: "center",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "32px",
              fontFamily: "Happy_Monkey",
              color: "#FB9825",
            }}
          >
            19
          </p>
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "16px",
              fontFamily: "Happy_Monkey",
            }}
          >
            Mar
          </p>
        </div>

        {/* 2 DIV */}
        <div style={{ fontFamily: "Happy_Monkey", width: "100%" }}>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8:00 - 16:00
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              8 Horas
            </p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              Sin hora extra
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              -
            </p>
          </section>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          paddingBottom: "8.15rem",
        }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3
            style={{
              fontSize: "24px",
              fontFamily: "Inder",
              textAlign: "center",
              color: "#FB9825",
              fontWeight: "lighter",
              marginTop: "0px",
            }}
          >
            22/sep/2023
          </h3>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                fontFamily: "Inder",
                fontSize: "20px",
                marginBottom: "0px",
              }}
            >
              8:00 - 16:00
            </p>
            <p
              style={{
                fontFamily: "Inder",
                fontSize: "20px",
                marginBottom: "0px",
              }}
            >
              Sin cobrar
            </p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                fontFamily: "Inder",
                fontSize: "20px",
                marginBottom: "0px",
              }}
            >
              Sin hora extra
            </p>
            <p
              style={{
                fontFamily: "Inder",
                fontSize: "20px",
                marginBottom: "0px",
              }}
            >
              -
            </p>
          </section>
        </Box>
      </Modal>

      {/* MODAL - BTN FIN */}
      <Modal
        open={openFin}
        onClose={handleCloseFin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3
            style={{
              fontSize: "20px",
              fontFamily: "Inder",
              textAlign: "center",
              color: "#D32F2F",
              fontWeight: "lighter",
              marginTop: "0px",
            }}
          >
            ¿Quiere finalizar jornada laboral?
          </h3>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="3" fill="#FBBF13" />
              <path
                d="M18.2637 23.8392C17.8312 24.272 17.6137 24.8007 17.6137 25.4277C17.6137 26.1052 17.86 26.6745 18.3512 27.1355C18.805 27.5609 19.35 27.7736 19.9875 27.7736C20.6387 27.7736 21.2012 27.5425 21.67 27.0777C22.1387 26.613 22.3725 26.0597 22.3725 25.4179C22.3725 24.7982 22.145 24.2585 21.6912 23.7974C21.2375 23.329 20.69 23.0954 20.0525 23.0954C19.3437 23.0941 18.7475 23.3425 18.2637 23.8392ZM17.9887 13.9195C17.615 14.474 17.43 15.1626 17.43 15.9839C17.43 16.654 17.545 17.3929 17.775 18.1995C18.005 19.006 18.3187 19.7622 18.7137 20.4691C19.2487 21.4269 19.6637 21.9064 19.9562 21.9064C20.2562 21.9064 20.6525 21.5314 21.1425 20.7827C21.575 20.12 21.92 19.3663 22.18 18.5191C22.44 17.672 22.57 16.8814 22.57 16.1462C22.57 15.0372 22.265 14.179 21.6575 13.574C21.2037 13.113 20.6512 12.8818 20 12.8818C19.1212 12.8818 18.45 13.2286 17.9887 13.9195Z"
                fill="white"
              />
            </svg>
            <p style={{ marginTop: "0px", marginBottom: "0px", marginLeft: '1rem', fontFamily: 'Inder', fontSize: '16px', textAlign: 'center' }}>
              Aún tiene tareas sin finalizar, el sistema las descartará.
            </p>
          </section>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: '2rem'
            }}
          >
            <button
              onClick={handleCloseFin}
              style={{
                borderRadius: "10px",
                fontFamily: 'Inder',
                fontSize: '20px',
                fontWeight: 'lighter',
                background: "#AFAFAF",
                boxShadow: '0px 4px 4px 0px #00000040',
                marginBottom: '0px'
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              No, Cancelar
            </button>
            <button
              style={{
                borderRadius: "10px",
                fontFamily: 'Inder',
                fontSize: '20px',
                fontWeight: 'lighter',
                background: "#D32F2F",
                boxShadow: '0px 4px 4px 0px #00000040',
                marginBottom: '0px'
              }}
              className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
            >
              Sí, Finalizar
            </button>
          </Box>
        </Box>
      </Modal>




       {/* MODAL - ACUERDOS */}
       <Modal
        open={openAcuerdos}
        onClose={handleCloseAcuerdos}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3
            style={{
              fontSize: "20px",
              fontFamily: "Inder",
              textAlign: "center",
              color: "#D32F2F",
              fontWeight: "lighter",
              marginTop: "0px",
            }}
          >
            Ingrese la clave del grupo familiar
          </h3>
          <input style={{width: '290px', height: '40px', borderRadius: '10px', border: '1px solid #D32F2F', fontSize: '20px', fontFamily: 'Inder', color: '#D32F2F', paddingLeft: '1rem'}} type="password" />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: '2rem'
            }}
          >
            <button
              onClick={handleCloseAcuerdos}
              style={{
                borderRadius: "10px",
                fontFamily: 'Inder',
                fontSize: '20px',
                fontWeight: 'lighter',
                background: "#AFAFAF",
                boxShadow: '0px 4px 4px 0px #00000040',
                marginBottom: '0px'
              }}
              className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
            >
              Cancelar
            </button>
            <button
            onClick={() => navigate('/babySisterAcuerdos')}
              style={{
                borderRadius: "10px",
                fontFamily: 'Inder',
                fontSize: '20px',
                fontWeight: 'lighter',
                background: "#D32F2F",
                boxShadow: '0px 4px 4px 0px #00000040',
                marginBottom: '0px'
              }}
              className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
            >
              Continuar
            </button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BabySister;
