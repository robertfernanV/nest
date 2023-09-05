import { Grid, Box, Card } from "@mui/material";

const simpleSummaryData = [
  {
    familyCode: 12345,
    memberId: 3,
    date: "2023/07/27",
    feedingBottle: ["6:55am"],
    meal: [],
    evacuation: [],
    bathroom: [],
    snap: ["1:25pm", "5:00pm"],
    walk: [],
    newSkill: [],
    medication: ["3:35pm"],
    symptom: [],
    note: [
      {
        comment: 'Alan con sus padres!',
        srcImage: 'https://scontent.fccs4-2.fna.fbcdn.net/v/t39.30808-6/294821769_10158873036633603_5242987218657091267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=mD8nwsq7q-cAX8Ixhs8&_nc_ht=scontent.fccs4-2.fna&oh=00_AfBQm211DdUQT-HwkgcrecJte0SF7Rwt78ceH6gO7WuGig&oe=64D430E7'
      }
    ],
  },

  {
    familyCode: 35226,
    memberId: 17,
    date: "2023/04/11",
    feedingBottle: ["8:11am", "12:10pm"],
    meal: [],
    evacuation: [],
    bathroom: [],
    snap: [],
    walk: ["3:20pm"],
    newSkill: [],
    medication: [],
    symptom: [],
    note: [],
  },
];
function BabyCard_Selected({ familyId, Id, memberName, image, age }) {
  return (
    <>
      {simpleSummaryData?.map((card) => {
        if (
          card.memberId === Id &&
          card.familyCode === familyId 
          /* && new Date(card.date).getDay() == new Date().getDay() */
        ) {
          return (
            <>
              <Card
                sx={{
                  marginX: "0.5rem",
                  marginY: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 4px 0px #D9D9D9",
                  border: "1px solid #FB9825",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    padding: "24px",
                  }}
                >
                  <img
                    className="familyParticipants__imgSelected"
                    src={image}
                    alt=""
                  />
                  <Box
                    sx={{
                      marginX: "auto",
                      fontFamily: "Happy_Monkey",
                      fontSize: "14px",
                    }}
                  >
                    <p className="familyParticipants__card">{memberName}</p>
                    <p className="familyParticipants__age">{age} Meses</p>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Estado:</p>
                      <svg
                        width="39"
                        height="40"
                        viewBox="0 0 39 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <ellipse
                          cx="19.4286"
                          cy="20"
                          rx="19.4286"
                          ry="20"
                          fill="url(#pattern0)"
                        />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_366_1526"
                              transform="matrix(0.00457516 0 0 0.00444444 -0.0147059 0)"
                            />
                          </pattern>
                          <image
                            id="image0_366_1526"
                            width="225"
                            height="225"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </Box>
                    <p>
                      Actividad:{" "}
                      <span className="familyParticipants__activity">
                        Jugando
                      </span>
                    </p>
                  </Box>
                </Box>
                <div>
                  <Grid
                    className="familyParticipants__cardItems"
                    container
                    columns={{ xs: 5 }}
                    sx={{
                      marginBottom: "1rem",
                    }}
                  >
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={
                          card.feedingBottle.length == 0 ? "20%" : "100%"
                        }
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_125_225)">
                          <path
                            d="M23.1476 5.0153C23.1476 4.03335 23.6313 4.52432 24.1083 4.03335C25.0635 3.05141 25.5438 1.5778 24.5899 0.595851C23.6354 -0.386093 22.2059 0.111823 21.252 1.09377C20.7744 1.58474 21.2533 2.08335 20.2994 2.08335H16.4832L16.9602 2.56738C16.9602 2.56738 19.3456 6.00071 19.8225 5.50974C19.3456 6.00141 22.6767 8.45418 22.6767 8.45418L23.1476 8.94377V5.0153Z"
                            fill="#FFAC33"
                          />
                          <path
                            d="M21.7303 10.4167L18.3917 6.97916L15.0524 3.54236C14.5754 4.03333 12.19 3.54236 11.2362 4.5243L10.7592 5.01528L9.3277 6.48889L1.9752 14.0569C0.921473 15.1417 0.921473 16.9014 1.9752 17.9854L7.69921 23.8778C8.75294 24.9625 10.4617 24.9625 11.5154 23.8778L18.194 17.0035L20.2994 14.8361L20.7764 14.3451C21.7303 13.3625 21.2533 10.9076 21.7303 10.4167Z"
                            fill="#CCD6DD"
                          />
                          <path
                            d="M22.923 10.1708C22.2639 10.8493 21.6736 11.3403 21.0152 10.6618L14.8142 4.27846C14.1551 3.59999 14.6328 2.99235 15.2912 2.31388C15.9503 1.6361 17.0175 1.6361 17.6759 2.31388L22.923 7.71526C23.5821 8.39374 23.5821 9.49304 22.923 10.1708Z"
                            fill="#55ACEE"
                          />
                          <path
                            d="M9.65555 22.2222C9.48285 22.2222 9.31015 22.1542 9.17861 22.0188C8.91484 21.7472 8.91484 21.3083 9.17861 21.0368L17.2738 12.7035C17.5376 12.4319 17.964 12.4319 18.2277 12.7035C18.4915 12.975 18.4915 13.4146 18.2277 13.6861L10.1325 22.0194C10.0009 22.1542 9.82825 22.2222 9.65555 22.2222ZM6.95714 19.4444C6.78444 19.4444 6.61174 19.3764 6.48019 19.241C6.21642 18.9694 6.21642 18.5306 6.48019 18.259L14.5754 9.9257C14.8392 9.65417 15.2656 9.65417 15.5293 9.9257C15.7931 10.1972 15.7931 10.6361 15.5293 10.9076L7.43408 19.2417C7.30253 19.3764 7.12984 19.4444 6.95714 19.4444ZM4.25873 16.6667C4.08603 16.6667 3.91333 16.5986 3.78178 16.4632C3.51801 16.1917 3.51801 15.7528 3.78178 15.4813L11.877 7.14792C12.1408 6.87639 12.5671 6.87639 12.8309 7.14792C13.0947 7.41945 13.0947 7.85834 12.8309 8.12986L4.73567 16.4639C4.60412 16.5986 4.43142 16.6667 4.25873 16.6667Z"
                            fill="#99AAB5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_125_225">
                            <rect
                              width="24.2857"
                              height="25"
                              fill="white"
                              transform="translate(0.885712)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.feedingBottle.length > 0
                          ? card.feedingBottle.length
                          : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.meal.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.02901 1.21093C2.38392 1.91406 1.0558 6.32812 6.63392 12.1094C8.41741 13.9453 9.74553 12.5781 10.846 13.75L20.8259 24.0234C20.8259 24.0234 22.9888 23.2812 23.3304 21.4062L3.56026 1.01562C3.56026 1.01562 3.37053 0.85937 3.02901 1.21093Z"
                          fill="#94989B"
                        />
                        <path
                          d="M24.1652 4.29687C24.4308 3.78906 23.8237 3.94531 23.8237 3.94531C23.8237 3.94531 19.8013 7.92969 19.2321 7.46094C18.663 6.99219 23.1786 3.16406 22.6473 2.42187C22.154 1.75781 18.2076 6.52344 17.7143 5.9375C17.2589 5.35156 21.0915 1.21094 21.0915 1.21094C21.0915 1.21094 21.2433 0.585937 20.75 0.859374C14.6786 4.21875 13.9196 7.34375 13.9196 7.34375C13.9196 7.34375 13.692 7.96875 14.1473 8.4375C14.1853 8.47656 3.06697 19.8828 1.58706 21.4062C0.866074 22.1484 3.52232 24.8437 4.24331 24.1016C5.72322 22.5781 16.7656 11.0937 16.8036 11.1328C17.2589 11.6016 17.8661 11.4062 17.8661 11.4062C17.8661 11.4062 20.9018 10.5859 24.1652 4.29687Z"
                          fill="#B2C1C0"
                        />
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.meal.length > 0 ? card.meal.length : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.evacuation.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="32"
                        height="34"
                        viewBox="0 0 30 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_366_1547)">
                          <path
                            d="M17.9919 31.0708C21.1044 30.8836 24.0472 29.3442 26.251 26.7503C28.4547 24.1565 29.7626 20.6928 29.9217 17.0294C26.7581 17.0309 23.7245 18.5108 21.4875 21.1437C19.2506 23.7767 17.9933 27.3473 17.9919 31.0708Z"
                            fill="#C6C6C6"
                          />
                          <path
                            d="M0.117737 17.0294C0.276522 20.6929 1.58437 24.1568 3.78815 26.7507C5.99192 29.3446 8.9349 30.8839 12.0475 31.0708C12.0461 27.3473 10.7888 23.7767 8.55187 21.1437C6.3149 18.5108 3.28129 17.0309 0.117737 17.0294Z"
                            fill="#C6C6C6"
                          />
                          <path
                            d="M0.100464 16.2736C0.100464 16.5275 0.106058 16.7777 0.116625 17.0286C3.27998 17.0312 6.31318 18.5113 8.55007 21.144C10.787 23.7767 12.0447 27.3468 12.047 31.0701C12.2596 31.0828 12.4732 31.0889 12.6878 31.0884H17.3498C17.5649 31.0884 17.7787 31.0818 17.9913 31.0701C17.9926 27.3465 19.2499 23.7759 21.4869 21.143C23.7239 18.51 26.7575 17.0302 29.921 17.0286C29.9316 16.7777 29.9372 16.5267 29.9372 16.2736V4.88721H0.100464L0.100464 16.2736Z"
                            fill="#E2E2E2"
                          />
                          <path
                            d="M28.5392 0.408142H1.49968C1.12869 0.408142 0.772892 0.581554 0.510505 0.89025C0.248119 1.19895 0.100629 1.61765 0.100464 2.05431L0.100464 4.88792H29.9372V2.05431C29.9372 1.61785 29.7899 1.19925 29.5278 0.890553C29.2656 0.581857 28.91 0.408336 28.5392 0.408142Z"
                            fill="#59C5EF"
                          />
                          <path
                            d="M8.28941 8.23657H0.100464V13.8372H8.28941C8.92005 13.8368 9.52478 13.5418 9.97071 13.0169C10.4166 12.492 10.6673 11.7803 10.6676 11.038C10.6676 10.2954 10.4171 9.58317 9.97119 9.05786C9.52523 8.53256 8.92033 8.23715 8.28941 8.23657Z"
                            fill="#59C5EF"
                          />
                          <path
                            d="M19.37 11.038C19.37 11.4058 19.4316 11.7701 19.5512 12.1099C19.6708 12.4498 19.8462 12.7586 20.0672 13.0186C20.2882 13.2787 20.5506 13.485 20.8393 13.6257C21.1281 13.7664 21.4376 13.8388 21.7501 13.8387H29.9372V8.23657H21.7508C21.4381 8.23638 21.1285 8.3087 20.8396 8.44941C20.5508 8.59012 20.2883 8.79645 20.0672 9.05662C19.8461 9.31678 19.6707 9.62568 19.5511 9.96565C19.4315 10.3056 19.3699 10.67 19.37 11.038Z"
                            fill="#59C5EF"
                          />
                          <path
                            d="M3.8313 8.23804H6.93929V13.8387H3.8313V8.23804Z"
                            fill="#2BA0BF"
                          />
                          <path
                            d="M23.1003 8.23804H26.2082V13.8387H23.1003V8.23804Z"
                            fill="#2BA0BF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_366_1547">
                            <rect
                              width="29.838"
                              height="30.6802"
                              fill="white"
                              transform="translate(0.100464 0.408142)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <p className="babyCard__countSelected">
                        {card.evacuation.length > 0
                          ? card.evacuation.length
                          : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.bathroom.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5722 3.45898L15.6275 6.47852C15.0678 7.05273 15.0678 7.98437 15.6275 8.55859L15.9121 8.84961C16.47 9.42188 17.3731 9.42188 17.9309 8.84766L20.8983 5.79102C21.7255 4.9375 22.7159 4.35547 23.8411 4.09766V1.01953C21.8413 1.13086 19.9971 1.99609 18.5722 3.45898Z"
                          fill="url(#paint0_linear_125_245)"
                        />
                        <path
                          d="M5.35925 15.5977C4.78056 16.1934 4.03302 16.127 3.53213 15.6113C3.03123 15.0957 2.96672 14.3262 3.54541 13.7305C4.21896 13.0371 6.38759 12.6699 6.38759 12.6699C6.38759 12.6699 6.02521 14.9121 5.35925 15.5977Z"
                          fill="#00B0FF"
                        />
                        <path
                          d="M8.19006 18.5117C7.61137 19.1074 6.86383 19.041 6.36294 18.5254C5.86204 18.0098 5.79753 17.2402 6.37622 16.6445C7.04977 15.9512 9.21841 15.584 9.21841 15.584C9.21841 15.584 8.85602 17.8262 8.19006 18.5117Z"
                          fill="#00B0FF"
                        />
                        <path
                          d="M11.0607 21.4668C10.482 22.0625 9.73446 21.9961 9.23357 21.4805C8.73268 20.9648 8.66817 20.1953 9.24685 19.5996C9.9204 18.9063 12.089 18.5391 12.089 18.5391C12.089 18.5391 11.7267 20.7813 11.0607 21.4668Z"
                          fill="#00B0FF"
                        />
                        <path
                          d="M3.35757 20.4727C2.77888 21.0684 2.03134 21.002 1.53045 20.4863C1.02955 19.9707 0.965045 19.2012 1.54373 18.6055C2.21728 17.9121 4.38592 17.5449 4.38592 17.5449C4.38592 17.5449 4.02353 19.7871 3.35757 20.4727Z"
                          fill="#4FC3F7"
                        />
                        <path
                          d="M6.32498 23.5254C5.74629 24.1211 4.99875 24.0547 4.49785 23.5391C3.99696 23.0234 3.93245 22.2539 4.51114 21.6582C5.18468 20.9648 7.35332 20.5977 7.35332 20.5977C7.35332 20.5977 6.99093 22.8418 6.32498 23.5254Z"
                          fill="#4FC3F7"
                        />
                        <g opacity="0.2">
                          <path
                            d="M5.90757 13.166C5.73112 13.9727 5.42944 14.9746 5.09172 15.3223C4.8944 15.5254 4.66862 15.6328 4.43904 15.6328C4.21326 15.6328 3.98558 15.5273 3.80154 15.3379C3.62129 15.1523 3.51884 14.9238 3.51504 14.6973C3.51125 14.4551 3.6137 14.2168 3.81672 14.0098C4.15634 13.6563 5.12587 13.3438 5.90757 13.166ZM6.38949 12.6699C6.38949 12.6699 4.22085 13.0352 3.5473 13.7305C2.96862 14.3262 3.03312 15.0957 3.53402 15.6113C3.79016 15.875 4.1108 16.0215 4.44094 16.0215C4.75589 16.0215 5.07844 15.8887 5.36114 15.5977C6.0252 14.9121 6.38949 12.6699 6.38949 12.6699Z"
                            fill="#424242"
                          />
                          <path
                            d="M8.73838 16.0801C8.56193 16.8867 8.26025 17.8887 7.92253 18.2363C7.72521 18.4395 7.49943 18.5469 7.26985 18.5469C7.04407 18.5469 6.81639 18.4414 6.63235 18.252C6.4521 18.0664 6.34965 17.8379 6.34586 17.6113C6.34206 17.3691 6.44452 17.1309 6.64753 16.9238C6.98715 16.5703 7.95668 16.2578 8.73838 16.0801ZM9.2203 15.584C9.2203 15.584 7.05166 15.9492 6.37811 16.6445C5.79943 17.2402 5.86394 18.0098 6.36483 18.5254C6.62097 18.7891 6.94161 18.9355 7.27175 18.9355C7.5867 18.9355 7.90925 18.8027 8.19195 18.5117C8.85601 17.8262 9.2203 15.584 9.2203 15.584Z"
                            fill="#424242"
                          />
                          <path
                            d="M11.609 19.0352C11.4326 19.8418 11.1309 20.8438 10.7932 21.1914C10.5958 21.3945 10.3701 21.502 10.1405 21.502C9.91471 21.502 9.68703 21.3965 9.50299 21.207C9.32274 21.0215 9.22029 20.793 9.21649 20.5664C9.2127 20.3242 9.31515 20.0859 9.51816 19.8789C9.85779 19.5254 10.8273 19.2129 11.609 19.0352ZM12.0909 18.5391C12.0909 18.5391 9.92229 18.9043 9.24875 19.5996C8.67006 20.1953 8.73457 20.9648 9.23546 21.4805C9.4916 21.7441 9.81225 21.8906 10.1424 21.8906C10.4573 21.8906 10.7799 21.7578 11.0626 21.4668C11.7266 20.7813 12.0909 18.5391 12.0909 18.5391Z"
                            fill="#424242"
                          />
                        </g>
                        <path
                          opacity="0.2"
                          d="M3.90589 18.041C3.72944 18.8477 3.42776 19.8496 3.09004 20.1973C2.89272 20.4004 2.66694 20.5078 2.43736 20.5078C2.21158 20.5078 1.9839 20.4023 1.79986 20.2129C1.61962 20.0273 1.51716 19.7988 1.51337 19.5723C1.50957 19.3301 1.61203 19.0918 1.81504 18.8848C2.15466 18.5313 3.12609 18.2207 3.90589 18.041ZM4.38781 17.5449C4.38781 17.5449 2.21917 17.9102 1.54562 18.6055C0.966937 19.2012 1.03145 19.9707 1.53234 20.4863C1.78848 20.75 2.10912 20.8965 2.43926 20.8965C2.75421 20.8965 3.07676 20.7637 3.35946 20.4727C4.02352 19.7871 4.38781 17.5449 4.38781 17.5449Z"
                          fill="#424242"
                        />
                        <path
                          opacity="0.2"
                          d="M6.8733 21.0937C6.69684 21.9004 6.39517 22.9023 6.05745 23.25C5.86013 23.4531 5.63434 23.5605 5.40477 23.5605C5.17899 23.5605 4.95131 23.4551 4.76727 23.2656C4.58702 23.0801 4.48457 22.8516 4.48077 22.625C4.47698 22.3828 4.57943 22.1445 4.78245 21.9375C5.12017 21.584 6.0916 21.2734 6.8733 21.0937ZM7.35522 20.5996C7.35522 20.5996 5.18658 20.9648 4.51303 21.6602C3.93434 22.2559 3.99885 23.0254 4.49975 23.541C4.75588 23.8047 5.07653 23.9512 5.40667 23.9512C5.72162 23.9512 6.04417 23.8184 6.32687 23.5273C6.99093 22.8418 7.35522 20.5996 7.35522 20.5996Z"
                          fill="#424242"
                        />
                        <path
                          d="M17.597 7.06641C14.3241 3.69727 8.96037 3.75196 5.73492 7.02539L17.6368 19.2754C20.8167 15.957 20.8699 10.4355 17.597 7.06641Z"
                          fill="url(#paint1_radial_125_245)"
                        />
                        <path
                          opacity="0.2"
                          d="M23.2719 1.75781V3.64648C22.234 3.96484 21.3024 4.54688 20.4942 5.37891L19.6537 6.24609C19.4317 6.47461 19.4317 6.8457 19.6537 7.07422C19.7523 7.17578 19.7523 7.33984 19.6537 7.43945L18.5779 8.54687C18.3976 8.73242 18.3597 9.01758 18.483 9.24609C20.0331 12.125 19.7258 15.7676 17.7165 18.3066C17.5704 18.4902 17.5476 18.748 17.6577 18.957C17.7601 19.1504 17.7279 19.3828 17.5799 19.5352C17.4907 19.627 17.3712 19.6777 17.2441 19.6777C17.1169 19.6777 16.9974 19.627 16.9082 19.5352L5.57933 7.87109C5.49016 7.7793 5.44083 7.65625 5.44083 7.52539C5.44083 7.39453 5.49016 7.27148 5.57933 7.17969C5.6685 7.08789 5.78614 7.03711 5.91326 7.03711C5.97208 7.03711 6.029 7.04688 6.08402 7.06836C6.14853 7.09375 6.21683 7.10547 6.28324 7.10547C6.41415 7.10547 6.54127 7.05859 6.64562 6.97266C8.03636 5.79297 9.81605 5.14258 11.6546 5.14258C12.8859 5.14258 14.1097 5.4375 15.1931 5.99609C15.2746 6.03711 15.3619 6.05859 15.4473 6.05859C15.5953 6.05859 15.7414 6 15.8495 5.88672L16.9974 4.70508C17.0619 4.63867 17.1359 4.62891 17.1758 4.62891C17.2156 4.62891 17.2896 4.63867 17.356 4.70703C17.4679 4.82031 17.6121 4.87891 17.7582 4.87891C17.9043 4.87891 18.0485 4.82227 18.1605 4.70703L18.9744 3.87305C20.1735 2.64258 21.6496 1.93359 23.2719 1.71094M23.841 1.01953C21.8413 1.13086 19.9971 1.99414 18.5722 3.45703L17.7582 4.29102L17.7563 4.28906C17.597 4.125 17.3864 4.04102 17.1758 4.04102C16.9652 4.04102 16.7565 4.12305 16.5952 4.28906L15.4492 5.46875V5.4707C14.2596 4.85742 12.9561 4.55469 11.6546 4.55469C9.73446 4.55469 7.82007 5.21484 6.28324 6.51758C6.16371 6.4707 6.03848 6.44922 5.91326 6.44922C5.64763 6.44922 5.38011 6.55273 5.1771 6.76172C4.76917 7.18164 4.76917 7.86328 5.1771 8.2832L16.506 19.9453C16.7109 20.1562 16.9765 20.2598 17.2441 20.2598C17.5116 20.2598 17.7791 20.1543 17.9821 19.9453C18.3179 19.5996 18.373 19.082 18.1567 18.6738C20.3272 15.9297 20.6327 12.0254 18.9801 8.95898L20.0559 7.85156C20.3765 7.52148 20.3765 6.98828 20.0559 6.6582L20.8964 5.79102C21.7236 4.9375 22.714 4.35547 23.8392 4.09766V1.01953H23.841Z"
                          fill="#424242"
                        />
                        <path
                          d="M20.0559 6.6582L17.7563 4.29102C17.4357 3.96094 16.9158 3.96094 16.5952 4.29102L15.4492 5.4707V5.47266C16.2252 5.87305 16.9519 6.40234 17.5989 7.06641C18.1586 7.64258 18.6177 8.28125 18.9839 8.96094L20.0597 7.85352C20.3765 7.52344 20.3765 6.98828 20.0559 6.6582Z"
                          fill="#78909C"
                        />
                        <path
                          opacity="0.2"
                          d="M17.1758 4.62891C17.2137 4.62891 17.2896 4.63867 17.3541 4.70508L19.6537 7.07227C19.7182 7.13867 19.7276 7.21484 19.7276 7.25586C19.7276 7.29688 19.7182 7.37305 19.6537 7.43945L19.0901 8.01953C18.7695 7.52734 18.4052 7.06836 17.9992 6.65039C17.5116 6.14844 16.9708 5.70898 16.3827 5.33789L16.9974 4.70508C17.0619 4.63867 17.1378 4.62891 17.1758 4.62891ZM17.1758 4.04297C16.9651 4.04297 16.7564 4.125 16.5952 4.29102L15.4492 5.4707V5.47266C16.2252 5.87305 16.9519 6.40234 17.5989 7.06641C18.1586 7.64258 18.6177 8.28125 18.9839 8.96094L20.0597 7.85352C20.3803 7.52344 20.3803 6.98828 20.0597 6.6582L17.7563 4.29102C17.5951 4.125 17.3864 4.04297 17.1758 4.04297Z"
                          fill="#424242"
                        />
                        <path
                          d="M16.5572 20L5.12588 8.23242C4.74641 7.8418 4.74641 7.20898 5.12588 6.81641L5.22833 6.71094C5.6078 6.32031 6.22253 6.32031 6.60389 6.71094L18.0353 18.4785C18.4147 18.8691 18.4147 19.502 18.0353 19.8945L17.9328 20C17.5514 20.3906 16.9367 20.3906 16.5572 20Z"
                          fill="#78909C"
                        />
                        <path
                          opacity="0.2"
                          d="M5.91516 7.00391C6.02331 7.00391 6.12387 7.04687 6.19976 7.125L17.6311 18.8926C17.707 18.9707 17.7488 19.0742 17.7488 19.1855C17.7488 19.2969 17.707 19.4004 17.6311 19.4785L17.5287 19.584C17.4528 19.6621 17.3522 19.7051 17.2441 19.7051C17.1359 19.7051 17.0354 19.6621 16.9595 19.584L5.52811 7.81836C5.45222 7.74023 5.41047 7.63672 5.41047 7.52539C5.41047 7.41406 5.45222 7.31055 5.52811 7.23242L5.63056 7.12695C5.70646 7.04688 5.80701 7.00391 5.91516 7.00391ZM5.91516 6.41797C5.66661 6.41797 5.41806 6.51562 5.22833 6.71094L5.12588 6.81641C4.74641 7.20703 4.74641 7.83984 5.12588 8.23242L16.5572 20C16.747 20.1953 16.9955 20.293 17.2441 20.293C17.4926 20.293 17.7412 20.1953 17.9309 20L18.0334 19.8945C18.4128 19.5039 18.4128 18.8691 18.0334 18.4785L6.60199 6.71094C6.41226 6.51562 6.16371 6.41797 5.91516 6.41797Z"
                          fill="#424242"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_125_245"
                            x1="23.1561"
                            y1="1.46541"
                            x2="18.9559"
                            y2="5.89426"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#ECEFF1" />
                            <stop offset="1" stopColor="#B0BEC5" />
                          </linearGradient>
                          <radialGradient
                            id="paint1_radial_125_245"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(5.28336 0.658381) scale(11.6084 11.9498)"
                          >
                            <stop stopColor="#ECEFF1" />
                            <stop offset="0.268" stopColor="#E8ECEE" />
                            <stop offset="0.5195" stopColor="#DDE3E6" />
                            <stop offset="0.7635" stopColor="#CAD3D8" />
                            <stop offset="1" stopColor="#B0BEC5" />
                          </radialGradient>
                        </defs>
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.bathroom.length > 0 ? card.bathroom.length : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.snap.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_125_267)">
                          <path
                            d="M11.3104 18.0723C11.0903 17.4766 10.4167 17.1856 9.80959 17.4238L6.62588 18.6699L8.55736 11.5918C8.62566 11.3438 8.61428 11.0879 8.527 10.8496C8.29363 10.2188 7.58024 9.91017 6.93515 10.1641L1.65111 12.2305C1.35892 12.3438 1.12555 12.5625 0.990838 12.8418C0.852334 13.1309 0.835258 13.4531 0.943405 13.7481C1.16349 14.3457 1.84084 14.6387 2.45178 14.4004L5.53113 13.1953L3.58258 20.2344C3.51238 20.4883 3.52187 20.75 3.61104 20.9922C3.79129 21.4805 4.25613 21.7774 4.75702 21.7774C4.9126 21.7774 5.07198 21.7481 5.22756 21.6875L10.6084 19.582C11.2155 19.3438 11.5305 18.666 11.3104 18.0723Z"
                            fill="url(#paint0_linear_125_267)"
                          />
                          <path
                            d="M17.6835 12.0742C17.5772 11.4316 16.9568 11.0039 16.3022 11.1172L12.8662 11.7187L16.1656 5.00585C16.2814 4.76952 16.3193 4.50975 16.2776 4.25389C16.1656 3.57225 15.5073 3.11913 14.8109 3.24022L9.10759 4.24217C8.79264 4.29686 8.51563 4.46678 8.32589 4.72264C8.13047 4.98631 8.05268 5.30467 8.10391 5.62303C8.21016 6.26952 8.83438 6.6992 9.49275 6.58397L12.8169 6.00194L9.50603 12.6719C9.3865 12.9121 9.34665 13.1777 9.39029 13.4394C9.47757 13.9668 9.88739 14.3594 10.3902 14.4609C10.5458 14.4922 10.7108 14.4961 10.8797 14.4668L16.6874 13.4492C17.342 13.334 17.7897 12.7168 17.6835 12.0742Z"
                            fill="url(#paint1_linear_125_267)"
                          />
                          <path
                            d="M23.6296 14.543C23.5955 14.127 23.2217 13.8184 22.7967 13.8555L20.5693 14.0488L23.0301 9.94531C23.1174 9.80078 23.1553 9.63672 23.142 9.47265C23.106 9.03125 22.7094 8.70508 22.2598 8.74414L18.5657 9.0625C18.3627 9.08008 18.1767 9.17383 18.042 9.32617C17.9035 9.48242 17.8371 9.68359 17.8542 9.88867C17.8883 10.3066 18.264 10.6172 18.6909 10.5801L20.8444 10.3926L18.3779 14.4668C18.2887 14.6133 18.2488 14.7812 18.264 14.9492C18.2925 15.291 18.5334 15.5645 18.8484 15.6582C18.9471 15.6875 19.0514 15.6992 19.1596 15.6895L22.9219 15.3633C23.3469 15.3281 23.6638 14.959 23.6296 14.543Z"
                            fill="url(#paint2_linear_125_267)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_125_267"
                            x1="6.12717"
                            y1="5.52005"
                            x2="6.12717"
                            y2="21.0805"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#4FC3F7" />
                            <stop offset="1" stopColor="#1E88E5" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_125_267"
                            x1="12.8939"
                            y1="5.52003"
                            x2="12.8939"
                            y2="21.0805"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#4FC3F7" />
                            <stop offset="1" stopColor="#1E88E5" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_125_267"
                            x1="20.7416"
                            y1="5.52004"
                            x2="20.7416"
                            y2="21.0805"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#4FC3F7" />
                            <stop offset="1" stopColor="#1E88E5" />
                          </linearGradient>
                          <clipPath id="clip0_125_267">
                            <rect
                              width="24.2857"
                              height="25"
                              fill="white"
                              transform="translate(0.114258)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.snap.length > 0 ? card.snap.length : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.walk.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 26 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_125_271)">
                          <path
                            d="M7.72545 0.830065C7.18946 -0.0390756 5.96094 -0.283216 5.16407 0.371081C2.53153 2.53417 0.857147 5.76171 0.857147 9.37499H13L7.72545 0.830065ZM24.3839 4.68749H22.1071C20.4328 4.68749 19.0714 6.08885 19.0714 7.81249V10.9375H0.857147C0.857147 13.4082 1.94811 15.6445 3.71736 17.3193C2.07618 17.7539 0.857147 19.2724 0.857147 21.0937C0.857147 23.2519 2.55525 25 4.65179 25C6.74833 25 8.44643 23.2519 8.44643 21.0937C8.44643 20.6592 8.36105 20.2539 8.23773 19.8633C9.26228 20.1514 10.3532 20.3125 11.4821 20.3125C12.6111 20.3125 13.7068 20.1514 14.7266 19.8633C14.5985 20.2539 14.5179 20.6592 14.5179 21.0937C14.5179 23.2519 16.216 25 18.3125 25C20.409 25 22.1071 23.2519 22.1071 21.0937C22.1071 19.2724 20.8881 17.7539 19.2469 17.3193C21.0162 15.6445 22.1071 13.4082 22.1071 10.9375V7.81249H24.3839C24.8013 7.81249 25.1429 7.46092 25.1429 7.03124V5.46874C25.1429 5.03905 24.8013 4.68749 24.3839 4.68749ZM4.65179 22.6562C3.81697 22.6562 3.13393 21.9531 3.13393 21.0937C3.13393 20.2344 3.81697 19.5312 4.65179 19.5312C5.48661 19.5312 6.16965 20.2344 6.16965 21.0937C6.16965 21.9531 5.48661 22.6562 4.65179 22.6562ZM19.8304 21.0937C19.8304 21.9531 19.1473 22.6562 18.3125 22.6562C17.4777 22.6562 16.7946 21.9531 16.7946 21.0937C16.7946 20.2344 17.4777 19.5312 18.3125 19.5312C19.1473 19.5312 19.8304 20.2344 19.8304 21.0937Z"
                            fill="#4FC3F7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_125_271">
                            <rect
                              width="24.2857"
                              height="25"
                              fill="white"
                              transform="translate(0.857147)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.walk.length > 0 ? card.walk.length : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.newSkill.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8572 1.04169C13.1229 1.04169 13.3861 1.09557 13.6316 1.20027C13.8772 1.30497 14.1003 1.45843 14.2882 1.65188C14.4761 1.84534 14.6252 2.075 14.7269 2.32776C14.8286 2.58052 14.881 2.85143 14.881 3.12502V23.9584H10.8333V3.12502C10.8333 2.85143 10.8857 2.58052 10.9874 2.32776C11.0891 2.075 11.2382 1.84534 11.4261 1.65188C11.614 1.45843 11.8371 1.30497 12.0827 1.20027C12.3282 1.09557 12.5914 1.04169 12.8572 1.04169Z"
                          fill="#2B2C53"
                        />
                        <path
                          d="M10.8333 3.125H12.8572V23.9583H10.8333V3.125Z"
                          fill="#6B6C87"
                        />
                        <path
                          d="M20.9524 17.7083H4.76191C3.08533 17.7083 1.7262 19.1074 1.7262 20.8333V20.8333C1.7262 22.5592 3.08533 23.9583 4.76191 23.9583H20.9524C22.629 23.9583 23.9881 22.5592 23.9881 20.8333C23.9881 19.1074 22.629 17.7083 20.9524 17.7083Z"
                          fill="#E41A67"
                        />
                        <path
                          d="M17.9167 11.4583H7.79761C6.12104 11.4583 4.7619 12.8574 4.7619 14.5833V14.5833C4.7619 16.3092 6.12104 17.7083 7.79761 17.7083H17.9167C19.5932 17.7083 20.9524 16.3092 20.9524 14.5833C20.9524 12.8574 19.5932 11.4583 17.9167 11.4583Z"
                          fill="#27B9D4"
                        />
                        <path
                          d="M14.881 5.20831H10.8333C9.15677 5.20831 7.79764 6.60742 7.79764 8.33331V8.33332C7.79764 10.0592 9.15677 11.4583 10.8333 11.4583H14.881C16.5576 11.4583 17.9167 10.0592 17.9167 8.33331C17.9167 6.60742 16.5576 5.20831 14.881 5.20831Z"
                          fill="#EBAD1E"
                        />
                        <path
                          d="M19.9405 20.8333C19.9405 20.4229 19.862 20.0166 19.7094 19.6374C19.5568 19.2583 19.3332 18.9138 19.0513 18.6236C18.7695 18.3334 18.4348 18.1032 18.0665 17.9462C17.6982 17.7891 17.3034 17.7083 16.9048 17.7083H4.76191C3.95679 17.7083 3.18464 18.0376 2.61534 18.6236C2.04603 19.2097 1.7262 20.0045 1.7262 20.8333C1.7262 21.6621 2.04603 22.457 2.61534 23.043C3.18464 23.6291 3.95679 23.9583 4.76191 23.9583H16.9048C17.3034 23.9583 17.6982 23.8775 18.0665 23.7204C18.4348 23.5634 18.7695 23.3332 19.0513 23.043C19.3332 22.7528 19.5568 22.4083 19.7094 22.0292C19.862 21.6501 19.9405 21.2437 19.9405 20.8333Z"
                          fill="#F73478"
                        />
                        <path
                          d="M16.9048 14.5833C16.9048 14.1729 16.8262 13.7666 16.6737 13.3874C16.5211 13.0083 16.2975 12.6638 16.0156 12.3736C15.7337 12.0834 15.3991 11.8532 15.0308 11.6962C14.6625 11.5391 14.2677 11.4583 13.869 11.4583H7.79762C6.99249 11.4583 6.22035 11.7876 5.65104 12.3736C5.08174 12.9597 4.7619 13.7545 4.7619 14.5833C4.7619 15.4121 5.08174 16.207 5.65104 16.793C6.22035 17.3791 6.99249 17.7083 7.79762 17.7083H13.869C14.2677 17.7083 14.6625 17.6275 15.0308 17.4704C15.3991 17.3134 15.7337 17.0832 16.0156 16.793C16.2975 16.5028 16.5211 16.1583 16.6737 15.7792C16.8262 15.4001 16.9048 14.9937 16.9048 14.5833Z"
                          fill="#5BCADE"
                        />
                        <path
                          d="M10.8334 11.4583C12.5099 11.4583 13.8691 10.0592 13.8691 8.33331C13.8691 6.60742 12.5099 5.20831 10.8334 5.20831C9.15677 5.20831 7.79764 6.60742 7.79764 8.33331C7.79764 10.0592 9.15677 11.4583 10.8334 11.4583Z"
                          fill="#F9C450"
                        />
                        <path
                          d="M16.9048 18.75H4.7619C4.20304 18.75 3.75 19.2164 3.75 19.7917V19.7917C3.75 20.367 4.20304 20.8333 4.7619 20.8333H16.9048C17.4636 20.8333 17.9167 20.367 17.9167 19.7917C17.9167 19.2164 17.4636 18.75 16.9048 18.75Z"
                          fill="#F9578F"
                        />
                        <path
                          d="M13.8691 12.5H7.79764C7.23878 12.5 6.78574 12.9664 6.78574 13.5417V13.5417C6.78574 14.117 7.23878 14.5833 7.79764 14.5833H13.8691C14.4279 14.5833 14.881 14.117 14.881 13.5417C14.881 12.9664 14.4279 12.5 13.8691 12.5Z"
                          fill="#B4E7F0"
                        />
                        <path
                          d="M11.1692 8.6791C11.8667 7.96117 12.0551 6.99116 11.5902 6.51253C11.1252 6.03391 10.1829 6.22791 9.48552 6.94585C8.78809 7.66379 8.59963 8.63379 9.06458 9.11242C9.52953 9.59104 10.4718 9.39704 11.1692 8.6791Z"
                          fill="#FDE7B8"
                        />
                        <path
                          d="M6.78574 16.6667H14.881V17.7084H6.78574V16.6667Z"
                          fill="#009FC2"
                        />
                        <path
                          d="M4.7619 22.9167H16.9048V23.9584H4.7619V22.9167Z"
                          fill="#C2004F"
                        />
                        <path
                          d="M10.8333 4.16669H12.8572V5.20835H10.8333V4.16669Z"
                          fill="#38395E"
                        />
                        <path
                          d="M12.8571 4.16669H14.881V5.20835H12.8571V4.16669Z"
                          fill="#171843"
                        />
                        <path
                          d="M9.82145 12.5H7.79764C7.23878 12.5 6.78574 12.9664 6.78574 13.5417V13.5417C6.78574 14.117 7.23878 14.5833 7.79764 14.5833H9.82145C10.3803 14.5833 10.8334 14.117 10.8334 13.5417C10.8334 12.9664 10.3803 12.5 9.82145 12.5Z"
                          fill="#E3F6F9"
                        />
                        <path
                          d="M6.78572 18.75H4.7619C4.20304 18.75 3.75 19.2164 3.75 19.7917V19.7917C3.75 20.367 4.20304 20.8333 4.7619 20.8333H6.78572C7.34457 20.8333 7.79762 20.367 7.79762 19.7917C7.79762 19.2164 7.34457 18.75 6.78572 18.75Z"
                          fill="#FED2E1"
                        />
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.newSkill.length > 0 ? card.newSkill.length : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.medication.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 39 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.7621 34.0686C26.1318 37.3455 31.6482 37.3455 35.0208 34.0686C38.3905 30.7916 38.3905 25.4269 35.0208 22.147L25.9126 13.2893L13.6539 25.2109L22.7621 34.0686Z"
                          fill="url(#paint0_radial_366_1660)"
                        />
                        <path
                          d="M25.9126 13.2893L16.8045 4.43162C13.4348 1.15463 7.9184 1.15463 4.54577 4.43162C1.17611 7.70861 1.17611 13.0733 4.54577 16.3532L13.6539 25.2109L25.9126 13.2893Z"
                          fill="url(#paint1_radial_366_1660)"
                        />
                        <path
                          opacity="0.2"
                          d="M10.6751 2.83629C12.7597 2.83629 14.714 3.61955 16.1767 5.04207L34.3931 22.7574C35.8558 24.1799 36.6612 26.0805 36.6612 28.1077C36.6612 30.135 35.8558 32.0355 34.3931 33.458C32.9303 34.8806 30.976 35.6638 28.8914 35.6638C26.8069 35.6638 24.8526 34.8806 23.3898 33.458L5.17351 15.7427C3.71076 14.3202 2.90536 12.4196 2.90536 10.3924C2.90536 8.36514 3.71076 6.4646 5.17351 5.04207C6.63627 3.61955 8.59055 2.83629 10.6751 2.83629ZM10.6751 1.97241C8.45434 1.97241 6.2306 2.7931 4.54577 4.4316C1.17611 7.70859 1.17611 13.0733 4.54577 16.3532L22.7621 34.0685C24.4469 35.707 26.6707 36.5277 28.8914 36.5277C31.1122 36.5277 33.336 35.707 35.0208 34.0685C38.3905 30.7915 38.3905 25.4268 35.0208 22.1469L16.8045 4.4316C15.1196 2.7931 12.8959 1.97241 10.6751 1.97241Z"
                          fill="#424242"
                        />
                        <path
                          opacity="0.2"
                          d="M26.5403 13.9011L14.2813 25.8229L13.6532 25.212L25.9121 13.2903L26.5403 13.9011Z"
                          fill="#424242"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_366_1660"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(20.9675 19.4421) rotate(48.5477) scale(19.9792 13.2634)"
                          >
                            <stop stopColor="#EF5350" />
                            <stop offset="0.6263" stopColor="#D83534" />
                            <stop offset="0.7356" stopColor="#D32F2F" />
                            <stop offset="1" stopColor="#D32F2F" />
                          </radialGradient>
                          <radialGradient
                            id="paint1_radial_366_1660"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(5.76736 5.33225) rotate(44.2012) scale(19.5521 15.3819)"
                          >
                            <stop stopColor="#FFEB3B" />
                            <stop offset="0.349" stopColor="#FEE439" />
                            <stop offset="0.6698" stopColor="#FDD835" />
                            <stop offset="0.9954" stopColor="#FBC02D" />
                          </radialGradient>
                        </defs>
                      </svg>

                      <p className="babyCard__countSelected">
                        {card.medication.length > 0
                          ? card.medication.length
                          : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.symptom.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.8299 15.2033C22.413 15.8037 22.835 16.5495 23.0546 17.3679C23.2742 18.1862 23.2839 19.0492 23.0827 19.8726C22.8816 20.696 22.4765 21.4516 21.907 22.0658C21.3376 22.6799 20.6231 23.1315 19.8335 23.3766C19.0438 23.6216 18.2059 23.6517 17.4016 23.4639C16.5973 23.2761 15.854 22.8769 15.2443 22.3051C14.6346 21.7333 14.1794 21.0086 13.923 20.2017C13.6666 19.3947 13.6178 18.5331 13.7814 17.701C13.8219 17.4936 13.8119 17.2792 13.7524 17.0767C13.6928 16.8743 13.5854 16.6902 13.4399 16.5408L2.29753 5.07052C2.10431 4.87165 1.95104 4.63555 1.84647 4.3757C1.7419 4.11585 1.68808 3.83734 1.68808 3.55607C1.68808 3.27481 1.7419 2.99629 1.84647 2.73644C1.95104 2.47659 2.10431 2.24049 2.29753 2.04162C2.49072 1.84272 2.72007 1.68494 2.9725 1.5773C3.22493 1.46965 3.49548 1.41425 3.76871 1.41425C4.04194 1.41425 4.31249 1.46965 4.56492 1.5773C4.81735 1.68494 5.04671 1.84272 5.23989 2.04162L16.3825 13.5117C16.5276 13.6615 16.7064 13.772 16.9031 13.8334C17.0997 13.8947 17.308 13.905 17.5095 13.8633C18.2811 13.7015 19.0797 13.7393 19.8336 13.9731C20.5876 14.207 21.2735 14.6297 21.8299 15.2033Z"
                          fill="#ECECEC"
                        />
                        <path
                          d="M2.29753 5.07053L13.4399 16.5408C13.5854 16.6902 13.6928 16.8743 13.7524 17.0767C13.8119 17.2792 13.8219 17.4936 13.7814 17.701C13.5779 18.735 13.7032 19.809 14.1389 20.7639C14.5746 21.7189 15.2975 22.504 16.2005 23.0029C17.1035 23.5019 18.1386 23.6883 19.1525 23.5344C20.1664 23.3805 21.1052 22.8945 21.8299 22.1485L2.29753 2.04163C2.10431 2.2405 1.95104 2.4766 1.84647 2.73645C1.7419 2.9963 1.68808 3.27481 1.68808 3.55608C1.68808 3.83735 1.7419 4.11586 1.84647 4.37571C1.95104 4.63556 2.10431 4.87166 2.29753 5.07053Z"
                          fill="#E0D5CE"
                        />
                        <path
                          d="M20.5018 20.7812C20.0621 21.2333 19.4927 21.5277 18.8779 21.6209C18.2631 21.7141 17.6355 21.601 17.0879 21.2985C16.5404 20.996 16.102 20.52 15.8376 19.9411C15.5731 19.3622 15.4968 18.711 15.6198 18.084C15.7223 17.5642 15.698 17.0264 15.549 16.5187C15.4 16.011 15.131 15.5493 14.766 15.175L3.62414 3.70466C3.6048 3.68522 3.58939 3.66201 3.57882 3.63639C3.56825 3.61077 3.56273 3.58325 3.56256 3.55542C3.5624 3.52758 3.56761 3.49999 3.57788 3.47424C3.58816 3.4485 3.60329 3.4251 3.62241 3.40542C3.64153 3.38574 3.66426 3.37016 3.68927 3.35958C3.71428 3.34901 3.74108 3.34365 3.76812 3.34381C3.79516 3.34398 3.8219 3.34967 3.84678 3.36055C3.87167 3.37143 3.89421 3.38729 3.9131 3.4072L15.0565 14.8775C15.4202 15.2534 15.8689 15.5304 16.3623 15.6838C16.8557 15.8372 17.3784 15.8622 17.8835 15.7564C18.4923 15.6306 19.1243 15.7098 19.6861 15.9822C20.2478 16.2546 20.7096 16.7058 21.0031 17.2691C21.2967 17.8324 21.4064 18.478 21.3161 19.1104C21.2258 19.7429 20.9403 20.3287 20.5018 20.7812Z"
                          fill="#F74141"
                        />
                        <path
                          d="M5.57801 2.38947L5.18602 2.79298C5.15078 2.82925 5.12282 2.87231 5.10374 2.9197C5.08466 2.96709 5.07484 3.01788 5.07483 3.06918C5.07482 3.12048 5.08463 3.17128 5.10369 3.21868C5.12275 3.26607 5.1507 3.30914 5.18593 3.34542C5.22116 3.3817 5.26299 3.41048 5.30902 3.43012C5.35506 3.44976 5.4044 3.45988 5.45424 3.45989C5.50407 3.45989 5.55342 3.4498 5.59946 3.43018C5.6455 3.41055 5.68734 3.38179 5.72258 3.34552L6.11457 2.9422L5.57801 2.38947Z"
                          fill="#474444"
                        />
                        <path
                          d="M7.46546 4.33246L7.07348 4.73597C7.03823 4.77225 7.01028 4.81533 6.9912 4.86273C6.97213 4.91013 6.96231 4.96094 6.96231 5.01224C6.96231 5.06355 6.97213 5.11436 6.9912 5.16176C7.01028 5.20916 7.03823 5.25223 7.07348 5.28851C7.14465 5.36178 7.24119 5.40295 7.34185 5.40295C7.39169 5.40295 7.44105 5.39284 7.4871 5.37321C7.53314 5.35357 7.57498 5.32479 7.61023 5.28851L8.00222 4.885L7.46546 4.33246Z"
                          fill="#474444"
                        />
                        <path
                          d="M9.34892 6.27148L8.95712 6.675C8.89035 6.74914 8.8541 6.84705 8.856 6.94813C8.8579 7.04922 8.8978 7.14561 8.96731 7.21704C9.03682 7.28847 9.13052 7.32937 9.22873 7.33115C9.32693 7.33292 9.42197 7.29543 9.49388 7.22656L9.88567 6.82305L9.34892 6.27148Z"
                          fill="#474444"
                        />
                        <path
                          d="M11.2366 8.21448L10.8444 8.61799C10.7733 8.69126 10.7333 8.79063 10.7333 8.89423C10.7333 8.99784 10.7733 9.09719 10.8445 9.17043C10.9157 9.24368 11.0122 9.28482 11.1128 9.2848C11.2135 9.28478 11.31 9.24361 11.3812 9.17034L11.7741 8.76682L11.2366 8.21448Z"
                          fill="#474444"
                        />
                        <path
                          d="M13.1222 10.1562L12.7302 10.5598C12.6939 10.5958 12.665 10.6389 12.6451 10.6866C12.6252 10.7342 12.6148 10.7855 12.6143 10.8373C12.6139 10.8892 12.6235 10.9406 12.6426 10.9887C12.6617 11.0367 12.6898 11.0803 12.7255 11.117C12.7611 11.1536 12.8035 11.1826 12.8501 11.2023C12.8967 11.2219 12.9467 11.2318 12.9971 11.2313C13.0475 11.2309 13.0973 11.2201 13.1436 11.1996C13.1899 11.1792 13.2317 11.1494 13.2667 11.1121L13.6587 10.7086L13.1222 10.1562Z"
                          fill="#474444"
                        />
                        <path
                          d="M15.5285 12.6326L14.9918 12.0801L14.5998 12.4836C14.5286 12.5569 14.4887 12.6563 14.4887 12.7599C14.4887 12.8635 14.5288 12.9629 14.6 13.0361C14.6712 13.1094 14.7677 13.1505 14.8684 13.1505C14.969 13.1504 15.0656 13.1092 15.1367 13.0359L15.5285 12.6326Z"
                          fill="#474444"
                        />
                        <path
                          d="M3.62415 3.70469L14.7667 15.1758C15.1317 15.5501 15.4008 16.0118 15.5498 16.5195C15.6988 17.0272 15.7231 17.565 15.6205 18.0848C15.498 18.7116 15.5747 19.3624 15.8392 19.9409C16.1036 20.5195 16.5419 20.9951 17.0892 21.2974C17.6365 21.5998 18.2638 21.7128 18.8784 21.6199C19.4929 21.5269 20.0621 21.2329 20.5018 20.7812L3.62415 3.40723C3.58588 3.4467 3.56439 3.50019 3.56439 3.55596C3.56439 3.61172 3.58588 3.66521 3.62415 3.70469Z"
                          fill="#EF3030"
                        />
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.symptom.length > 0 ? card.symptom.length : null}
                      </p>
                    </Grid>
                    <Grid
                      sx={{
                        marginY: "auto",
                        paddingX: "7px",
                        display: "flex",
                        paddingY: "4px",
                      }}
                      xs={1}
                    >
                      <svg
                        opacity={card.note.length == 0 ? "20%" : "100%"}
                        className="familyParticipants__iconAction"
                        width="37"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_120_144)">
                          <path
                            d="M5.84748 2.08331C4.74547 2.08331 3.85217 3.02081 3.85217 4.16665V12.5V16.6666V22.9166C3.85217 24.0625 4.74547 25 5.84748 25H19.8146C20.917 25 21.8099 24.0625 21.8099 22.9166V16.6666V12.5V8.33331V4.16665C21.8099 3.02081 20.917 2.08331 19.8146 2.08331H15.824H5.84748Z"
                            fill="#BDC3C7"
                          />
                          <path
                            d="M6.84513 0C6.29412 0 5.84747 0.416667 5.84747 1.04167V4.16667C5.84747 4.6875 6.29412 5.20833 6.84513 5.20833C7.39613 5.20833 7.84278 4.6875 7.84278 4.16667V1.04167C7.84278 0.416667 7.39613 0 6.84513 0ZM10.8357 0C10.2847 0 9.83808 0.416667 9.83808 1.04167V4.16667C9.83808 4.6875 10.2847 5.20833 10.8357 5.20833C11.3864 5.20833 11.8334 4.6875 11.8334 4.16667V1.04167C11.8334 0.416667 11.3864 0 10.8357 0ZM14.8263 0C14.2756 0 13.8287 0.416667 13.8287 1.04167V4.16667C13.8287 4.6875 14.2756 5.20833 14.8263 5.20833C15.3771 5.20833 15.824 4.6875 15.824 4.16667V1.04167C15.824 0.416667 15.3771 0 14.8263 0ZM18.817 0C18.2663 0 17.8193 0.416667 17.8193 1.04167V4.16667C17.8193 4.6875 18.2663 5.20833 18.817 5.20833C19.3677 5.20833 19.8146 4.6875 19.8146 4.16667V1.04167C19.8146 0.416667 19.3677 0 18.817 0Z"
                            fill="#95A5A6"
                          />
                          <path
                            d="M6.84515 15.625H18.817V16.6667H6.84515V15.625Z"
                            fill="#95A5A6"
                          />
                          <path
                            d="M6.84515 12.5H18.817V13.5417H6.84515V12.5Z"
                            fill="#95A5A6"
                          />
                          <path
                            d="M6.84515 9.375H18.817V10.4167H6.84515V9.375Z"
                            fill="#95A5A6"
                          />
                          <path
                            d="M6.84515 18.75H10.8358V19.7917H6.84515V18.75Z"
                            fill="#95A5A6"
                          />
                          <path
                            d="M5.84747 4.16669C5.84747 4.68752 6.29412 5.20835 6.84513 5.20835C7.39613 5.20835 7.84278 4.68752 7.84278 4.16669H5.84747ZM9.83808 4.16669C9.83808 4.68752 10.2847 5.20835 10.8357 5.20835C11.3864 5.20835 11.8334 4.68752 11.8334 4.16669H9.83808ZM13.8287 4.16669C13.8287 4.68752 14.2756 5.20835 14.8263 5.20835C15.3771 5.20835 15.824 4.68752 15.824 4.16669H13.8287ZM17.8193 4.16669C17.8193 4.68752 18.2663 5.20835 18.817 5.20835C19.3677 5.20835 19.8146 4.68752 19.8146 4.16669H17.8193Z"
                            fill="#7F8C8D"
                          />
                          <path
                            d="M3.85217 21.875V22.9167C3.85217 24.0625 4.74547 25 5.84748 25H19.8146C20.917 25 21.8099 24.0625 21.8099 22.9167V21.875C21.8099 23.0208 20.917 23.9583 19.8146 23.9583H5.84748C4.74547 23.9583 3.85217 23.0208 3.85217 21.875Z"
                            fill="#95A5A6"
                          />
                          <path
                            d="M19.9721 7.25641L12.0005 15.5797L11.5067 16.0953L10.8013 16.8319L10.8013 19.7781L13.6231 19.7781L14.3285 19.0416L14.8223 18.526L22.7939 10.2027L19.9721 7.25641Z"
                            fill="#ECF0F1"
                          />
                          <path
                            d="M21.383 8.72955L10.8012 19.7781L13.623 19.7781L14.3285 19.0416L14.8223 18.526L22.7939 10.2027L21.383 8.72955Z"
                            fill="#BDC3C7"
                          />
                          <path
                            d="M19.2667 7.99298L22.0885 10.9393L14.3285 19.0416L11.5067 16.0953L19.2667 7.99298Z"
                            fill="#E67E22"
                          />
                          <path
                            d="M23.4993 6.51984C22.7198 5.70592 21.4535 5.70961 20.6775 6.51984L19.9721 7.25641L22.7939 10.2027L23.4993 9.46613C24.2753 8.6559 24.2789 7.33375 23.4993 6.51984Z"
                            fill="#7F8C8D"
                          />
                          <path
                            d="M10.797 17.7113L10.8012 19.7781L12.7807 19.7825L11.7889 18.7469L10.797 17.7113Z"
                            fill="#34495E"
                          />
                          <path
                            d="M11.7889 18.7469L10.8012 19.7782L12.7807 19.7826L11.7889 18.7469Z"
                            fill="#2C3E50"
                          />
                          <path
                            d="M23.4993 6.51984C22.7198 5.70592 21.4535 5.70961 20.6775 6.51984L19.9721 7.25641L21.383 8.72956L23.4993 6.51984Z"
                            fill="#95A5A6"
                          />
                          <path
                            d="M20.6776 9.46613L22.0885 10.9393L14.3285 19.0416L12.9176 17.5684L20.6776 9.46613Z"
                            fill="#D35400"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_120_144">
                            <rect
                              width="23.9437"
                              height="25"
                              fill="white"
                              transform="translate(0.859192)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="babyCard__countSelected">
                        {card.note.length > 0 ? card.note.length : null}
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </Card>
            </>
          );
        }
      })}
    </>
  );
}

export default BabyCard_Selected;
