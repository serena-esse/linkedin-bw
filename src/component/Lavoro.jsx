import "../../src/App.css";
import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./MyButton";

function Lavoro() {
  return (
    <>
      <Container className="py-5">
        <Row className="gx-4 gy-2">
          <Col xs={12} md={3}>
            <div className="bg-white ps-3 pb-3 border rounded">
              <nav style={{ overflow: "visible", maxWidth: "1140px" }}>
                <div style={{ marginBottom: "1.2rem !important" }}>
                  <ul
                    className="d-flex flex-column ps-0 mb-0 mt-2"
                    style={{
                      paddingBottom: "2.4rem !important",
                      paddingLeft: "1.6rem !important",
                      paddingTop: ".4rem !important",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "#000000e6",
                    }}
                  >
                    <li className="d-flex mt-3" style={{ wordBreak: "break-word", marginTop: "2.4rem !important" }}>
                      <div>
                        <img src="/assets/flag_my_jobs-1.svg" alt="" />
                      </div>
                      <span className="t-black t-bold t-14 ms-2">Le mie offerte di lavoro</span>
                    </li>

                    <li className="d-flex mt-4">
                      <div>
                        <img src="/assets/list_favoriti.svg" alt="" />
                      </div>
                      <span className="t-black t-bold t-14 ms-2">Preferenze</span>
                    </li>
                    <li className="d-flex mt-4">
                      <div>
                        <img src="/assets/clipboard.svg" alt="" />
                      </div>
                      <span className="t-black t-bold t-14 ms-2">Valutazioni delle competenze</span>
                    </li>
                    <li className="d-flex mt-4 mb-2">
                      <div>
                        <img src="/assets/youtube_icon.svg" alt="" />
                      </div>
                      <span className="t-black t-bold t-14 ms-2">Indicazioni per chi cerca lavoro</span>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* ////////Button POST A VACANCY FOR FREE/////////// */}
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-primary mt-3 class_teste_btn"
                style={{ width: "100%", height: "3rem", borderRadius: "30px", fontWeight: "600" }}
              >
                <img
                  src="/assets/pencil_paper.svg"
                  alt="pencial"
                  style={{ color: "#0a66c2" }}
                  className="me-2 classe_teste_img_btn"
                />
                Pubblica offerta gratuita
              </button>
            </div>
          </Col>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////sezione centrale */}
          <Col xs={12} md={9} lg={6}>
            <Row className="gy-2">
              <Col xs={12}>
                <div className="d-flex justify-content-between p-2 gap-2 flex-wrap border rounded bg-white">
                  <div>
                    <div className="d-flex flex-column align-items-center pt-2 ps-2">
                      <div className="ex-1">
                        <h5 className="t-black pt-1 t-bold">Le principali offerte di lavoro per te</h5>
                      </div>
                    </div>
                    <div className="d-flex ps-2 ">
                      <p className="t-bold mb-0" style={{ fontSize: "0.8rem" }}>
                        front - <strong style={{ color: "green" }}>99 new</strong>
                      </p>
                    </div>
                    <div className="d-flex ps-2 ">
                      <p className="mb-1" style={{ fontSize: "0.8rem", color: "gray" }}>
                        Italy
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <div>
                        <p
                          className="t-bold pt-3 pe-2"
                          style={{ fontSize: ".8rem", color: "darkgray", cursor: "pointer", fontWeight: "bold" }}
                        >
                          To clean
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////Sezione Jobs */}
              <Col xs={12}>
                <div className="rounded bg-white border p-3">
                  <Row className="gy-2">
                    {/* ///First job/// */}
                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                      <div className="d-flex align-self-start">
                        <img
                          className="object-fit-cover"
                          width={"55rem"}
                          height={"55rem"}
                          alt="img"
                          src="https://media.licdn.com/dms/image/C4D0BAQGaGGkwqquKUQ/company-logo_100_100/0/1633262054219/red_commerce_logo?e=1720656000&v=beta&t=20qPrkb-GTkqWZVJeUC818FaIaOwDop9kEo1qxLZDBI"
                        ></img>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", fontFamily: "" }}>
                            Business Analyst
                          </a>
                          <img
                            src="/assets/verified_icon.svg"
                            alt="verified_icon"
                            className="ps-1"
                            style={{ opacity: "0.7" }}
                          />
                        </div>
                        <div className="d-flex">
                          <p style={{ width: "70%" }} className="m-0  sizeSmall">
                            RED Global
                          </p>
                        </div>
                        <div className="d-flex">
                          <p style={{ width: "100%" }} className="m-0 text-secondary sizeSmall">
                            European Union (Remote)
                          </p>
                        </div>
                        <div className="d-flex align-self-end mt-2">
                          <div className="d-flex">
                            <div className="d-flex align-self-end">
                              <p className="mb-0" style={{ fontWeight: "bold", fontSize: "0.7rem", color: "green" }}>
                                21 hours ago
                              </p>
                            </div>
                            <img
                              src="/assets/logo.svg"
                              alt="logo"
                              className="ms-2"
                              style={{ width: "16px", height: "16" }}
                            />
                            <div className="d-flex align-self-end ms-1">
                              <p className="mb-0" style={{ fontSize: "0.7rem", color: "gray" }}>
                                Simplified application
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-self-start ms-auto">
                        <img src="/assets/x_icon.svg" alt="chiude" style={{ cursor: "pointer" }} />
                      </div>
                    </Col>
                    <hr />
                    {/* ///second job/// */}
                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                      <div className="d-flex align-self-start">
                        <img
                          className="object-fit-cover"
                          width={"55rem"}
                          height={"55rem"}
                          alt="img"
                          src="https://media.licdn.com/dms/image/C4D0BAQGPdWcwKr6fNw/company-logo_100_100/0/1631182005911/lottomatica_logo?e=1720656000&v=beta&t=ceSWszCZGiQ6DGXgXCIBgTyhpQ52cPx5rqa76U9UTnY"
                        ></img>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", fontFamily: "" }}>
                            .NET Full Stack
                          </a>
                          <img
                            src="/assets/verified_icon.svg"
                            alt="verified_icon"
                            className="ps-1"
                            style={{ opacity: "0.7" }}
                          />
                        </div>
                        <div className="d-flex">
                          <p style={{ width: "70%" }} className="m-0  sizeSmall">
                            Lottomatica
                          </p>
                        </div>
                        <div className="d-flex">
                          <p style={{ width: "100%" }} className="m-0 text-secondary sizeSmall">
                            Rome Region (Hybrid)
                          </p>
                        </div>
                        <div className="d-flex align-self-end mt-2">
                          <div className="d-flex">
                            <div className="d-flex align-self-end">
                              <p className="mb-0" style={{ fontWeight: "bold", fontSize: "0.7rem", color: "green" }}>
                                11 hours ago
                              </p>
                            </div>
                            <img
                              src="/assets/logo.svg"
                              alt="logo"
                              className="ms-2"
                              style={{ width: "16px", height: "16" }}
                            />
                            <div className="d-flex align-self-end ms-1">
                              <p className="mb-0" style={{ fontSize: "0.7rem", color: "gray" }}>
                                Simplified application
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-self-start ms-auto">
                        <img src="/assets/x_icon.svg" alt="chiude" style={{ cursor: "pointer" }} />
                      </div>
                    </Col>
                    <hr />
                    {/* ///third job/// */}
                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                      <div className="d-flex align-self-start">
                        <img
                          className="object-fit-cover"
                          width={"55rem"}
                          height={"55rem"}
                          alt="img"
                          src="https://media.licdn.com/dms/image/C4D0BAQHFq5kay6r25A/company-logo_100_100/0/1630578226727/investechspa_logo?e=1720656000&v=beta&t=hqntRyathDaNcSOgUUbEz3aG7Cjq8mucvhjxtg-3p2s"
                        ></img>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", fontFamily: "" }}>
                            Data Analyst
                          </a>
                          <img
                            src="/assets/verified_icon.svg"
                            alt="verified_icon"
                            className="ps-1"
                            style={{ opacity: "0.7" }}
                          />
                        </div>
                        <div className="d-flex">
                          <p style={{ width: "70%" }} className="m-0  sizeSmall">
                            Investech spa
                          </p>
                        </div>

                        <div className="d-flex">
                          <p style={{ width: "100%" }} className="m-0 text-secondary sizeSmall">
                            Italy (Remote)
                          </p>
                        </div>
                        <div className="d-flex">
                          <img
                            src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1720656000&v=beta&t=5nE2Lyh9eRNMYEownUmxRZwX2G_bQW8Wq_dGcceAfkc"
                            alt=""
                            style={{ width: "24px", height: "24px" }}
                          />
                          <div className="d-flex align-self-end">
                            <p className="mb-0" style={{ fontSize: "0.7rem", color: "gray" }}>
                              1 former student works here
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-self-end mt-2">
                          <div className="d-flex">
                            <div className="d-flex align-self-end">
                              <p className="mb-0" style={{ fontWeight: "bold", fontSize: "12px", color: "green" }}>
                                21 hours ago
                              </p>
                            </div>
                            <img
                              src="/assets/logo.svg"
                              alt="logo"
                              className="ms-2"
                              style={{ width: "16px", height: "16" }}
                            />
                            <div className="d-flex align-self-end ms-1">
                              <p className="mb-0" style={{ fontSize: "0.7rem", color: "gray" }}>
                                Simplified application
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-self-start ms-auto">
                        <img src="/assets/x_icon.svg" alt="chiude" style={{ cursor: "pointer" }} />
                      </div>
                    </Col>
                    <hr />
                    {/* ///fourth job/// */}
                    <Col xs={12} className="d-flex align-items-center gap-3 hov py-2">
                      <div className="d-flex align-self-start">
                        <img
                          className="object-fit-cover"
                          width={"55rem"}
                          height={"55rem"}
                          alt="img"
                          src="https://media.licdn.com/dms/image/C4D0BAQFgBuQM6ejJMg/company-logo_100_100/0/1673349729217/s3k_security_of_the_third_millennium_logo?e=1720656000&v=beta&t=Ikfe1SfAQrUqpBnKslDnmHjm5a9stqOFrM9XiylDjTU"
                        ></img>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", fontFamily: "" }}>
                            Control Room Systemist
                          </a>
                          <img
                            src="/assets/verified_icon.svg"
                            alt="verified_icon"
                            className="ps-1"
                            style={{ opacity: "0.7" }}
                          />
                        </div>
                        <div className="d-flex">
                          <p style={{ width: "80%" }} className="m-0  sizeSmall">
                            S3K | Security of the Third Millennium
                          </p>
                        </div>

                        <div className="d-flex">
                          <p style={{ width: "100%" }} className="m-0 text-secondary sizeSmall">
                            Rome, Lazio,Italy (In-person)
                          </p>
                        </div>
                        <div className="d-flex">
                          <img
                            src="https://media.licdn.com/dms/image/C4E03AQFNCXeGu771rw/profile-displayphoto-shrink_100_100/0/1640939498071?e=1717632000&v=beta&t=yuiYHGhOUnR-ZJeCNa4EeiGekkXxixM_REERfBqkYHM"
                            alt=""
                            style={{ width: "24px", height: "24px", borderRadius: "50%" }}
                            className="me-2"
                          />
                          <div className="d-flex align-self-end">
                            <p className="mb-0" style={{ fontSize: "0.7rem", color: "gray" }}>
                              1 connection works here
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-self-end mt-2">
                          <div className="d-flex">
                            <div className="d-flex align-self-end">
                              <p className="mb-0" style={{ fontSize: "12px", color: "gray" }}>
                                Promotted -
                              </p>
                              <p className="mb-0" style={{ fontWeight: "bold", fontSize: "12px", color: "green" }}>
                                8 applications
                              </p>
                            </div>
                            <img
                              src="/assets/logo.svg"
                              alt="logo"
                              className="ms-2"
                              style={{ width: "16px", height: "16" }}
                            />
                            <div className="d-flex align-self-end ms-1">
                              <p className="mb-0" style={{ fontSize: "0.7rem", color: "gray" }}>
                                Simplified application
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-self-start ms-auto">
                        <img src="/assets/x_icon.svg" alt="chiude" style={{ cursor: "pointer" }} />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione secondaria a destra */}
          <Col xs={12} md={9} lg={3} className="ms-auto">
            <div className="bg-white p-3 border rounded">
              <div className="row">
                <span className="sizeSmall fw-semibold text-end">Annuncio ...</span>
                <p className="text-center sizeSmall ">utente, investi sul tuo futuro con questa offerta esclusiva </p>
              </div>
              <div className="d-flex justify-content-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
                  width={"65rem"}
                  className="rounded-circle object-fit-cover"
                  alt="..."
                />
                <img src="assets/logo.svg" width={"65rem"} alt="logo" />
              </div>
              <div className="text-center">
                <p className="text-center mt-3">50% di sconto su 2 mesi di Linkedln Premium!</p>
                <MyButton text={"50% di sconto"} colore={"outline-primary"}></MyButton>
              </div>
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
export default Lavoro;
