import React, { useEffect, useState } from "react";
import "./BabyDetails.scss";
import { Link } from "react-router-dom";
import { FernandezFamilyData } from "../../data";
import BabyCard from "../../components/BabyCard/BabyCard";
import { Box, Modal, Typography } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import ContentModalNote from "../../components/BabyCard/ContentModalNote";
import ContentModalSnap from "../../components/BabyCard/ContentModalSnap";
import ContentModalEvacuation from "../../components/BabyCard/ContentModalEvacuation";
import ContentModalNewSkill from "../../components/BabyCard/ContentModalNewSkill";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import AddIcon from "@mui/icons-material/Add";

const BabyFoto = ({ handleOpenImagePreview, handleOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginY: "5px",
      }}
      onClick={(e) => handleOpen(e.target.id)}
      id={"note"}
    >
      <div style={{ zIndex: "-10" }}>
        <svg
          className="babyDetails__action pointer-events-none"
          width="30"
          height="30"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.02381 2.08331C0.90606 2.08331 0 3.02081 0 4.16665V12.5V16.6666V22.9166C0 24.0625 0.90606 25 2.02381 25H16.1905C17.3086 25 18.2143 24.0625 18.2143 22.9166V16.6666V12.5V8.33331V4.16665C18.2143 3.02081 17.3086 2.08331 16.1905 2.08331H12.1429H2.02381Z"
            fill="#BDC3C7"
          />
          <path
            d="M3.03571 0C2.47683 0 2.0238 0.416667 2.0238 1.04167V4.16667C2.0238 4.6875 2.47683 5.20833 3.03571 5.20833C3.59458 5.20833 4.04761 4.6875 4.04761 4.16667V1.04167C4.04761 0.416667 3.59458 0 3.03571 0ZM7.08333 0C6.52445 0 6.07142 0.416667 6.07142 1.04167V4.16667C6.07142 4.6875 6.52445 5.20833 7.08333 5.20833C7.6419 5.20833 8.09523 4.6875 8.09523 4.16667V1.04167C8.09523 0.416667 7.6419 0 7.08333 0ZM11.1309 0C10.5724 0 10.119 0.416667 10.119 1.04167V4.16667C10.119 4.6875 10.5724 5.20833 11.1309 5.20833C11.6895 5.20833 12.1429 4.6875 12.1429 4.16667V1.04167C12.1429 0.416667 11.6895 0 11.1309 0ZM15.1786 0C14.62 0 14.1667 0.416667 14.1667 1.04167V4.16667C14.1667 4.6875 14.62 5.20833 15.1786 5.20833C15.7371 5.20833 16.1905 4.6875 16.1905 4.16667V1.04167C16.1905 0.416667 15.7371 0 15.1786 0Z"
            fill="#95A5A6"
          />
          <path
            d="M3.03571 15.625H15.1786V16.6667H3.03571V15.625Z"
            fill="#95A5A6"
          />
          <path
            d="M3.03571 12.5H15.1786V13.5417H3.03571V12.5Z"
            fill="#95A5A6"
          />
          <path
            d="M3.03571 9.375H15.1786V10.4167H3.03571V9.375Z"
            fill="#95A5A6"
          />
          <path
            d="M3.03571 18.75H7.08332V19.7917H3.03571V18.75Z"
            fill="#95A5A6"
          />
          <path
            d="M2.0238 4.16669C2.0238 4.68752 2.47683 5.20835 3.03571 5.20835C3.59458 5.20835 4.04761 4.68752 4.04761 4.16669H2.0238ZM6.07142 4.16669C6.07142 4.68752 6.52445 5.20835 7.08333 5.20835C7.6419 5.20835 8.09523 4.68752 8.09523 4.16669H6.07142ZM10.119 4.16669C10.119 4.68752 10.5724 5.20835 11.1309 5.20835C11.6895 5.20835 12.1429 4.68752 12.1429 4.16669H10.119ZM14.1667 4.16669C14.1667 4.68752 14.62 5.20835 15.1786 5.20835C15.7371 5.20835 16.1905 4.68752 16.1905 4.16669H14.1667Z"
            fill="#7F8C8D"
          />
          <path
            d="M0 21.875V22.9167C0 24.0625 0.90606 25 2.02381 25H16.1905C17.3086 25 18.2143 24.0625 18.2143 22.9167V21.875C18.2143 23.0208 17.3086 23.9583 16.1905 23.9583H2.02381C0.90606 23.9583 0 23.0208 0 21.875Z"
            fill="#95A5A6"
          />
          <path
            d="M16.3502 7.25641L8.26476 15.5797L7.76388 16.0953L7.04836 16.8319V19.7781H9.91047L10.626 19.0416L11.1269 18.526L19.2123 10.2027L16.3502 7.25641Z"
            fill="#ECF0F1"
          />
          <path
            d="M17.7813 8.72955L7.04839 19.7781H9.9105L10.626 19.0416L11.1269 18.526L19.2124 10.2027L17.7813 8.72955Z"
            fill="#BDC3C7"
          />
          <path
            d="M15.6347 7.99298L18.4968 10.9393L10.626 19.0416L7.7639 16.0953L15.6347 7.99298Z"
            fill="#E67E22"
          />
          <path
            d="M19.9279 6.51984C19.1372 5.70592 17.8529 5.70961 17.0658 6.51984L16.3502 7.25641L19.2124 10.2027L19.9279 9.46613C20.715 8.6559 20.7185 7.33375 19.9279 6.51984Z"
            fill="#7F8C8D"
          />
          <path
            d="M7.04413 17.7113L7.0484 19.7781L9.05619 19.7825L8.05016 18.7469L7.04413 17.7113Z"
            fill="#34495E"
          />
          <path
            d="M8.05017 18.7469L7.04841 19.7782L9.0562 19.7826L8.05017 18.7469Z"
            fill="#2C3E50"
          />
          <path
            d="M19.9279 6.51984C19.1372 5.70592 17.8529 5.70961 17.0658 6.51984L16.3502 7.25641L17.7813 8.72956L19.9279 6.51984Z"
            fill="#95A5A6"
          />
          <path
            d="M17.0658 9.46613L18.4969 10.9393L10.626 19.0416L9.19499 17.5684L17.0658 9.46613Z"
            fill="#D35400"
          />
        </svg>
      </div>

      <Box
        sx={{
          pointerEvents: "none",
          border: "1px solid #ECEFF1",
          width: "100%",
          borderRadius: "5px",
          fontFamily: "Inder",
          fontSize: "1rem",
          marginX: "1rem",
        }}
      >
        <p className="babyDetails__actionText">Alan con sus padres!</p>
        <p className="babyDetails_dateAction">4:10pm</p>
        <button
          className="babyDetails__srcContent"
          onClick={handleOpenImagePreview}
        >
          <img
            className="babyDetails__srcNote"
            src="https://www.familyeducation.com/sites/default/files/2023-03/6%20Traits%20Babies%20Inherit%20From%20Their%20Father_Feature.jpg"
            alt=""
          />
        </button>
      </Box>
    </Box>
  );
};

const BabyActivity = ({ handleOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginY: "5px",
      }}
      id={"feedingBottle"}
      onClick={(e) => handleOpen(e.target.id)}
    >
      <div style={{ zIndex: "-10" }}>
        <svg
          className="babyDetails__action "
          width="30"
          height="30"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_222_741)">
            <path
              d="M22.2619 5.0153C22.2619 4.03335 22.7456 4.52432 23.2225 4.03335C24.1778 3.05141 24.6581 1.5778 23.7042 0.595851C22.7496 -0.386093 21.3201 0.111823 20.3662 1.09377C19.8886 1.58474 20.3676 2.08335 19.4137 2.08335H15.5975L16.0744 2.56738C16.0744 2.56738 18.4598 6.00071 18.9368 5.50974C18.4598 6.00141 21.791 8.45418 21.791 8.45418L22.2619 8.94377V5.0153Z"
              fill="#FFAC33"
            />
            <path
              d="M20.8446 10.4167L17.506 6.97916L14.1667 3.54236C13.6897 4.03333 11.3043 3.54236 10.3504 4.5243L9.8735 5.01528L8.44199 6.48889L1.08949 14.0569C0.0357617 15.1417 0.0357617 16.9014 1.08949 17.9854L6.8135 23.8778C7.86723 24.9625 9.576 24.9625 10.6297 23.8778L17.3083 17.0035L19.4137 14.8361L19.8907 14.3451C20.8446 13.3625 20.3676 10.9076 20.8446 10.4167Z"
              fill="#CCD6DD"
            />
            <path
              d="M22.0373 10.1708C21.3782 10.8493 20.7879 11.3403 20.1295 10.6618L13.9286 4.27846C13.2695 3.59999 13.7471 2.99235 14.4055 2.31388C15.0646 1.6361 16.1318 1.6361 16.7902 2.31388L22.0373 7.71526C22.6964 8.39374 22.6964 9.49304 22.0373 10.1708Z"
              fill="#55ACEE"
            />
            <path
              d="M8.76984 22.2222C8.59714 22.2222 8.42444 22.1541 8.29289 22.0187C8.02913 21.7472 8.02913 21.3083 8.29289 21.0367L16.3881 12.7034C16.6519 12.4319 17.0783 12.4319 17.342 12.7034C17.6058 12.9749 17.6058 13.4145 17.342 13.6861L9.24678 22.0194C9.11524 22.1541 8.94254 22.2222 8.76984 22.2222ZM6.07143 19.4444C5.89873 19.4444 5.72603 19.3763 5.59448 19.2409C5.33071 18.9694 5.33071 18.5305 5.59448 18.259L13.6897 9.92564C13.9535 9.65411 14.3798 9.65411 14.6436 9.92564C14.9074 10.1972 14.9074 10.6361 14.6436 10.9076L6.54837 19.2416C6.41682 19.3763 6.24412 19.4444 6.07143 19.4444ZM3.37301 16.6666C3.20032 16.6666 3.02762 16.5986 2.89607 16.4631C2.6323 16.1916 2.6323 15.7527 2.89607 15.4812L10.9913 7.14786C11.2551 6.87633 11.6814 6.87633 11.9452 7.14786C12.209 7.41939 12.209 7.85828 11.9452 8.1298L3.84996 16.4638C3.71841 16.5986 3.54571 16.6666 3.37301 16.6666Z"
              fill="#99AAB5"
            />
          </g>
          <defs>
            <clipPath id="clip0_222_741">
              <rect width="24.2857" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <Box
        sx={{
          pointerEvents: "none",
          border: "1px solid #ECEFF1",
          width: "100%",
          borderRadius: "5px",
          fontFamily: "Inder",
          fontSize: "1rem",
          marginX: "1rem",
        }}
      >
        <p className="babyDetails__actionText">Biberón</p>
        <p className="babyDetails_dateAction">11:35am</p>
      </Box>
    </Box>
  );
};

