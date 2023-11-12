import { useState } from "react";
import { Grid, Box } from "@mui/material";

const Paseo = () => {
  const [metodo, setMetodo] = useState(2);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => setMetodo(0)}
          style={{
            border: "none",
            background: "transparent",
            borderBottom: `${metodo === 0 ? "2px" : "0px"} solid #FB9825`,
          }}
        >
          <svg
            width="38"
            height="37"
            viewBox="0 0 38 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_728_3576)">
              <path
                d="M10.719 1.22441C9.88247 -0.0570199 7.9652 -0.416971 6.72156 0.547698C2.61312 3.73686 0 8.49541 0 13.8227H18.9507L10.719 1.22441ZM36.7169 6.91163H33.1636C30.5505 6.91163 28.426 8.97775 28.426 11.519V16.1264H0C0 19.7691 1.7026 23.0662 4.46377 25.5355C1.90247 26.1762 0 28.4151 0 31.1003C0 34.2823 2.65013 36.8595 5.92208 36.8595C9.19403 36.8595 11.8442 34.2823 11.8442 31.1003C11.8442 30.4596 11.7109 29.8621 11.5184 29.2862C13.1174 29.7109 14.82 29.9485 16.5818 29.9485C18.3436 29.9485 20.0536 29.7109 21.6452 29.2862C21.4453 29.8621 21.3195 30.4596 21.3195 31.1003C21.3195 34.2823 23.9696 36.8595 27.2416 36.8595C30.5135 36.8595 33.1636 34.2823 33.1636 31.1003C33.1636 28.4151 31.2612 26.1762 28.6999 25.5355C31.4611 23.0662 33.1636 19.7691 33.1636 16.1264V11.519H36.7169C37.3683 11.519 37.9013 11.0007 37.9013 10.3672V8.06347C37.9013 7.42996 37.3683 6.91163 36.7169 6.91163ZM5.92208 33.404C4.61922 33.404 3.55325 32.3674 3.55325 31.1003C3.55325 29.8333 4.61922 28.7966 5.92208 28.7966C7.22494 28.7966 8.29091 29.8333 8.29091 31.1003C8.29091 32.3674 7.22494 33.404 5.92208 33.404ZM29.6104 31.1003C29.6104 32.3674 28.5444 33.404 27.2416 33.404C25.9387 33.404 24.8727 32.3674 24.8727 31.1003C24.8727 29.8333 25.9387 28.7966 27.2416 28.7966C28.5444 28.7966 29.6104 29.8333 29.6104 31.1003Z"
                fill="#4FC3F7"
              />
            </g>
            <defs>
              <clipPath id="clip0_728_3576">
                <rect width="37.9013" height="36.859" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      {/* CONTENIDO */}
      <>
        <div
          style={{
            margin: "1rem 1rem 1rem 1rem",
            border: "1px solid #CECECE",
            background: "#FDFDFD",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          <section
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  color: "#FB9825",
                  position: "absolute",
                  left: "4rem",
                }}
              >
                Hora de Inicio
              </span>
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
            </div>
            <div
              style={{
                margin: "auto auto auto auto",
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
                Ahora
              </p>
            </div>
          </section>

          <section
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  color: "#FB9825",
                  position: "absolute",
                  left: "4rem",
                }}
              >
                Hora de Fin
              </span>
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
            </div>
            <div
              style={{
                margin: "auto auto auto auto",
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
                Ahora
              </p>
            </div>
          </section>

          {/* SECTION #2 */}

          <section>
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#FB9825",
                position: "absolute",
                left: "4rem",
              }}
            >
              Duración
            </span>
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
                fontFamily: "Inter",
                background: "transparent",
                height: "40px",
                border: "1px solid #FB9825",
              }}
              name=""
              id=""
            >
              <option value="15">15 min</option>
              <option value="30">30 min</option>
              <option value="45">45 min</option>
              <option value="60">60 min</option>
            </select>
          </section>

          <span
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#FB9825",
              position: "absolute",
              left: "4rem",
            }}
          >
            Nota
          </span>
          <center>
            <textarea
              style={{
                marginBottom: "1rem",
                marginRight: "1.5rem",
                marginLeft: "1.5rem",
                marginTop: "1.5rem",
                fontSize: "14px",
                fontFamily: "Inder",
                minHeight: "50px",
                maxHeight: "50px",
                minWidth: "230px",
                border: "1px solid #FB9825",
                maxWidth: "230px",
                borderRadius: "10px",
                padding: "1rem",
              }}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </center>
        </div>
        <hr style={{ marginTop: "4rem", border: "none" }} />
      </>
    </>
  );
};

export default Paseo;
