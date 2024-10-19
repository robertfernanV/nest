import { useState } from "react";

const TimeValues = ({ time, onTimeChange }) => {
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
        Hora
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

const Leche2 = () => {
  const [formValues, setFormValues] = useState({
    typeAction: "",
    data: {
      type: "",
      timeStart: "",
      timeEnd: "",
      period: "",
      place: "",
      note: "",
    },
  });

  const handleTimeChange = (event) => {
    setFormValues({
      ...formValues,
      data: { ...formValues.data, [event.target.name]: event.target.value },
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
              time={formValues.time}
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
              name=""
              id=""
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
            Cantidad
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
          >
            <option value="200">200 cc</option>
            <option value="400">400 cc</option>
            <option value="600">600 cc</option>
          </select>
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
          ></textarea>
        </center>
      </div>
    </>
  );
};

export default Leche2;
