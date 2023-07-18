import FamilyItem from "../../components/FamilyItem/FamilyItem";
import "./FamilyList.scss";

const FamilyList = ({ families }) => {
  return (
    <>
      <h2 className="familyList__title">¡Selecciona una familia!</h2>
      <div className="familyList">
        {families.map((family) => {
          return <FamilyItem key={family.id} family={family} />;
        })}
      </div>
    </>
  );
};

export default FamilyList;
