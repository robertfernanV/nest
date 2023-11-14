import { useNavigate } from "react-router-dom";
import imagen from "../../assets/images/onboarding_1.png";

const Onboarding_1 = () => {
  const navigate = useNavigate();

  const handleOmitir = () => {
    localStorage.setItem("onboarding", true);
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          marginTop: "2rem",
          marginLeft: "2rem",
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          background: "#FB9825",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            color: "#FFFFFF",
            fontWeight: "lighter",
            fontSize: "24px",
            fontFamily: "Inter",
          }}
        >
          1
        </p>
      </div>

      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          width: "230px",
          marginLeft: "4rem",
          fontSize: "24px",
          fontFamily: "Kalam",
          color: "#FB9825",
          fontWeight: "lighter",
        }}
      >
        Selecciona uno de tus grupos familiares
      </p>
      <img src={imagen} alt="" />

      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          width: "230px",
          marginLeft: "4rem",
          fontSize: "24px",
          fontFamily: "Kalam",
          color: "#454545",
          fontWeight: "lighter",
        }}
      >
        También puedes crear un grupo familiar y ser el jefe de familia
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <button
          style={{
            border: "none",
            background: "transparent",
            visibility: "hidden",
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 9L12 0.339745L12 17.6603L0 9Z" fill="#FB9825" />
          </svg>
        </button>
        <p style={{ color: "#878787", fontSize: "20px", fontFamily: "Inder" }}>
          1/5
        </p>
        <button
          onClick={() => navigate("/onboarding_2")}
          style={{ border: "none", background: "transparent" }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 9L0 17.6603L0 0.339746L12 9Z" fill="#FB9825" />
          </svg>
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

export default Onboarding_1;
