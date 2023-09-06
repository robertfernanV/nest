import { useEffect, useState } from "react";
import "./BabyDetails.scss";
import { FernandezFamilyData } from "../../data";
import BabyCard from "../../components/BabyCard/BabyCard";
import { Box, Modal, Typography } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import ContentModalfeedingBottle from "../../components/BabyCard/ContentModalfeedingBottle";
import ContentModalNote from "../../components/BabyCard/ContentModalNote";
import ContentModalSnap from "../../components/BabyCard/ContentModalSnap";
import ContentModalEvacuation from "../../components/BabyCard/ContentModalEvacuation";
import ContentModalNewSkill from "../../components/BabyCard/ContentModalNewSkill";

function BabyDetails() {
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
    console.log('Abriendo imagne');
    setOpenImagePreview(true);
  };
  const handleCloseImagePreview = () => {
    setOpenImagePreview(false);
  };

  return (
    <>
      <NavBar menuTitle={"FMLIA. XXX XXX XXX"} />

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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="babyDetails__btn">
          <svg
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 9L12 0.339745L12 17.6603L0 9Z" fill="#D9D9D9" />
          </svg>
        </button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6168 7.34222C15.979 7.34222 17.0834 6.23785 17.0834 4.87554C17.0834 3.51324 15.979 2.40887 14.6168 2.40887C13.2544 2.40887 12.1501 3.51324 12.1501 4.87554C12.1501 6.23785 13.2544 7.34222 14.6168 7.34222Z"
            fill="#D9D9D9"
          />
          <path
            d="M5.38335 7.34222C6.74565 7.34222 7.85002 6.23785 7.85002 4.87554C7.85002 3.51324 6.74565 2.40887 5.38335 2.40887C4.02105 2.40887 2.91669 3.51324 2.91669 4.87554C2.91669 6.23785 4.02105 7.34222 5.38335 7.34222Z"
            fill="#D9D9D9"
          />
          <path
            d="M14.6168 17.5929C15.979 17.5929 17.0834 16.4885 17.0834 15.1262C17.0834 13.7639 15.979 12.6595 14.6168 12.6595C13.2544 12.6595 12.1501 13.7639 12.1501 15.1262C12.1501 16.4885 13.2544 17.5929 14.6168 17.5929Z"
            fill="#D9D9D9"
          />
          <path
            d="M5.38335 17.5929C6.74565 17.5929 7.85002 16.4885 7.85002 15.1262C7.85002 13.7639 6.74565 12.6595 5.38335 12.6595C4.02105 12.6595 2.91669 13.7639 2.91669 15.1262C2.91669 16.4885 4.02105 17.5929 5.38335 17.5929Z"
            fill="#D9D9D9"
          />
        </svg>

        <button className="babyDetails__btn">
          <svg
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 9L0 17.6603L0 0.339746L12 9Z" fill="#FB9825" />
          </svg>
        </button>
      </Box>
      <p className="babyDetails__cronologia">Cronología del día</p>

      {/* SE ITERA LAS ACCIONES DEL BEBÉ */}

      <Box
        sx={{
          display: "flex",
          marginY: "5px",
        }}
        onClick={(e) => handleOpen(e.target.id)}
        id={"note"}
      >
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
        <Box
          sx={{
            pointerEvents: 'none',
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
          <button className="babyDetails__srcContent" onClick={handleOpenImagePreview}>
            <img
              className="babyDetails__srcNote"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZgpadvnLQBPqEzSM5yQ32yOUqH5tGtEFKpGIiqQ8ReSGPQHn-N8XvxAjHoZ9lBFu_g&usqp=CAU"
              alt=""
            />
          </button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginY: "5px",
        }}
        id={"feedingBottle"}
        onClick={(e) => handleOpen(e.target.id)}
      >
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
        <Box
          sx={{
            pointerEvents: 'none',
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
            pointerEvents: 'none',
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
      <hr className="babyDetails__separador" />




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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZgpadvnLQBPqEzSM5yQ32yOUqH5tGtEFKpGIiqQ8ReSGPQHn-N8XvxAjHoZ9lBFu_g&usqp=CAU"
              alt=""
            />
          </Box>
        </Modal>
    </>
  );
}

export default BabyDetails;
