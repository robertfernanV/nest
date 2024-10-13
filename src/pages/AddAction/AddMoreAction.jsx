import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Milk from "../../assets/images/milk.svg";
import Food from "../../assets/images/food.svg";
import Diaper from "../../assets/images/diaper.svg";
import BathRoom from "../../assets/images/bathroom.svg";
import Sleep from "../../assets/images/sleep.svg";
import Walk from "../../assets/images/walk.svg";
import Skill from "../../assets/images/skill.svg";
import Medication from "../../assets/images/medication.svg";
import Incident from "../../assets/images/incident.svg";
import Note from "../../assets/images/note.svg";

const itemStyle = {
  background: "transparent",
  border: "1px solid #D9D9D9",
  borderRadius: "5px",
  padding: "10px",
  boxShadow: "0px 4px 4px 0px #00000040",
  width: "45px",
  height: "45px",
};

const AddMoreActions = ({
  handleClose,
  open,
  handleMoveSite,
  handleCancelarModal,
  handleGuardarModal,
  boxStyle,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Inder",
            color: "#FB9825",
            textAlign: "center",
            marginTop: "0px",
          }}
        >
          El acontecimiento se guardará, ¿Quieres crear otro?
        </p>
        <Grid container columns={{ md: 10 }} spacing={2}>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Leche"
              style={itemStyle}
            >
              <img src={Milk} alt="Leche" style={{ pointerEvents: "none" }} />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Comida"
              style={itemStyle}
            >
              <img src={Food} alt="Comida" style={{ pointerEvents: "none" }} />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Pañal"
              style={itemStyle}
            >
              <img src={Diaper} alt="Pañal" style={{ pointerEvents: "none" }} />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Baño"
              style={itemStyle}
            >
              <img
                src={BathRoom}
                alt="Baño"
                style={{ pointerEvents: "none" }}
              />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Siesta"
              style={itemStyle}
            >
              <img src={Sleep} alt="Siesta" style={{ pointerEvents: "none" }} />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Paseo"
              style={itemStyle}
            >
              <img src={Walk} alt="Paseo" style={{ pointerEvents: "none" }} />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Habilidad"
              style={itemStyle}
            >
              <img
                src={Skill}
                alt="Habilidad"
                style={{ pointerEvents: "none" }}
              />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Medicacion"
              style={itemStyle}
            >
              <img
                src={Medication}
                alt="Medicacion"
                style={{ pointerEvents: "none" }}
              />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Incidente"
              style={itemStyle}
            >
              <img
                src={Incident}
                alt="Incidente"
                style={{ pointerEvents: "none" }}
              />
            </button>
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={(e) => handleMoveSite(e.target.id)}
              id="Nota"
              style={itemStyle}
            >
              <img src={Note} alt="Nota" style={{ pointerEvents: "none" }} />
            </button>
          </Grid>
        </Grid>

        {/* Modal Buttons */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            bottom: "0px",
          }}
        >
          <button
            onClick={handleCancelarModal}
            style={{
              background: "#AFAFAF",
              borderRadius: "10px",
              marginTop: "2rem",
            }}
            className="createNewFamily__saveCancelBtn AddBaby__btnCancelar"
          >
            Cancelar
          </button>
          <button
            onClick={handleGuardarModal}
            style={{
              borderRadius: "10px",
              marginTop: "2rem",
              marginBottom: "0px",
            }}
            className="createNewFamily__saveCancelBtn EditBaby__save createNewFamily__save"
          >
            No, Guardar
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddMoreActions;
