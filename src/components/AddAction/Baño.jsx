import { useState } from "react";
import { Grid, Box } from "@mui/material";

const Baño = () => {
  const [metodo, setMetodo] = useState(0);
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
              d="M6.06246 24.1486C6.48824 21.9338 8.44527 20.1291 10.5898 19.4338C12.9921 18.6564 15.0039 19.6369 16.3632 21.4924C16.8554 22.1643 17.2109 22.9064 17.3515 23.4885C17.3671 23.5588 17.4804 24.0705 17.5429 24.2189C17.7421 24.8088 19.0742 24.8049 19.5117 25.34C19.8398 25.7424 19.0429 26.5197 19.0117 26.6408C18.8515 27.2385 20.4453 28.8869 17.9453 30.3986C17.0742 30.926 16.5546 31.0197 16.6445 31.801L16.7968 33.5939H12.1093C11.4296 32.715 10.3437 31.0588 9.16402 30.6564C6.83199 29.8596 5.48042 27.1721 6.06246 24.1486Z"
              fill="#E0BB95"
            />
            <path
              d="M19.3008 27.8633C18.9532 28.0703 18.5547 28.168 18.1329 28.1016C17.6719 28.0273 17.7579 27.6328 18.2227 27.6016C18.5157 27.5781 18.8243 27.4258 19.1016 27.1992L19.3008 27.8633Z"
              fill="#6D4C41"
            />
            <path
              d="M17.0605 26.2919C17.3166 26.1444 17.341 25.7066 17.1149 25.314C16.8889 24.9214 16.498 24.7227 16.2418 24.8702C15.9857 25.0176 15.9613 25.4555 16.1874 25.8481C16.4135 26.2407 16.8044 26.4394 17.0605 26.2919Z"
              fill="#5D4037"
            />
            <path
              d="M16.3633 24.336C16.8789 24.1641 16.7813 23.8125 16.4805 23.6836C16.2578 23.5899 15.9024 23.6289 15.4727 24.0742C15.0664 24.4961 15.0586 24.9024 15.0508 25.1524C15.0391 25.4063 15.168 25.5586 15.2852 25.5C15.4453 25.4141 15.7266 24.5469 16.3633 24.336Z"
              fill="#AB872F"
            />
            <path
              d="M13.0976 29.4217C12.7617 29.4295 12.3437 29.3865 11.8476 29.2615C10.7148 28.9764 10.1055 28.2029 10.6406 27.2224C11 26.5662 12.207 26.5545 13.168 27.2224C13.4765 27.4373 14.082 27.7732 14.082 27.7732L14.2422 27.0428C13.6015 26.0271 13.2695 24.8474 13.5742 23.7849C14.0742 22.0467 16.6484 21.2146 16.6484 21.2146C16.6484 21.2146 16.2148 19.9334 14.539 19.4334C12.1797 18.7264 9.71873 19.1014 7.5742 20.906C5.53123 22.6248 4.95701 25.7381 5.72264 28.2928C6.96092 32.4295 14.3281 32.2224 14.3281 32.2224L14.2383 31.9373C14.039 30.0545 13.0976 29.5584 13.0976 29.4217Z"
              fill="#AB872F"
            />
            <path
              d="M13.0976 29.4217C12.7617 29.4295 12.3437 29.3865 11.8476 29.2615C10.7148 28.9764 10.1055 28.2029 10.6406 27.2224C11 26.5662 12.207 26.5545 13.168 27.2224C13.4765 27.4373 14.082 27.7732 14.082 27.7732L14.2422 27.0428C13.6015 26.0271 13.2695 24.8474 13.5742 23.7849C14.0742 22.0467 16.6484 21.2146 16.6484 21.2146C16.6484 21.2146 16.2148 19.9334 14.539 19.4334C12.1797 18.7264 9.71873 19.1014 7.5742 20.906C5.53123 22.6248 4.95701 25.7381 5.72264 28.2928C6.96092 32.4295 14.3281 32.2224 14.3281 32.2224L14.2383 31.9373C14.039 30.0545 13.0976 29.5584 13.0976 29.4217Z"
              fill="url(#paint0_radial_728_3517)"
            />
            <path
              d="M26.1641 33.5391C26.1641 32.5898 29.0586 27.9766 31.8711 27.9766C34.6836 27.9766 37.1328 32.4766 37.1328 33.4883L26.1641 33.5391Z"
              fill="url(#paint1_linear_728_3517)"
            />
            <path
              d="M43.4063 48.4375C43.418 46.8672 41.4414 47.0469 41.4414 45.3359L38.6211 45.3008C38.6211 45.3008 39.9727 46.293 39.9727 46.8711C39.9727 47.4492 39.4922 47.5781 39.4922 48.4414L43.4063 48.4375Z"
              fill="#757575"
            />
            <path
              d="M6.5938 48.4375C6.58208 46.8672 8.55474 47.0469 8.55474 45.3359L11.379 45.3008C11.379 45.3008 10.0313 46.293 10.0313 46.8711C10.0313 47.4492 10.5118 47.5781 10.5118 48.4375H6.5938Z"
              fill="#757575"
            />
            <path
              d="M37.5 46.8125L12.5 46.8047C3.19531 46.8047 3.07812 32.8633 3.07812 32.8633L46.9219 32.8125C46.9219 32.8125 46.4922 46.8125 37.5 46.8125Z"
              fill="url(#paint2_linear_728_3517)"
            />
            <path
              d="M25 32.8242V46.7969L12.5 46.793C3.19531 46.793 3.07422 32.8516 3.07422 32.8516L25 32.8242Z"
              fill="url(#paint3_radial_728_3517)"
            />
            <path
              d="M25 32.8242V46.7969L37.5 46.793C46.8047 46.793 46.9258 32.8516 46.9258 32.8516L25 32.8242Z"
              fill="url(#paint4_radial_728_3517)"
            />
            <path
              d="M40.1797 21.8633C38.3398 21.8633 36.8516 23.3555 36.8516 25.1914V25.9492L38.5156 25.9258V25.1914C38.5156 24.2734 39.2617 23.5273 40.1797 23.5273C41.0977 23.5273 41.8438 24.2734 41.8438 25.1914V33.5391L43.5078 33.5312V25.1914C43.5078 23.3516 42.0156 21.8633 40.1797 21.8633Z"
              fill="#757575"
            />
            <path
              d="M2.52338 34.375C1.98041 34.375 1.58979 33.6875 1.789 33.0547C2.06635 32.1758 2.69525 31.1797 4.12104 31.1797L45.746 31.0664C47.246 31.0664 47.8945 32.1328 48.1757 33.0547C48.371 33.6914 47.9843 34.375 47.4413 34.375H2.52338Z"
              fill="url(#paint5_linear_728_3517)"
            />
            <path
              d="M16.0117 22.2031C17.4011 22.2031 18.5273 21.0768 18.5273 19.6875C18.5273 18.2982 17.4011 17.1719 16.0117 17.1719C14.6224 17.1719 13.4961 18.2982 13.4961 19.6875C13.4961 21.0768 14.6224 22.2031 16.0117 22.2031Z"
              fill="url(#paint6_radial_728_3517)"
            />
            <path
              d="M11.4063 22.2031C12.7956 22.2031 13.9219 21.0768 13.9219 19.6875C13.9219 18.2982 12.7956 17.1719 11.4063 17.1719C10.0169 17.1719 8.89062 18.2982 8.89062 19.6875C8.89062 21.0768 10.0169 22.2031 11.4063 22.2031Z"
              fill="url(#paint7_radial_728_3517)"
            />
            <path
              d="M7.05078 22.2031C8.44012 22.2031 9.56641 21.0768 9.56641 19.6875C9.56641 18.2982 8.44012 17.1719 7.05078 17.1719C5.66144 17.1719 4.53516 18.2982 4.53516 19.6875C4.53516 21.0768 5.66144 22.2031 7.05078 22.2031Z"
              fill="url(#paint8_radial_728_3517)"
            />
            <path
              d="M9.65234 19.0273C11.0417 19.0273 12.168 17.9011 12.168 16.5117C12.168 15.1224 11.0417 13.9961 9.65234 13.9961C8.263 13.9961 7.13672 15.1224 7.13672 16.5117C7.13672 17.9011 8.263 19.0273 9.65234 19.0273Z"
              fill="url(#paint9_radial_728_3517)"
            />
            <path
              d="M13.6992 19.0273C15.0886 19.0273 16.2148 17.9011 16.2148 16.5117C16.2148 15.1224 15.0886 13.9961 13.6992 13.9961C12.3099 13.9961 11.1836 15.1224 11.1836 16.5117C11.1836 17.9011 12.3099 19.0273 13.6992 19.0273Z"
              fill="url(#paint10_radial_728_3517)"
            />
            <path
              d="M13.6992 19.9648C14.7563 19.9648 15.6133 19.1079 15.6133 18.0508C15.6133 16.9937 14.7563 16.1367 13.6992 16.1367C12.6421 16.1367 11.7852 16.9937 11.7852 18.0508C11.7852 19.1079 12.6421 19.9648 13.6992 19.9648Z"
              fill="url(#paint11_radial_728_3517)"
            />
            <path
              d="M10.1328 20.4258C11.0411 20.4258 11.7773 19.6895 11.7773 18.7813C11.7773 17.873 11.0411 17.1367 10.1328 17.1367C9.22456 17.1367 8.48828 17.873 8.48828 18.7813C8.48828 19.6895 9.22456 20.4258 10.1328 20.4258Z"
              fill="url(#paint12_radial_728_3517)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.8335 25.833) scale(6.9273)"
              >
                <stop offset="0.7945" stopColor="#BFA055" stopOpacity="0" />
                <stop offset="1" stopColor="#BFA055" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_728_3517"
                x1="27.9622"
                y1="30.7576"
                x2="34.5169"
                y2="30.7576"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CCA47A" />
                <stop offset="0.5" stopColor="#E0BB95" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_728_3517"
                x1="25"
                y1="35.1657"
                x2="25"
                y2="49.6877"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ECEFF1" />
                <stop offset="0.1865" stopColor="#E8ECEE" />
                <stop offset="0.3616" stopColor="#DDE3E6" />
                <stop offset="0.5315" stopColor="#CAD3D8" />
                <stop offset="0.6961" stopColor="#B0BEC5" />
              </linearGradient>
              <radialGradient
                id="paint3_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(22.1218 34.9313) scale(19.243 15.2462)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" stopOpacity="0" />
                <stop
                  offset="0.4797"
                  stopColor="#E8ECEE"
                  stopOpacity="0.4039"
                />
                <stop offset="0.81" stopColor="#DDE3E6" stopOpacity="0.7824" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <radialGradient
                id="paint4_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(27.8782 34.9313) rotate(179.991) scale(19.243 15.2462)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" stopOpacity="0" />
                <stop
                  offset="0.4797"
                  stopColor="#E8ECEE"
                  stopOpacity="0.4039"
                />
                <stop offset="0.81" stopColor="#DDE3E6" stopOpacity="0.7824" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <linearGradient
                id="paint5_linear_728_3517"
                x1="24.9819"
                y1="29.4132"
                x2="24.9819"
                y2="35.8905"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ECEFF1" />
                <stop offset="0.268" stopColor="#E8ECEE" />
                <stop offset="0.5195" stopColor="#DDE3E6" />
                <stop offset="0.7635" stopColor="#CAD3D8" />
                <stop offset="1" stopColor="#B0BEC5" />
              </linearGradient>
              <radialGradient
                id="paint6_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.819 19.4844) scale(2.5157)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" />
                <stop offset="0.4797" stopColor="#E8ECEE" />
                <stop offset="0.81" stopColor="#DDE3E6" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <radialGradient
                id="paint7_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.3584 21.9475) scale(2.60789)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" />
                <stop offset="0.4797" stopColor="#E8ECEE" />
                <stop offset="0.81" stopColor="#DDE3E6" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <radialGradient
                id="paint8_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(5.13066 19.1494) scale(2.60789)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" />
                <stop offset="0.4797" stopColor="#E8ECEE" />
                <stop offset="0.81" stopColor="#DDE3E6" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <radialGradient
                id="paint9_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.68777 15.1253) scale(2.60789)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" />
                <stop offset="0.4797" stopColor="#E8ECEE" />
                <stop offset="0.81" stopColor="#DDE3E6" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <radialGradient
                id="paint10_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.8786 14.6289) scale(2.98441)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" />
                <stop offset="0.4797" stopColor="#E8ECEE" />
                <stop offset="0.81" stopColor="#DDE3E6" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <radialGradient
                id="paint11_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.3087 16.4656) rotate(-160.202) scale(1.98275)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" />
                <stop offset="0.4797" stopColor="#E8ECEE" />
                <stop offset="0.81" stopColor="#DDE3E6" />
                <stop offset="1" stopColor="#D3DBDF" />
              </radialGradient>
              <radialGradient
                id="paint12_radial_728_3517"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(9.60698 17.401) rotate(-19.7976) scale(1.70466)"
              >
                <stop offset="0.1271" stopColor="#ECEFF1" />
                <stop
                  offset="0.4797"
                  stopColor="#E8ECEE"
                  stopOpacity="0.5961"
                />
                <stop offset="0.81" stopColor="#DDE3E6" stopOpacity="0.2176" />
                <stop offset="1" stopColor="#D3DBDF" stopOpacity="0" />
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
            height: '50vh'
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

          {/* SECTION #2 */}

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

export default Baño;
