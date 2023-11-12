import "./FamilyItem.scss";
import FamilyPlaceholder from "../../assets/images/familyPlaceholder.png";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const FamilyItem = ({ family }) => {
  const { id, name } = family;
  console.log({ id });
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
          src={family?.image ?? FamilyPlaceholder}
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
