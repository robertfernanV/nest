import Box from "@mui/material/Box";
import Menu from "../../components/Menu/Menu";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import SendIcon from "@mui/icons-material/Send";
import CollectionsIcon from "@mui/icons-material/Collections";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const FamilyChat = () => {
  window.scrollTo(0, 0);

  const previousBtn = () => {
    history.back();
  };
  return (
    <>
      <Box marginTop={"2rem"}>
        <button onClick={previousBtn} className="newFamily__previousBtn">
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.926624 10.9393C0.340837 11.5251 0.340837 12.4749 0.926624 13.0607L10.4726 22.6066C11.0584 23.1924 12.0081 23.1924 12.5939 22.6066C13.1797 22.0208 13.1797 21.0711 12.5939 20.4853L4.1086 12L12.5939 3.51472C13.1797 2.92893 13.1797 1.97919 12.5939 1.3934C12.0081 0.807611 11.0584 0.807611 10.4726 1.3934L0.926624 10.9393ZM23 10.5L1.98728 10.5V13.5L23 13.5V10.5Z"
              fill="#FB9825"
            />
          </svg>
        </button>
        <h1 className="newFamily__title">Chat Familiar</h1>
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        {/* FAMILY #1 */}
        <button
          style={{
            background: "none",
            border: "none",
          }}
        >
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
            }}
            src="https://media.istockphoto.com/id/1447123729/photo/family-mother-and-father-with-child-for-holiday-vacation-and-being-happy-together-outdoor.webp?b=1&s=170667a&w=0&k=20&c=6uC3B6Vmjg30i1GsXkc6H2368vNrsND0JV6eFG9ZRQ0="
            alt=""
          />
        </button>

        {/* FAMILY #2 */}
        <button
          style={{
            background: "none",
            border: "none",
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              border: "1px solid orange",
            }}
            src="https://roymorgan-cms-dev.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2021/10/07055307/Traditional-Family-Life.jpg"
            alt=""
          />
        </button>

        {/* FAMILY #3 */}
        <button
          style={{
            background: "none",
            border: "none",
          }}
        >
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
            }}
            src="https://www.bonobology.com/wp-content/uploads/2020/11/Family-ValuesThat-Help-You-Forever-In-Life.jpg"
            alt=""
          />
        </button>
      </div>

      {/* CONTENT MESSAGES */}
      <div
        style={{
          display: "flex",
          alignItems: "end",
          height: "74vh",
        }}
      >
        {/* MEESAGE #1 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
              marginTop: "5px",
              width: "360px",
            }}
          >
            <img
              style={{
                marginLeft: "1rem",
                marginTop: "auto",
                marginBottom: "auto",
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                border: "1px solid #D9D9D9",
              }}
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt=""
            />
            <div
              style={{
                background: "white",
                border: "1px solid #D9D9D9",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              <p
                style={{
                  fontFamily: "Happy_Monkey",
                  fontSize: "16px",
                  marginTop: "3px",
                  padding: "0px 5px 0rem 5px",
                }}
              >
                simply dummy text of the printing.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <p
                  style={{
                    fontFamily: "Happy_Monkey",
                    textAlign: "end",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "#878787",
                  }}
                >
                  09:15am
                </p>
                <DoneAllIcon
                  style={{
                    marginRight: "3px",
                    marginLeft: "5px",
                    color: "#8EBD60",
                  }}
                />
              </div>
            </div>
          </div>

          {/* MESSAGE #2 */}
          <div
            style={{
              display: "flex",
              marginBottom: "5px",
              marginTop: "5px",
              width: "360px",
            }}
          >
            <div
              style={{
                background: "white",
                border: "1px solid #D9D9D9",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                paddingLeft: "5px",
                paddingRight: "5px",
                marginLeft: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Happy_Monkey",
                  fontSize: "16px",
                  marginTop: "3px",
                  padding: "0px 5px 0rem 5px",
                }}
              >
                simply dummy text of the printing.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <p
                  style={{
                    fontFamily: "Happy_Monkey",
                    textAlign: "end",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "#878787",
                  }}
                >
                  09:15am
                </p>
                <DoneAllIcon
                  style={{
                    marginRight: "3px",
                    marginLeft: "5px",
                    color: "#8EBD60",
                  }}
                />
              </div>
            </div>
            <img
              style={{
                marginRight: "1rem",
                marginTop: "auto",
                marginBottom: "auto",
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                border: "1px solid #D9D9D9",
              }}
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt=""
            />
          </div>

          {/* MESSAGE #3 */}
          <div
            style={{
              display: "flex",
              marginBottom: "5px",
              marginTop: "5px",
              width: "360px",
            }}
          >
            <div
              style={{
                background: "white",
                border: "1px solid #D9D9D9",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                paddingLeft: "5px",
                paddingRight: "5px",
                marginLeft: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Happy_Monkey",
                  fontSize: "16px",
                  marginTop: "3px",
                  padding: "0px 5px 0rem 5px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <p
                  style={{
                    fontFamily: "Happy_Monkey",
                    textAlign: "end",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "#878787",
                  }}
                >
                  12:15am
                </p>
                <DoneAllIcon
                  style={{
                    marginRight: "3px",
                    marginLeft: "5px",
                    color: "#8EBD60",
                  }}
                />
              </div>
            </div>
            <img
              style={{
                marginRight: "1rem",
                marginTop: "auto",
                marginBottom: "auto",
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                border: "1px solid #D9D9D9",
              }}
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        style={{
          background: "white",
          position: "fixed",
          width: "100%",
          // bottom: "3.5rem",
          display: "flex",
          marginRight: "1rem",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
          }}
        >
          <CollectionsIcon
            style={{
              color: "orange",
            }}
          />
        </button>
        <button
          style={{
            background: "none",
            border: "none",
          }}
        >
          <CameraAltIcon
            style={{
              color: "orange",
            }}
          />
        </button>
        <input
          placeholder="mensaje"
          style={{
            width: "100%",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            border: "1px solid #8A8A8A",
            borderRight: "none",
            fontFamily: "Happy_Monkey",
          }}
          type="text"
        />
        <button
          style={{
            border: "1px solid #8A8A8A",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            borderLeft: "none",
            background: "transparent",
          }}
        >
          <SendIcon
            style={{
              color: "orange",
            }}
          />
        </button>
      </div>
    </>
  );
};

export default FamilyChat;
