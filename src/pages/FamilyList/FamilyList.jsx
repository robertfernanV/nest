import FamilyItem from "../../components/FamilyItem/FamilyItem";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import "./FamilyList.scss";

const FamilyList = () => {
  const user = useSelector((state) => state.user.data);
  const families = user.families;
  return (
    <>
    <NavBar menuTitle={"NEST"} />
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
