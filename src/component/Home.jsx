import { Col, Container, Row, Modal } from "react-bootstrap";
import MyButton from "./MyButton";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { useState } from "react";
import { getAllPost, postaPost } from "../redux/action";

function Home() {
  const utente = useSelector((state) => state.utente);
  const allpost = useSelector((state) => state.post);
  const token = useSelector((state) => state.apikey[0]);
  const [number,setNumber]=useState(8)
  const [myPost, setMyPost] = useState({
    text: "Questo è un nuovo post", // L'unica proprietà richiesta!
  });

  const [imageExp, setImageExp] = useState(null);

  const [showEsperienze, setShowEsperienze] = useState(false);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageExp(file);
  };

  const postSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post", imageExp);
    if (imageExp) {
      dispatch(postaPost(token, myPost, formData));
    } else {
      dispatch(postaPost(token, myPost));
    }
    alert("Post pubblicato");
    setShowEsperienze(!showEsperienze);
  };

  return (
    <>
      <Container className="py-5">
        <Row className="gx-4 gy-2">
          <Col xs={12} md={3}>
            <div className="bg-white  border rounded overflow-hidden">
              <div className="position-relative">
                <img
                  className="w-100 object-fit-cover"
                  height={"70rem"}
                  src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="copertina"
                ></img>
                <img
                  className="rounded-circle object-fit-cover border border-white border-3 position-absolute position-absolute top-100 start-50 translate-middle "
                  width={"70rem"}
                  height={"70rem"}
                  src={utente.image}
                  alt="avatar"
                ></img>
              </div>
              <div className="border-bottom  text-center">
                <h6 style={{ paddingTop: "4rem" }}>
                  {utente.name} {utente.surname}
                </h6>
                <p className="sizeSmall text-secondary">Digital Marketing Manager presso Automotive</p>
              </div>
              <div className="border-bottom p-3">
                <p className="sizeSmall text-secondary m-0 d-flex ">
                  Visitatori del profilo <span className="text-primary ms-auto">96</span>
                </p>

                <p className="sizeSmall text-secondary mt-1 mb-0 d-flex">
                  Impressioni del post <span className="text-primary ms-auto">258</span>
                </p>
              </div>
              <div className=" border-bottom ps-2">
                <p className="sizeSmall text-secondary ps-1">Accedi a strumenti e informazioni in esclusiva</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="premium-chip-medium"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="24x24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#F8C77E"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#E7A33E"
                  ></path>
                </svg>{" "}
                <span className="sizeSmall"> Prova Premium per 0 euro</span>
              </div>
              <div className="d-flex align-items-center ps-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="bookmark-fill-small"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="16x16"
                  fill="#000000"
                  fillOpacity="0.9"
                  width="16"
                  height="16"
                >
                  <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z" fillOpacity="0.9"></path>
                </svg>
                <p className="py-1 m-0"> I miei elementi</p>
              </div>
            </div>
          </Col>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione centrale */}
          <Col xs={12} md={9} lg={6}>
            <Row className="gy-2">
              <Col xs={12}>
                <div className=" border rounded bg-white">
                  <div className="d-flex p-2 gap-2 flex-wrap">
                    <img
                      src={utente.image}
                      alt="avatar"
                      width={"50rem"}
                      height={"50rem"}
                      className="rounded-circle object-fit-cover"
                    />
                    <button
                      type="button"
                      className=" flex-grow-1 border rounded-pill text-start"
                      onClick={() => setShowEsperienze(!showEsperienze)}
                    >
                      Avvia un post
                    </button>
                  </div>

                  <Modal show={showEsperienze} onHide={() => setShowEsperienze(!showEsperienze)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Crea un post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={postSubmit}>
                        <div className="mb-3">
                          <label htmlFor="avatar" ClassNameName="form-label">
                            Immagine
                          </label>
                          <br></br>
                          <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Titolo" className="form-label">
                            post
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            id="Titolo"
                            onChange={(e) => setMyPost({ ...myPost, text: e.target.value })}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Posta
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>

                  <div className="d-flex mt-2 mb-2 justify-content-around ">
                    <div className="d-flex align-items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="image-medium"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="24x24"
                        fill="#378FE9"
                        fillOpacity="0.9"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"
                          fillOpacity="0.9"
                        ></path>
                      </svg>
                      <h6 className="sizeSmall m-0">Contenuti multimediali</h6>
                    </div>
                    <div className="d-flex pr-5 align-items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="calendar-medium"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="24x24"
                        fill="#A871EA"
                        fillOpacity="0.9"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"
                          fillOpacity="0.9"
                        ></path>
                      </svg>
                      <h6 className="sizeSmall m-0">Evento</h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="content-align-left-medium"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="24x24"
                        fill="#E06847"
                        fillOpacity="0.9"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"
                          fillOpacity="0.9"
                        ></path>
                      </svg>
                      <h6 className="sizeSmall m-0 ">Scrivi un articolo</h6>
                    </div>
                  </div>
                </div>
              </Col>

              {/* inizio post */}
              <Col xs={12}>
                <Row className="">
                  {allpost.length > 0 && (
                    allpost.slice(-number).reverse().map((e, index) => (
                      <Post idPost={e._id} idUtente={e.user._id===utente._id?utente._id:NaN} key={index} username={e.username} text={e.text} createdAt={e.createdAt} image={e.image ? e.image : ""} imgP={e.user.image ? e.user.image : "https://www.shutterstock.com/image-illustration/user-avatar-icon-sign-profile-260nw-1182889762.jpg"}></Post>
                    ))
                  )}
                </Row>
                <Row>
                  <Col>
                  <h6 className="text-center rounded bg-white p-1 cursor" onClick={()=>setNumber(number+8)}>Mostra altro <i className="bi bi-caret-down-fill"></i></h6>
                  </Col>
                </Row>
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
                  src={utente.image}
                  width={"65rem"}
                  height={"65rem"}
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
            <div className="bg-white  border rounded overflow-hidden">
              <img
                width="100%"
                src="https://media.licdn.com/dms/image/D560CAQFkIq7o5lzUng/spinmail-bannerimage-shrink_300_250/0/1645116818974?e=1712919600&amp;v=beta&amp;t=9z98MtYIUb3sZp6lCuAhwN_v0ENRJv3PA5CLuJRsy2E"
                height="250"
                id="ember1013"
                className="img_ad msg-spinmail-ad evi-image ember-view object-fit-contain"
              ></img>
            </div>
              <p className="mb-1 mt-2 text-secondary"> Informazioni&nbsp;&nbsp; Accessibilità </p>
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
export default Home;