const CurrentActivity = ({ handleOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
      id={"feedingBottle"}
      onClick={(e) => handleOpen(e.target.id)}
    >
      <GpsFixedIcon
        style={{
          marginLeft: "1rem",
          color: "orange",
          marginBottom: "auto",
          marginTop: "auto",
          zIndex: "-10",
        }}
      />
      <div
        style={{
          display: "flex",
          fontFamily: "Inder",
          marginLeft: "1.5rem",
          color: "orange",
        }}
      >
        <p>
          10:22am - <span>Jugando</span>{" "}
        </p>
      </div>
    </Box>
  );
};

const BabySleep = ({ handleOpen }) => {
  return (
    <Box
      id={"snap"}
      sx={{
        display: "flex",
        marginY: "5px",
      }}
      onClick={(e) => handleOpen(e.target.id)}
    >
      <svg
        className="babyDetails__action"
        style={{
          zIndex: "-10",
        }}
        width="30"
        height="30"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1961 18.0722C10.976 17.4765 10.3025 17.1855 9.69533 17.4238L6.51163 18.6699L8.4431 11.5917C8.5114 11.3437 8.50002 11.0878 8.41274 10.8496C8.17937 10.2187 7.46598 9.91011 6.82089 10.164L1.53685 12.2304C1.24466 12.3437 1.01129 12.5625 0.876581 12.8417C0.738076 13.1308 0.721 13.4531 0.829148 13.748C1.04924 14.3457 1.72658 14.6386 2.33752 14.4003L5.41687 13.1953L3.46832 20.2343C3.39812 20.4882 3.40761 20.75 3.49678 20.9921C3.67703 21.4804 4.14187 21.7773 4.64276 21.7773C4.79834 21.7773 4.95772 21.748 5.1133 21.6875L10.4941 19.582C11.1012 19.3437 11.4162 18.666 11.1961 18.0722Z"
          fill="url(#paint0_linear_222_737)"
        />
        <path
          d="M17.5692 12.0743C17.463 11.4317 16.8426 11.004 16.188 11.1172L12.7519 11.7188L16.0514 5.00591C16.1671 4.76958 16.2051 4.50981 16.1633 4.25395C16.0514 3.57231 15.393 3.11919 14.6967 3.24028L8.99333 4.24223C8.67838 4.29692 8.40137 4.46684 8.21164 4.7227C8.01621 4.98638 7.93842 5.30473 7.98965 5.62309C8.0959 6.26958 8.72012 6.69927 9.37849 6.58403L12.7026 6.002L9.39177 12.6719C9.27224 12.9122 9.2324 13.1778 9.27603 13.4395C9.36331 13.9668 9.77313 14.3594 10.2759 14.461C10.4315 14.4922 10.5966 14.4961 10.7654 14.4668L16.5731 13.4493C17.2277 13.334 17.6755 12.7168 17.5692 12.0743Z"
          fill="url(#paint1_linear_222_737)"
        />
        <path
          d="M23.5154 14.543C23.4812 14.127 23.1075 13.8184 22.6825 13.8555L20.455 14.0488L22.9158 9.94531C23.0031 9.80078 23.0411 9.63672 23.0278 9.47265C22.9917 9.03125 22.5952 8.70508 22.1455 8.74414L18.4514 9.0625C18.2484 9.08008 18.0625 9.17383 17.9278 9.32617C17.7893 9.48242 17.7229 9.68359 17.7399 9.88867C17.7741 10.3066 18.1498 10.6172 18.5767 10.5801L20.7301 10.3926L18.2636 14.4668C18.1744 14.6133 18.1346 14.7812 18.1498 14.9492C18.1782 15.291 18.4192 15.5645 18.7341 15.6582C18.8328 15.6875 18.9371 15.6992 19.0453 15.6895L22.8077 15.3633C23.2327 15.3281 23.5495 14.959 23.5154 14.543Z"
          fill="url(#paint2_linear_222_737)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_737"
            x1="6.01291"
            y1="5.51999"
            x2="6.01291"
            y2="21.0804"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4FC3F7" />
            <stop offset="1" stopColor="#1E88E5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_222_737"
            x1="12.7797"
            y1="5.52009"
            x2="12.7797"
            y2="21.0805"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4FC3F7" />
            <stop offset="1" stopColor="#1E88E5" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_222_737"
            x1="20.6273"
            y1="5.52004"
            x2="20.6273"
            y2="21.0805"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4FC3F7" />
            <stop offset="1" stopColor="#1E88E5" />
          </linearGradient>
        </defs>
      </svg>

      <Box
        sx={{
          pointerEvents: "none",
          border: "1px solid #ECEFF1",
          width: "100%",
          borderRadius: "5px",
          fontFamily: "Inder",
          fontSize: "1rem",
          marginX: "1rem",
        }}
      >
        <p className="babyDetails__actionText">Siesta</p>
        <p className="babyDetails_dateAction">2:10pm - 4:15pm</p>
      </Box>
    </Box>
  );
};

