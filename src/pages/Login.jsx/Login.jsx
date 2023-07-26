import { useState } from "react";
import Sheet from "react-modal-sheet";
import logoHome from "../../assets/logohome.png";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import "./Login.scss";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" }); //{email:"",password:""

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const clearForm = () => {
    setFormData({ email: "", password: "" });
  };

  const handleLogin = async () => {};

  return (
    <>
      <div className="container">
        <img src={logoHome} alt="logo" className="logo" />
        <p className="logo__title">NEST</p>
        <p className="logo__slogan">Cuidamos con amor</p>

        <div className="login">
          <ButtonBase
            sx={{
              borderRadius: "50px",
              bgcolor: "#FB9825",
              color: "white",
              width: "80vw",
              height: "40px",
              fontWeight: "bold",
            }}
            onClick={handleClick}
          >
            Login
          </ButtonBase>
          <p>
            <span className="login__register">¿No estás registrado?</span>
            <span className="login__link"> Registrarse</span>
          </p>
        </div>
      </div>
      <Sheet isOpen={isOpen} onClose={clearForm} detent="content-height">
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <form>
              <p className="formTitle">Ingrese sus datos</p>
              <TextField
                label="Correo"
                name="email"
                fullWidth
                sx={{
                  marginBottom: "15px",
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
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                label="Contraseña"
                fullWidth
                type="password"
                name="password"
                sx={{
                  marginBottom: "20px",
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
                value={formData.password}
                onChange={handleInputChange}
              />
              <ButtonBase
                sx={{
                  borderRadius: "50px",
                  bgcolor: "#FB9825",
                  color: "white",
                  width: "95vw",
                  height: "40px",
                  fontWeight: "bold",
                }}
                fullWidth
                onClick={handleLogin}
              >
                Entrar
              </ButtonBase>
            </form>
            <section>
              <p className="formOptions">O</p>
              <ButtonBase
                sx={{
                  borderRadius: "50px",
                  bgcolor: "white",
                  color: "#C4C74A",
                  width: "95vw",
                  height: "40px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  borderColor: "#15e577",
                  border: "1px solid",
                }}
                fullWidth
              >
                Registrarse
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: "50px",
                  bgcolor: "#DB4B4B",
                  color: "white",
                  width: "95vw",
                  height: "40px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
                fullWidth
              >
                Login con Google
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: "50px",
                  bgcolor: "#4F7CD1",
                  color: "white",
                  width: "95vw",
                  height: "40px",
                  fontWeight: "bold",
                  marginBottom: "50px",
                }}
                fullWidth
              >
                Login con Facebook
              </ButtonBase>
            </section>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop
          onClick={() => {
            clearForm();
            setIsOpen(false);
          }}
        />
      </Sheet>
    </>
  );
};
export default Login;
