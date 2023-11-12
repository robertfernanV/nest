import Box from "@mui/material/Box";
import { TextField, Typography, Grid } from "@mui/material";
import "./CreateNewFamily.scss";
import { useNavigate } from "react-router-dom";

function CreateNewFamily() {
  window.scrollTo(0, 0);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/newFamily");
  };

  const handleAddBaby = () => {
    navigate('/addBaby')
  }

  const handleAddMember = () => {
    navigate('/addMember')
  }

  const handleAddBabySister = () => {
    navigate('/addBabySister')
  }

  return (
    <>
      <Box>
        <button onClick={handleBack} className="newFamily__previousBtn">
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.926624 10.9393C0.340837 11.5251 0.340837 12.4749 0.926624 13.0607L10.4726 22.6066C11.0584 23.1924 12.0081 23.1924 12.5939 22.6066C13.1797 22.0208 13.1797 21.0711 12.5939 20.4853L4.1086 12L12.5939 3.51472C13.1797 2.92893 13.1797 1.97919 12.5939 1.3934C12.0081 0.807611 11.0584 0.807611 10.4726 1.3934L0.926624 10.9393ZM23 10.5L1.98728 10.5V13.5L23 13.5V10.5Z"
              fill="#FB9825"
            />
          </svg>
        </button>
        <h1 className="newFamily__title">Crear Nueva Familia</h1>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.5"
              y="0.5"
              width="149"
              height="149"
              rx="9.5"
              fill="url(#pattern0)"
              stroke="black"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_79_255"
                  transform="translate(-0.333333) scale(0.00574713)"
                />
              </pattern>
              <image
                id="image0_79_255"
                width="290"
                height="174"
                xlinkHref="data:image/jpeg;base64,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"
              />
            </defs>
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <TextField
          label="Nombre de la Familia"
          type="text"
          placeholder="Familia ejemplo"
          sx={{
            width: "320px",
            marginY: "2rem",
            marginX: "1rem",
            marginBottom: "35px",
            "& fieldset": {
              borderRadius: "50px",
            },
            "& .MuiOutlinedInput-root": {
              // "& fieldset": {
              //   borderColor: "#FB9825",
              // },
              // "&:hover fieldset": {
              //   borderColor: "#FB9825",
              // },
              "&.Mui-focused fieldset": {
                borderColor: "#FB9825",
              },
            },
            // "& .MuiFormLabel-root": {
            //   // color: "#FB9825",
            // },
            "& .MuiInputLabel-shrink": {
              color: "#FB9825 !important",
            },
          }}
        />
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#FB9825",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "19px",
            letterSpacing: "0em",
            marginBottom: "1rem",
          }}
        >
          Agregar miembros
        </Typography>
      </Box>
      {/* NIÑOS - PANEL */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            border: "1px solid #C4C74A",
          }}
        ></Box>
        <Box
          sx={{
            width: "113px",
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "Inter",
            color: "#FFFFFF",
            height: "19px",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            background: "#C4C74A",
          }}
        >
          Niños
        </Box>
      </Box>
      <Grid xs={12} container>
        {/* NIÑO 1 */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <svg
            className="createNewFamily__svg"
            width="50"
            height="50"
            viewBox="0 0 44 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9989 11.875C25.6826 11.875 28.6663 9.21797 28.6663 5.9375C28.6663 2.65703 25.6826 0 21.9989 0C18.3151 0 15.3314 2.65703 15.3314 5.9375C15.3314 9.21797 18.3151 11.875 21.9989 11.875ZM17.5483 30.3406L19.6819 27.9656L14.5563 24.1656L10.7309 28.4258C9.7808 29.4797 9.75579 30.9789 10.6642 32.0625L14.6647 36.8125C15.3231 37.5918 16.3232 38 17.3317 38C18.0234 38 18.7318 37.807 19.3319 37.4062C20.807 36.4266 21.0987 34.5637 19.9986 33.25L17.5483 30.3406ZM29.4414 24.1656L24.3158 27.9656L26.4494 30.3406L23.9991 33.25C22.899 34.5637 23.1907 36.4266 24.6658 37.4062C25.2659 37.807 25.966 38 26.666 38C27.6828 38 28.6829 37.5918 29.333 36.8125L33.3335 32.0625C34.2419 30.9789 34.2169 29.4797 33.2668 28.4258L29.4414 24.1656ZM37.3923 10.7617C36.3338 9.41836 34.2586 9.09922 32.7501 10.0344L29.3664 12.1496C24.9742 14.8957 19.0152 14.8957 14.6313 12.1496L11.2476 10.0418C9.73913 9.09922 7.66389 9.42578 6.60544 10.7617C5.54698 12.1051 5.91369 13.9531 7.41386 14.8957L10.7976 17.0109C12.2144 17.8941 13.7479 18.5621 15.3314 19.0816V21.375H28.6663V19.0891C30.2498 18.5695 31.7833 17.9016 33.2001 17.0184L36.5838 14.9031C38.0923 13.9531 38.4507 12.1051 37.3923 10.7617Z"
              fill="#FB9825"
            />
          </svg>
          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Niño 1
          </Typography>
        </Grid>

        {/* NIÑO 2 */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <svg
            className="createNewFamily__svg"
            width="50"
            height="50"
            viewBox="0 0 44 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9989 11.875C25.6826 11.875 28.6663 9.21797 28.6663 5.9375C28.6663 2.65703 25.6826 0 21.9989 0C18.3151 0 15.3314 2.65703 15.3314 5.9375C15.3314 9.21797 18.3151 11.875 21.9989 11.875ZM17.5483 30.3406L19.6819 27.9656L14.5563 24.1656L10.7309 28.4258C9.7808 29.4797 9.75579 30.9789 10.6642 32.0625L14.6647 36.8125C15.3231 37.5918 16.3232 38 17.3317 38C18.0234 38 18.7318 37.807 19.3319 37.4062C20.807 36.4266 21.0987 34.5637 19.9986 33.25L17.5483 30.3406ZM29.4414 24.1656L24.3158 27.9656L26.4494 30.3406L23.9991 33.25C22.899 34.5637 23.1907 36.4266 24.6658 37.4062C25.2659 37.807 25.966 38 26.666 38C27.6828 38 28.6829 37.5918 29.333 36.8125L33.3335 32.0625C34.2419 30.9789 34.2169 29.4797 33.2668 28.4258L29.4414 24.1656ZM37.3923 10.7617C36.3338 9.41836 34.2586 9.09922 32.7501 10.0344L29.3664 12.1496C24.9742 14.8957 19.0152 14.8957 14.6313 12.1496L11.2476 10.0418C9.73913 9.09922 7.66389 9.42578 6.60544 10.7617C5.54698 12.1051 5.91369 13.9531 7.41386 14.8957L10.7976 17.0109C12.2144 17.8941 13.7479 18.5621 15.3314 19.0816V21.375H28.6663V19.0891C30.2498 18.5695 31.7833 17.9016 33.2001 17.0184L36.5838 14.9031C38.0923 13.9531 38.4507 12.1051 37.3923 10.7617Z"
              fill="#FB9825"
            />
          </svg>
          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Niño 1
          </Typography>
        </Grid>

        {/* NINGUNO */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <button
          onClick={handleAddBaby}
            style={{
              background: "none",
              border: "none",
            }}
          >
            <svg
              className="createNewFamily__newMember"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.05114 20.4233V0.309658H13.1364V20.4233H8.05114ZM0.536932 12.9091V7.82386H20.6506V12.9091H0.536932Z"
                fill="white"
              />
            </svg>
          </button>
        </Grid>
      </Grid>

      {/* Familiares - PANEL */}
      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            border: "1px solid #C4C74A",
          }}
        ></Box>
        <Box
          sx={{
            width: "113px",
            textAlign: "center",
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#FFFFFF",
            height: "19px",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            background: "#C4C74A",
          }}
        >
          Familiares
        </Box>
      </Box>

      <Grid xs={12} container>
        {/* FAMILIAR */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <svg
            className="createNewFamily__svg"
            width="50"
            height="50"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.4925 22.2426C29.2082 20.8927 30.4605 19.0417 31.0752 16.947C31.6898 14.8523 31.6364 12.6181 30.9221 10.5552C30.2079 8.49227 28.8684 6.70328 27.0901 5.43709C25.3118 4.1709 23.183 3.49048 21 3.49048C18.817 3.49048 16.6882 4.1709 14.9099 5.43709C13.1315 6.70328 11.7921 8.49227 11.0779 10.5552C10.3636 12.6181 10.3101 14.8523 10.9248 16.947C11.5395 19.0417 12.7918 20.8927 14.5075 22.2426C11.5676 23.4204 9.0025 25.374 7.08556 27.8949C5.16862 30.4159 3.97173 33.4099 3.62249 36.5576C3.59721 36.7874 3.61745 37.02 3.68204 37.2419C3.74663 37.4639 3.85431 37.671 3.99894 37.8514C4.29103 38.2157 4.71587 38.449 5.17999 38.5001C5.64412 38.5511 6.10952 38.4157 6.47381 38.1236C6.8381 37.8316 7.07144 37.4067 7.12249 36.9426C7.50677 33.5217 9.13795 30.3623 11.7044 28.068C14.2708 25.7737 17.5926 24.5054 21.035 24.5054C24.4774 24.5054 27.7992 25.7737 30.3656 28.068C32.932 30.3623 34.5632 33.5217 34.9475 36.9426C34.9951 37.3726 35.2003 37.7697 35.5234 38.0574C35.8466 38.345 36.2649 38.5027 36.6975 38.5001H36.89C37.3487 38.4473 37.768 38.2154 38.0565 37.8548C38.3449 37.4942 38.4792 37.0342 38.43 36.5751C38.0791 33.4185 36.8758 30.4168 34.949 27.892C33.0222 25.3671 30.4446 23.4142 27.4925 22.2426ZM21 21.0001C19.6155 21.0001 18.2621 20.5896 17.111 19.8204C15.9599 19.0512 15.0626 17.958 14.5328 16.6789C14.003 15.3998 13.8644 13.9923 14.1345 12.6345C14.4046 11.2766 15.0713 10.0293 16.0502 9.05035C17.0292 8.07138 18.2765 7.4047 19.6344 7.1346C20.9922 6.8645 22.3997 7.00313 23.6788 7.53294C24.9579 8.06275 26.0511 8.95996 26.8203 10.1111C27.5895 11.2622 28 12.6156 28 14.0001C28 15.8566 27.2625 17.6371 25.9497 18.9498C24.637 20.2626 22.8565 21.0001 21 21.0001Z"
              fill="#FB9825"
            />
          </svg>

          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Familiar
          </Typography>
        </Grid>

        {/* NINGUNO */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <button
          onClick={handleAddMember}
            style={{
              background: "none",
              border: "none",
            }}
          >
          <svg
            className="createNewFamily__newMember"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.05114 20.4233V0.309658H13.1364V20.4233H8.05114ZM0.536932 12.9091V7.82386H20.6506V12.9091H0.536932Z"
              fill="white"
            />
          </svg>
          </button>
        </Grid>
      </Grid>

      {/* Niñeras - PANEL */}
      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            border: "1px solid #C4C74A",
          }}
        ></Box>
        <Box
          sx={{
            width: "113px",
            textAlign: "center",
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#FFFFFF",
            height: "19px",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            background: "#C4C74A",
          }}
        >
          Niñeras
        </Box>
      </Box>

      <Grid xs={12} container>
        {/* NIÑERA */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <svg
            className="createNewFamily__svg"
            width="50"
            height="50"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.75 23.44C38.75 22.2669 38.1919 21.0862 37.1169 20.46C37.3612 19.2419 37.5406 17.8325 37.5406 16.2513C37.54 9.37563 32.6281 1.25 20 1.25C7.37062 1.25 2.46 9.37563 2.46 16.2513C2.46 17.8319 2.63937 19.2406 2.88375 20.4588C1.80687 21.085 1.25 22.2669 1.25 23.44C1.25 24.7537 1.95312 26.0719 3.29813 26.6138C1.83125 29.3775 1.21187 33.3469 2.74437 36.1475C3.4075 37.3594 9.43125 41.2219 11.4319 36.3613C13.7194 37.4463 16.5625 38.1287 20 38.1287C23.4375 38.1287 26.2794 37.4463 28.5669 36.3613C30.5688 41.2219 36.5919 37.36 37.2556 36.1475C38.7863 33.3475 38.1675 29.3787 36.7 26.6138C38.0456 26.0719 38.75 24.7544 38.75 23.44ZM20.0062 3.75C29.2556 3.75 35.4238 8.75063 35.4238 15.0013C35.4238 15.0013 33.5731 5.62563 20.0062 5.62563C6.43937 5.62563 3.97125 15.0013 3.97125 15.0013C3.97125 8.75063 10.7556 3.75 20.0062 3.75ZM34.7194 25.6275V26.2525C34.7194 30.6656 30.1525 36.8787 20 36.8787C9.84625 36.8787 5.27937 30.6656 5.27937 26.2525V25.6275H4.675C3.14438 25.6275 2.45937 24.5288 2.45937 23.44C2.45937 22.3512 3.14438 21.2525 4.675 21.2525H4.79L4.8975 21.2087C4.955 21.1856 10.1637 18.9794 10.1075 12.5106C16.0294 18.2444 31.4431 19.2125 34.7194 19.3556V21.2531H35.325C36.8544 21.2531 37.5406 22.3519 37.5406 23.4406C37.5406 24.5294 36.8544 25.6281 35.325 25.6281L34.7194 25.6275Z"
              fill="#FB9825"
            />
            <path
              d="M27.8125 25.9399C29.5384 25.9399 30.9375 24.5408 30.9375 22.8149C30.9375 21.0891 29.5384 19.6899 27.8125 19.6899C26.0866 19.6899 24.6875 21.0891 24.6875 22.8149C24.6875 24.5408 26.0866 25.9399 27.8125 25.9399Z"
              fill="#FB9825"
            />
            <path
              d="M12.1875 25.9399C13.9134 25.9399 15.3125 24.5408 15.3125 22.8149C15.3125 21.0891 13.9134 19.6899 12.1875 19.6899C10.4616 19.6899 9.0625 21.0891 9.0625 22.8149C9.0625 24.5408 10.4616 25.9399 12.1875 25.9399Z"
              fill="#FB9825"
            />
            <path
              d="M25.0563 30.0818C21.7969 32.3318 18.1813 32.3181 14.9425 30.0818C14.5544 29.8118 14.2025 30.2781 14.4663 30.7106C15.4513 32.3181 17.4463 33.7524 19.9988 33.7524C22.5525 33.7524 24.5469 32.3181 25.5325 30.7106C25.7981 30.2781 25.4469 29.8118 25.0563 30.0818Z"
              fill="#FB9825"
            />
          </svg>
          <Typography
            sx={{
              fontFamily: "Imprima",
            }}
          >
            Niñera
          </Typography>
        </Grid>

        {/* NINGUNO */}
        <Grid
          sx={{
            textAlign: "center",
            marginX: "5px",
          }}
          item
          xs={2}
        >
          <button
          onClick={handleAddBabySister}
            style={{
              background: "none",
              border: "none",
            }}
          >
          <svg
            className="createNewFamily__newMember"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.05114 20.4233V0.309658H13.1364V20.4233H8.05114ZM0.536932 12.9091V7.82386H20.6506V12.9091H0.536932Z"
              fill="white"
            />
          </svg>
          </button>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={handleBack} className="createNewFamily__saveCancelBtn ">Cancelar</button>
        <button className="createNewFamily__saveCancelBtn createNewFamily__save">
          Guardar
        </button>
      </Box>
    </>
  );
}

export default CreateNewFamily;
