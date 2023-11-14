import { useNavigate } from "react-router-dom";
import imagen from "../../assets/images/onboarding_2.png";

const Onboarding_2 = () => {
  const navigate = useNavigate();

  const handleOmitir = () => {
    localStorage.setItem("onboarding", true);
    navigate("/");
    navigate("/familyList");
  };
  return (
    <>
      <div
        style={{
          marginLeft: "6rem",
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
          2
        </p>
      </div>

      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          width: "198",
          marginLeft: "8rem",
          fontSize: "24px",
          fontFamily: "Kalam",
          color: "#FB9825",
          fontWeight: "lighter",
        }}
      >
        Selecciona un niño del grupo familiar
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "350px" }} src={imagen} alt="" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <button
          onClick={() => navigate("/onboarding_1")}
          style={{
            border: "none",
            background: "transparent",
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
          2/5
        </p>
        <button
          onClick={() => navigate("/onboarding_3")}
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

export default Onboarding_2;
