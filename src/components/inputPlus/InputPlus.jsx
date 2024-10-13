import { useState } from "react";
import "./inputPlus.scss";

const InputTag = ({ tag, handleClick }) => {
  const handleRemove = () => {
    handleClick(tag);
  };
  return (
    <div className="tag-container">
      <span className="tag-container__text">{tag}</span>
      <button className="tag-container__button" onClick={handleRemove}>
        <span className="tag-container__button__simbol">x</span>
      </button>
    </div>
  );
};

const InputPlus = ({ tags, addTagHandler, removeTagHandler }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    addTagHandler(text);
    setText("");
  };

  return (
    <div className="input-container">
      <span className="title">Observación</span>
      <div className="textSection">
        <input
          type="text"
          placeholder=""
          value={text}
          className="custom-input"
          onChange={handleChange}
        />
        <button className="custom-button" type="button" onClick={handleClick}>
          <span className="plus-sign2">+</span>
        </button>
      </div>
      <div className="tags">
        <span className="tags__title">Agregadas:</span>
        {tags.map((tag, index) => (
          <InputTag tag={tag} key={index} handleClick={removeTagHandler} />
        ))}
      </div>
    </div>
  );
};

export default InputPlus;
