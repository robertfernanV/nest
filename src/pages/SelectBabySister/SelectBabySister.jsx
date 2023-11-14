import Box from "@mui/material/Box";
import { TextField, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function SelectBabySister() {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  let { babySisterId } = useParams();


  const editFamily = (e) => {
    console.log(e.target);
  };

  const handleBack = () => {
    history.back();
  };

  const handleEdit = () => {
    navigate(`/editBaby/${'200'}`)
  }

  const deleteFamily = (e) => {
    console.log(e.target);
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
        <h1 className="newFamily__title">NIÑERA: {babySisterId}</h1>
      </Box>
      {/* IMAGE */}
      <Box
        sx={{
          marginY: "2rem",
          textAlign: "center",
        }}
      >
        <svg
                style={{}}
                width="100"
                height="100"
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
      </Box>
      <center>
        <h3
          style={{
            fontFamily: "Imprima",
            fontSize: "20px",
            color: "#FB9825",
          }}
        >
          Perfil
        </h3>
      </center>
      {/* TEXT CONTENT */}
      <Box
        sx={{
          width: "300px",
          textAlign: "left",
          fontFamily: "Imprima",
          fontSize: "16px",
          marginX: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Fecha de nacimiento:
          </Typography>
          <span>04/Nov/1992</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",

              fontFamily: "Imprima",
            }}
          >
            Edad:
          </Typography>
          <span>31 Años</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",

              fontFamily: "Imprima",
            }}
          >
            Género:
          </Typography>
          <span>Femenino</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Celular:
          </Typography>
          <span
            style={{
              width: "150px",
              textAlign: 'right'
            }}
          >
            0412-25410254
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Correo:
          </Typography>
          <span
            style={{
              width: "150px",
              textAlign: 'right',
              textDecoration: 'underline'
            }}
          >
            agie@gmail.com
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Dirección:
          </Typography>
          <span
            style={{
              width: "150px",
              textAlign: 'right',
            }}
          >
            Calle XX. Final XX. Urb XX
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #ECEFF1",
            borderBottom: "1px solid #ECEFF1",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "orange",
              fontFamily: "Imprima",
            }}
          >
            Contacto de emergencia:
          </Typography>
          <span
            style={{
              width: "150px",
              textAlign: 'right',
            }}
          >
            0424-249582405
          </span>
        </div>
       
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={handleBack}
          className="createNewFamily__saveCancelBtn createNewFamily__save selectBaby__aceptar"
          style={{
            background: '#AFAFAF'
          }}
        >
          Cancelar
        </button>
        <button
          onClick={handleBack}
          className="createNewFamily__saveCancelBtn createNewFamily__save selectBaby__aceptar"
        >
          Aceptar
        </button>
      </Box>
    </>
  );
}

export default SelectBabySister;
