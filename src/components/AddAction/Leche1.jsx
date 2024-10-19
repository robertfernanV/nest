import { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setData } from "../../store/slices/actionSlice";

const TimeValues = ({ title, time, name, onTimeChange }) => {
  const timeRange = [
    {
      value: "8:00 am",
      text: "8:00 am",
    },
    {
      value: "8:30 am",
      text: "8:30 am",
    },
    {
      value: "9:00 am",
      text: "9:00 am",
    },
    {
      value: "9:30 am",
      text: "9:30 am",
    },
    {
      value: "10:00 am",
      text: "10:00 am",
    },
    {
      value: "10:30 am",
      text: "10:30 am",
    },
    {
      value: "11:00 am",
      text: "11:00 am",
    },
    {
      value: "11:30 am",
      text: "11:30 am",
    },
    {
      value: "12:00 am",
      text: "12:00 am",
    },
  ];
  return (
    <>
      <span
        style={{
          fontFamily: "Inter",
          fontSize: "16px",
          color: "#FB9825",
          position: "absolute",
          left: "4rem",
        }}
      >
        {title}
      </span>
      <select
        style={{
          width: "140px",
          marginTop: "1.2rem",
          marginLeft: "1.5rem",
          marginBottom: "1rem",
          textAlign: "center",
          borderRadius: "20px",
          color: "#D9D9D9",
          fontSize: "16px",
          fontFamily: "Inter",
          background: "transparent",
          height: "40px",
          border: "1px solid #FB9825",
        }}
        value={time}
        onChange={onTimeChange}
        name={name}
      >
        {timeRange.map(({ value, text }) => (
          <option value={value} key={text}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
};

const getRoundedTime = () => {
  const now = moment();
  const minutes = now.minutes();
  const roundedMinutes = minutes < 15 ? 0 : minutes < 45 ? 30 : 0;
  const roundedHour = minutes >= 45 ? now.add(1, "hour").hour() : now.hour();

  const roundedTime = moment(now).set({
    hour: roundedHour,
    minute: roundedMinutes,
    second: 0,
    millisecond: 0,
  });

  return roundedTime.format("h:mm a");
};

const initialData = {
  typeAction: "",
  data: {
    type: "",
    timeStart: "",
    timeEnd: "",
    period: "",
    side: "",
    note: "",
  },
};

const Leche1 = ({ metodo: typeAction, saveData }) => {
  const [formValues, setFormValues] = useState({ ...initialData, typeAction });

  useEffect(() => {
    setFormValues({ ...formValues, typeAction });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeAction]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (saveData && formValues.data.timeStart !== "") {
      dispatch(setData(formValues));
      setFormValues(initialData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveData]);

  const handleTimeChange = (event) => {
    setFormValues({
      ...formValues,
      data: { ...formValues.data, [event.target.name]: event.target.value },
    });
  };

  const handleNowChange = (event) => {
    if (event.target.checked) {
      setFormValues({
        ...formValues,
        data: { ...formValues.data, [event.target.name]: getRoundedTime() },
      });
    } else {
      setFormValues({
        ...formValues,
        data: { ...formValues.data, [event.target.name]: "" },
      });
    }
  };

  const handlePeriodChange = (event) => {
    setFormValues({
      ...formValues,
      data: { ...formValues.data, period: event.target.value },
    });
  };

  const handleSideChange = (event) => {
    setFormValues({
      ...formValues,
      data: { ...formValues.data, side: event.target.value },
    });
  };

  return (
    <>
      <div
        style={{
          margin: "1rem 1rem 1rem 1rem",
          border: "1px solid #CECECE",
          background: "#FDFDFD",
          padding: "1rem",
          borderRadius: "5px",
        }}
      >
        <section
          style={{
            display: "flex",
          }}
        >
          <div style={{ display: "flex" }}>
            <TimeValues
              title="Hora de Inicio"
              time={formValues.data.timeStart}
              name="timeStart"
              onTimeChange={handleTimeChange}
            />
          </div>
          <div
            style={{
              margin: "auto auto auto auto",
              display: "flex",
              fontFamily: "Inter",
              fontSize: "16px",
            }}
          >
            <input
              style={{ width: "20px", height: "20px", marginRight: "1rem" }}
              type="checkbox"
              name="timeStart"
              id=""
              onChange={handleNowChange}
            />
            <p style={{ margin: "auto 0px auto 0px", color: "#000000" }}>
              Ahora
            </p>
          </div>
        </section>

        <section
          style={{
            display: "flex",
          }}
        >
          <div style={{ display: "flex" }}>
            <TimeValues
              title="Hora de Fin"
              time={formValues.data.timeEnd}
              name="timeEnd"
              onTimeChange={handleTimeChange}
            />
          </div>
          <div
            style={{
              margin: "auto auto auto auto",
              display: "flex",
              fontFamily: "Inter",
              fontSize: "16px",
            }}
          >
            <input
              style={{ width: "20px", height: "20px", marginRight: "1rem" }}
              type="checkbox"
              name="timeEnd"
              id=""
              onChange={handleNowChange}
            />
            <p style={{ margin: "auto 0px auto 0px", color: "#000000" }}>
              Ahora
            </p>
          </div>
        </section>

        {/* SECTION #2 */}

        <section>
          <span
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#FB9825",
              position: "absolute",
              left: "4rem",
            }}
          >
            Duración
          </span>
          <select
            style={{
              width: "140px",
              marginTop: "1.2rem",
              marginLeft: "1.5rem",
              marginBottom: "1rem",
              textAlign: "center",
              borderRadius: "20px",
              color: "#D9D9D9",
              fontSize: "16px",
              fontFamily: "Inter",
              background: "transparent",
              height: "40px",
              border: "1px solid #FB9825",
            }}
            name=""
            id=""
            onChange={handlePeriodChange}
          >
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>
        </section>

        <section>
          <span
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#FB9825",
              marginLeft: "2rem",
            }}
          >
            Lado
          </span>
          <div
            style={{
              margin: "0.5rem auto 1rem auto",
              display: "flex",
              fontFamily: "Inter",
              fontSize: "16px",
              marginLeft: "1.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <input
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "0.3rem",
                }}
                type="radio"
                name="lado"
                id=""
                value={"Derecho"}
                checked={formValues.data.side === "Derecho"}
                onChange={handleSideChange}
              />
              <p style={{ margin: "auto 0px auto 0px", color: "#000000" }}>
                Derecho
              </p>

              <input
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "0.3rem",
                }}
                type="radio"
                name="lado"
                id=""
                value={"Izquierdo"}
                checked={formValues.data.side === "Izquierdo"}
                onChange={handleSideChange}
              />
              <p style={{ margin: "auto 0px auto 0px", color: "#000000" }}>
                Izquierdo
              </p>

              <input
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "0.3rem",
                }}
                type="radio"
                name="lado"
                id=""
                value={"Ambos"}
                checked={formValues.data.side === "Ambos"}
                onChange={handleSideChange}
              />
              <p style={{ margin: "auto 0px auto 0px", color: "#000000" }}>
                Ambos
              </p>
            </div>
          </div>
        </section>

        <span
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#FB9825",
            position: "absolute",
            left: "4rem",
          }}
        >
          Nota
        </span>
        <center>
          <textarea
            style={{
              marginBottom: "1rem",
              marginRight: "1.5rem",
              marginLeft: "1.5rem",
              marginTop: "1.5rem",
              fontSize: "14px",
              fontFamily: "Inder",
              minHeight: "50px",
              maxHeight: "50px",
              minWidth: "230px",
              border: "1px solid #FB9825",
              maxWidth: "230px",
              borderRadius: "10px",
              padding: "1rem",
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                data: { ...formValues.data, note: e.target.value },
              })
            }
          ></textarea>
        </center>
      </div>
      <hr style={{ marginTop: "4rem", marginBottom: "4rem", border: "none" }} />
    </>
  );
};

export default Leche1;
