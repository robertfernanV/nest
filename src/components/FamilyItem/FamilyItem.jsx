import "./FamilyItem.scss";
import FamilyPlaceholder from "../../assets/images/familyPlaceholder.png";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import FamilyFernandez from "../../assets/images/fernandez.png";

const FamilyItem = ({ family, index }) => {
  const { id, name } = family;
  console.log({ id, index });
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "black",
      }}
      className="familyItem"
      to={id !== "0" ? `/familyParticipants/${id}` : "/newFamily"}
    >
      {id !== "0" ? (
        <img
          className="familyItem__img"
          src={
            index === 0 ? FamilyFernandez : family?.image ?? FamilyPlaceholder
          }
          alt={name}
        />
      ) : (
        <div className="familyItem__img familyItem__new">
          <AddIcon style={{ color: "white", fontSize: 34 }} />
        </div>
      )}
      <h3 className="familyItem__name">{name}</h3>
    </Link>
  );
};

export default FamilyItem;
