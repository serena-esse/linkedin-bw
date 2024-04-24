import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Chat() {
  const state = useSelector((state) => state.utente);
  const [show, setShow] = useState("hidden");
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <></>
      ) : (
        <div className="chat bg-white position-fixed p-2 border  rounded">
          <Row className="align-items-center">
            <Col xs={2}>
              <button type="button" className=" position-relative p-0 border-0 bg-white">
                <img
                  src={state?.image}
                  alt="avatar"
                  width={"37rem"}
                  height={"37rem"}
                  className="rounded-circle object-fit-cover"
                />
                <span className="position-absolute bottom-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1">
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Col>
            <Col xs={6}>
              <h6 className="m-0">Messaggistica</h6>
            </Col>
            <Col xs={2}>
              <img src="/assets/Puntini.svg" alt="img" />
            </Col>
            <Col xs={2}>
              <img
                src={show === "hidden" ? "/assets/svgexport-12.svg" : "/assets/svgexport-18.svg"}
                alt="img"
                onClick={() => (show === "hidden" ? setShow("show") : setShow("hidden"))}
              />
            </Col>
          </Row>
          <div className={`pt-3 ${show}`}>
            <input
              className="form-control me-2"
              style={{ backgroundColor: "#EDF3F8" }}
              type="search"
              placeholder="Cerca"
              aria-label="Search"
            />
            <div className="d-flex  pt-3">
              <h6 className="text-success m-0 pb-2 border-bottom border-success border-3 w-50 text-center">
                In Evidenza
              </h6>
              <h6 className="m-0 w-50 text-center border-bottom">Altro</h6>
            </div>
            {/* da qui partono gli sms */}
            <Container>
              <div className="row mb-1 align-items-center gx-0 w-100">
                <Col xs={3} className="">
                  <button type="button" className=" position-relative p-0 border-0 bg-white d-flex ">
                    <img
                      src={
                        "https://media.licdn.com/dms/image/C4D03AQHE8kvhQtm4xg/profile-displayphoto-shrink_200_200/0/1634341224287?e=1717632000&v=beta&t=895x789v3KsN7uHknhRxjMrrcIJztpcovDryo8HdmGE"
                      }
                      alt="avatar"
                      width={"50rem"}
                      height={"50rem"}
                      className="rounded-circle object-fit-cover"
                    />
                    <span className="position-absolute  translate-middle badge border border-light rounded-circle pallino">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Col>

                <Col xs={9} style={{ marginTop: "10px" }}>
                  <div>
                    <h6 className="m-0 d-flex">
                      Marta Bianchi <span className="text-secondary ms-auto sizeSmall">5 apr</span>
                    </h6>
                  </div>
                  <p className="sizeSmall m-0 border-bottom">
                    Ciao, tutto bene? Hai già trovato lavoro? Stavo cercando il tuo...
                  </p>
                </Col>
              </div>
              <div className="row mb-1 align-items-center gx-0 w-100">
                <Col xs={3} className="">
                  <button type="button" className=" position-relative p-0 border-0 bg-white d-flex ">
                    <img
                      src={
                        "https://media.licdn.com/dms/image/D4E03AQHtwP0vewUzgg/profile-displayphoto-shrink_200_200/0/1685037792855?e=1717632000&v=beta&t=FeyaQ6sgxvxbgxM4DEozzla3TxjYsOLnklHMqeHLfFQ"
                      }
                      alt="avatar"
                      width={"50rem"}
                      height={"50rem"}
                      className="rounded-circle object-fit-cover"
                    />
                    <span className="position-absolute  translate-middle badge border border-light rounded-circle pallino">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Col>

                <Col xs={9} style={{ marginTop: "10px" }}>
                  <div>
                    <h6 className="m-0 d-flex">
                      Emiliano Marchetti <span className="text-secondary ms-auto sizeSmall">3 feb </span>
                    </h6>
                  </div>
                  <p className="sizeSmall m-0 border-bottom">
                    Hi! Of course. Send your Cv to me so I can check with my contact...
                  </p>
                </Col>
              </div>
              <div className="row mb-1 align-items-center gx-0 w-100">
                <Col xs={3} className="">
                  <button type="button" className=" position-relative p-0 border-0 bg-white d-flex ">
                    <img
                      src={
                        "https://media.licdn.com/dms/image/D4D03AQErtWgm7UQJZA/profile-displayphoto-shrink_200_200/0/1711196903220?e=1717632000&v=beta&t=FATg2v3AsLJyMpJLNfG47w5vaiTwrBHQbzpxBAOmm_M"
                      }
                      alt="avatar"
                      width={"50rem"}
                      height={"50rem"}
                      className="rounded-circle object-fit-cover"
                    />
                    <span className="position-absolute  translate-middle badge border border-light rounded-circle pallino">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Col>

                <Col xs={9} style={{ marginTop: "10px" }}>
                  <div>
                    <h6 className="m-0 d-flex">
                      Roberto Salvatore <span className="text-secondary ms-auto sizeSmall">1 feb </span>
                    </h6>
                  </div>
                  <p className="sizeSmall m-0 border-bottom">
                    Good! So see you tomorrow for the interview. Have a nice day!
                  </p>
                </Col>
              </div>
              <div className="row mb-1 align-items-center gx-0 w-100">
                <Col xs={3} className="">
                  <button type="button" className=" position-relative p-0 border-0 bg-white d-flex ">
                    <img
                      src={
                        "https://media.licdn.com/dms/image/D4D03AQGdzBu5EFdqRw/profile-displayphoto-shrink_200_200/0/1691460615365?e=1717632000&v=beta&t=m1eBVy0578agjOqxmCRxm_wmhQB8fTaBNS45ndWjbgU"
                      }
                      alt="avatar"
                      width={"50rem"}
                      height={"50rem"}
                      className="rounded-circle object-fit-cover"
                    />
                    <span className="position-absolute  translate-middle badge border border-light rounded-circle pallino">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Col>

                <Col xs={9} style={{ marginTop: "10px" }}>
                  <div>
                    <h6 className="m-0 d-flex">
                      Roberta Torelli <span className="text-secondary ms-auto sizeSmall">29 jan </span>
                    </h6>
                  </div>
                  <p className="sizeSmall m-0 border-bottom">
                    Certo! Comunque, quello che volevo dire se non ho sbagliato...
                  </p>
                </Col>
              </div>
              <div className="row mb-1 align-items-center gx-0 w-100">
                <Col xs={3} className="">
                  <button type="button" className=" position-relative p-0 border-0 bg-white d-flex ">
                    <img
                      src={
                        "https://media.licdn.com/dms/image/C4E03AQF9Ds4W2Ph6dw/profile-displayphoto-shrink_200_200/0/1619913068024?e=1717632000&v=beta&t=CDhMYqkHwo1Ja0ZDVKkNG5vvEoiCrOi2J89XWtyWjSM"
                      }
                      alt="avatar"
                      width={"50rem"}
                      height={"50rem"}
                      className="rounded-circle object-fit-cover"
                    />
                    <span className="position-absolute  translate-middle badge border border-light rounded-circle pallino">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Col>

                <Col xs={9} style={{ marginTop: "10px" }}>
                  <div>
                    <h6 className="m-0 d-flex">
                      Ilaria Bartolucci <span className="text-secondary ms-auto sizeSmall">20 jan </span>
                    </h6>
                  </div>
                  <p className="sizeSmall m-0 border-bottom">
                    Grazie mille! Ecco le foto del nostro progetto, ci saranno anche i video.
                  </p>
                </Col>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
export default Chat;
