import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./MyButton";
import { ReactComponent as Matita } from "../svg/matita.svg";
function Notifiche() {
  return (
    <>
      <Container className="py-5">
        <Row className="gx-4 gy-2">
          <Col xs={12} md={3}>
            <div className="bg-white p-3 border rounded">
              <h6>Gestisci le tue notifiche</h6>
              <a href="#/" className="fw-semibold m-0 text-decoration-none">
                Impostazioni
              </a>
            </div>
          </Col>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione centrale */}
          <Col xs={12} md={9} lg={6}>
            <Row className="gy-2">
              <Col xs={12}>
                <div className="d-flex p-2 gap-2 flex-wrap border rounded bg-white">
                  <MyButton text={"Tutto"} colore={"success"}></MyButton>
                  <MyButton text={"I miei post"} colore={"outline-secondary"}></MyButton>
                  <MyButton text={"Menzioni"} colore={"outline-secondary"}></MyButton>
                </div>
              </Col>
              <Col xs={12}>
                <div className="rounded bg-white border p-3">
                  <Row className="gy-2">
                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                      <img
                        className="object-fit-cover"
                        width={"55rem"}
                        height={"55rem"}
                        alt="img"
                        src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&aut
                                        o=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww"
                      ></img>
                      <p style={{ width: "70%" }} className="m-0 text-secondary sizeSmall">
                        107 persone parteciperanno a un evento creato da Amazon Italia quest settimana. Vedi l'evento.
                      </p>
                      <div className="ms-auto">
                        <p className="sizeSmall text-secondary m-0 ">25 minuti</p>
                        <p className="m-0 fs-4 text-end">...</p>
                      </div>
                    </Col>
                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                      <img
                        className="object-fit-cover rounded-circle"
                        width={"55rem"}
                        height={"55rem"}
                        alt="img"
                        src="https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"
                      ></img>
                      <p style={{ width: "70%" }} className="m-0 text-secondary sizeSmall">
                        <strong>Denise Dimaio </strong>ha diffuso un aggiornamento sul recruting.
                      </p>
                      <div className="ms-auto">
                        <p className="sizeSmall text-secondary m-0 ">2 ore</p>
                        <p className="m-0 fs-4 text-end">...</p>
                      </div>
                    </Col>
                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                      <img
                        className="object-fit-cover rounded-circle"
                        width={"55rem"}
                        height={"55rem"}
                        alt="img"
                        src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
                      ></img>
                      <p style={{ width: "70%" }} className="m-0 text-secondary sizeSmall">
                        <strong>Alessio Biodi </strong>ha commentato il profilo di stefania Sperando:Arredare la
                        solitudine una metafora...
                      </p>
                      <div className="ms-auto">
                        <p className="sizeSmall text-secondary m-0 ">12 ore</p>
                        <p className="m-0 fs-4 text-end">...</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione secondaria a destra */}
          <Col xs={12} md={3} lg={3} className="ms-auto">
            <div className="bg-white  border rounded overflow-hidden">
              <img
                width="100%"
                src="https://media.licdn.com/dms/image/D560CAQFkIq7o5lzUng/spinmail-bannerimage-shrink_300_250/0/1645116818974?e=1712919600&amp;v=beta&amp;t=9z98MtYIUb3sZp6lCuAhwN_v0ENRJv3PA5CLuJRsy2E"
                height="250"
                id="ember1013"
                className="img_ad msg-spinmail-ad evi-image ember-view object-fit-contain"
              ></img>
            </div>
            <div className="text-center" style={{ fontSize: "12px", paddingTop: "2rem" }}>
              <p className="mb-1 text-secondary"> Informazioni&nbsp;&nbsp; Accessibilità </p>
              <p className="mb-1 text-secondary">
                {" "}
                Centro assistenza&nbsp;&nbsp; Privacy e condizioni
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="caret-small"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="16x16"
                  fill="#000000"
                  fillOpacity="0.9"
                  width="16"
                  height="16"
                >
                  <path d="M8 11L3 6h10z" fillRule="evenodd" fillOpacity="0.9"></path>
                </svg>{" "}
              </p>
              <p className="mb-1 text-secondary">Opzioni per gli annunci pubblicitari </p>
              <p className="mb-1 text-secondary">
                Pubblicità&nbsp;&nbsp; Servizi alle aziende{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="caret-small"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="16x16"
                  fill="#000000"
                  fillOpacity="0.9"
                  width="16"
                  height="16"
                >
                  <path d="M8 11L3 6h10z" fillRule="evenodd" fillOpacity="0.9"></path>
                </svg>
              </p>
              <p className="text-secondary"> Scarica l’app &nbsp;&nbsp;LinkedIn Altro</p>
              <div>
                <img src="../assets/linkedin.svg" alt="linkedin-logo" width={"56px"} />
                LinkedIn Corporation © 2024
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Notifiche;
