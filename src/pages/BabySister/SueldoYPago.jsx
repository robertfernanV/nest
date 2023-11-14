import Box from "@mui/material/Box";

const SueldoYPago = () => {
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
        <h2 className="newFamily__title">Sueldo y Pagos</h2>
      </div>

      <hr style={{ marginBottom: "5rem", border: "none" }} />

      <section
        style={{
          display: "flex",
        }}
      >
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontFamily: "Inder",
              fontSize: "20px",
              top: "5rem",
              color: "#FB9825",
              position: "absolute",
              left: "2rem",
            }}
          >
            Salario
          </span>
          <input
            style={{
              width: "140px",
              marginTop: "1.2rem",
              marginLeft: "1.5rem",
              marginBottom: "1rem",
              textAlign: "center",
              borderRadius: "20px",
              color: "#D9D9D9",
              fontSize: "16px",
              fontFamily: "Inder",
              background: "transparent",
              height: "40px",
              border: "1px solid #D9D9D9",
            }}
            type="number"
          />
        </div>
        <div style={{ display: "flex" }}>
          <select
            style={{
              width: "140px",
              marginTop: "1.2rem",
              marginLeft: "1.5rem",
              marginBottom: "1rem",
              textAlign: "center",
              borderRadius: "20px",
              color: "#D9D9D9",
              fontSize: "16px",
              fontFamily: "Inder",
              background: "transparent",
              height: "40px",
              border: "1px solid #D9D9D9",
            }}
            name=""
            id=""
          >
            <option value="ARS">ARS</option>
            <option value="BSF">BSF</option>
            <option value="$">$</option>
            <option value="€">€</option>
          </select>
        </div>
      </section>

      <div style={{ display: "flex" }}>
        <select
          style={{
            width: "140px",
            marginTop: "1.2rem",
            marginLeft: "1.5rem",
            marginBottom: "1rem",
            textAlign: "center",
            borderRadius: "20px",
            color: "#D9D9D9",
            fontSize: "16px",
            fontFamily: "Inder",
            background: "transparent",
            height: "40px",
            border: "1px solid #D9D9D9",
          }}
          defaultValue={""}
          name=""
          id=""
        >
          <option value="">Mes</option>
          <option value="1">Enero</option>
          <option value="2">Febrero</option>
          <option value="3">Marzo</option>
          <option value="4">Abril</option>
          <option value="5">Mayo</option>
          <option value="6">Junio</option>
          <option value="7">Julio</option>
          <option value="8">Agosto</option>
          <option value="9">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid #D9D9D9",
            marginLeft: "2rem",
            color: "#FB9825",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          type="checkbox"
          name=""
          id=""
        />
        <p
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: "16px",
            fontFamily: "Inder",
            color: "#878787",
            width: "150px",
          }}
        >
          Incremento por hora extra
        </p>
        <input
          style={{
            width: "86px",
            textAlign: "center",
            borderRadius: "20px",
            color: "#D9D9D9",
            fontSize: "16px",
            fontFamily: "Inder",
            background: "transparent",
            height: "40px",
            border: "1px solid #D9D9D9",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          type="number"
        />
        <label
          style={{
            fontFamily: "Inder",
            fontSize: "20px",
            marginRight: "2rem",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          htmlFor=""
        >
          %
        </label>
      </div>

      <span
        style={{
          fontFamily: "Inder",
          fontSize: "20px",
          color: "#FB9825",
          position: "absolute",
          left: "2rem",
          bottom: "20rem",
        }}
      >
        Frecuencia de pago
      </span>
      <div style={{ marginTop: "5rem", marginLeft: "2rem" }}>
        <section
          style={{
            display: "flex",
            marginTop: "0.3rem",
            marginBottom: "0.3rem",
          }}
        >
          <input type="radio" name="time" id="" />
          <label
            htmlFor=""
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              marginLeft: "0.5rem",
            }}
          >
            Diaria
          </label>
        </section>
        <section
          style={{
            display: "flex",
            marginTop: "0.3rem",
            marginBottom: "0.3rem",
          }}
        >
          <input type="radio" name="time" id="" />
          <label
            htmlFor=""
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              marginLeft: "0.5rem",
            }}
          >
            Semanal
          </label>
        </section>
        <section
          style={{
            display: "flex",
            marginTop: "0.3rem",
            marginBottom: "0.3rem",
          }}
        >
          <input type="radio" name="time" id="" />
          <label
            htmlFor=""
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              marginLeft: "0.5rem",
            }}
          >
            Quincenal
          </label>
        </section>
        <section
          style={{
            display: "flex",
            marginTop: "0.3rem",
            marginBottom: "0.3rem",
          }}
        >
          <input type="radio" name="time" id="" />
          <label
            htmlFor=""
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              marginLeft: "0.5rem",
            }}
          >
            Mensual
          </label>
        </section>
      </div>
      <Box
        sx={{
          marginTop: "8rem",
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

export default SueldoYPago;
