import "./FamilyItem.scss";
import FamilyPlaceholder from "../../assets/images/familyPlaceholder.png";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import FamilyFernandez from "../../assets/images/fernandez.png";
import { useDispatch } from "react-redux";
import { setFamilySelected } from "../../store/slices/userSlice";

const FamilyItem = ({ family, index }) => {
  const { id, name } = family;

  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(
      setFamilySelected({
        id,
        selected: true,
      })
    );
  };
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "black",
      }}
      className="familyItem"
      to={id !== "0" ? `/familyParticipants/${id}` : "/newFamily"}
      onClick={() => handleClick(id)}
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
