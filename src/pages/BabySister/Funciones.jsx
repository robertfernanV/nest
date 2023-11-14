import Box from "@mui/material/Box";

const Funciones = () => {
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
          onClick={handleBack}
          style={{ top: "0.7rem" }}
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
        <h2 className="newFamily__title">Funciones</h2>
      </div>

      <hr style={{ border: "none", marginBottom: "5rem" }} />

      <h3
        style={{
          fontWeight: "lighter",
          fontFamily: "Inder",
          fontSize: "20px",
          color: "#FB9825",
          marginLeft: "2rem",
        }}
      >
        Función
      </h3>
      <input
        style={{
          borderRadius: "20px",
          height: "40px",
          width: "70%",
          border: "1px solid #D9D9D9",
          marginRight: "2rem",
          marginLeft: "2rem",
          fontSize: "14px",
          color: "#FB9825",
          fontFamily: "Inder",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
        type="text"
      />

      <h3
        style={{
          fontWeight: "lighter",
          fontFamily: "Inder",
          fontSize: "20px",
          color: "#FB9825",
          marginLeft: "2rem",
        }}
      >
        Descripción
      </h3>
      <input
        style={{
          borderRadius: "20px",
          height: "67px",
          width: "70%",
          border: "1px solid #D9D9D9",
          marginRight: "2rem",
          marginLeft: "2rem",
          fontSize: "14px",
          color: "#FB9825",
          fontFamily: "Inder",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
        type="text"
      />

      <div
        style={{ display: "flex", justifyContent: "end", marginRight: "3rem" }}
      >
        <button
          style={{
            fontFamily: "Inder",
            borderRadius: "10px",
            height: "35px",
            width: "135px",
            fontSize: "16px",
            fontWeight: "lighter",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
          className="createNewFamily__saveCancelBtn EditBabuttonve createNewFamily__save"
        >
          Agregar
        </button>
      </div>

      {/* LISTA DE FUNCIONES */}
      <div>
        <p
          style={{
            marginTop: "0px",
            fontSize: "20px",
            fontFamily: "Inder",
            color: "#FB9825",
            marginLeft: "1rem",
            marginBottom: "2rem",
          }}
        >
          Lista de funciones
        </p>
        <section
          style={{
            display: "flex",
            margin: "0px auto 0px 1rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <svg
              style={{ margin: "auto 0px auto 0px" }}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="7" fill="#FB9825" stroke="#FB9825" />
            </svg>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Inder",
                marginTop: "0px",
                marginLeft: "0.5rem",
                marginBottom: "0px",
              }}
            >
              Cuidado general del niño
            </p>
          </div>
          <button
            style={{
              marginRight: "2rem",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              border: "none",
              background: "#DB4B4B",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1636_157)">
                <path
                  d="M3.09547 14.1151C3.16473 14.8989 3.82127 15.4999 4.60836 15.4999H11.3913C12.1781 15.4999 12.8349 14.8989 12.9042 14.1151L13.6554 4.27344H2.34424L3.09547 14.1151ZM12.8294 5.03888L12.1417 14.0475C12.1071 14.4392 11.7845 14.7345 11.3913 14.7345H4.60836C4.2152 14.7345 3.89252 14.4392 3.85862 14.0568L3.1702 5.03888H12.8294Z"
                  fill="white"
                />
                <path
                  d="M5.85994 13.2543C6.03212 13.2441 6.16316 13.0961 6.15267 12.9242L5.85569 6.99937C5.8452 6.82723 5.69746 6.69618 5.52528 6.70664C5.3531 6.7171 5.22206 6.86511 5.23252 7.03702L5.5295 12.9618C5.53999 13.134 5.688 13.2648 5.85994 13.2543Z"
                  fill="white"
                />
                <path
                  d="M7.99996 13.255C8.17237 13.255 8.31215 13.1155 8.31215 12.9431V7.01801C8.31215 6.8456 8.17237 6.70605 7.99996 6.70605C7.82755 6.70605 7.68774 6.8456 7.68774 7.01801V12.9431C7.68777 13.1155 7.82755 13.255 7.99996 13.255Z"
                  fill="white"
                />
                <path
                  d="M10.14 13.2543C10.3122 13.2648 10.46 13.134 10.4704 12.9618L10.7672 7.03702C10.7774 6.86511 10.6466 6.7171 10.4744 6.70664C10.3022 6.69618 10.1545 6.82723 10.144 6.99937L9.84726 12.9242C9.83681 13.0961 9.96785 13.2441 10.14 13.2543Z"
                  fill="white"
                />
                <path
                  d="M13.3647 2.39015C13.3647 2.39015 12.3664 2.22421 12.095 2.14174C11.8518 2.06773 9.72797 1.7443 9.72797 1.7443L9.64822 1.17896C9.59344 0.788779 9.27398 0.5 8.89775 0.5H7.99978H7.1018C6.72606 0.5 6.40664 0.788779 6.35133 1.17896L6.27161 1.7443C6.27161 1.7443 4.1485 2.0677 3.90507 2.14174C3.63375 2.22421 2.63484 2.39015 2.63484 2.39015C2.33238 2.47358 2.12109 2.7609 2.12109 3.08926V3.73162H7.9998H13.879V3.08926C13.879 2.7609 13.6677 2.47358 13.3647 2.39015ZM8.59529 1.63742H7.40479C7.29914 1.63742 7.21342 1.55173 7.21342 1.44605C7.21342 1.34038 7.29914 1.25469 7.40479 1.25469H8.59529C8.70094 1.25469 8.78666 1.34038 8.78666 1.44605C8.78666 1.55173 8.70094 1.63742 8.59529 1.63742Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1636_157">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </section>
        <p
          style={{
            width: "250px",

            textAlign: "left",
            color: "#878787",
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "3rem",
            marginBottom: "1rem",
          }}
        >
          Comida, baño, paseos, etc...
        </p>

        <section
          style={{
            display: "flex",
            margin: "0px auto 0px 1rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <svg
              style={{ margin: "auto 0px auto 0px" }}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="7" fill="#FB9825" stroke="#FB9825" />
            </svg>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Inder",
                marginTop: "0px",
                marginLeft: "0.5rem",
                marginBottom: "0px",
              }}
            >
              Ayuda con labores del hogar
            </p>
          </div>
          <button
            style={{
              marginRight: "2rem",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              border: "none",
              background: "#DB4B4B",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1636_157)">
                <path
                  d="M3.09547 14.1151C3.16473 14.8989 3.82127 15.4999 4.60836 15.4999H11.3913C12.1781 15.4999 12.8349 14.8989 12.9042 14.1151L13.6554 4.27344H2.34424L3.09547 14.1151ZM12.8294 5.03888L12.1417 14.0475C12.1071 14.4392 11.7845 14.7345 11.3913 14.7345H4.60836C4.2152 14.7345 3.89252 14.4392 3.85862 14.0568L3.1702 5.03888H12.8294Z"
                  fill="white"
                />
                <path
                  d="M5.85994 13.2543C6.03212 13.2441 6.16316 13.0961 6.15267 12.9242L5.85569 6.99937C5.8452 6.82723 5.69746 6.69618 5.52528 6.70664C5.3531 6.7171 5.22206 6.86511 5.23252 7.03702L5.5295 12.9618C5.53999 13.134 5.688 13.2648 5.85994 13.2543Z"
                  fill="white"
                />
                <path
                  d="M7.99996 13.255C8.17237 13.255 8.31215 13.1155 8.31215 12.9431V7.01801C8.31215 6.8456 8.17237 6.70605 7.99996 6.70605C7.82755 6.70605 7.68774 6.8456 7.68774 7.01801V12.9431C7.68777 13.1155 7.82755 13.255 7.99996 13.255Z"
                  fill="white"
                />
                <path
                  d="M10.14 13.2543C10.3122 13.2648 10.46 13.134 10.4704 12.9618L10.7672 7.03702C10.7774 6.86511 10.6466 6.7171 10.4744 6.70664C10.3022 6.69618 10.1545 6.82723 10.144 6.99937L9.84726 12.9242C9.83681 13.0961 9.96785 13.2441 10.14 13.2543Z"
                  fill="white"
                />
                <path
                  d="M13.3647 2.39015C13.3647 2.39015 12.3664 2.22421 12.095 2.14174C11.8518 2.06773 9.72797 1.7443 9.72797 1.7443L9.64822 1.17896C9.59344 0.788779 9.27398 0.5 8.89775 0.5H7.99978H7.1018C6.72606 0.5 6.40664 0.788779 6.35133 1.17896L6.27161 1.7443C6.27161 1.7443 4.1485 2.0677 3.90507 2.14174C3.63375 2.22421 2.63484 2.39015 2.63484 2.39015C2.33238 2.47358 2.12109 2.7609 2.12109 3.08926V3.73162H7.9998H13.879V3.08926C13.879 2.7609 13.6677 2.47358 13.3647 2.39015ZM8.59529 1.63742H7.40479C7.29914 1.63742 7.21342 1.55173 7.21342 1.44605C7.21342 1.34038 7.29914 1.25469 7.40479 1.25469H8.59529C8.70094 1.25469 8.78666 1.34038 8.78666 1.44605C8.78666 1.55173 8.70094 1.63742 8.59529 1.63742Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1636_157">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </section>
        <p
          style={{
            width: "250px",
            textAlign: "left",
            color: "#878787",
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "4rem",
            marginBottom: "0px",
          }}
        >
          Limpieza y desinfección de artículos del niño
        </p>
      </div>

      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={handleBack}
          style={{ borderRadius: "10px", background: "#AFAFAF" }}
          className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
        >
          Cancelar
        </button>
        <button
          style={{ borderRadius: "10px" }}
          className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
        >
          Guardar
        </button>
      </Box>
    </>
  );
};

export default Funciones;
