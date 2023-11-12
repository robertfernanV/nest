import { useState } from "react";
import { Grid, Box } from "@mui/material";

const Siesta = () => {
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
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_728_3539)">
              <path
                d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
                fill="#BFEFFF"
              />
              <path
                opacity="0.1"
                d="M38.4917 14.8318H15.887L12.7055 11.6504V38.6461H11.2289L22.4549 49.8721C23.2918 49.9567 24.1408 50.0002 25 50.0002C38.8071 50.0002 50 38.8073 50 25.0002C50 24.3562 49.9756 23.7181 49.9277 23.0863L38.4917 11.6504V14.8318Z"
                fill="#231F20"
              />
              <path
                d="M12.9049 24.2876H37.095V26.6176H12.9049V24.2876Z"
                fill="#F1DEBC"
              />
              <path
                opacity="0.1"
                d="M12.9049 26.3711H37.095V26.6176H12.9049V26.3711Z"
                fill="#231F20"
              />
              <path
                d="M14.4692 14.1069H15.4189V27.1222H14.4692V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M17.8212 14.1069H18.7709V27.1222H17.8212V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M21.1731 14.1069H22.1228V27.1222H21.1731V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M24.525 14.1069H25.4747V27.1222H24.525V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M27.8771 14.1069H28.8269V27.1222H27.8771V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M31.2291 14.1069H32.1789V27.1222H31.2291V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M34.5811 14.1069H35.5309V27.1222H34.5811V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M12.9049 14.1069H37.095V15.1763H12.9049V14.1069Z"
                fill="#8A6C6B"
              />
              <path
                d="M11.5083 26.646H38.4918V28.5792H11.5083V26.646Z"
                fill="#8A6C6B"
              />
              <path
                d="M12.0669 11.354C11.6041 11.354 11.2289 11.7292 11.2289 12.192V38.6458H12.9049V12.192C12.9049 11.7292 12.5298 11.354 12.0669 11.354Z"
                fill="#8A6C6B"
              />
              <path
                d="M37.9331 11.354C37.4703 11.354 37.0951 11.7292 37.0951 12.192V38.6458H38.7711V12.192C38.7711 11.7292 38.3959 11.354 37.9331 11.354Z"
                fill="#8A6C6B"
              />
              <path
                opacity="0.2"
                d="M14.4692 15.1763H14.6647V26.646H14.4692V15.1763Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M15.2234 15.1763H15.4189V26.646H15.2234V15.1763Z"
                fill="#231F20"
              />
              <path
                opacity="0.2"
                d="M17.8212 15.1763H18.0167V26.646H17.8212V15.1763Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M18.5754 15.1763H18.7709V26.646H18.5754V15.1763Z"
                fill="#231F20"
              />
              <path
                opacity="0.2"
                d="M21.1731 15.1763H21.3686V26.646H21.1731V15.1763Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M21.9274 15.1763H22.1229V26.646H21.9274V15.1763Z"
                fill="#231F20"
              />
              <path
                opacity="0.2"
                d="M24.5251 15.1763H24.7207V26.646H24.5251V15.1763Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M25.2793 15.1763H25.4748V26.646H25.2793V15.1763Z"
                fill="#231F20"
              />
              <path
                opacity="0.2"
                d="M27.8772 15.1763H28.0727V26.646H27.8772V15.1763Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M28.6313 15.1763H28.827V26.646H28.6313V15.1763Z"
                fill="#231F20"
              />
              <path
                opacity="0.2"
                d="M31.2291 15.1763H31.4246V26.646H31.2291V15.1763Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M31.9833 15.1763H32.1789V26.646H31.9833V15.1763Z"
                fill="#231F20"
              />
              <path
                opacity="0.2"
                d="M34.5811 15.1763H34.7766V26.646H34.5811V15.1763Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M35.3352 15.1763H35.5308V26.646H35.3352V15.1763Z"
                fill="#231F20"
              />
              <path
                opacity="0.1"
                d="M12.9049 14.9297H37.095V15.1762H12.9049V14.9297Z"
                fill="#231F20"
              />
              <path
                opacity="0.1"
                d="M12.9049 28.3325H37.095V28.5791H12.9049V28.3325Z"
                fill="#231F20"
              />
              <path
                opacity="0.1"
                d="M11.2289 36.9697H12.9049V38.6457H11.2289V36.9697Z"
                fill="#231F20"
              />
              <path
                opacity="0.1"
                d="M11.2289 36.4292H12.9049V36.6899H11.2289V36.4292Z"
                fill="#231F20"
              />
              <path
                opacity="0.1"
                d="M37.0951 36.9697H38.7711V38.6457H37.0951V36.9697Z"
                fill="#231F20"
              />
              <path
                opacity="0.1"
                d="M37.0951 36.4292H38.7711V36.6899H37.0951V36.4292Z"
                fill="#231F20"
              />
            </g>
            <defs>
              <clipPath id="clip0_728_3539">
                <rect width="50" height="50" fill="white" />
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

export default Siesta;
