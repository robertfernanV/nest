import FamilyItem from "../../components/FamilyItem/FamilyItem";

import { useSelector } from "react-redux";

import "./FamilyList.scss";

const FamilyList = () => {
  const user = useSelector((state) => state.user.data);

  const families = user.families;

  return (
    <>
      <h2
        style={{
          marginTop: "6rem",
        }}
        className="familyList__title"
      >
        ¡Selecciona una familia!
      </h2>
      <div className="familyList">
        {families.map((family) => {
          return <FamilyItem key={family.id} family={family} />;
        })}
      </div>
    </>
  );
};

export default FamilyList;
