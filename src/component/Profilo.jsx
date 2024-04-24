import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./MyButton";
import { ReactComponent as Matita } from "../svg/matita.svg";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { getAllesperienze, postEsperienza, putFetch, putImg, putImgEsperienza } from "../redux/action";
import Esperienza from "./Esperienza";

function Profilo() {
  const utente = useSelector((state) => state.utente);
  const token = useSelector((state) => state.apikey[0]);
  const reduxEsperienze = useSelector((state) => state.esperienze);
  const [account, setAccount] = useState(utente);
  // const [allEsperienze, setAllEsperienze] = useState(reduxEsperienze);
  const [show, setShow] = useState(false);
  const [showEsperienze, setShowEsperienze] = useState(false);
  const [imageExp, setImageExp] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [esperienza, setEsperienza] = useState({
    role: "Full Stack Web Developer",
    company: "FizzBuzz",
    startDate: "2022-06-16",
    endDate: "2023-06-16", // può essere null
    description: "Implementing new features",
    area: "Milan",
  });
  // useEffect(()=>{
  //     setAllEsperienze(reduxEsperienze)
  // },[reduxEsperienze])

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const math = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    setImageExp(file);
  };
  const esperienzaSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("experience", imageExp);
    dispatch(postEsperienza(token, account._id, esperienza, formData));
    alert("Esperienza Aggiunta Correttamente");
    setShowEsperienze(!showEsperienze);
  };

  useEffect(() => {
    if (utente._id) {
      setAccount(utente);
      dispatch(getAllesperienze(token, utente._id));
    }
  }, [utente, token, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", avatar);
    handleClose();
    dispatch(putFetch(token, account));
    dispatch(putImg(token, account._id, formData));
    alert("Profilo modificato correttamente");
  };
  return (
    <>
      <Container className="py-5">
        <Row className="gx-3 gy-3">
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione principale a sinistra */}
          <Col xs={12} md={9} className="">
            <Row className="gy-2 myrow">
              <Col xs={12} className="border rounded p-0 overflow-hidden bg-white pb-4 ">
                <div className="position-relative">
                  <img
                    className="w-100 object-fit-cover"
                    height={"300rem"}
                    src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="copertina"
                  ></img>
                  <img
                    className="rounded-circle object-fit-cover border border-white border-3 position-absolute position-absolute top-100 startP translate-middle "
                    width={"150rem"}
                    height={"150rem"}
                    src={utente !== undefined ? utente.image : <Spinner animation="border" variant="primary" />}
                    alt="avatar"
                  ></img>
                  <div className="position-absolute top-0 end-0 m-3">
                    <button className="border-0 rounded-circle p-2 text-primary" width="155rem" height="155rem">
                      <Matita></Matita>
                    </button>
                  </div>
                </div>
                <div className="position-relative">
                  {/* bottone per aggiornare il profilo personale */}
                  <img
                    onClick={handleShow}
                    src="/assets/matita.svg"
                    className="position-absolute top-0 end-0 p-3"
                    alt="matita"
                  />
                </div>
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modifica Profilo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="avatar" className="form-label">
                            Foto profilo
                          </label>
                          <br></br>
                          <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Name" className="form-label">
                            Nome
                          </label>
                          <input
                            value={account?.name}
                            onChange={(e) => setAccount({ ...account, name: e.target.value })}
                            type="text"
                            className="form-control"
                            id="Name"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Surname" className="form-label">
                            Cognome
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Surname"
                            value={account?.surname}
                            onChange={(e) => setAccount({ ...account, surname: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Bio" className="form-label">
                            Bio
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Bio"
                            value={account?.bio}
                            onChange={(e) => setAccount({ ...account, bio: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="area" className="form-label">
                            area
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="area"
                            value={account?.area}
                            onChange={(e) => setAccount({ ...account, area: e.target.value })}
                          />
                        </div>
                        <div className="d-flex">
                          <button type="submit" className="btn btn-success ms-auto">
                            Salva
                          </button>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
                </>
                <div className="mt-5 pt-5 px-4">
                  <div className="d-flex align-items-center">
                    <h4 className="mb-0">
                      {utente !== undefined ? (
                        utente.name + " " + utente.surname
                      ) : (
                        <Spinner animation="border" variant="primary" />
                      )}
                    </h4>
                    <button
                      className="btn btn-link pt-0 pb-0 ms-3 me-5"
                      style={{
                        borderStyle: "dashed",
                        borderColor: "blue",
                        borderRadius: "20px",
                        textDecoration: "none",
                        height: "1.5rem",
                      }}
                    >
                      <div className="d-flex">
                        <img src="/assets/profile_verified.svg" alt="icon_verified" />
                        <p className="mb-0 ps-1" style={{ fontSize: "0.8rem", color: "#2470c6" }}>
                          Check now
                        </p>
                      </div>
                    </button>
                    <div className="d-flex ms-5">
                      <div className="d-flex ms-5">
                        <img
                          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1720656000&v=beta&t=5nE2Lyh9eRNMYEownUmxRZwX2G_bQW8Wq_dGcceAfkc"
                          alt=""
                          style={{ width: "32px", height: "32px" }}
                        />
                        <p className="d-flex align-self-center mb-0 ms-1" style={{ fontSize: "0.8rem" }}>
                          EPICODE
                        </p>
                      </div>
                    </div>
                  </div>

                  <h6 className="m-0">
                    {utente !== undefined ? utente.bio : <Spinner animation="border" variant="primary" />}
                  </h6>
                  <h6 className="my-2 text-secondary sizeSmall">
                    {utente !== undefined ? utente.area : <Spinner animation="border" variant="primary" />}{" "}
                    <a href="#ì" className="text-decoration-none">
                      Informazioni di contatto
                    </a>
                  </h6>
                  <p className="sizeSmall">
                    {" "}
                    <a href="#ì" className="text-decoration-none">
                      213 collegamenti
                    </a>
                  </p>
                </div>

                <div className="d-flex gap-2 px-4 flex-wrap">
                  <MyButton text={"Disponibile per"} colore={"primary"} funzione={() => console.log(utente)}></MyButton>
                  <MyButton text={"Aggiungi sezione del profilo"} colore={"outline-primary"}></MyButton>
                  <MyButton text={"Altro"} colore={"outline-secondary"}></MyButton>
                </div>
                {/* 888888888 */}
              </Col>
              {/* ********************************************************************************************************** */}
              <Col xs={12} className="border rounded p-0 overflow-hidden bg-white">
                <div className="px-4 py-4">
                  <h5>Analisi</h5>
                  <Row>
                    <Col xs={12} md={4} className="d-flex align-items-start gap-2">
                      <img alt="img" src="/assets/people.svg"></img>
                      <div>
                        <h6>{math()} visualizzazioni del profilo</h6>
                        <p className="m-0 text-secondary sizeSmall">Scopri chi ha visitato il tuo profilo.</p>
                      </div>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-start gap-2">
                      <img alt="img" src="/assets/freccia.svg"></img>
                      <div>
                        <h6>{math()} impressioni del post</h6>
                        <p className="m-0 text-secondary sizeSmall">Scopri chi sta interagendo con i tuoi post.</p>
                      </div>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-start gap-2 pb-4">
                      <img alt="img" src="/assets/cerca.svg"></img>
                      <div>
                        <h6>{math()} comparse nei motori di ricerca</h6>
                        <p className="m-0 text-secondary sizeSmall">
                          Vedi quante volte compari nei risultati di ricerca
                        </p>
                      </div>
                    </Col>
                    <hr></hr>
                    <Col xs={12} className="text-center">
                      <h6>
                        Mostra tutte le analisi{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </h6>
                    </Col>
                  </Row>
                </div>
              </Col>
              {/* *************************************************** esperienza******************************************************* */}

              <Col xs={12} className="border rounded p-0 overflow-hidden bg-white position-relative">
                <div className="d-flex gap-4 position-absolute end-0 m-3">
                  <img
                    src="/assets/+.svg"
                    width={"25rem"}
                    alt="img"
                    onClick={() => setShowEsperienze(!showEsperienze)}
                  />
                </div>
                <div className="px-4 py-4">
                  <h5>Esperienza</h5>
                  <Modal show={showEsperienze} onHide={() => setShowEsperienze(!showEsperienze)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Inserisci Esperienza</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={esperienzaSubmit}>
                        <div className="mb-3">
                          <label htmlFor="avatar" className="form-label">
                            Immagine
                          </label>
                          <br></br>
                          <input required type="file" id="avatar" accept="image/*" onChange={handleImageChange2} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Titolo" className="form-label">
                            Titolo
                          </label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="Titolo"
                            onChange={(e) => setEsperienza({ ...esperienza, role: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Inizio" className="form-label">
                            Inizio Data
                          </label>
                          <input
                            required
                            type="date"
                            className="form-control"
                            id="Inizio"
                            onChange={(e) => setEsperienza({ ...esperienza, startDate: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Fine" className="form-label">
                            Fine Data
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="Fine"
                            onChange={(e) => setEsperienza({ ...esperienza, endDate: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Luogo" className="form-label">
                            Luogo
                          </label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="Luogo"
                            onChange={(e) => setEsperienza({ ...esperienza, area: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="Competenze" className="form-label">
                            Competenze
                          </label>
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="Competenze"
                            onChange={(e) => setEsperienza({ ...esperienza, description: e.target.value })}
                          />
                        </div>
                        <div className="d-flex">
                          <button type="submit" className="btn btn-success ms-auto">
                            Salva
                          </button>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
                  <Row className="">
                    {/* genera esperienze */}
                    {reduxEsperienze.length > 0 &&
                      reduxEsperienze.map((e, index) => (
                        <Esperienza
                          oggetto={e}
                          idUtente={utente._id}
                          token={token}
                          id={e._id}
                          key={e._id}
                          img={e.image}
                          title={e.role}
                          dataS={e.startDate}
                          dataE={e.endDate}
                          luogo={e.area}
                          competenze={e.description}
                        ></Esperienza>
                      ))}
                  </Row>
                </div>
              </Col>
              {/* licenze/////////////////////////////////////////////////////////////////////// */}
              <Col xs={12} className="border rounded p-0 overflow-hidden bg-white  position-relative">
                <div className="d-flex gap-4 position-absolute end-0 m-3">
                  <img src="/assets/+.svg" width={"25rem"} alt="img" />
                  <img src="/assets/matita.svg" alt="img" />
                </div>
                <div className="px-4 py-4">
                  <h5>Licenze e certificazioni</h5>
                  <Row className="">
                    <Col xs={12} className="d-flex align-items-start gap-3 pt-3">
                      <img
                        className="object-fit-contain"
                        width={"55rem"}
                        height={"55rem"}
                        alt="img"
                        src="https://www.anya-capital.com/en/content/portfolio/Epicode/EPICODE%20LOGO-07.jpg"
                      ></img>
                      <div>
                        <h6>Full Stack Developer React|Redux|PHP|Laravel</h6>
                        <p className="m-0 text-secondary sizeSmall">gen 2024 - lug 2024 - 6 mesi</p>
                        <p className="m-0 text-secondary sizeSmall">Remoto</p>
                        <p className="mt-2 text-secondary sizeSmall">Corso Full stack Developer Full remote</p>
                        <p className="mt-2 text-secondary sizeSmall fw-semibold">
                          Competenze: React|Redux|PHP|Laravel{" "}
                        </p>
                      </div>
                    </Col>
                    <hr></hr>
                    <Col xs={12} className="d-flex align-items-start gap-3 pt-3">
                      <img
                        className="object-fit-cover"
                        width={"55rem"}
                        height={"55rem"}
                        alt="img"
                        src="data:image/png;base64,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"
                      ></img>
                      <div>
                        <h6>Corso CyberSecurity</h6>
                        <p className="m-0 text-secondary sizeSmall"> set 2023 - dic 2023 - 3 mesi</p>
                        <p className="m-0 text-secondary sizeSmall">Full-Remote</p>
                        <p className="mt-2 text-secondary sizeSmall">
                          Corso full remote orientato alla cyber security con sistemi operativi LINUX|WINDOWS|MAC
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              {/* interessi/////////////////////////////////////////////////////////////////////// */}
              <Col xs={12} className="border rounded p-0 overflow-hidden bg-white  position-relative">
                <div className="px-4 py-4">
                  <h5>Interessi</h5>
                  <Row className="">
                    <Col xs={12} className="text-center">
                      <div className="d-flex gap-5">
                        <p className=" text-success fw-semibold">Aziende</p>
                        <p className="  fw-semibold">Newsletter</p>
                        <p className="  fw-semibold">Scuole o università</p>
                      </div>
                    </Col>
                    <hr />
                    <Col xs={12} md={6} className="d-flex align-items-start gap-3 pt-3">
                      <img
                        className="object-fit-contain"
                        width={"55rem"}
                        height={"55rem"}
                        alt="img"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u
                                        1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC"
                      ></img>
                      <div>
                        <h6>Microsoft</h6>
                        <p className=" text-secondary sizeSmall">22.116.552 follower</p>
                        <MyButton text={"Già segui"} colore={"outline-secondary"}></MyButton>
                      </div>
                    </Col>

                    <Col xs={12} md={6} className="d-flex align-items-start gap-3 pt-3">
                      <img
                        className="object-fit-cover"
                        width={"55rem"}
                        height={"55rem"}
                        alt="img"
                        src="data:image/png;base64,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
                                        YzRuWTixtO3yveA7KQlmVBh2ZUuH9q6ynNct/b437qxL7JYpNzvtYUu07IDa5GWPvHPvxP4zS2wNx4XRusr5KDdHnUK7PZ7QLhQ6o+ZGmKWkpKSkpKQkgv8Dfs6yxW4kgvwAAAAASUVORK5CYII="
                      ></img>
                      <div className="pb-4">
                        <h6>Google</h6>
                        <p className=" text-secondary sizeSmall">32.505.932 follower</p>
                        <MyButton text={"Già segui"} colore={"outline-secondary"}></MyButton>
                      </div>
                    </Col>
                    <hr></hr>
                    <Col xs={12} className="text-center">
                      <h6>
                        Mostra tutte le aziende{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </h6>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sezione secondaria a destra */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Col xs={12} md={3} className="">
            <Row className="gy-2">
              {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////Section 1 */}

              <Col xs={12} className="rounded border p-3 bg-white">
                <h5 className="d-flex justify-content-between fs-5">
                  Lingua del profilo <img src="assets/matita.svg" alt="" />{" "}
                </h5>

                <p className="text-secondary">Italiano</p>
                <hr></hr>
                <h5 className="d-flex justify-content-between">
                  Profilo pubblico e URL <img src="assets/matita.svg" alt="" />
                </h5>
                <p className="text-secondary m-0">www-linkedin.com/in/nome-utente-021545</p>
              </Col>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////Section 2 */}

              <Col xs={12} className="rounded border py-3 bg-white text-secondary">
                <div className="row">
                  <span className="sizeSmall fw-semibold text-end">Annuncio ...</span>
                  <p className="text-center sizeSmall ">utente, investi sul tuo futuro con questa offerta esclusiva </p>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <img
                    src={account !== undefined ? account.image : <Spinner animation="border" variant="primary" />}
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
              </Col>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////Section 3 */}
              <Col xs={12} className="rounded border p-3 bg-white">
                <h6>Altri profili simili</h6>
                {/* ------------------------- */}
                <div className="d-flex mt-4 gap-2">
                  <img
                    src="https://media.licdn.com/dms/image/D4D35AQEeGYdFzZ5XWg/profile-framedphoto-shrink_100_100/0/1711738112996?e=1712671200&v=beta&t=zilrci_acFrACsrvC2FYm-2ossCXGhUMYueHw0Yi_I0"
                    width={"65rem"}
                    height={"65rem"}
                    className="rounded-circle object-fit-cover"
                    alt="..."
                  />
                  <div>
                    <h6>Puddu Daiddo</h6>
                    <p>Sardo appassionato di gaming e informatica</p>
                    <MyButton text={` Messaggio`} colore={"outline-secondary"} img={"/assets/freccia.svg"}></MyButton>
                  </div>
                </div>
                {/* ----------------------- */}
                <div className="d-flex mt-4 gap-2">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQHxDAmpuVueCg/profile-displayphoto-shrink_100_100/0/1568286277930?e=1717632000&v=beta&t=6xqCGP_MPSAq3rQ21WXwrfa3ORJjJtKA-Ga_OQcUMrQ"
                    width={"65rem"}
                    height={"65rem"}
                    className="rounded-circle object-fit-cover"
                    alt="..."
                  />
                  <div>
                    <h6>Stefano Casasola</h6>
                    <p>Founder & Software Developer @ Nucleode SRL - Educator @ EPICODE - IT Consultant</p>
                    <MyButton text={" Collegati"} img={"/assets/addFriend.svg"} colore={"outline-secondary"}></MyButton>
                  </div>
                </div>
                {/* ----------------------- */}
                <div className="d-flex mt-4 gap-2">
                  <img
                    src="https://media.licdn.com/dms/image/C5603AQH2Lc6nvl_INA/profile-displayphoto-shrink_200_200/0/1516964106992?e=1717632000&v=beta&t=i5QO62t4k79SqzRXG6Oojl9ntEaz-NaAxOn2qF-Y69w"
                    width={"65rem"}
                    height={"65rem"}
                    className="rounded-circle object-fit-cover"
                    alt="..."
                  />
                  <div>
                    <h6>Stefano Miceli</h6>
                    <p>Front-end Developer & Creative Director @ Nucleode SRL</p>
                    <MyButton text={" Collegati"} img={"/assets/addFriend.svg"} colore={"outline-secondary"}></MyButton>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="d-flex mt-4 gap-2">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQGc0anQAXaPQw/profile-displayphoto-shrink_200_200/0/1710107141512?e=1717632000&v=beta&t=FTpk61oGYaS6ML6IxbhWDctCkGBMovRm53k1wuUJ5NE"
                    width={"65rem"}
                    height={"65rem"}
                    className="rounded-circle object-fit-cover"
                    alt="..."
                  />
                  <div>
                    <h6>Luca Sbarbuto</h6>
                    <p>Big Front-End Developer | Graphic Designer</p>
                    <MyButton text={" Segui"} img={"/assets/+.svg"} colore={"outline-secondary"}></MyButton>
                  </div>
                </div>
                {/* ----------------------------- */}
                <hr />
                <p className="text-center fw-semibold m-0"> Mostra Tutto</p>
              </Col>
              {/*///////////////////////////////////////////////////////////////// persone che potresti conoscere///////////// */}
              <Col xs={12} className="rounded border p-3 bg-white">
                <h6>Persone che potresti conoscere</h6>
                <p className="text-secondary">Dalla tua scuola o università</p>

                {/* ----------------------- */}
                <div className="d-flex mt-4 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww"
                    width={"65rem"}
                    height={"65rem"}
                    className="rounded-circle object-fit-cover"
                    alt="..."
                  />
                  <div>
                    <h6>Stefano Alberti</h6>
                    <p>Chief Business Development Officer , Vice President and...</p>
                    <MyButton text={" Collegati"} img={"/assets/addFriend.svg"} colore={"outline-secondary"}></MyButton>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="d-flex mt-4 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww"
                    width={"65rem"}
                    height={"65rem"}
                    className="rounded-circle object-fit-cover"
                    alt="..."
                  />
                  <div>
                    <h6>Francesco Rossi</h6>
                    <p>Sviluppatore Java|Desiner</p>
                    <MyButton text={" Segui"} img={"/assets/+.svg"} colore={"outline-secondary"}></MyButton>
                  </div>
                </div>
                {/* ----------------------------- */}
                <hr />
                <p className="text-center fw-semibold m-0"> Mostra Tutto</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Profilo;
