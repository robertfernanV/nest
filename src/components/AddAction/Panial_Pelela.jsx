import { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import "./Panial_Pelela.scss";

// const styles = {
//   input: {
//     marginBottom: "35px",
//     "& fieldset": {
//       borderRadius: "50px",
//     },
//     "& .MuiOutlinedInput-root": {
//       "&.Mui-focused fieldset": {
//         borderColor: "#FB9825",
//       },
//     },
//     "& .MuiInputLabel-shrink": {
//       color: "#FB9825 !important",
//     },
//   },
//   button: {
//     backgroundColor: "#FB9825", // Color de fondo del IconButton
//     color: "white", // Color del ícono
//     borderRadius: "0 50px 50px 0", // Ajusta según tus necesidades
//   },
// };

const MyComponent = () => {
  return (
    <div className="input-container">
      <input type="text" placeholder="Tu etiqueta" className="custom-input" />
      <button className="custom-button" type="button">
        <span className="plus-sign">+</span>
      </button>
    </div>
  );
};

const Panial_Pelela = () => {
  const [metodo, setMetodo] = useState(1);
  const [TipoSelected, setTipoSelected] = useState(0);
  const [tags, setTags] = useState([]);
  return (
    // <>
    //   <Grid container spacing={2} style={{ marginTop: "0rem" }}>
    //     <Grid style={{ textAlign: "center" }} item xs={6}>
    //       <button
    //         onClick={() => setMetodo(1)}
    //         style={{
    //           border: "none",
    //           background: "transparent",
    //           borderBottom: `${metodo === 1 ? "2px" : "0px"} solid #FB9825`,
    //         }}
    //       >
    //         <svg
    //           width="50"
    //           height="50"
    //           viewBox="0 0 50 50"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <g clipPath="url(#clip0_728_3475)">
    //             <path
    //               d="M29.981 49.9715C35.1966 49.6664 40.128 47.1575 43.8208 42.9303C47.5136 38.7031 49.7053 33.0582 49.9718 27.0879C44.6706 27.0904 39.5872 29.5022 35.8386 33.7931C32.0901 38.0841 29.9832 43.9031 29.981 49.9715Z"
    //               fill="#C6C6C6"
    //             />
    //             <path
    //               d="M0.0289307 27.0879C0.29501 33.0584 2.4866 38.7036 6.1795 42.9309C9.8724 47.1582 14.804 49.6669 20.0198 49.9715C20.0176 43.9031 17.9107 38.0841 14.1621 33.7931C10.4136 29.5022 5.33015 27.0904 0.0289307 27.0879Z"
    //               fill="#C6C6C6"
    //             />
    //             <path
    //               d="M0 25.8563C0 26.2701 0.00937461 26.6779 0.0270822 27.0868C5.32798 27.091 10.4107 29.5032 14.1591 33.7938C17.9075 38.0843 20.0151 43.9025 20.019 49.9704C20.3752 49.9911 20.7332 50.001 21.0929 50.0002H28.905C29.2654 50.0002 29.6238 49.9895 29.98 49.9704C29.9822 43.9021 32.0891 38.083 35.8376 33.7921C39.5861 29.5011 44.6696 27.0894 49.9708 27.0868C49.9885 26.6779 49.9979 26.2689 49.9979 25.8563V7.2998H0L0 25.8563Z"
    //               fill="#E2E2E2"
    //             />
    //             <path
    //               d="M47.6553 0H2.34469C1.72302 -7.02219e-08 1.1268 0.282612 0.687113 0.785698C0.247428 1.28878 0.000276176 1.97116 0 2.68279L0 7.30076H49.9979V2.68279C49.9979 1.97147 49.7511 1.28928 49.3118 0.786192C48.8725 0.283106 48.2767 0.000316139 47.6553 0Z"
    //               fill="#59C5EF"
    //             />
    //             <path
    //               d="M13.7223 12.7583H0V21.8857H13.7223C14.7791 21.8851 15.7925 21.4043 16.5397 20.5489C17.287 19.6935 17.707 18.5335 17.7076 17.3238C17.7076 16.1136 17.2878 14.9529 16.5405 14.0968C15.7932 13.2407 14.7796 12.7592 13.7223 12.7583Z"
    //               fill="#59C5EF"
    //             />
    //             <path
    //               d="M32.2903 17.3238C32.2903 17.9233 32.3935 18.5169 32.594 19.0708C32.7944 19.6246 33.0882 20.1278 33.4586 20.5517C33.8289 20.9755 34.2686 21.3117 34.7525 21.541C35.2364 21.7703 35.755 21.8883 36.2787 21.8881H49.9979V12.7583H36.2798C35.7559 12.758 35.2371 12.8759 34.753 13.1052C34.2689 13.3345 33.8291 13.6707 33.4586 14.0947C33.0881 14.5187 32.7942 15.0221 32.5938 15.5762C32.3933 16.1303 32.2902 16.7241 32.2903 17.3238Z"
    //               fill="#59C5EF"
    //             />
    //             <path
    //               d="M6.25183 12.7607H11.4599V21.8882H6.25183V12.7607Z"
    //               fill="#2BA0BF"
    //             />
    //             <path
    //               d="M38.5411 12.7607H43.7493V21.8882H38.5411V12.7607Z"
    //               fill="#2BA0BF"
    //             />
    //           </g>
    //           <defs>
    //             <clipPath id="clip0_728_3475">
    //               <rect width="50" height="50" fill="white" />
    //             </clipPath>
    //           </defs>
    //         </svg>
    //       </button>
    //     </Grid>
    //     <Grid style={{ textAlign: "center" }} item xs={6}>
    //       <button
    //         onClick={() => setMetodo(2)}
    //         style={{
    //           border: "none",
    //           background: "transparent",
    //           borderBottom: `${metodo === 2 ? "2px" : "0px"} solid #FB9825`,
    //         }}
    //       >
    //         <svg
    //           width="50"
    //           height="50"
    //           viewBox="0 0 50 50"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M45.4688 27.9688C45.4688 34.2188 40.3906 39.2969 34.1406 39.2969V27.9688H45.4688Z"
    //             fill="#9E958F"
    //           />
    //           <path
    //             d="M46.3281 2.57812H38.6719C38.0469 2.57812 37.5 3.125 37.5 3.59375V26.9531C37.5 27.4219 38.0469 28.2031 38.6719 28.2031H46.3281C46.9531 28.2031 47.5 27.4219 47.5 26.9531V3.59375C47.5 3.20312 46.9531 2.57812 46.3281 2.57812Z"
    //             fill="#E2D8C7"
    //           />
    //           <path
    //             d="M47.1094 0H37.8906C37.1094 0 36.4844 0.703125 36.4844 1.25V2.73438C36.4844 3.28125 37.1094 4.21875 37.8906 4.21875H47.1875C47.9688 4.21875 48.5938 3.20312 48.5938 2.73438V1.25C48.5938 0.703125 47.8906 0 47.1094 0ZM34.375 40.625C34.375 38.6719 34.8438 36.875 35.7812 35.2344H8.20312C9.0625 36.7969 9.60938 38.6719 9.60938 40.625C9.60938 44.2969 7.8125 46.7969 5.07812 48.8281H38.9844C36.0938 46.7969 34.375 44.2969 34.375 40.625Z"
    //             fill="#C6BBB3"
    //           />
    //           <path
    //             d="M39.8438 48.8281C39.8438 49.4531 39.2969 50 38.6719 50H5.3125C4.6875 50 4.14063 49.4531 4.14063 48.8281C4.14063 48.2031 4.6875 47.6562 5.3125 47.6562H38.6719C39.2969 47.6562 39.8438 48.2031 39.8438 48.8281ZM21.9531 42.0312C31.7969 42.0312 39.8438 35.7812 39.8438 27.9688H4.0625C4.0625 35.7812 12.1094 42.0312 21.9531 42.0312Z"
    //             fill="#E2D8C7"
    //           />
    //           <path
    //             d="M38.0469 27.4219C38.0469 28.2031 37.5 28.8281 36.875 28.8281H2.65625C2.03125 28.8281 1.48438 28.2031 1.48438 27.4219C1.48438 26.6406 2.03125 26.0156 2.65625 26.0156H36.875C37.5 26.0156 38.0469 26.6406 38.0469 27.4219Z"
    //             fill="#C6BBB3"
    //           />
    //           <path
    //             d="M38.0469 24.5312C38.0469 25.3125 37.5 25.9375 36.875 25.9375H2.65625C2.03125 25.9375 1.48438 25.3125 1.48438 24.5312C1.48438 23.75 2.03125 23.125 2.65625 23.125H36.875C37.5 23.125 38.0469 23.75 38.0469 24.5312Z"
    //             fill="#42ADE2"
    //           />
    //           <path
    //             d="M37.5 28.5156C38.7944 28.5156 39.8438 27.4663 39.8438 26.1719C39.8438 24.8775 38.7944 23.8281 37.5 23.8281C36.2056 23.8281 35.1562 24.8775 35.1562 26.1719C35.1562 27.4663 36.2056 28.5156 37.5 28.5156Z"
    //             fill="#636A6B"
    //           />
    //           <path
    //             d="M45.3125 5.78125C45.3125 7.34375 44.0625 8.59375 42.5 8.59375C40.9375 8.59375 39.6875 7.34375 39.6875 5.78125H45.3125Z"
    //             fill="#636A6B"
    //           />
    //         </svg>
    //       </button>
    //     </Grid>
    //   </Grid>

    //   {/* CONTENIDO */}
    //   <>
    //     <div
    //       style={{
    //         margin: "1rem 1rem 1rem 1rem",
    //         border: "1px solid #CECECE",
    //         background: "#FDFDFD",
    //         padding: "1rem",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       <section
    //         style={{
    //           display: "flex",
    //         }}
    //       >
    //         <div style={{ display: "flex" }}>
    //           <span
    //             style={{
    //               fontFamily: "Inter",
    //               fontSize: "16px",
    //               color: "#FB9825",
    //               position: "absolute",
    //               left: "4rem",
    //             }}
    //           >
    //             Hora
    //           </span>
    //           <select
    //             style={{
    //               width: "140px",
    //               marginTop: "1.2rem",
    //               marginLeft: "1.5rem",
    //               marginBottom: "1rem",
    //               textAlign: "center",
    //               borderRadius: "20px",
    //               color: "#D9D9D9",
    //               fontSize: "16px",
    //               fontFamily: "Inter",
    //               background: "transparent",
    //               height: "40px",
    //               border: "1px solid #FB9825",
    //             }}
    //             name=""
    //             id=""
    //           >
    //             <option value="8am">8:00am</option>
    //             <option value="9am">9:00am</option>
    //             <option value="10am">10:00am</option>
    //             <option value="11am">11:00am</option>
    //             <option value="12am">12:00am</option>
    //             <option value="1pm">1:00pm</option>
    //             <option value="2pm">2:00pm</option>
    //           </select>
    //         </div>
    //         <div
    //           style={{
    //             margin: "auto auto auto auto",
    //             display: "flex",
    //             fontFamily: "Inter",
    //             fontSize: "16px",
    //           }}
    //         >
    //           <input
    //             style={{ width: "20px", height: "20px", marginRight: "1rem" }}
    //             type="checkbox"
    //             name=""
    //             id=""
    //           />
    //           <p style={{ margin: "auto 0px auto 0px", color: "#000000" }}>
    //             Ahora
    //           </p>
    //         </div>
    //       </section>

    //       <section>
    //         <span
    //           style={{
    //             fontFamily: "Inter",
    //             fontSize: "16px",
    //             color: "#FB9825",
    //             marginLeft: "1.5rem",
    //           }}
    //         >
    //           Tipo
    //         </span>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "center",
    //             marginTop: "0.3rem",
    //             marginBottom: "1rem",
    //           }}
    //         >
    //           <button
    //             onClick={() => setTipoSelected(1)}
    //             style={{
    //               borderRadius: "20px",
    //               width: "80px",
    //               background: "#FDD402",
    //               border: `${TipoSelected === 1 ? "2px" : "1px"} solid #95A5A6`,
    //               fontFamily: "Inter",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Pis
    //           </button>
    //           <button
    //             onClick={() => setTipoSelected(2)}
    //             style={{
    //               borderRadius: "20px",
    //               width: "80px",
    //               background: "#B49375",
    //               border: `${TipoSelected === 2 ? "2px" : "1px"} solid black`,
    //               fontFamily: "Inter",
    //               fontSize: "14px",
    //               marginLeft: "0.5rem",
    //               marginRight: "0.5rem",
    //             }}
    //           >
    //             Popó
    //           </button>
    //           <button
    //             onClick={() => setTipoSelected(3)}
    //             style={{
    //               borderRadius: "20px",
    //               width: "80px",
    //               background: "#C4C74A",
    //               border: `${TipoSelected === 3 ? "2px" : "1px"} solid black`,
    //               fontFamily: "Inter",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Pis + Popó
    //           </button>
    //         </div>
    //         <div style={{ display: "flex", justifyContent: "center" }}>
    //           <button
    //             onClick={() => setTipoSelected(4)}
    //             style={{
    //               borderRadius: "20px",
    //               width: "80px",
    //               background: "#B1DDEE",
    //               margin: "0px 0.2rem 0px 0.2rem",
    //               border: `${TipoSelected === 4 ? "2px" : "1px"} solid #1E88E5`,
    //               fontFamily: "Inter",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Seco
    //           </button>
    //           <button
    //             onClick={() => setTipoSelected(5)}
    //             style={{
    //               borderRadius: "20px",
    //               width: "80px",
    //               background: "#EF7E7E",
    //               margin: "0px 0.2rem 0px 0.2rem",
    //               border: `${TipoSelected === 5 ? "2px" : "1px"} solid black`,
    //               fontFamily: "Inter",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Accidente
    //           </button>
    //         </div>
    //       </section>

    //       <span
    //         style={{
    //           fontFamily: "Inter",
    //           fontSize: "16px",
    //           color: "#FB9825",
    //           position: "absolute",
    //           left: "4rem",
    //         }}
    //       >
    //         Nota
    //       </span>
    //       <center>
    //         <textarea
    //           style={{
    //             marginBottom: "1rem",
    //             marginRight: "1.5rem",
    //             marginLeft: "1.5rem",
    //             marginTop: "1.5rem",
    //             fontSize: "14px",
    //             fontFamily: "Inder",
    //             minHeight: "80px",
    //             maxHeight: "80px",
    //             minWidth: "230px",
    //             border: "1px solid #FB9825",
    //             maxWidth: "230px",
    //             borderRadius: "10px",
    //             padding: "1rem",
    //           }}
    //           name=""
    //           id=""
    //           cols="30"
    //           rows="10"
    //         ></textarea>
    //       </center>
    //     </div>
    //   </>
    // </>
    <MyComponent />
  );
};

export default Panial_Pelela;
