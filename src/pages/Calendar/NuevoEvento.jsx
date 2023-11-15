import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";

const NuevoEvento = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    history.back();
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
          onClick={handleBack}
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
        <h1 className="newFamily__title">Nuevo Evento</h1>
      </div>

      <hr style={{ border: "none", marginBottom: "5rem" }} />

      <div style={{ textAlign: "center" }}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0691 11.2678C21.7079 6.53393 23.0273 4.16699 25 4.16699C26.9727 4.16699 28.2921 6.53391 30.9309 11.2678L31.6136 12.4925C32.3636 13.8377 32.7384 14.5103 33.3231 14.9541C33.9077 15.3979 34.6356 15.5626 36.0919 15.8921L37.4177 16.1921C42.5419 17.3515 45.1042 17.9312 45.7138 19.8914C46.3234 21.8516 44.5767 23.8943 41.0831 27.9793L40.1794 29.0362C39.1867 30.197 38.6902 30.7774 38.4669 31.4955C38.2438 32.2137 38.3188 32.988 38.4688 34.537L38.6054 35.947C39.1336 41.3974 39.3977 44.1226 37.8019 45.3341C36.2059 46.5455 33.8069 45.4409 29.009 43.232L27.7677 42.6603C26.4044 42.0326 25.7227 41.7187 25 41.7187C24.2773 41.7187 23.5956 42.0326 22.2323 42.6603L20.9911 43.232C16.1931 45.4409 13.7941 46.5455 12.1983 45.3341C10.6024 44.1226 10.8664 41.3974 11.3946 35.947L11.5312 34.537C11.6813 32.988 11.7564 32.2137 11.5331 31.4955C11.3098 30.7774 10.8134 30.197 9.82069 29.0362L8.9169 27.9793C5.42346 23.8943 3.67673 21.8516 4.28632 19.8914C4.8959 17.9312 7.45807 17.3515 12.5824 16.1921L13.9081 15.8921C15.3643 15.5626 16.0924 15.3979 16.677 14.9541C17.2616 14.5103 17.6365 13.8377 18.3864 12.4925L19.0691 11.2678Z"
            fill="#FEE439"
          />
        </svg>
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <TextField
          label="Nombre"
          type="text"
          placeholder="Nombre del evento..."
          sx={{
            width: "320px",
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
        }}
      >
        <TextField
          label="Descripción"
          type="text"
          placeholder="Nombre del evento..."
          sx={{
            width: "320px",
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

      <TextField
        label="Fecha"
        type="date"
        placeholder="20/08/2023"
        sx={{
          width: "200px",
          marginX: "1.8rem",
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

      {/* HORA INCIO */}
      <Box
        sx={{
          display: "flex",
          marginX: "1rem",
          justifyContent: "space-between",
          fontFamily: "Happy_Monkey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "110px",
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
          <p className="contentModal__text">Desde: </p>
        </Box>
        <Box>
          <select
            style={{
              width: "140px",
              marginLeft: "1.5rem",
              textAlign: "center",
              borderRadius: "20px",
              color: "#D9D9D9",
              fontSize: "16px",
              fontFamily: "Inter",
              background: "transparent",
              height: "40px",
              border: "1px solid #FB9825",
            }}
            name=""
            id=""
          >
            <option value="8am">8:00am</option>
            <option value="9am">9:00am</option>
            <option value="10am">10:00am</option>
            <option value="11am">11:00am</option>
            <option value="12am">12:00am</option>
            <option value="1pm">1:00pm</option>
            <option value="2pm">2:00pm</option>
          </select>
        </Box>
      </Box>

      {/* HORA FIN */}

      <Box
        sx={{
          marginTop: "5px",
          marginX: "1rem",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Happy_Monkey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "110px",
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
          <p className="contentModal__text">Hasta: </p>
        </Box>
        <Box>
          <select
            style={{
              width: "140px",
              marginLeft: "1.5rem",
              textAlign: "center",
              borderRadius: "20px",
              color: "#D9D9D9",
              fontSize: "16px",
              fontFamily: "Inter",
              background: "transparent",
              height: "40px",
              border: "1px solid #FB9825",
            }}
            name=""
            id=""
          >
            <option value="8am">8:00am</option>
            <option value="9am">9:00am</option>
            <option value="10am">10:00am</option>
            <option value="11am">11:00am</option>
            <option value="12am">12:00am</option>
            <option value="1pm">1:00pm</option>
            <option value="2pm">2:00pm</option>
          </select>
        </Box>
      </Box>

      <div
        style={{
          margin: "auto auto auto 1rem",
          display: "flex",
          fontFamily: "Inter",
          fontSize: "16px",
        }}
      >
        <input
          style={{ width: "20px", height: "20px", marginRight: "1rem" }}
          type="checkbox"
          name=""
          id=""
        />
        <p style={{ margin: "auto 0px auto 0px", color: "#000000" }}>
          Todo el día
        </p>
      </div>

      {/* GUARDAR / DESCARTAR  */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          height: `10vh`,
          alignItems: "end",
          justifyContent: "space-evenly",
          bottom: "0px",
        }}
      >
        <button
          onClick={handleBack}
          style={{
            fontSize: "20px",
            fontFamily: "Inder",
            fontWeight: "lighter",
            background: "#AFAFAF",
            borderRadius: "10px",
          }}
          // onClick={handleOpen}
          className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
        >
          Cancelar
        </button>
        <button
          // onClick={handleOpen}
          style={{
            fontSize: "20px",
            fontFamily: "Inder",
            fontWeight: "lighter",
            borderRadius: "10px",
          }}
          className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
        >
          Guardar
        </button>
      </Box>
    </>
  );
};

export default NuevoEvento;
