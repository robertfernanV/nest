import "./FamilyItem.scss";
import FamilyPlaceholder from "../../assets/images/familyPlaceholder.png";
import AddIcon from "@mui/icons-material/Add";

const FamilyItem = ({ family }) => {
  const { id, name, handleClick } = family;
  return (
    <div className="familyItem" onClick={handleClick}>
      {id !== "0" ? (
        <img
          className="familyItem__img"
          src={family?.image ?? FamilyPlaceholder}
          alt={name}
        />
      ) : (
        <div className="familyItem__img familyItem__new">
          <AddIcon style={{ color: "white", fontSize: 34 }} />
        </div>
      )}
      <h3 className="familyItem__name">{name}</h3>
    </div>
  );
};

export default FamilyItem;
