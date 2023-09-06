import "./FamilyParticipants.scss";
// import BabyCard from "../../components/BabyCard/BabyCard";
import NavBar from "../../components/NavBar/NavBar";
import BabyCard_Selected from "../../components/BabyCard/BabyCard_Selected";
import {FernandezFamilyData} from '../../data.js'

function FamilyParticipants() {
  // SIMPLE DATA PARA ITERAR INTEGRANTES DE UN GRUPO DE FAMILIA.
  
  return (
    <>
    <NavBar menuTitle={"FMLIA. XXX XXX XXX"} />
      {FernandezFamilyData?.map((member) => {
        return member.baby === true ? (
          <BabyCard_Selected familyId={member.familyId} Id={member.id} age={member.age} image={member.image} memberName={member.name} key={member.id} />
        ) : null;
      })}
    </>
  );
}

export default FamilyParticipants;
