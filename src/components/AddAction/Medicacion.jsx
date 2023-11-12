import { useState } from "react";

const Medicacion = () => {
  const [metodo, setMetodo] = useState(1);
  const [gravedadSelected, setGravedadSelected] = useState(0);
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
            <path
              d="M28.9297 45.1016C33.375 49.5469 40.6523 49.5469 45.1016 45.1016C49.5469 40.6563 49.5469 33.3789 45.1016 28.9297L33.0859 16.9141L16.9141 33.0859L28.9297 45.1016Z"
              fill="url(#paint0_radial_729_2)"
            />
            <path
              d="M33.0859 16.9141L21.0703 4.89844C16.625 0.453125 9.34766 0.453125 4.89844 4.89844C0.453125 9.34375 0.453125 16.6211 4.89844 21.0703L16.9141 33.0859L33.0859 16.9141Z"
              fill="url(#paint1_radial_729_2)"
            />
            <path
              opacity="0.2"
              d="M12.9844 2.73438C15.7344 2.73438 18.3125 3.79688 20.2422 5.72656L44.2734 29.7578C46.2031 31.6875 47.2656 34.2656 47.2656 37.0156C47.2656 39.7656 46.2031 42.3438 44.2734 44.2734C42.3437 46.2031 39.7656 47.2656 37.0156 47.2656C34.2656 47.2656 31.6875 46.2031 29.7578 44.2734L5.72656 20.2422C3.79687 18.3125 2.73438 15.7344 2.73438 12.9844C2.73438 10.2344 3.79687 7.65625 5.72656 5.72656C7.65625 3.79688 10.2344 2.73438 12.9844 2.73438ZM12.9844 1.5625C10.0547 1.5625 7.12109 2.67578 4.89844 4.89844C0.453125 9.34375 0.453125 16.6211 4.89844 21.0703L28.9297 45.1016C31.1523 47.3242 34.0859 48.4375 37.0156 48.4375C39.9453 48.4375 42.8789 47.3242 45.1016 45.1016C49.5469 40.6563 49.5469 33.3789 45.1016 28.9297L21.0703 4.89844C18.8477 2.67578 15.9141 1.5625 12.9844 1.5625Z"
              fill="#424242"
            />
            <path
              opacity="0.2"
              d="M33.9138 17.7441L17.7417 33.9163L16.913 33.0877L33.0852 16.9155L33.9138 17.7441Z"
              fill="#424242"
            />
            <defs>
              <radialGradient
                id="paint0_radial_729_2"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(26.5623 25.2605) rotate(49.339) scale(26.7781 17.7091)"
              >
                <stop stopColor="#EF5350" />
                <stop offset="0.6263" stopColor="#D83534" />
                <stop offset="0.7356" stopColor="#D32F2F" />
                <stop offset="1" stopColor="#D32F2F" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_729_2"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(6.50998 6.12017) rotate(45) scale(26.1505 20.5809)"
              >
                <stop stopColor="#FFEB3B" />
                <stop offset="0.349" stopColor="#FEE439" />
                <stop offset="0.6698" stopColor="#FDD835" />
                <stop offset="0.9954" stopColor="#FBC02D" />
              </radialGradient>
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
                Hora
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

          <section>
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#FB9825",
                marginLeft: "1.5rem",
              }}
            >
              Tipo
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0.3rem",
                marginBottom: "1rem",
              }}
            >
              <button
                onClick={() => setGravedadSelected(1)}
                style={{
                  borderRadius: "20px",
                  width: "80px",
                  background: "#D8EBD4",
                  border: `${
                    gravedadSelected === 1 ? "2px" : "1px"
                  } solid #95A5A6`,
                  fontFamily: "Inter",
                  fontSize: "14px",
                }}
              >
                Vitaminas
              </button>
              <button
                onClick={() => setGravedadSelected(2)}
                style={{
                  borderRadius: "20px",
                  width: "80px",
                  background: "#74563A",
                  color: "#FFFFFF",
                  border: `${
                    gravedadSelected === 2 ? "2px" : "1px"
                  } solid #FB9825`,
                  fontFamily: "Inter",
                  fontSize: "14px",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                Hierro
              </button>
              <button
                onClick={() => setGravedadSelected(3)}
                style={{
                  borderRadius: "20px",
                  width: "80px",
                  background: "#FF8282",
                  border: `${
                    gravedadSelected === 3 ? "2px" : "1px"
                  } solid #DB4B4B`,
                  fontFamily: "Inter",
                  fontSize: "14px",
                }}
              >
                Medicina
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => setGravedadSelected(3)}
                style={{
                  borderRadius: "20px",
                  width: "90px",
                  background: "#FFE496",
                  border: `${
                    gravedadSelected === 3 ? "2px" : "1px"
                  } solid #FB9825`,
                  fontFamily: "Inter",
                  fontSize: "14px",
                }}
              >
                Tratamiento
              </button>
            </div>
          </section>

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
              Nombre
            </span>
            <input
            placeholder="Vitamina C"
              type="text"
              style={{
                width: "100%",
                marginTop: "1.2rem",
                marginLeft: "1.5rem",
                marginBottom: "1rem",
                textAlign: "center",
                borderRadius: "20px",
                fontSize: "16px",
                fontFamily: "Inter",
                background: "transparent",
                height: "40px",
                border: "1px solid #FB9825",
              }}
            />
          </div>

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
                Cantidad
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
                <option value="200">200 cc</option>
                <option value="400">400 cc</option>
                <option value="600">600 cc</option>
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
      </>
    </>
  );
};

export default Medicacion;
