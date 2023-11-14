import Box from "@mui/material/Box";
import UserAccountPlaceHolder from "../../assets/images/cuentaUsuario.jpeg";
import "./userAccount.scss";

const UserAccount = () => {
  window.scrollTo(0, 0);

  const handleBack = () => {
    history.back();
  };

  return (
    <>
      <Box marginTop={"2rem"}>
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
        <h1 className="newFamily__title">Cuenta de Usuario</h1>

        <img src={UserAccountPlaceHolder} className="imagen" />
        <div className="image_wrapper">
          <button className="createNewFamily__saveCancelBtn createNewFamily__save">
            Aceptar
          </button>
        </div>
      </Box>
    </>
  );
};

export default UserAccount;
