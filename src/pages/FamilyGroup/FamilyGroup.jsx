import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { TextField, Typography, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CheckIcon from "@mui/icons-material/Check";
import "./FamilyGroup.scss";

function FamilyGroup() {
  window.scrollTo(0, 0);

  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/familyList");
  };
  const handleEdit = () => {
    navigate("/editFamily");
  };
  const handleBabyInfo = () => {
    navigate("/selectBaby");
  };
  return (
    <>
      <Box>
        <button onClick={handleMenu} className="newFamily__previousBtn">
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
        <h1 className="newFamily__title">Familia Fernández</h1>

        {/* <Box
          sx={{
            textAlign: "center",
          }}
        >
          <img
            width="150px"
            src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-family-day-family-of-five-pattern-png-image_9124572.png"
            alt=""
          />
        </Box> */}
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            style={{
              borderRadius: "10px",
              border: "1px solid #878787",
              marginLeft: "2rem",
            }}
            width="150px"
            height="150px"
            src="https://valricherphotography.files.wordpress.com/2022/02/calgary-kananaskis-photographer-25.jpg"
            alt=""
          />
          <section
            style={{
              fontFamily: "Happy_Monkey",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p>
              Jefe de Familia: <span>Tú</span>
            </p>
            <p
              style={{
                marginTop: "0px",
              }}
            >
              Miembros: <span>5</span>
            </p>
          </section>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            marginLeft: "10rem",
            bottom: "2.5rem",
          }}
        >
          {/* EDIT BUTTON */}
          <button
            onClick={handleEdit}
            style={{
              marginLeft: "0.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#FBBF13",
              border: "none",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <EditIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>

          {/* DELETE BUTTON */}
          <button
            style={{
              marginLeft: "0.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#DB4B4B",
              border: "none",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <DeleteOutlineOutlinedIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>

          {/* LEAVE BUTTON */}
          <button
            style={{
              marginLeft: "0.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#1E88E5",
              border: "none",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <LogoutOutlinedIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>
        </div>
      </Box>

      <center>
        <h3
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#747474",
            marginBottom: "2rem",
          }}
        >
          Miembros
        </h3>
      </center>

      {/* PARTICIPANT */}
      <div
        onClick={handleBabyInfo}
        style={{
          display: "flex",
          marginLeft: "2rem",
          marginRight: "2rem",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <img
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            border: "1px solid #D9D9D9",
          }}
          src="https://todaysparent.mblycdn.com/uploads/tp/2014/12/blanket-baby-article.jpg"
          alt=""
        />
        <section
          style={{
            fontFamily: "Imprima",
            marginLeft: "1rem",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              marginTop: 0,
              marginBottom: 0,
              color: "#FB9825",
            }}
          >
            Alan Luciano
          </p>
          <p
            style={{
              fontSize: "16px",
              marginTop: 0,
              marginBottom: 0,
              color: "#878787",
            }}
          >
            Niño
          </p>
        </section>
      </div>

      {/* PARTICIPANT #2 */}
      <div
        style={{
          display: "flex",
          marginLeft: "2rem",
          marginRight: "2rem",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <img
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            border: "1px solid #D9D9D9",
          }}
          src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk5NDc2NTQ1MDM3ODA0OTU4/the-effects-of-a-father-on-a-daughters-life.png"
          alt=""
        />
        <section
          style={{
            fontFamily: "Imprima",
            marginLeft: "1rem",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              marginTop: 0,
              marginBottom: 0,
              color: "#FB9825",
            }}
          >
            Roberto
          </p>
          <p
            style={{
              fontSize: "16px",
              marginTop: 0,
              marginBottom: 0,
              color: "#878787",
            }}
          >
            Familiar - Padre
          </p>
        </section>
      </div>

      {/* SOLICITUDES DE MIEMBROS */}

      <h3
        style={{
          fontFamily: "Inter",
          fontSize: "16px",
          color: "#747474",
          marginTop: "3rem",
          marginBottom: "2rem",
          marginLeft: "1.5rem",
        }}
      >
        Solicitudes de miembros:
      </h3>

      {/* SOLICITUD #1 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "1rem",
          marginRight: "1rem",
          marginBottom: "0.7rem",
        }}
      >
        <section
          style={{
            display: "flex",
          }}
        >
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
            }}
            src="https://cdn.pixabay.com/photo/2022/05/10/15/55/beauty-7187457_1280.jpg"
            alt=""
          />
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Imprima",
              color: "#656565",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            Alejandra Fernández{" "}
          </p>
        </section>

        <div>
          {/* CHECK BUTTON */}
          <button
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#9BCA92",
              color: "white",
              border: "none",
            }}
          >
            <CheckIcon />
          </button>

          {/* DELETE BUTTON */}
          <button
            style={{
              marginLeft: "0.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#D32F2F",
              border: "none",
            }}
          >
            <DeleteOutlineOutlinedIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>
        </div>
      </div>

      {/* SOLICITUD #2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "1rem",
          marginRight: "1rem",
          margin: "0.7rem",
        }}
      >
        <section
          style={{
            display: "flex",
          }}
        >
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
            }}
            src="https://images.template.net/83108/free-woman-face-illustration-dx8c3.jpg"
            alt=""
          />
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Imprima",
              color: "#656565",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            Luz Escobar{" "}
          </p>
        </section>

        <div>
          {/* CHECK BUTTON */}
          <button
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#9BCA92",
              color: "white",
              border: "none",
            }}
          >
            <CheckIcon />
          </button>

          {/* DELETE BUTTON */}
          <button
            style={{
              marginLeft: "0.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#D32F2F",
              border: "none",
            }}
          >
            <DeleteOutlineOutlinedIcon
              style={{
                color: "#FFFFFF",
              }}
            />
          </button>
        </div>
      </div>

      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="createNewFamily__saveCancelBtn createNewFamily__save">
          Aceptar
        </button>
      </Box>
    </>
  );
}

export default FamilyGroup;
