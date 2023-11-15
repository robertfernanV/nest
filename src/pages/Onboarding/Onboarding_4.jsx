import { useNavigate } from "react-router-dom";
import imagen from "../../assets/images/onboarding_4.png";

const Onboarding_4 = () => {
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
          4
        </p>
      </div>
      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          width: "198",
          position: "relative",
          top: "-3rem",
          marginLeft: "6rem",
          fontSize: "24px",
          fontFamily: "Kalam",
          color: "#FB9825",
          fontWeight: "lighter",
        }}
      >
        Activa el rol de cuidador
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "-2rem",
        }}
      >
        <img style={{ width: "280px" }} src={imagen} alt="" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          onClick={() => navigate("/onboarding_3")}
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
          4/5
        </p>
        <button
          onClick={() => navigate("/onboarding_5")}
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
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
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

export default Onboarding_4;
