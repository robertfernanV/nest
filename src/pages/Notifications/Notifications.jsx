import Box from "@mui/material/Box";
import Menu from "../../components/Menu/Menu";
const Notifications = () => {
  window.scrollTo(0, 0);

  const previousBtn = () => {
    history.back();
  };
  return (
    <>
      <Box marginTop={"2rem"} marginBottom={"2rem"}>
        <button onClick={previousBtn} className="newFamily__previousBtn">
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
        <h1 className="newFamily__title">Notificaciones</h1>
      </Box>
      {/* <Menu /> */}

      {/* NUEVAS */}
      <div>
        <p
          style={{
            fontFamily: "Inder",
            marginLeft: "2rem",
          }}
        >
          Nuevas
        </p>

        {/* NOTIFICATION #1 */}
        <div
          style={{
            display: "flex",
            marginBottom: '1rem',
            marginTop: '1rem',
            width: '350px'

          }}
        >
          <img
            style={{
              marginLeft: "1rem",
              marginTop: "auto",
              marginBottom: "auto",
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              border: "1px solid #D9D9D9",
            }}
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            alt=""
          />
          <section
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              marginLeft: "1rem",
            }}
          >
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <strong>Angie</strong> inició jornada laboral.
            </p>
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              Hoy, 8:00
            </p>
          </section>
        </div>

        {/* NOTIFICATION #2 */}
        <div
          style={{
            display: "flex",
            marginBottom: '1rem',
            marginTop: '1rem',
            width: '350px'
          }}
        >
          <img
            style={{
              marginLeft: "1rem",
              marginTop: "auto",
              marginBottom: "auto",
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              border: "1px solid #D9D9D9",
            }}
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            alt=""
          />
          <section
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              marginLeft: "1rem",
            }}
          >
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <strong>Alan</strong> tuvo un nuevo cambio de pañal
              reportado por Angie.
            </p>
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              Hoy, 10:45
            </p>
          </section>
        </div>
      </div>









      {/* ANTERIOR */}
      <div>
        <p
          style={{
            fontFamily: "Inder",
            marginLeft: "2rem",
          }}
        >
          Anterior
        </p>

        {/* NOTIFICATION #1 */}
        <div
          style={{
            display: "flex",
            marginBottom: '1rem',
            marginTop: '1rem',
            width: '350px'

          }}
        >
          <img
            style={{
              marginLeft: "1rem",
              marginTop: "auto",
              marginBottom: "auto",
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              border: "1px solid #D9D9D9",
            }}
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            alt=""
          />
          <section
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              marginLeft: "1rem",
            }}
          >
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <strong>Lorem</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              Hoy, 8:00
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Notifications;
