import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BabyCard_Selected from "../../components/BabyCard/BabyCard_Selected";
import { getChildren } from "../../store/slices/childrenSlice";
import "./FamilyParticipants.scss";
import { useEffect, useState } from "react";
// import { FernandezFamilyData } from "../../data.js";

function FamilyParticipants() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [childrens, setChildrens] = useState([]);
  const data = useSelector((state) => state.children.data);

  useEffect(() => {
    if (id === undefined || id == !"HUgUsapxemMoYvi7g2VF") {
      id = "HUgUsapxemMoYvi7g2VF";
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getChildren(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setChildrens(data);
  }, [data]);

  window.scrollTo(0, 0);
  return (
    <>
      {childrens?.length > 0 &&
        childrens.map((children, index) => (
          <BabyCard_Selected
            key={index}
            activity={children}
            mt={index === 0 ? 4 : 2}
          />
        ))}
    </>
  );
}

export default FamilyParticipants;
