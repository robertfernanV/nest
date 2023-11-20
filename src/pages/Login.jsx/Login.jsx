import { useState } from "react";
import Sheet from "react-modal-sheet";
import logoHome from "../../assets/logohome.png";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Firebase from "../../firebase/firebaseConfig";
import { setLoading, setError, setUser } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { fetchUserById } from "../../store/slices/userSlice";
import { Link, Navigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" }); //{email:"",password:""
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleLogin = async () => {
    dispatch(setLoading(true));
    const auth = await Firebase.getFirebaseAuth();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      dispatch(setUser(response.user));
      // dispatch(fetchUsers());
      dispatch(fetchUserById(response.user.uid));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const clearForm = () => {
  //   setFormData({ email: "", password: "" });
  // };
  return (
    <>
      {user && user.families && <Navigate to="/familyList" />}
      <div className="big_container">
        <div className="container">
          <img src={logoHome} alt="logo" className="logo" />
          <p className="logo__title">NEST</p>
          <p className="logo__slogan">Cuidado y Seguimiento del Bebé</p>

          <div className="login">
            <ButtonBase
              sx={{
                borderRadius: "50px",
                bgcolor: "#FB9825",
                color: "white",
                width: "85vw",
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
      </div>

      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <section>
              <p
                className="bsTitle"
              >
                Ingrese sus datos
              </p>
              <TextField
                label="Correo"
                name="email"
                fullWidth
                size="small"
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
                size="small"
                type="password"
                name="password"
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
                value={formData.password}
                onChange={handleInputChange}
              />
              <ButtonBase
                sx={{
                  fontFamily: "Inter",
                  borderRadius: "50px",
                  bgcolor: "#FB9825",
                  color: "white",
                  width: "95vw",
                  height: "40px",
                  fontWeight: "bold",
                }}
                onClick={handleLogin}
              >
                Entrar
              </ButtonBase>
            </section>
            <section>
              <div className="link_container">
                <Link className="link">
                  Olvidé mi contraseña
                </Link>
              </div>
              <p className="formOptions">o</p>
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
              >
                Continuar con Google
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: "50px",
                  bgcolor: "#4F7CD1",
                  color: "white",
                  width: "95vw",
                  height: "40px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                Continuar con Facebook
              </ButtonBase>
              <ButtonBase
                sx={{
                  borderRadius: "50px",
                  bgcolor: "white",
                  color: "white",
                  width: "95vw",
                  height: "40px",
                  fontWeight: "bold",
                  marginBottom: "40px",
                  borderColor: "#15e577",
                  border: "1px solid",
                }}
                className="btnInsta"
              >
                Continuar con Instagram
              </ButtonBase>
            </section>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};
export default Login;
