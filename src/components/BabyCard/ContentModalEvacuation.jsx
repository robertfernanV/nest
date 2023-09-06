import { Box, Typography } from "@mui/material";
import "./ContentModal.scss";

function ContentModalEvacuation() {
  return (
    <>
      {/* EVACUATION */}
      <>
        {/* HORA */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "85px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                stroke="#FB9825"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                stroke="#FB9825"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="contentModal__text">Hora: </p>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              10:10am
            </Typography>
          </Box>
        </Box>

        {/* CANTIDAD */}
        <Box
          sx={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "65px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_323_1285)">
                <path
                  d="M19.1667 1.875C19.625 1.875 20 1.59375 20 1.25V0.625C20 0.28125 19.625 0 19.1667 0H0.833333C0.375 0 0 0.28125 0 0.625V1.25C0 1.59375 0.375 1.875 0.833333 1.875H1.66667V7.99609C0.614583 8.39062 0 8.86328 0 9.375C0 12 1.80208 14.3047 4.52083 15.6445L3.40625 18.3867C3.07812 19.1875 3.88021 20 5 20H15C16.1198 20 16.9219 19.1875 16.5938 18.3867L15.4792 15.6445C18.1979 14.3047 20 12 20 9.375C20 8.86328 19.3854 8.39062 18.3333 7.99609V1.875H19.1667ZM4.16667 2.8125C4.16667 2.64062 4.35417 2.5 4.58333 2.5H7.08333C7.3125 2.5 7.5 2.64062 7.5 2.8125V3.4375C7.5 3.60938 7.3125 3.75 7.08333 3.75H4.58333C4.35417 3.75 4.16667 3.60938 4.16667 3.4375V2.8125ZM10 10.625C5.98438 10.625 2.72917 10.0664 2.72917 9.375C2.72917 8.68359 5.98438 8.125 10 8.125C14.0156 8.125 17.2708 8.68359 17.2708 9.375C17.2708 10.0664 14.0156 10.625 10 10.625Z"
                  fill="#FB9825"
                />
              </g>
              <defs>
                <clipPath id="clip0_323_1285">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Typography
              sx={{
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Pis:
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Sí
            </Typography>
          </Box>
        </Box>

        {/* OBSERVACIÓN DE LA ORINA */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "1.5em",
          }}
        >
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Observación:
          </Typography>
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            -
          </Typography>
        </Box>

        {/* POPÓ */}
        <Box
          sx={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "85px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_323_1288)">
                <path
                  d="M17.6328 14.418C18.3086 13.9062 18.75 13.1016 18.75 12.1875C18.75 10.6328 17.4922 9.375 15.9375 9.375H15.3867C15.9102 8.91797 16.25 8.25 16.25 7.5C16.25 6.12109 15.1289 5 13.75 5H13.5195C13.6602 4.60547 13.75 4.19141 13.75 3.75C13.75 1.67969 12.0703 0 10 0C9.79688 0 9.60156 0.0273438 9.41016 0.0585938C9.77734 0.570312 10 1.19531 10 1.875C10 3.60156 8.60156 5 6.875 5H6.25C4.87109 5 3.75 6.12109 3.75 7.5C3.75 8.25 4.08984 8.91797 4.61328 9.375H4.0625C2.50781 9.375 1.25 10.6328 1.25 12.1875C1.25 13.1016 1.69141 13.9062 2.36719 14.418C1.02734 14.6328 0 15.7852 0 17.1875C0 18.7422 1.25781 20 2.8125 20H17.1875C18.7422 20 20 18.7422 20 17.1875C20 15.7852 18.9727 14.6328 17.6328 14.418ZM7.5 10C8.19141 10 8.75 10.5586 8.75 11.25C8.75 11.9414 8.19141 12.5 7.5 12.5C6.80859 12.5 6.25 11.9414 6.25 11.25C6.25 10.5586 6.80859 10 7.5 10ZM13.7305 15.4297C13.3203 16.5195 11.4453 17.5 10 17.5C8.55469 17.5 6.67969 16.5195 6.26953 15.4297C6.19141 15.2227 6.34766 15 6.57422 15H13.4258C13.6523 15 13.8086 15.2227 13.7305 15.4297ZM12.5 12.5C11.8086 12.5 11.25 11.9414 11.25 11.25C11.25 10.5586 11.8086 10 12.5 10C13.1914 10 13.75 10.5586 13.75 11.25C13.75 11.9414 13.1914 12.5 12.5 12.5Z"
                  fill="#FB9825"
                />
              </g>
              <defs>
                <clipPath id="clip0_323_1288">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Typography
              sx={{
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Popó:
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Sí
            </Typography>
          </Box>
        </Box>

        {/* CANTIDAD DE POPÓ */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "1.7em",
          }}
        >
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Cantidad:
          </Typography>
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Poco
          </Typography>
        </Box>

        {/* CONSISTENCIA DEL POPÓ */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "1.7em",
          }}
        >
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Consistencia:
          </Typography>
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Pastoso
          </Typography>
        </Box>


        {/* COLOR DEL POPÓ */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "1.7em",
          }}
        >
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Color:
          </Typography>
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Marrón Claro
          </Typography>
        </Box>

        {/* COLOR DEL POPÓ */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "1.7em",
          }}
        >
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            Observación:
          </Typography>
          <Typography
            sx={{
              marginX: "1rem",
              fontFamily: "Happy_Monkey",
            }}
            className="contentModal__text"
          >
            -
          </Typography>
        </Box>

        {/* CUIDADOR */}
        <Box
          sx={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "120px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0917 10.5917C13.9087 9.94891 14.505 9.06746 14.7977 8.06997C15.0904 7.07249 15.0649 6.00858 14.7248 5.02625C14.3847 4.04391 13.7469 3.19202 12.9001 2.58907C12.0532 1.98612 11.0395 1.66211 10 1.66211C8.96045 1.66211 7.94676 1.98612 7.09994 2.58907C6.25312 3.19202 5.61528 4.04391 5.27517 5.02625C4.93506 6.00858 4.90959 7.07249 5.2023 8.06997C5.49501 9.06746 6.09134 9.94891 6.90833 10.5917C5.5084 11.1526 4.2869 12.0828 3.37407 13.2833C2.46125 14.4838 1.8913 15.9094 1.725 17.4084C1.71296 17.5178 1.72259 17.6285 1.75335 17.7342C1.78411 17.8399 1.83539 17.9386 1.90426 18.0245C2.04335 18.1979 2.24565 18.309 2.46666 18.3334C2.68768 18.3577 2.9093 18.2932 3.08277 18.1541C3.25624 18.015 3.36735 17.8127 3.39166 17.5917C3.57465 15.9627 4.3514 14.4582 5.57351 13.3657C6.79562 12.2732 8.37741 11.6692 10.0167 11.6692C11.6559 11.6692 13.2377 12.2732 14.4598 13.3657C15.6819 14.4582 16.4587 15.9627 16.6417 17.5917C16.6643 17.7965 16.762 17.9856 16.9159 18.1225C17.0698 18.2595 17.269 18.3346 17.475 18.3334H17.5667C17.7851 18.3082 17.9848 18.1978 18.1221 18.0261C18.2595 17.8544 18.3234 17.6353 18.3 17.4167C18.1329 15.9135 17.5599 14.4842 16.6424 13.2819C15.7249 12.0795 14.4974 11.1496 13.0917 10.5917ZM10 10C9.34073 10 8.69626 9.80453 8.1481 9.43825C7.59993 9.07198 7.17269 8.55139 6.9204 7.9423C6.66811 7.33321 6.6021 6.66299 6.73071 6.01639C6.85933 5.36979 7.1768 4.77584 7.64297 4.30967C8.10915 3.84349 8.70309 3.52602 9.3497 3.39741C9.9963 3.26879 10.6665 3.3348 11.2756 3.58709C11.8847 3.83938 12.4053 4.26662 12.7716 4.81479C13.1378 5.36295 13.3333 6.00742 13.3333 6.66669C13.3333 7.55074 12.9821 8.39859 12.357 9.02371C11.7319 9.64883 10.8841 10 10 10Z"
                fill="#FB9825"
              />
            </svg>

            <Typography
              sx={{
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Cuidador:
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Angie
            </Typography>
          </Box>
        </Box>

        {/* NOTA */}
        <Box
          sx={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Happy_Monkey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "85px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66671 4.16667H5.00004C4.55801 4.16667 4.13409 4.34226 3.82153 4.65482C3.50897 4.96738 3.33337 5.39131 3.33337 5.83333V15.8333C3.33337 16.2754 3.50897 16.6993 3.82153 17.0118C4.13409 17.3244 4.55801 17.5 5.00004 17.5H15C15.4421 17.5 15.866 17.3244 16.1786 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333V5.83333C16.6667 5.39131 16.4911 4.96738 16.1786 4.65482C15.866 4.34226 15.4421 4.16667 15 4.16667H13.3334M6.66671 4.16667C6.66671 3.72464 6.8423 3.30072 7.15486 2.98816C7.46742 2.67559 7.89135 2.5 8.33337 2.5H11.6667C12.1087 2.5 12.5327 2.67559 12.8452 2.98816C13.1578 3.30072 13.3334 3.72464 13.3334 4.16667M6.66671 4.16667C6.66671 4.60869 6.8423 5.03262 7.15486 5.34518C7.46742 5.65774 7.89135 5.83333 8.33337 5.83333H11.6667C12.1087 5.83333 12.5327 5.65774 12.8452 5.34518C13.1578 5.03262 13.3334 4.60869 13.3334 4.16667M6.66671 9.16667H13.3334M6.66671 12.5H10"
                stroke="#FB9825"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Typography
              sx={{
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              Nota:
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginX: "1rem",
                fontFamily: "Happy_Monkey",
              }}
              className="contentModal__text"
            >
              -
            </Typography>
          </Box>
        </Box>
        {/* <button className="contentModal__btnAceptar">Aceptar</button> */}
      </>
    </>
  );
}

export default ContentModalEvacuation;
