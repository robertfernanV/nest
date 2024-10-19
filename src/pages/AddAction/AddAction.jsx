import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Leche from "../../components/AddAction/Leche";
import Baño from "../../components/AddAction/Baño";
import Siesta from "../../components/AddAction/Siesta";
import Paseo from "../../components/AddAction/Paseo";
import Habilidad from "../../components/AddAction/Habilidad";
import Nota from "../../components/AddAction/Nota";
import Comida from "../../components/AddAction/Comida";
import Incidente from "../../components/AddAction/Incidente";
import Medicacion from "../../components/AddAction/Medicacion";
import Panial_Pelela from "../../components/AddAction/Panial_Pelela";
import BackArrow from "../../assets/images/arrowBack.svg";
import AddMoreActions from "./AddMoreAction";

import { useDispatch } from "react-redux";
import { addChildActivity } from "../../store/slices/actionSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

const AddAction = () => {
  window.scrollTo(0, 0);
  let { actionId } = useParams();
  const [open, setOpen] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setSaveData(open);
  }, [open]);

  const handleMoveSite = (sitio) => {
    navigate(`/addAction/${sitio}`);
    handleClose();
  };
  const handleCancelarModal = () => handleClose();
  const handleGuardarModal = async () => {
    dispatch(addChildActivity()).finally(() => {
      setSaveData(false);
      navigate("/babyDetails");
    });
  };

  const handleMenu = () => navigate("/babyDetails");

  const renderActionComponent = () => {
    switch (actionId) {
      case "Leche":
        return (
          <Leche
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Baño":
        return (
          <Baño
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Siesta":
        return (
          <Siesta
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Paseo":
        return (
          <Paseo
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Habilidad":
        return (
          <Habilidad
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Nota":
        return (
          <Nota
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Comida":
        return (
          <Comida
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Incidente":
        return (
          <Incidente
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Medicacion":
        return (
          <Medicacion
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      case "Pañal":
        return (
          <Panial_Pelela
            saveData={saveData}
            setSaveData={setSaveData}
            handleClose={handleClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "fixed",
          width: "100%",
          background: "white",
          zIndex: 1,
        }}
      >
        <button
          style={{ top: "0.7rem" }}
          onClick={handleMenu}
          className="newFamily__previousBtn"
        >
          <img src={BackArrow} alt="Back" />
        </button>
        <h1 className="newFamily__title">
          {actionId === "Pañal" ? "Pañal/Pelela" : actionId}
        </h1>
      </div>
      <hr style={{ border: "none", paddingTop: "3rem" }} />

      {/* Main Content */}
      <div style={{ flexGrow: 1 }}>{renderActionComponent()}</div>

      {/* Buttons: Guardar/Descartar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          height: "10vh",
          alignItems: "center",
          justifyContent: "space-evenly",
          background: "#fff",
        }}
      >
        <button
          onClick={handleMenu}
          style={{
            background: "#AFAFAF",
            borderRadius: "10px",
          }}
          className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
        >
          Descartar
        </button>
        <button
          onClick={handleOpen}
          style={{
            borderRadius: "10px",
          }}
          className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
        >
          Guardar
        </button>
      </Box>
      <AddMoreActions
        handleClose={handleClose}
        open={open}
        handleMoveSite={handleMoveSite}
        handleCancelarModal={handleCancelarModal}
        handleGuardarModal={handleGuardarModal}
        boxStyle={style}
      />
    </div>
  );
};

export default AddAction;