function BabyDetails() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [openActionModal, setOpenActionModal] = useState(false);
  const handleOpenActionModal = () => setOpenActionModal(true);
  const handleCloseActionModal = () => setOpenActionModal(false);

  const [babySelected, setBabySelected] = useState({
    id: 3,
    familyId: 12345,
  });
  const [largoModal, setLargoModal] = useState("327px");

  useEffect(() => {
    if (actionDetail == "note") {
      setLargoModal("500px");
    }
  }, []);
  const [actionDetail, setActionDetail] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = (actionType) => {
    setActionDetail(actionType);
    setOpen(true);
  };
  const handleClose = () => {
    setActionDetail("");
    setOpen(false);
  };

  const styleActionsModal = {
    position: "absolute",
    bottom: "-102.5px",
    right: "-43.5px",
    transform: "translate(-37%, -45%)",
    width: 200,
    bgcolor: "background.paper",
    p: 2,
    borderRadius: "1rem 0px 0px 0px",
  };

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    bgcolor: "background.paper",
    border: "1px solid #FB9825",
    borderRadius: "1rem",
    boxShadow: 24,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
  };

  const styleModalImage = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #FB9825",
    boxShadow: 24,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
  };

  const [openImagePreview, setOpenImagePreview] = useState(false);
  const handleOpenImagePreview = () => {
    console.log("Abriendo imagne");
    setOpenImagePreview(true);
  };
  const handleCloseImagePreview = () => {
    setOpenImagePreview(false);
  };

  return (
    <React.Fragment>
      <NavBar menuTitle={"FMLIA. Fernández"} backgroundProp={"#FFEEDA"} />

      {FernandezFamilyData?.map((member) => {
        return member.id == babySelected.id &&
          member.familyId == babySelected.familyId ? (
          <>
            <BabyCard
              familyId={member.familyId}
              Id={member.id}
              age={member.age}
              image={member.image}
              memberName={member.name}
              key={member.id}
            />
          </>
        ) : null;
      })}

      <hr
        style={{
          border: "none",

          marginTop: "1.5rem",
        }}
      />
      <div
        style={{
          zIndex: -2,
        }}
      >
        <button
          style={{
            marginTop: "1rem",
            marginLeft: "3rem",
            borderRadius: "100%",
            paddingX: "1px",
            background: "orange",
            border: "none",
          }}
        >
          <ArrowBackIosNew
            style={{
              margin: "auto",
              width: "20px",
              color: "white",
            }}
          />
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "-30px",
            zIndex: -1,
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Inter",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Hoy
          </p>
          <button
            style={{
              fontSize: "12px",
              textDecoration: "underline",
              background: "transparent",
              border: "none",
              color: "#1E88E5",
              fontFamily: "Inter",
            }}
          >
            Cambiar fecha
          </button>
        </div>
      </div>
      {/* yesterday */}

      {/* SE ITERA LAS ACCIONES DEL BEBÉ */}

      <BabyFoto />
      <BabyActivity />

      <BabyFoto />
      <BabyActivity />
      <BabyFoto />
      <BabyActivity />
      <BabyFoto />
      <BabyActivity />

      {/* ACTIVITY (NO ACTION) */}
      <CurrentActivity />
      <CurrentActivity />
      <CurrentActivity />

      <BabySleep />

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            position: "fixed",
            bottom: "3rem",
            display: "grid",
            zIndex: "50",
            marginRight: "1rem",
            marginBottom: "1rem",
          }}
        >
          <button
            style={{
              background: "#1E88E5",
              paddingTop: "5px",
              marginBottom: "10px",
              paddingLeft: "5px",
              border: "none",
              paddingRight: "5px",
              borderRadius: "100%",
            }}
          >
            <LocalSeeIcon
              style={{
                color: "#FFFFFF",
                fontSize: "40px",
              }}
            />
          </button>

          <button
            onClick={handleOpenActionModal}
            style={{
              background: "#E67E22",
              paddingTop: "5px",
              paddingLeft: "5px",
              border: "none",
              paddingRight: "5px",
              borderRadius: "100%",
              boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);",
            }}
          >
            <AddIcon
              style={{
                color: "#FFFFFF",
                fontSize: "40px",
              }}
            />
          </button>
        </div>
      </div>

      <hr
        style={{
          marginTop: "4rem",
          border: "none",
        }}
      />

      {/* MODAL IMAGE PREVIEW */}
      <Modal
        open={openImagePreview}
        onClose={handleCloseImagePreview}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModalImage}>
          <img
            className="contentModal__imageFull"
            src="https://www.familyeducation.com/sites/default/files/2023-03/6%20Traits%20Babies%20Inherit%20From%20Their%20Father_Feature.jpg"
            alt=""
          />
        </Box>
      </Modal>

      {/* MODAL */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          {/* BOTÓN DE CERRAR EL MODAL */}
          <div className="babyDeatils_contentCloseBtn">
            <button
              onClick={handleClose}
              className="babyDetails__btnCloseModal"
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_323_1191)">
                  <path
                    d="M12.4118 10L17.529 6.09102C18.157 5.61133 18.157 4.83359 17.529 4.35352L16.3918 3.48477C15.7638 3.00508 14.7457 3.00508 14.1172 3.48477L9 7.39375L3.88278 3.48477C3.25483 3.00508 2.2367 3.00508 1.60824 3.48477L0.470966 4.35352C-0.156989 4.8332 -0.156989 5.61094 0.470966 6.09102L5.58818 10L0.470966 13.909C-0.156989 14.3887 -0.156989 15.1664 0.470966 15.6465L1.60824 16.5152C2.23619 16.9949 3.25483 16.9949 3.88278 16.5152L9 12.6062L14.1172 16.5152C14.7452 16.9949 15.7638 16.9949 16.3918 16.5152L17.529 15.6465C18.157 15.1668 18.157 14.3891 17.529 13.909L12.4118 10Z"
                    fill="#BDC3C7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_323_1191">
                    <rect width="18" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="babyDetails__iconAction">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_323_1254)">
                <path
                  d="M29.9811 49.9714C35.1967 49.6663 40.128 47.1574 43.8208 42.9302C47.5136 38.7031 49.7054 33.0582 49.9719 27.0878C44.6707 27.0904 39.5872 29.5021 35.8387 33.7931C32.0902 38.084 29.9833 43.9031 29.9811 49.9714Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M0.0291748 27.0878C0.295254 33.0583 2.48684 38.7036 6.17974 42.9308C9.87264 47.1581 14.8042 49.6668 20.02 49.9714C20.0178 43.9031 17.9109 38.084 14.1624 33.7931C10.4139 29.5021 5.3304 27.0904 0.0291748 27.0878Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M0 25.8561C0 26.2698 0.00937461 26.6776 0.0270822 27.0866C5.32798 27.0907 10.4107 29.5029 14.1591 33.7935C17.9075 38.0841 20.0151 43.9022 20.019 49.9702C20.3752 49.9909 20.7332 50.0008 21.0929 50H28.905C29.2654 50 29.6238 49.9893 29.98 49.9702C29.9822 43.9019 32.0891 38.0828 35.8376 33.7918C39.5861 29.5009 44.6696 27.0891 49.9708 27.0866C49.9885 26.6776 49.9979 26.2687 49.9979 25.8561V7.29956H0L0 25.8561Z"
                  fill="#E2E2E2"
                />
                <path
                  d="M47.6553 0H2.34469C1.72302 -7.02219e-08 1.1268 0.282612 0.687113 0.785698C0.247428 1.28878 0.000276176 1.97116 0 2.68279L0 7.30076H49.9979V2.68279C49.9979 1.97147 49.7511 1.28928 49.3118 0.786192C48.8725 0.283106 48.2767 0.000316139 47.6553 0Z"
                  fill="#59C5EF"
                />
                <path
                  d="M13.7223 12.7581H0V21.8856H13.7223C14.7791 21.8849 15.7925 21.4041 16.5397 20.5487C17.287 19.6933 17.707 18.5333 17.7076 17.3236C17.7076 16.1134 17.2878 14.9527 16.5405 14.0966C15.7932 13.2405 14.7796 12.7591 13.7223 12.7581Z"
                  fill="#59C5EF"
                />
                <path
                  d="M32.2903 17.3236C32.2903 17.9231 32.3935 18.5167 32.5939 19.0706C32.7943 19.6244 33.0881 20.1277 33.4585 20.5515C33.8289 20.9754 34.2686 21.3115 34.7525 21.5408C35.2363 21.7702 35.7549 21.8881 36.2787 21.8879H49.9979V12.7581H36.2797C35.7558 12.7578 35.237 12.8757 34.7529 13.105C34.2689 13.3343 33.829 13.6706 33.4585 14.0946C33.088 14.5185 32.7942 15.022 32.5937 15.576C32.3933 16.1301 32.2901 16.7239 32.2903 17.3236Z"
                  fill="#59C5EF"
                />
                <path
                  d="M6.25183 12.7605H11.4599V21.8879H6.25183V12.7605Z"
                  fill="#2BA0BF"
                />
                <path
                  d="M38.5411 12.7605H43.7493V21.8879H38.5411V12.7605Z"
                  fill="#2BA0BF"
                />
              </g>
              <defs>
                <clipPath id="clip0_323_1254">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Typography
              sx={{
                fontFamily: "Happy_Monkey",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#FB9825",
                marginY: "1rem",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {actionDetail}
            </Typography>
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {actionDetail === "feedingBottle" ? (
              <ContentModalNewSkill />
            ) : // <ContentModalfeedingBottle />
            actionDetail === "note" ? (
              <ContentModalNote />
            ) : actionDetail === "snap" ? (
              <ContentModalSnap />
            ) : actionDetail === "evacuation" ? (
              <ContentModalEvacuation />
            ) : actionDetail === "newSkill" ? (
              <ContentModalNewSkill />
            ) : null}
          </Typography>
        </Box>
      </Modal>

      {/* ACTION MODAL */}
      <Modal
        open={openActionModal}
        onClose={handleCloseActionModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleActionsModal}>
          <div
            style={{
              fontFamily: "Inder",
              fontSize: "20px",
              textTransform: "uppercase",
              color: "#E67E22",
            }}
          >
            {/* LECHE */}
            <button
              onClick={() => navigate(`/addAction/Leche`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_222_534)">
                  <path
                    d="M22.2619 5.01542C22.2619 4.03347 22.7456 4.52445 23.2225 4.03347C24.1778 3.05153 24.6581 1.57792 23.7042 0.595973C22.7496 -0.385971 21.3202 0.111945 20.3663 1.09389C19.8887 1.58486 20.3676 2.08347 19.4137 2.08347H15.5975L16.0744 2.5675C16.0744 2.5675 18.4598 6.00083 18.9368 5.50986C18.4598 6.00153 21.791 8.45431 21.791 8.45431L22.2619 8.94389V5.01542Z"
                    fill="#FFAC33"
                  />
                  <path
                    d="M20.8446 10.4168L17.506 6.97929L14.1667 3.54248C13.6897 4.03345 11.3043 3.54248 10.3504 4.52442L9.8735 5.0154L8.44199 6.48901L1.08949 14.0571C0.0357617 15.1418 0.0357617 16.9015 1.08949 17.9855L6.8135 23.8779C7.86723 24.9626 9.576 24.9626 10.6297 23.8779L17.3083 17.0036L19.4137 14.8362L19.8907 14.3453C20.8446 13.3626 20.3676 10.9078 20.8446 10.4168Z"
                    fill="#CCD6DD"
                  />
                  <path
                    d="M22.0373 10.1709C21.3782 10.8494 20.7879 11.3404 20.1295 10.6619L13.9285 4.27858C13.2694 3.60011 13.7471 2.99247 14.4055 2.314C15.0646 1.63622 16.1318 1.63622 16.7902 2.314L22.0373 7.71539C22.6963 8.39386 22.6963 9.49316 22.0373 10.1709Z"
                    fill="#55ACEE"
                  />
                  <path
                    d="M8.76984 22.2223C8.59714 22.2223 8.42444 22.1542 8.29289 22.0188C8.02913 21.7473 8.02913 21.3084 8.29289 21.0369L16.3881 12.7035C16.6519 12.432 17.0783 12.432 17.342 12.7035C17.6058 12.9751 17.6058 13.4146 17.342 13.6862L9.24678 22.0195C9.11524 22.1542 8.94254 22.2223 8.76984 22.2223ZM6.07143 19.4445C5.89873 19.4445 5.72603 19.3765 5.59448 19.241C5.33071 18.9695 5.33071 18.5306 5.59448 18.2591L13.6897 9.92576C13.9535 9.65423 14.3798 9.65423 14.6436 9.92576C14.9074 10.1973 14.9074 10.6362 14.6436 10.9077L6.54837 19.2417C6.41682 19.3765 6.24412 19.4445 6.07143 19.4445ZM3.37301 16.6667C3.20032 16.6667 3.02762 16.5987 2.89607 16.4633C2.6323 16.1917 2.6323 15.7528 2.89607 15.4813L10.9913 7.14798C11.2551 6.87645 11.6814 6.87645 11.9452 7.14798C12.209 7.41951 12.209 7.8584 11.9452 8.12993L3.84996 16.464C3.71841 16.5987 3.54571 16.6667 3.37301 16.6667Z"
                    fill="#99AAB5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_222_534">
                    <rect width="24.2857" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span style={{ marginLeft: "1rem" }}>LECHE</span>
            </button>

            {/* COMIDA */}
            <button
              onClick={() => navigate(`/addAction/Comida`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.31472 1.21087C1.66963 1.914 0.341505 6.32806 5.91963 12.1093C7.70311 13.9452 9.03124 12.5781 10.1317 13.7499L20.1116 24.0234C20.1116 24.0234 22.2745 23.2812 22.6161 21.4062L2.84597 1.01556C2.84597 1.01556 2.65624 0.859309 2.31472 1.21087Z"
                  fill="#94989B"
                />
                <path
                  d="M23.4509 4.29675C23.7165 3.78894 23.1094 3.94519 23.1094 3.94519C23.1094 3.94519 19.087 7.92956 18.5179 7.46081C17.9487 6.99206 22.4643 3.16394 21.933 2.42175C21.4397 1.75769 17.4933 6.52331 17 5.93738C16.5446 5.35144 20.3772 1.21081 20.3772 1.21081C20.3772 1.21081 20.529 0.585815 20.0357 0.859252C13.9643 4.21863 13.2054 7.34363 13.2054 7.34363C13.2054 7.34363 12.9777 7.96863 13.433 8.43738C13.471 8.47644 2.35267 19.8827 0.872762 21.4061C0.151779 22.1483 2.80803 24.8436 3.52901 24.1014C5.00892 22.578 16.0513 11.0936 16.0893 11.1327C16.5446 11.6014 17.1518 11.4061 17.1518 11.4061C17.1518 11.4061 20.1875 10.5858 23.4509 4.29675Z"
                  fill="#B2C1C0"
                />
              </svg>

              <span style={{ marginLeft: "1rem" }}>COMIDA</span>
            </button>

            {/* PAÑAL/PELELA */}
            <button
              onClick={() => navigate(`/addAction/Pañal`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_704_2641)">
                  <path
                    d="M11.9924 19.9884C14.0787 19.8664 16.0512 18.8628 17.5283 17.1719C19.0055 15.4811 19.8821 13.2231 19.9888 10.835C17.8683 10.836 15.8349 11.8007 14.3355 13.5171C12.8361 15.2334 11.9933 17.5611 11.9924 19.9884Z"
                    fill="#C6C6C6"
                  />
                  <path
                    d="M0.0116577 10.835C0.11809 13.2232 0.994724 15.4813 2.47188 17.1722C3.94904 18.8631 5.92168 19.8666 8.00799 19.9884C8.00711 17.5611 7.16436 15.2334 5.66494 13.5171C4.16553 11.8007 2.13215 10.836 0.0116577 10.835Z"
                    fill="#C6C6C6"
                  />
                  <path
                    d="M0 10.3425C0 10.508 0.00374984 10.6712 0.0108329 10.8347C2.13119 10.8364 4.1643 11.8013 5.66366 13.5175C7.16302 15.2337 8.00604 17.561 8.00758 19.9882C8.15008 19.9964 8.29327 20.0004 8.43715 20.0001H11.562C11.7062 20.0001 11.8495 19.9958 11.992 19.9882C11.9929 17.5608 12.8356 15.2332 14.335 13.5168C15.8345 11.8005 17.8678 10.8358 19.9883 10.8347C19.9954 10.6712 19.9992 10.5076 19.9992 10.3425V2.91992H0L0 10.3425Z"
                    fill="#E2E2E2"
                  />
                  <path
                    d="M19.0621 0H0.937878C0.689209 -2.80888e-08 0.450719 0.113045 0.274845 0.314279C0.0989711 0.515514 0.00011047 0.788463 0 1.07311L0 2.9203H19.9992V1.07311C19.9992 0.78859 19.9005 0.515711 19.7247 0.314477C19.549 0.113242 19.3107 0.000126456 19.0621 0Z"
                    fill="#59C5EF"
                  />
                  <path
                    d="M5.48894 5.10303H0V8.754H5.48894C5.91165 8.75375 6.31699 8.56142 6.61589 8.21926C6.9148 7.8771 7.08282 7.41311 7.08304 6.92923C7.08304 6.44514 6.91513 5.98085 6.61621 5.63842C6.3173 5.29598 5.91183 5.10341 5.48894 5.10303Z"
                    fill="#59C5EF"
                  />
                  <path
                    d="M12.9161 6.92923C12.9161 7.16903 12.9574 7.40648 13.0376 7.62802C13.1178 7.84955 13.2353 8.05084 13.3834 8.22038C13.5316 8.38992 13.7075 8.5244 13.901 8.61612C14.0946 8.70784 14.302 8.75502 14.5115 8.75496H19.9992V5.10303H14.5119C14.3024 5.1029 14.0948 5.15005 13.9012 5.24177C13.7076 5.3335 13.5316 5.468 13.3834 5.6376C13.2352 5.8072 13.1177 6.00856 13.0375 6.23019C12.9573 6.45181 12.9161 6.68935 12.9161 6.92923Z"
                    fill="#59C5EF"
                  />
                  <path
                    d="M2.50073 5.104H4.58398V8.75498H2.50073V5.104Z"
                    fill="#2BA0BF"
                  />
                  <path
                    d="M15.4164 5.104H17.4997V8.75498H15.4164V5.104Z"
                    fill="#2BA0BF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_704_2641">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span style={{ marginLeft: "1rem" }}>PAÑAL/PELELA</span>
            </button>

            {/* BAÑO */}
            <button
              onClick={() => navigate(`/addAction/Baño`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.719 3.45898L15.8159 6.47852C15.2641 7.05273 15.2641 7.98437 15.8159 8.55859L16.0965 8.84961C16.6464 9.42188 17.5368 9.42188 18.0868 8.84766L21.0124 5.79102C21.828 4.9375 22.8044 4.35547 23.9137 4.09766V1.01953C21.9421 1.13086 20.1239 1.99609 18.719 3.45898Z"
                  fill="url(#paint0_linear_704_2651)"
                />
                <path
                  d="M5.69219 15.5977C5.12166 16.1934 4.38464 16.127 3.8908 15.6113C3.39696 15.0957 3.33336 14.3262 3.9039 13.7305C4.56796 13.0371 6.70605 12.6699 6.70605 12.6699C6.70605 12.6699 6.34877 14.9121 5.69219 15.5977Z"
                  fill="#00B0FF"
                />
                <path
                  d="M8.48311 18.5117C7.91258 19.1074 7.17556 19.041 6.68173 18.5254C6.18789 18.0098 6.12429 17.2402 6.69482 16.6445C7.35888 15.9512 9.49698 15.584 9.49698 15.584C9.49698 15.584 9.13969 17.8262 8.48311 18.5117Z"
                  fill="#00B0FF"
                />
                <path
                  d="M11.3133 21.4668C10.7428 22.0625 10.0058 21.9961 9.51196 21.4805C9.01812 20.9648 8.95452 20.1953 9.52505 19.5996C10.1891 18.9063 12.3272 18.5391 12.3272 18.5391C12.3272 18.5391 11.9699 20.7813 11.3133 21.4668Z"
                  fill="#00B0FF"
                />
                <path
                  d="M3.71871 20.4727C3.14818 21.0684 2.41116 21.002 1.91732 20.4863C1.42348 19.9707 1.35988 19.2012 1.93042 18.6055C2.59448 17.9121 4.73257 17.5449 4.73257 17.5449C4.73257 17.5449 4.37529 19.7871 3.71871 20.4727Z"
                  fill="#4FC3F7"
                />
                <path
                  d="M6.64434 23.5254C6.0738 24.1211 5.33679 24.0547 4.84295 23.5391C4.34911 23.0234 4.28551 22.2539 4.85604 21.6582C5.52011 20.9648 7.6582 20.5977 7.6582 20.5977C7.6582 20.5977 7.30092 22.8418 6.64434 23.5254Z"
                  fill="#4FC3F7"
                />
                <g opacity="0.2">
                  <path
                    d="M6.23278 13.166C6.05882 13.9727 5.76139 14.9746 5.42843 15.3223C5.23388 15.5254 5.01128 15.6328 4.78494 15.6328C4.56234 15.6328 4.33787 15.5273 4.15642 15.3379C3.97871 15.1523 3.8777 14.9238 3.87396 14.6973C3.87022 14.4551 3.97123 14.2168 4.17138 14.0098C4.50622 13.6563 5.4621 13.3438 6.23278 13.166ZM6.70791 12.6699C6.70791 12.6699 4.56982 13.0352 3.90576 13.7305C3.33523 14.3262 3.39883 15.0957 3.89266 15.6113C4.14519 15.875 4.46133 16.0215 4.78681 16.0215C5.09733 16.0215 5.41533 15.8887 5.69405 15.5977C6.34876 14.9121 6.70791 12.6699 6.70791 12.6699Z"
                    fill="#424242"
                  />
                  <path
                    d="M9.02371 16.0801C8.84974 16.8867 8.55232 17.8887 8.21935 18.2363C8.02481 18.4395 7.80221 18.5469 7.57586 18.5469C7.35326 18.5469 7.12879 18.4414 6.94734 18.252C6.76964 18.0664 6.66862 17.8379 6.66488 17.6113C6.66114 17.3691 6.76215 17.1309 6.96231 16.9238C7.29714 16.5703 8.25302 16.2578 9.02371 16.0801ZM9.49884 15.584C9.49884 15.584 7.36074 15.9492 6.69668 16.6445C6.12615 17.2402 6.18975 18.0098 6.68359 18.5254C6.93612 18.7891 7.25225 18.9355 7.57773 18.9355C7.88825 18.9355 8.20626 18.8027 8.48497 18.5117C9.13968 17.8262 9.49884 15.584 9.49884 15.584Z"
                    fill="#424242"
                  />
                  <path
                    d="M11.8539 19.0352C11.68 19.8418 11.3825 20.8438 11.0496 21.1914C10.855 21.3945 10.6324 21.502 10.4061 21.502C10.1835 21.502 9.95902 21.3965 9.77757 21.207C9.59987 21.0215 9.49885 20.793 9.49511 20.5664C9.49137 20.3242 9.59238 20.0859 9.79254 19.8789C10.1274 19.5254 11.0833 19.2129 11.8539 19.0352ZM12.3291 18.5391C12.3291 18.5391 10.191 18.9043 9.52691 19.5996C8.95638 20.1953 9.01998 20.9648 9.51382 21.4805C9.76635 21.7441 10.0825 21.8906 10.408 21.8906C10.7185 21.8906 11.0365 21.7578 11.3152 21.4668C11.9699 20.7813 12.3291 18.5391 12.3291 18.5391Z"
                    fill="#424242"
                  />
                </g>
                <path
                  opacity="0.2"
                  d="M4.2593 18.041C4.08534 18.8477 3.78791 19.8496 3.45495 20.1973C3.2604 20.4004 3.0378 20.5078 2.81146 20.5078C2.58886 20.5078 2.36439 20.4023 2.18294 20.2129C2.00523 20.0273 1.90422 19.7988 1.90048 19.5723C1.89674 19.3301 1.99775 19.0918 2.1979 18.8848C2.53274 18.5313 3.49049 18.2207 4.2593 18.041ZM4.73443 17.5449C4.73443 17.5449 2.59634 17.9102 1.93228 18.6055C1.36175 19.2012 1.42535 19.9707 1.91918 20.4863C2.17171 20.75 2.48785 20.8965 2.81333 20.8965C3.12385 20.8965 3.44185 20.7637 3.72057 20.4727C4.37528 19.7871 4.73443 17.5449 4.73443 17.5449Z"
                  fill="#424242"
                />
                <path
                  opacity="0.2"
                  d="M7.18493 21.0937C7.01097 21.9004 6.71354 22.9023 6.38057 23.25C6.18603 23.4531 5.96343 23.5605 5.73709 23.5605C5.51449 23.5605 5.29001 23.4551 5.10857 23.2656C4.93086 23.0801 4.82985 22.8516 4.82611 22.625C4.82236 22.3828 4.92338 22.1445 5.12353 21.9375C5.4565 21.584 6.41424 21.2734 7.18493 21.0937ZM7.66006 20.5996C7.66006 20.5996 5.52197 20.9648 4.85791 21.6602C4.28737 22.2559 4.35097 23.0254 4.84481 23.541C5.09734 23.8047 5.41347 23.9512 5.73896 23.9512C6.04948 23.9512 6.36748 23.8184 6.6462 23.5273C7.30091 22.8418 7.66006 20.5996 7.66006 20.5996Z"
                  fill="#424242"
                />
                <path
                  d="M17.7575 7.06616C14.5308 3.69702 9.24258 3.75171 6.06256 7.02515L17.7968 19.2751C20.932 15.9568 20.9843 10.4353 17.7575 7.06616Z"
                  fill="url(#paint1_radial_704_2651)"
                />
                <path
                  opacity="0.2"
                  d="M23.3525 1.75781V3.64648C22.3293 3.96484 21.4108 4.54688 20.6139 5.37891L19.7853 6.24609C19.5664 6.47461 19.5664 6.8457 19.7853 7.07422C19.8825 7.17578 19.8825 7.33984 19.7853 7.43945L18.7246 8.54687C18.5469 8.73242 18.5095 9.01758 18.6311 9.24609C20.1594 12.125 19.8564 15.7676 17.8754 18.3066C17.7314 18.4902 17.7089 18.748 17.8174 18.957C17.9184 19.1504 17.8866 19.3828 17.7407 19.5352C17.6528 19.627 17.5349 19.6777 17.4096 19.6777C17.2843 19.6777 17.1664 19.627 17.0785 19.5352L5.90917 7.87109C5.82125 7.7793 5.77262 7.65625 5.77262 7.52539C5.77262 7.39453 5.82125 7.27148 5.90917 7.17969C5.99709 7.08789 6.11306 7.03711 6.23839 7.03711C6.29638 7.03711 6.3525 7.04688 6.40675 7.06836C6.47035 7.09375 6.53769 7.10547 6.60316 7.10547C6.73223 7.10547 6.85756 7.05859 6.96045 6.97266C8.33159 5.79297 10.0862 5.14258 11.8988 5.14258C13.1128 5.14258 14.3194 5.4375 15.3875 5.99609C15.4679 6.03711 15.554 6.05859 15.6382 6.05859C15.7841 6.05859 15.9281 6 16.0347 5.88672L17.1664 4.70508C17.23 4.63867 17.303 4.62891 17.3423 4.62891C17.3816 4.62891 17.4545 4.63867 17.52 4.70703C17.6303 4.82031 17.7725 4.87891 17.9165 4.87891C18.0606 4.87891 18.2027 4.82227 18.3131 4.70703L19.1156 3.87305C20.2978 2.64258 21.7531 1.93359 23.3525 1.71094M23.9137 1.01953C21.9421 1.13086 20.1238 1.99414 18.719 3.45703L17.9165 4.29102L17.9147 4.28906C17.7575 4.125 17.5499 4.04102 17.3423 4.04102C17.1346 4.04102 16.9289 4.12305 16.7699 4.28906L15.64 5.46875V5.4707C14.4672 4.85742 13.1821 4.55469 11.8988 4.55469C10.0058 4.55469 8.11835 5.21484 6.60316 6.51758C6.48531 6.4707 6.36185 6.44922 6.23839 6.44922C5.97651 6.44922 5.71276 6.55273 5.5126 6.76172C5.11042 7.18164 5.11042 7.86328 5.5126 8.2832L16.6819 19.9453C16.884 20.1562 17.1459 20.2598 17.4096 20.2598C17.6734 20.2598 17.9371 20.1543 18.1373 19.9453C18.4684 19.5996 18.5226 19.082 18.3094 18.6738C20.4493 15.9297 20.7505 12.0254 19.1212 8.95898L20.1818 7.85156C20.498 7.52148 20.498 6.98828 20.1818 6.6582L21.0105 5.79102C21.8261 4.9375 22.8025 4.35547 23.9118 4.09766V1.01953H23.9137Z"
                  fill="#424242"
                />
                <path
                  d="M20.1818 6.6582L17.9147 4.29102C17.5985 3.96094 17.086 3.96094 16.7699 4.29102L15.64 5.4707V5.47266C16.4051 5.87305 17.1215 6.40234 17.7594 7.06641C18.3112 7.64258 18.7639 8.28125 19.1249 8.96094L20.1856 7.85352C20.498 7.52344 20.498 6.98828 20.1818 6.6582Z"
                  fill="#78909C"
                />
                <path
                  opacity="0.2"
                  d="M17.3423 4.62891C17.3797 4.62891 17.4545 4.63867 17.5181 4.70508L19.7853 7.07227C19.8489 7.13867 19.8582 7.21484 19.8582 7.25586C19.8582 7.29688 19.8489 7.37305 19.7853 7.43945L19.2297 8.01953C18.9136 7.52734 18.5544 7.06836 18.1541 6.65039C17.6734 6.14844 17.1402 5.70898 16.5604 5.33789L17.1664 4.70508C17.23 4.63867 17.3048 4.62891 17.3423 4.62891ZM17.3423 4.04297C17.1346 4.04297 16.9289 4.125 16.7699 4.29102L15.64 5.4707V5.47266C16.4051 5.87305 17.1215 6.40234 17.7594 7.06641C18.3112 7.64258 18.7639 8.28125 19.1249 8.96094L20.1856 7.85352C20.5017 7.52344 20.5017 6.98828 20.1856 6.6582L17.9147 4.29102C17.7557 4.125 17.5499 4.04297 17.3423 4.04297Z"
                  fill="#424242"
                />
                <path
                  d="M16.7325 20L5.46211 8.23242C5.08799 7.8418 5.08799 7.20898 5.46211 6.81641L5.56312 6.71094C5.93724 6.32031 6.54331 6.32031 6.9193 6.71094L18.1897 18.4785C18.5638 18.8691 18.5638 19.502 18.1897 19.8945L18.0886 20C17.7127 20.3906 17.1066 20.3906 16.7325 20Z"
                  fill="#78909C"
                />
                <path
                  opacity="0.2"
                  d="M6.24028 7.00391C6.3469 7.00391 6.44604 7.04687 6.52087 7.125L17.7912 18.8926C17.866 18.9707 17.9072 19.0742 17.9072 19.1855C17.9072 19.2969 17.866 19.4004 17.7912 19.4785L17.6902 19.584C17.6154 19.6621 17.5162 19.7051 17.4096 19.7051C17.303 19.7051 17.2039 19.6621 17.129 19.584L5.85868 7.81836C5.78385 7.74023 5.7427 7.63672 5.7427 7.52539C5.7427 7.41406 5.78385 7.31055 5.85868 7.23242L5.95969 7.12695C6.03451 7.04688 6.13365 7.00391 6.24028 7.00391ZM6.24028 6.41797C5.99523 6.41797 5.75018 6.51562 5.56312 6.71094L5.46211 6.81641C5.08799 7.20703 5.08799 7.83984 5.46211 8.23242L16.7325 20C16.9195 20.1953 17.1646 20.293 17.4096 20.293C17.6547 20.293 17.8997 20.1953 18.0868 20L18.1878 19.8945C18.5619 19.5039 18.5619 18.8691 18.1878 18.4785L6.91743 6.71094C6.73037 6.51562 6.48533 6.41797 6.24028 6.41797Z"
                  fill="#424242"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_704_2651"
                    x1="23.2384"
                    y1="1.46541"
                    x2="19.0355"
                    y2="5.83473"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ECEFF1" />
                    <stop offset="1" stopColor="#B0BEC5" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_704_2651"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(5.61736 0.658137) scale(11.4449 11.9498)"
                  >
                    <stop stopColor="#ECEFF1" />
                    <stop offset="0.268" stopColor="#E8ECEE" />
                    <stop offset="0.5195" stopColor="#DDE3E6" />
                    <stop offset="0.7635" stopColor="#CAD3D8" />
                    <stop offset="1" stopColor="#B0BEC5" />
                  </radialGradient>
                </defs>
              </svg>

              <span style={{ marginLeft: "1rem" }}>BAÑO</span>
            </button>

            {/* SIESTA */}
            <button
              onClick={() => navigate(`/addAction/Siesta`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1961 18.0723C10.976 17.4766 10.3024 17.1856 9.6953 17.4239L6.5116 18.67L8.44307 11.5919C8.51137 11.3438 8.49999 11.088 8.41271 10.8497C8.17934 10.2188 7.46595 9.91023 6.82086 10.1641L1.53682 12.2305C1.24463 12.3438 1.01126 12.5626 0.87655 12.8419C0.738046 13.1309 0.72097 13.4532 0.829117 13.7481C1.04921 14.3458 1.72655 14.6387 2.33749 14.4005L5.41684 13.1954L3.46829 20.2344C3.39809 20.4884 3.40758 20.7501 3.49675 20.9923C3.677 21.4805 4.14184 21.7774 4.64273 21.7774C4.79831 21.7774 4.95769 21.7481 5.11327 21.6876L10.4941 19.5821C11.1012 19.3438 11.4162 18.6661 11.1961 18.0723Z"
                  fill="url(#paint0_linear_704_2673)"
                />
                <path
                  d="M17.5692 12.0743C17.4629 11.4317 16.8425 11.004 16.1879 11.1172L12.7519 11.7188L16.0513 5.00591C16.1671 4.76958 16.205 4.50981 16.1633 4.25395C16.0513 3.57231 15.393 3.11919 14.6967 3.24028L8.9933 4.24223C8.67835 4.29692 8.40134 4.46684 8.21161 4.7227C8.01618 4.98638 7.93839 5.30473 7.98962 5.62309C8.09587 6.26958 8.72009 6.69927 9.37846 6.58403L12.7026 6.002L9.39174 12.6719C9.27221 12.9122 9.23236 13.1778 9.276 13.4395C9.36328 13.9668 9.7731 14.3594 10.2759 14.461C10.4315 14.4922 10.5965 14.4961 10.7654 14.4668L16.5731 13.4493C17.2277 13.334 17.6754 12.7168 17.5692 12.0743Z"
                  fill="url(#paint1_linear_704_2673)"
                />
                <path
                  d="M23.5154 14.5432C23.4812 14.1272 23.1075 13.8186 22.6825 13.8557L20.455 14.0491L22.9158 9.94555C23.0031 9.80102 23.0411 9.63696 23.0278 9.4729C22.9917 9.03149 22.5952 8.70532 22.1455 8.74438L18.4514 9.06274C18.2484 9.08032 18.0625 9.17407 17.9278 9.32641C17.7893 9.48266 17.7229 9.68384 17.74 9.88891C17.7741 10.3069 18.1498 10.6174 18.5767 10.5803L20.7301 10.3928L18.2636 14.467C18.1744 14.6135 18.1346 14.7815 18.1498 14.9495C18.1782 15.2913 18.4192 15.5647 18.7341 15.6584C18.8328 15.6877 18.9372 15.6995 19.0453 15.6897L22.8077 15.3635C23.2327 15.3284 23.5496 14.9592 23.5154 14.5432Z"
                  fill="url(#paint2_linear_704_2673)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_704_2673"
                    x1="6.01288"
                    y1="5.52011"
                    x2="6.01288"
                    y2="21.0806"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4FC3F7" />
                    <stop offset="1" stopColor="#1E88E5" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_704_2673"
                    x1="12.7796"
                    y1="5.52009"
                    x2="12.7796"
                    y2="21.0805"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4FC3F7" />
                    <stop offset="1" stopColor="#1E88E5" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_704_2673"
                    x1="20.6273"
                    y1="5.52028"
                    x2="20.6273"
                    y2="21.0807"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4FC3F7" />
                    <stop offset="1" stopColor="#1E88E5" />
                  </linearGradient>
                </defs>
              </svg>

              <span style={{ marginLeft: "1rem" }}>SIESTA</span>
            </button>

            {/* PASEO */}
            <button
              onClick={() => navigate(`/addAction/Paseo`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_704_2677)">
                  <path
                    d="M7.72933 0.830309C7.20089 -0.0388315 5.98967 -0.282972 5.20402 0.371325C2.60857 2.53441 0.957764 5.76195 0.957764 9.37523H12.9296L7.72933 0.830309ZM24.1532 4.68773H21.9085C20.2577 4.68773 18.9155 6.0891 18.9155 7.81273V10.9377H0.957764C0.957764 13.4084 2.03336 15.6448 3.77769 17.3196C2.15962 17.7541 0.957764 19.2727 0.957764 21.094C0.957764 23.2522 2.63195 25.0002 4.69896 25.0002C6.76597 25.0002 8.44016 23.2522 8.44016 21.094C8.44016 20.6594 8.35598 20.2541 8.23439 19.8635C9.24452 20.1516 10.3201 20.3127 11.4331 20.3127C12.5461 20.3127 13.6264 20.1516 14.6318 19.8635C14.5056 20.2541 14.4261 20.6594 14.4261 21.094C14.4261 23.2522 16.1003 25.0002 18.1673 25.0002C20.2343 25.0002 21.9085 23.2522 21.9085 21.094C21.9085 19.2727 20.7066 17.7541 19.0885 17.3196C20.8329 15.6448 21.9085 13.4084 21.9085 10.9377V7.81273H24.1532C24.5647 7.81273 24.9014 7.46117 24.9014 7.03148V5.46898C24.9014 5.03929 24.5647 4.68773 24.1532 4.68773ZM4.69896 22.6565C3.8759 22.6565 3.20248 21.9534 3.20248 21.094C3.20248 20.2346 3.8759 19.5315 4.69896 19.5315C5.52202 19.5315 6.19544 20.2346 6.19544 21.094C6.19544 21.9534 5.52202 22.6565 4.69896 22.6565ZM19.6637 21.094C19.6637 21.9534 18.9903 22.6565 18.1673 22.6565C17.3442 22.6565 16.6708 21.9534 16.6708 21.094C16.6708 20.2346 17.3442 19.5315 18.1673 19.5315C18.9903 19.5315 19.6637 20.2346 19.6637 21.094Z"
                    fill="#4FC3F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_704_2677">
                    <rect
                      width="23.9437"
                      height="25"
                      fill="white"
                      transform="translate(0.957764)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span style={{ marginLeft: "1rem" }}>PASEO</span>
            </button>

            {/* HABILIDAD */}
            <button
              onClick={() => navigate(`/addAction/Habilidad`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7428 1.0415C13.0086 1.0415 13.2718 1.09539 13.5173 1.20009C13.7629 1.30478 13.986 1.45824 14.1739 1.6517C14.3618 1.84515 14.5109 2.07482 14.6126 2.32758C14.7143 2.58034 14.7666 2.85125 14.7666 3.12484V23.9582H10.719V3.12484C10.719 2.85125 10.7714 2.58034 10.8731 2.32758C10.9748 2.07482 11.1239 1.84515 11.3118 1.6517C11.4997 1.45824 11.7228 1.30478 11.9684 1.20009C12.2139 1.09539 12.4771 1.0415 12.7428 1.0415Z"
                  fill="#2B2C53"
                />
                <path
                  d="M10.719 3.125H12.7428V23.9583H10.719V3.125Z"
                  fill="#6B6C87"
                />
                <path
                  d="M20.8381 17.7085H4.64759C2.97101 17.7085 1.61188 19.1076 1.61188 20.8335V20.8335C1.61188 22.5594 2.97101 23.9585 4.64759 23.9585H20.8381C22.5146 23.9585 23.8738 22.5594 23.8738 20.8335C23.8738 19.1076 22.5146 17.7085 20.8381 17.7085Z"
                  fill="#E41A67"
                />
                <path
                  d="M17.8023 11.4585H7.68329C6.00672 11.4585 4.64758 12.8576 4.64758 14.5835V14.5835C4.64758 16.3094 6.00672 17.7085 7.68329 17.7085H17.8023C19.4789 17.7085 20.8381 16.3094 20.8381 14.5835C20.8381 12.8576 19.4789 11.4585 17.8023 11.4585Z"
                  fill="#27B9D4"
                />
                <path
                  d="M14.7667 5.2085H10.719C9.04245 5.2085 7.68332 6.6076 7.68332 8.33349V8.3335C7.68332 10.0594 9.04245 11.4585 10.719 11.4585H14.7667C16.4432 11.4585 17.8024 10.0594 17.8024 8.33349C17.8024 6.6076 16.4432 5.2085 14.7667 5.2085Z"
                  fill="#EBAD1E"
                />
                <path
                  d="M19.8262 20.8335C19.8262 20.4231 19.7476 20.0168 19.5951 19.6376C19.4425 19.2585 19.2189 18.914 18.937 18.6238C18.6551 18.3336 18.3205 18.1034 17.9522 17.9464C17.5839 17.7893 17.1891 17.7085 16.7904 17.7085H4.64759C3.84247 17.7085 3.07032 18.0377 2.50102 18.6238C1.93171 19.2098 1.61188 20.0047 1.61188 20.8335C1.61188 21.6623 1.93171 22.4572 2.50102 23.0432C3.07032 23.6293 3.84247 23.9585 4.64759 23.9585H16.7904C17.1891 23.9585 17.5839 23.8777 17.9522 23.7206C18.3205 23.5636 18.6551 23.3334 18.937 23.0432C19.2189 22.753 19.4425 22.4085 19.5951 22.0294C19.7476 21.6502 19.8262 21.2439 19.8262 20.8335Z"
                  fill="#F73478"
                />
                <path
                  d="M16.7904 14.5835C16.7904 14.1731 16.7119 13.7668 16.5594 13.3876C16.4068 13.0085 16.1832 12.664 15.9013 12.3738C15.6194 12.0836 15.2848 11.8534 14.9164 11.6964C14.5481 11.5393 14.1534 11.4585 13.7547 11.4585H7.6833C6.87818 11.4585 6.10603 11.7877 5.53672 12.3738C4.96742 12.9598 4.64758 13.7547 4.64758 14.5835C4.64758 15.4123 4.96742 16.2072 5.53672 16.7932C6.10603 17.3793 6.87818 17.7085 7.6833 17.7085H13.7547C14.1534 17.7085 14.5481 17.6277 14.9164 17.4706C15.2848 17.3136 15.6194 17.0834 15.9013 16.7932C16.1832 16.503 16.4068 16.1585 16.5594 15.7794C16.7119 15.4002 16.7904 14.9939 16.7904 14.5835Z"
                  fill="#5BCADE"
                />
                <path
                  d="M10.719 11.4585C12.3956 11.4585 13.7547 10.0594 13.7547 8.3335C13.7547 6.60761 12.3956 5.2085 10.719 5.2085C9.04245 5.2085 7.68332 6.60761 7.68332 8.3335C7.68332 10.0594 9.04245 11.4585 10.719 11.4585Z"
                  fill="#F9C450"
                />
                <path
                  d="M16.7904 18.75H4.64759C4.08873 18.75 3.63568 19.2164 3.63568 19.7917V19.7917C3.63568 20.367 4.08873 20.8333 4.64759 20.8333H16.7904C17.3493 20.8333 17.8023 20.367 17.8023 19.7917C17.8023 19.2164 17.3493 18.75 16.7904 18.75Z"
                  fill="#F9578F"
                />
                <path
                  d="M13.7548 12.5H7.68332C7.12446 12.5 6.67142 12.9664 6.67142 13.5417V13.5417C6.67142 14.117 7.12446 14.5833 7.68332 14.5833H13.7548C14.3136 14.5833 14.7667 14.117 14.7667 13.5417C14.7667 12.9664 14.3136 12.5 13.7548 12.5Z"
                  fill="#B4E7F0"
                />
                <path
                  d="M11.0549 8.67892C11.7524 7.96098 11.9408 6.99098 11.4759 6.51235C11.0109 6.03373 10.0686 6.22773 9.3712 6.94567C8.67377 7.6636 8.48531 8.63361 8.95026 9.11223C9.41521 9.59086 10.3575 9.39686 11.0549 8.67892Z"
                  fill="#FDE7B8"
                />
                <path
                  d="M6.67142 16.6665H14.7667V17.7082H6.67142V16.6665Z"
                  fill="#009FC2"
                />
                <path
                  d="M4.64758 22.9165H16.7904V23.9582H4.64758V22.9165Z"
                  fill="#C2004F"
                />
                <path
                  d="M10.719 4.1665H12.7428V5.20817H10.719V4.1665Z"
                  fill="#38395E"
                />
                <path
                  d="M12.7428 4.1665H14.7666V5.20817H12.7428V4.1665Z"
                  fill="#171843"
                />
                <path
                  d="M9.70713 12.5H7.68332C7.12446 12.5 6.67142 12.9664 6.67142 13.5417V13.5417C6.67142 14.117 7.12446 14.5833 7.68332 14.5833H9.70713C10.266 14.5833 10.719 14.117 10.719 13.5417C10.719 12.9664 10.266 12.5 9.70713 12.5Z"
                  fill="#E3F6F9"
                />
                <path
                  d="M6.6714 18.75H4.64759C4.08873 18.75 3.63568 19.2164 3.63568 19.7917V19.7917C3.63568 20.367 4.08873 20.8333 4.64759 20.8333H6.6714C7.23026 20.8333 7.6833 20.367 7.6833 19.7917C7.6833 19.2164 7.23026 18.75 6.6714 18.75Z"
                  fill="#FED2E1"
                />
              </svg>

              <span style={{ marginLeft: "1rem" }}>HABILIDAD</span>
            </button>

            {/* INCIDENTE */}
            <button
              onClick={() => navigate(`/addAction/Incidente`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9308 15.2032C22.5058 15.8035 22.9218 16.5493 23.1383 17.3677C23.3548 18.1861 23.3643 19.0491 23.166 19.8724C22.9678 20.6958 22.5684 21.4515 22.0069 22.0656C21.4455 22.6797 20.7411 23.1313 19.9625 23.3764C19.184 23.6214 18.3579 23.6515 17.5649 23.4638C16.7719 23.276 16.0391 22.8767 15.438 22.3049C14.8369 21.7332 14.3881 21.0084 14.1353 20.2015C13.8825 19.3945 13.8344 18.5329 13.9958 17.7008C14.0357 17.4934 14.0258 17.279 13.9671 17.0765C13.9083 16.8741 13.8025 16.69 13.6591 16.5407L2.67359 5.07034C2.48309 4.87147 2.33198 4.63537 2.22888 4.37552C2.12579 4.11567 2.07272 3.83715 2.07272 3.55589C2.07272 3.27462 2.12579 2.99611 2.22888 2.73626C2.33198 2.47641 2.48309 2.24031 2.67359 2.04144C2.86405 1.84254 3.09018 1.68476 3.33905 1.57711C3.58793 1.46947 3.85467 1.41406 4.12405 1.41406C4.39343 1.41406 4.66017 1.46947 4.90905 1.57711C5.15792 1.68476 5.38404 1.84254 5.57451 2.04144L16.5602 13.5116C16.7032 13.6613 16.8795 13.7718 17.0734 13.8332C17.2673 13.8945 17.4727 13.9048 17.6713 13.8631C18.4321 13.7014 19.2194 13.7391 19.9627 13.973C20.7061 14.2068 21.3823 14.6295 21.9308 15.2032Z"
                  fill="#ECECEC"
                />
                <path
                  d="M2.67359 5.07041L13.6591 16.5407C13.8025 16.6901 13.9083 16.8742 13.9671 17.0766C14.0258 17.279 14.0357 17.4935 13.9958 17.7009C13.7951 18.7349 13.9186 19.8089 14.3482 20.7638C14.7778 21.7187 15.4905 22.5038 16.3807 23.0028C17.271 23.5018 18.2915 23.6881 19.2912 23.5342C20.2908 23.3803 21.2164 22.8944 21.9308 22.1483L2.67359 2.0415C2.48309 2.24037 2.33198 2.47648 2.22888 2.73633C2.12579 2.99618 2.07272 3.27469 2.07272 3.55596C2.07272 3.83722 2.12579 4.11573 2.22888 4.37559C2.33198 4.63544 2.48309 4.87154 2.67359 5.07041Z"
                  fill="#E0D5CE"
                />
                <path
                  d="M20.6214 20.7812C20.188 21.2333 19.6266 21.5277 19.0205 21.6208C18.4143 21.714 17.7955 21.6009 17.2557 21.2984C16.7158 20.9959 16.2836 20.52 16.0229 19.941C15.7622 19.3621 15.6869 18.711 15.8082 18.0839C15.9093 17.5642 15.8854 17.0263 15.7384 16.5186C15.5915 16.0109 15.3263 15.5492 14.9664 15.1749L3.98152 3.7046C3.96245 3.68516 3.94726 3.66195 3.93684 3.63633C3.92642 3.61071 3.92097 3.58319 3.92081 3.55535C3.92065 3.52752 3.92579 3.49993 3.93591 3.47418C3.94604 3.44844 3.96096 3.42504 3.97981 3.40536C3.99866 3.38568 4.02107 3.3701 4.04573 3.35952C4.07039 3.34895 4.09681 3.34359 4.12347 3.34375C4.15013 3.34392 4.17649 3.34961 4.20103 3.36049C4.22556 3.37137 4.24779 3.38723 4.26641 3.40714L15.2528 14.8775C15.6115 15.2533 16.0538 15.5304 16.5403 15.6838C17.0267 15.8372 17.542 15.8621 18.04 15.7564C18.6403 15.6306 19.2634 15.7097 19.8172 15.9821C20.3711 16.2545 20.8263 16.7057 21.1157 17.269C21.4051 17.8323 21.5133 18.4779 21.4243 19.1104C21.3353 19.7428 21.0538 20.3286 20.6214 20.7812Z"
                  fill="#F74141"
                />
                <path
                  d="M5.90787 2.38965L5.5214 2.79316C5.48665 2.82943 5.45909 2.87249 5.44028 2.91988C5.42147 2.96727 5.41178 3.01807 5.41177 3.06936C5.41177 3.12066 5.42143 3.17146 5.44023 3.21886C5.45902 3.26626 5.48657 3.30933 5.52131 3.34561C5.55604 3.38189 5.59728 3.41067 5.64267 3.43031C5.68806 3.44995 5.73671 3.46006 5.78584 3.46007C5.83497 3.46008 5.88362 3.44998 5.92902 3.43036C5.97441 3.41074 6.01566 3.38197 6.05041 3.3457L6.43687 2.94238L5.90787 2.38965Z"
                  fill="#474444"
                />
                <path
                  d="M7.76874 4.33252L7.38227 4.73604C7.34753 4.77232 7.31996 4.81539 7.30116 4.86279C7.28235 4.91019 7.27267 4.961 7.27267 5.0123C7.27267 5.06361 7.28235 5.11442 7.30116 5.16182C7.31996 5.20922 7.34753 5.25229 7.38227 5.28857C7.45245 5.36185 7.54763 5.40301 7.64687 5.40301C7.69601 5.40301 7.74467 5.3929 7.79007 5.37327C7.83547 5.35363 7.87672 5.32485 7.91147 5.28857L8.29793 4.88506L7.76874 4.33252Z"
                  fill="#474444"
                />
                <path
                  d="M9.62567 6.27148L9.23939 6.675C9.17355 6.74914 9.13782 6.84705 9.13969 6.94813C9.14156 7.04922 9.1809 7.14561 9.24943 7.21704C9.31796 7.28847 9.41035 7.32937 9.50717 7.33115C9.60398 7.33292 9.69769 7.29543 9.76858 7.22656L10.1549 6.82305L9.62567 6.27148Z"
                  fill="#474444"
                />
                <path
                  d="M11.4867 8.21484L11.1001 8.61836C11.0299 8.69163 10.9905 8.791 10.9905 8.8946C10.9906 8.9982 11.03 9.09756 11.1002 9.1708C11.1703 9.24405 11.2655 9.28518 11.3647 9.28517C11.464 9.28515 11.5591 9.24397 11.6293 9.1707L12.0167 8.76719L11.4867 8.21484Z"
                  fill="#474444"
                />
                <path
                  d="M13.3457 10.1562L12.9593 10.5598C12.9235 10.5958 12.895 10.6389 12.8754 10.6866C12.8558 10.7342 12.8455 10.7855 12.8451 10.8373C12.8446 10.8892 12.8541 10.9406 12.8729 10.9887C12.8917 11.0367 12.9195 11.0803 12.9546 11.117C12.9898 11.1536 13.0315 11.1826 13.0775 11.2023C13.1235 11.2219 13.1728 11.2318 13.2224 11.2313C13.2721 11.2309 13.3212 11.2201 13.3668 11.1996C13.4125 11.1792 13.4538 11.1494 13.4883 11.1121L13.8747 10.7086L13.3457 10.1562Z"
                  fill="#474444"
                />
                <path
                  d="M15.7182 12.6326L15.189 12.0801L14.8026 12.4836C14.7324 12.5569 14.693 12.6563 14.6931 12.7599C14.6931 12.8635 14.7325 12.9629 14.8027 13.0361C14.8729 13.1094 14.9681 13.1505 15.0674 13.1505C15.1666 13.1504 15.2618 13.1092 15.3319 13.0359L15.7182 12.6326Z"
                  fill="#474444"
                />
                <path
                  d="M3.98153 3.70469L14.9672 15.1758C15.327 15.5501 15.5923 16.0118 15.7392 16.5195C15.8861 17.0272 15.9101 17.565 15.8089 18.0848C15.6882 18.7116 15.7637 19.3624 16.0245 19.9409C16.2852 20.5195 16.7174 20.9951 17.257 21.2974C17.7966 21.5998 18.415 21.7128 19.0209 21.6199C19.6268 21.5269 20.1879 21.2329 20.6214 20.7812L3.98153 3.40723C3.9438 3.4467 3.92261 3.50019 3.92261 3.55596C3.92261 3.61172 3.9438 3.66521 3.98153 3.70469Z"
                  fill="#EF3030"
                />
              </svg>

              <span style={{ marginLeft: "1rem" }}>INCIDENTE</span>
            </button>

            {/* NOTA */}
            <button
              onClick={() => navigate(`/addAction/Nota`)}
              style={{
                fontFamily: "Inder",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                textTransform: "uppercase",
                color: "#E67E22",
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_704_2716)">
                  <path
                    d="M5.93198 2.0835C4.82997 2.0835 3.93668 3.021 3.93668 4.16683V12.5002V16.6668V22.9168C3.93668 24.0627 4.82997 25.0002 5.93198 25.0002H19.8991C21.0015 25.0002 21.8944 24.0627 21.8944 22.9168V16.6668V12.5002V8.3335V4.16683C21.8944 3.021 21.0015 2.0835 19.8991 2.0835H15.9085H5.93198Z"
                    fill="#BDC3C7"
                  />
                  <path
                    d="M6.92963 0C6.37863 0 5.93198 0.416667 5.93198 1.04167V4.16667C5.93198 4.6875 6.37863 5.20833 6.92963 5.20833C7.48063 5.20833 7.92728 4.6875 7.92728 4.16667V1.04167C7.92728 0.416667 7.48063 0 6.92963 0ZM10.9202 0C10.3692 0 9.92259 0.416667 9.92259 1.04167V4.16667C9.92259 4.6875 10.3692 5.20833 10.9202 5.20833C11.4709 5.20833 11.9179 4.6875 11.9179 4.16667V1.04167C11.9179 0.416667 11.4709 0 10.9202 0ZM14.9108 0C14.3601 0 13.9132 0.416667 13.9132 1.04167V4.16667C13.9132 4.6875 14.3601 5.20833 14.9108 5.20833C15.4616 5.20833 15.9085 4.6875 15.9085 4.16667V1.04167C15.9085 0.416667 15.4616 0 14.9108 0ZM18.9015 0C18.3508 0 17.9038 0.416667 17.9038 1.04167V4.16667C17.9038 4.6875 18.3508 5.20833 18.9015 5.20833C19.4522 5.20833 19.8991 4.6875 19.8991 4.16667V1.04167C19.8991 0.416667 19.4522 0 18.9015 0Z"
                    fill="#95A5A6"
                  />
                  <path
                    d="M6.92963 15.625H18.9015V16.6667H6.92963V15.625Z"
                    fill="#95A5A6"
                  />
                  <path
                    d="M6.92963 12.5H18.9015V13.5417H6.92963V12.5Z"
                    fill="#95A5A6"
                  />
                  <path
                    d="M6.92963 9.375H18.9015V10.4167H6.92963V9.375Z"
                    fill="#95A5A6"
                  />
                  <path
                    d="M6.92963 18.75H10.9202V19.7917H6.92963V18.75Z"
                    fill="#95A5A6"
                  />
                  <path
                    d="M5.93198 4.1665C5.93198 4.68734 6.37863 5.20817 6.92963 5.20817C7.48063 5.20817 7.92728 4.68734 7.92728 4.1665H5.93198ZM9.92259 4.1665C9.92259 4.68734 10.3692 5.20817 10.9202 5.20817C11.4709 5.20817 11.9179 4.68734 11.9179 4.1665H9.92259ZM13.9132 4.1665C13.9132 4.68734 14.3601 5.20817 14.9108 5.20817C15.4616 5.20817 15.9085 4.68734 15.9085 4.1665H13.9132ZM17.9038 4.1665C17.9038 4.68734 18.3508 5.20817 18.9015 5.20817C19.4522 5.20817 19.8991 4.68734 19.8991 4.1665H17.9038Z"
                    fill="#7F8C8D"
                  />
                  <path
                    d="M3.93668 21.875V22.9167C3.93668 24.0625 4.82997 25 5.93198 25H19.8991C21.0015 25 21.8944 24.0625 21.8944 22.9167V21.875C21.8944 23.0208 21.0015 23.9583 19.8991 23.9583H5.93198C4.82997 23.9583 3.93668 23.0208 3.93668 21.875Z"
                    fill="#95A5A6"
                  />
                  <path
                    d="M20.0566 7.25684L12.085 15.5801L11.5912 16.0957L10.8858 16.8323L10.8858 19.7786L13.7076 19.7786L14.413 19.042L14.9068 18.5264L22.8784 10.2031L20.0566 7.25684Z"
                    fill="#ECF0F1"
                  />
                  <path
                    d="M21.4675 8.72998L10.8858 19.7786L13.7076 19.7786L14.413 19.042L14.9068 18.5264L22.8784 10.2031L21.4675 8.72998Z"
                    fill="#BDC3C7"
                  />
                  <path
                    d="M19.3512 7.99316L22.173 10.9395L14.413 19.0418L11.5912 16.0955L19.3512 7.99316Z"
                    fill="white"
                  />
                  <path
                    d="M23.5839 6.52002C22.8043 5.70611 21.5381 5.70979 20.7621 6.52002L20.0566 7.25659L22.8784 10.2029L23.5839 9.46631C24.3599 8.65608 24.3634 7.33393 23.5839 6.52002Z"
                    fill="#7F8C8D"
                  />
                  <path
                    d="M10.8815 17.7114L10.8857 19.7783L12.8653 19.7827L11.8734 18.747L10.8815 17.7114Z"
                    fill="#34495E"
                  />
                  <path
                    d="M11.8734 18.7471L10.8857 19.7783L12.8652 19.7827L11.8734 18.7471Z"
                    fill="#2C3E50"
                  />
                  <path
                    d="M23.5839 6.52002C22.8043 5.70611 21.5381 5.70979 20.7621 6.52002L20.0566 7.25659L21.4675 8.72974L23.5839 6.52002Z"
                    fill="#95A5A6"
                  />
                  <path
                    d="M20.7621 9.46631L22.173 10.9395L14.413 19.0418L13.0021 17.5686L20.7621 9.46631Z"
                    fill="#D35400"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_704_2716">
                    <rect
                      width="23.9437"
                      height="25"
                      fill="white"
                      transform="translate(0.943726)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span style={{ marginLeft: "1rem" }}>NOTA</span>
            </button>

            {/* CLOSE BTN */}
            <button
              onClick={handleCloseActionModal}
              style={{
                border: "none",
                background: "transparent",
                position: "absolute",
                right: "-35px",
                bottom: "-40px",
              }}
            >
              <svg
                width="55px"
                height="55px"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_706_2738)">
                  <rect x="4" width="60" height="60" rx="30" fill="white" />
                  <g clipPath="url(#clip0_706_2738)">
                    <path
                      d="M21.4092 25.4686C19.8174 23.7382 19.371 20.9627 20.798 18.8945C21.0804 18.4851 21.3908 18.0964 21.7435 17.7437C22.0962 17.391 22.4849 17.0806 22.8943 16.7982C24.9625 15.3713 27.738 15.8177 29.4683 17.4094C29.6286 17.5568 29.7892 17.7045 29.9502 17.8526C30.6173 18.466 31.2905 19.0851 31.9675 19.7113C33.0043 20.6703 34.6658 20.613 35.7713 19.5801C36.4932 18.9056 37.2108 18.2385 37.9217 17.5777C38.0934 17.4181 38.2645 17.259 38.4354 17.1002C40.2797 15.3851 43.0926 14.7461 45.0673 16.0335C45.4581 16.2885 45.8263 16.5727 46.1555 16.9019C46.4847 17.2311 46.7689 17.5993 47.0239 17.9901C48.3113 19.9648 47.6723 22.7777 45.9573 24.622C45.7984 24.7929 45.6391 24.9642 45.4797 25.1357C44.8187 25.8468 44.1518 26.5642 43.4773 27.2861C42.4444 28.3916 42.3871 30.0531 43.3461 31.0899C43.9724 31.7669 44.5915 32.4402 45.2049 33.1072C45.353 33.2683 45.5006 33.4288 45.648 33.5891C47.2398 35.3195 47.6861 38.0949 46.2593 40.1632C45.9767 40.5725 45.6664 40.9612 45.3137 41.3139C44.961 41.6666 44.5723 41.9769 44.163 42.2595C42.0946 43.6863 39.3192 43.24 37.5889 41.6483C37.4286 41.5008 37.2681 41.3532 37.107 41.2051C36.44 40.5917 35.7667 39.9726 35.0897 39.3463C34.0529 38.3873 32.3914 38.4446 31.2859 39.4775C30.564 40.152 29.8464 40.8191 29.1354 41.48C28.9638 41.6395 28.7926 41.7986 28.6219 41.9574C26.7775 43.6724 23.9646 44.3115 21.9899 43.024C21.5991 42.7692 21.2309 42.4849 20.9017 42.1557C20.5725 41.8265 20.2882 41.4584 20.0334 41.0675C18.7459 39.0928 19.385 36.2799 21.1 34.4355C21.2588 34.2648 21.4179 34.0936 21.5774 33.922C22.2383 33.211 22.9054 32.4934 23.5799 31.7715C24.6128 30.6661 24.6701 29.0045 23.7111 27.9677C23.0848 27.2907 22.4657 26.6174 21.8522 25.9503C21.7042 25.7893 21.5565 25.6288 21.4092 25.4686Z"
                      fill="#E67E22"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_706_2738"
                    x="0"
                    y="0"
                    width="68"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_706_2738"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_706_2738"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_706_2738">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(5.71573 30) rotate(-45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </Box>
      </Modal>

      <Menu />
    </React.Fragment>
  );
}

export default BabyDetails;
