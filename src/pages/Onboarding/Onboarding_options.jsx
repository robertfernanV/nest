import { useNavigate } from "react-router-dom";

const Onboarding_options = () => {
  const navigate = useNavigate();

  const handleOmitir = () => {
    localStorage.setItem("onboarding", true);
    navigate("/");
  };
  return (
    <>
      <h1
        style={{
          fontSize: "48px",
          fontFamily: "Kalam",
          color: "#FB9825",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          height: "70vh",
          fontWeight: "lighter",
          width: "100%",
          justifyContent: "center",
        }}
      >
        ¡Hola!
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/onboarding_1")}
          style={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "lighter",
            borderRadius: "10px",
            height: "40px",
            width: "163px",
          }}
          className="createNewFamily__saveCancelBtn createNewFamily__save selectBaby__aceptar"
        >
          Iniciar Tutorial
        </button>
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", marginRight: "1rem" }}
      >
        <button
          onClick={handleOmitir}
          style={{
            background: "transparent",
            border: "none",
            textDecoration: "underline",
            fontSize: "20px",
            fontFamily: "Inder",
            color: "#878787",
          }}
        >
          Omitir
        </button>
      </div>
    </>
  );
};

export default Onboarding_options;
