import Box from "@mui/material/Box";


const AcuerdosEstablecidos = () => {
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
        <h2 className="newFamily__title">Acuerdos Establecidos</h2>
      </div>
      <hr style={{ border: "none", marginBottom: "5rem" }} />

      {/* PLANIFICACIÓN */}
      <div>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Inder",
            color: "#FB9825",
            marginLeft: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          Planificación
        </p>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Lun-Mie: 8:00 - 16:00
        </p>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "3rem",
          }}
        >
          Jue - Vie: 9:00 - 17:00
        </p>
      </div>

      {/* SALARIO */}
      <div style={{ marginTop: "4rem" }}>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Inder",
            color: "#FB9825",
            marginLeft: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          Salario
        </p>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Salario: 300.000 ARS
        </p>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "3rem",
          }}
        >
          Modalidad: mensual
        </p>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Incremento por hora extra: 30%
        </p>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Frecuencia de pago: mensual
        </p>
      </div>

      {/* LISTA DE FUNCIONES */}
      <div style={{ marginTop: "2rem" }}>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Inder",
            color: "#FB9825",
            marginLeft: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          Lista de funciones
        </p>
        <section style={{ display: "flex", margin: '0px auto 0px 2rem' }}>
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
        </section>
        <p
          style={{
            textAlign: "center",
            color: "#878787",
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "5rem",
            marginBottom: "1rem",
          }}
        >
          Comida, baño, paseos, etc...
        </p>


        <section style={{ display: "flex", margin: '0px auto 0px 2rem' }}>
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
        </section>
        <p
          style={{
            textAlign: "left",
            color: "#878787",
            fontSize: "16px",
            fontFamily: "Inder",
            marginTop: "0px",
            marginLeft: "5rem",
            marginBottom: "0px",
          }}
        >
          Limpieza y desinfección de artículos del niño
        </p>
      </div>

      <Box
          sx={{
            marginTop: '3rem',
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button onClick={handleBack} style={{borderRadius: '10px', background: '#AFAFAF'}}
            className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
          >
            Cancelar
          </button>
          <button style={{borderRadius: '10px'}} className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save">
            Guardar
          </button>
        </Box>
    </>
  );
};

export default AcuerdosEstablecidos;
