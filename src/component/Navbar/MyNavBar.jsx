import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Form, Dropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


function MyNavBar() {
  const location = useLocation();
  const utente = useSelector((state) => state.utente);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <>
      {location.pathname === "/" ? (
        <Navbar className="bg-body-tertiary">
          <Container className="d-flex">
            <div>
            <Navbar.Brand href="#home">
              <img
                src="/assets/linkedin.svg"
                width="80"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <p className="text-secondary m-0 linkato fw-semibold">Iscriviti ora</p>
               | 
              <Button variant="outline-primary" className="rounded-pill py-1">Accedi</Button>
            </div>
            
          </Container>
        </Navbar>
      ) : (<Navbar collapseOnSelect expand="xs" className="flex-xs-row-reverse bg-body-tertiary py-0">
        <Container className="d-flex justify-content-center">
          <div className="d-flex">
            {/* ////////////////////////////////////LINK ICONA LOGO////////////////////////////////////////// */}
            <div className="gap-sm-3">
              <div className="d-flex ">
                <Navbar.Brand
                  href="/Profilo"
                  className="d-flex justify-content-center container_logo_navbar_fixed m-0"
                  width="45px"
                  height="45px"
                >
                  <img src="/assets/logo.svg" alt="logo" width="45px" height="45px" className="Logo_navbar_fixed " />
                </Navbar.Brand>
              </div>
            </div>
            {/* ////////////////////////////////////LINK ICONA SEARCH/////////////////////////////////////// */}
            <div className="d-flex">
              <div className=" gap-5 d-flex ">
                <Nav className="d-flex flex-row align-items-center gap-4">
                  <div className="d-flex justify-content-center position-relative">
                    <div className="ms-md-3 ">
                      <img
                        src="/assets/cerca_bold.svg"
                        alt="cerca_bold"
                        className="ms-1 d-lg-none cerca_bold_icon_navbar"
                        style={{ width: "25px" }}
                      />
                      <p className="d-none d-md-block d-lg-none m-0 sixnavbar"> Cerca</p>
                    </div>
                    <img
                      src="/assets/cerca.svg"
                      alt="research_icon"
                      className="d-none d-lg-block position-absolute research_icon_navbar"
                      style={{ right: 0, left: 26, top: 0, bottom: 0 }}
                    />
                    <Form.Control
                      type="text"
                      placeholder="Cerca"
                      className="d-none d-lg-block research_input_form_navbar pe-0"
                      style={{ width: "80%", paddingLeft: "1.8rem", height: "50%" }}
                    />
                  </div>
                  {/* ////////////////////////////////////LINK HOME ////////////////////////////////////////// */}
                  <div className="icons_navbar">
                    <Nav.Link href="/Home" className="p-0 icon_home_navebar">
                      <img src="/assets/home.svg" alt="home_icon" id="home_icon_nav" />
                      <p className="d-none d-md-block m-0 sixnavbar"> Home</p>
                    </Nav.Link>
                  </div>
                  {/* /////////FINO LINK HOME ///////////////////////////////////////////////////////////////// */}
                  <div className="icons_navbar">
                    <Nav.Link href="/Rete" className="p-0">
                      <img src="/assets/people.svg" alt="network_icon" />
                      <p className="d-none d-md-block m-0 sixnavbar">Rete</p>
                    </Nav.Link>
                  </div>
                  {/* ///////FINO LINK NETWORK ////////////////////////////////////////////////////////////////// */}
                  <div className="icons_navbar icon_jobs_navbar">
                    <Nav.Link href="/Lavoro" className="p-0 ">
                      <img src="/assets/work.svg" alt="jobs_icon" />
                      <p className="d-none d-md-block m-0 sixnavbar">Lavoro</p>
                    </Nav.Link>
                  </div>
                  {/* ///////FINO LINK JOBS ////////////////////////////////////////////////////////////////// */}
                  <div className="icons_navbar icon_messages_navbar">
                    <Nav.Link href="/Messagistica" className="p-0">
                      <img src="/assets/message.svg" alt="messages_icon" />
                      <p className="d-none d-md-block m-0 sixnavbar">Messaggistica</p>
                    </Nav.Link>
                  </div>
                  {/* ///FINO LINK MESSAGES ////////////////////////////////////////////////////////////////////// */}
                  <div className="icons_navbar icon_bell_navbar">
                    <Nav.Link href="/Notifiche" className="p-0">
                      <img src="/assets/campana.svg" alt="notification_icon" />
                      <p className="d-none d-md-block m-0 sixnavbar">Notifiche</p>
                    </Nav.Link>
                  </div>
                  {/* ///////FINO LINK NOTIFICATIONS//////////////////////////////////////////////////////////// */}
                  <div className="icons_navbar icon_profile_navbar">
                    <img
                      src={utente.image}
                      alt="profile_picture"
                      width={"25px"}
                      height={"25px"}
                      className="image_dropdown_navbar object-fit-cover"
                    />
                    {/* /////DROPDOWN PROFILE BEGINNING//// */}
                    <Dropdown>
                      <Dropdown.Toggle
                        //  id="dropdown-basic"
                        onClick={toggleDropdown}
                        variant="light"
                        className="position-relative d-none d-md-block m-0 toggle_dropdown_navbar sixnavbar"
                        style={{ color: "gray", height: "25px" }}
                      >
                        Me
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className={`position-absolute`}
                        style={{ right: 10, left: -255, top: 24, bottom: 0, height: "21rem", width: "18rem" }}
                        show={show}
                      >
                        <div style={{ width: "18rem" }}>
                          <div className="d-flex px-1 py-1 justify-content-start align-items-center ">
                            <div className="d-flex">
                              <img
                                src={utente.image}
                                alt="draft_picture"
                                width={"55px"}
                                height={"55px"}
                                className="image_dropdown_navbar object-fit-cover ms-1"
                              />
                            </div>
                            <div className="ps-4">
                              <div>
                                <p className="fw-semibold mb-0">Mario Rossi</p>
                                <p className="mb-0">Full Stack Developer</p>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 border-bottom pb-2">
                            <Button
                              variant="outline-primary"
                              className="sizeSmall rounded-pill fw-semibold py-1 w-100"
                              onClick={() => {
                                toggleDropdown();
                                navigate("/Profilo");
                              }}
                            >
                              Visualizza profilo
                            </Button>
                          </div>
                          <div className="px-4 border-bottom sizeSmall">
                            <h6>Account</h6>
                            <p className="my-1  text-secondary">Impostazioni e privacy</p>
                            <p className="my-1  text-secondary">Guida</p>
                            <p className="my-1  text-secondary">Lingua</p>
                          </div>

                          <div className="px-4 border-bottom pt-2 sizeSmall">
                            <h6>Gestisci</h6>
                            <p className="my-1  text-secondary">Post e attività</p>
                            <p className="my-1  text-secondary">Account per la pubblicazione di off...</p>
                          </div>
                          <div className="px-4  pt-2">
                            <p
                              className="text-decoration-none text-secondary sizeSmall"
                              onClick={() => {
                                setShow(!show);
                                navigate("/");
                              }}
                            >
                              Esci
                            </p>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* /////////FIONO LINK PROFILO///////////////////////////////////////////////////////////// */}
                  <div className="icons_navbar icon_business_navbar">
                    <Nav.Link href="#" className="p-0">
                      <img src="/assets/business.svg" alt="business_icon mb-0" />
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="light"
                          id="dropdown-basic"
                          className="position-relative d-none d-md-block m-0 toggle_dropdown_navbar sixnavbar"
                          style={{ color: "gray", height: "25px" }}
                        >
                          Business
                        </Dropdown.Toggle>
                      </Dropdown>
                    </Nav.Link>
                  </div>
                  {/* /////////FIONO LINK BUSINESS///////////////////////////////////////////////////////////// */}
                  {/* /////////////////////////INIZIO ICONA TRE PUNTINI//////////////////////////////////////////////////////// */}

                  <div className="icons_navbar ">
                    <div className="p-0 position-relative">
                      {" "}
                      {/*<a> Tre_punti */}
                      <img src="/assets/tre_punti.svg" alt="business_icon mb-0" className="icon_tre_punti_navbar" />
                      <Dropdown>
                        {" "}
                        {/*<div class= show dropdown> */}
                        <Dropdown.Toggle
                          variant="light"
                          id="dropdown-basic"
                          className="position-absolute dropdown_icon_tre_punti_navbar"
                          style={{ right: 0, left: 0, top: -20, bottom: 0, color: "gray", opacity: "0.0" }}
                        ></Dropdown.Toggle>
                        {/* //////////////BOX MINI ICONS//////////////// */}
                        <Dropdown.Menu
                          className="position-absolute  mini_box_icons_dropdown_navbar"
                          style={{ right: 10, left: -210, top: 10, bottom: 0, height: "4rem", width: "15rem" }}
                        >
                          <div className="d-flex justify-content-evenly div_box_icons_dropdown_navbar">
                            {/* //////////DROPDOWN LINK JOBS/////////// */}
                            <Nav.Link href="#" className="d-flex px-2 icon_jobs_dropdown_navbar">
                              <img src="/assets/work.svg" alt="jobs_icon" width={"25px"} height={"25px"} />
                              <p className="d-none d-lg-block m-0">Jobs</p>
                            </Nav.Link>
                            {/* ///////DROPDOWN LINK MESSAGES/////////// */}
                            <Nav.Link href="/Messagistica" className="d-flex px-2 icon_messages_dropdown_navbar ">
                              <img src="/assets/message.svg" alt="messages_icon" width={"25px"} height={"25px"} />
                              <p className="d-none d-lg-block m-0">Messages</p>
                            </Nav.Link>
                            {/* //////////DROPDOWN LINK NOTIFICATIONS/////////// */}
                            <Nav.Link href="/Notifiche" className="d-flex px-2 icon_bell_dropdown_navbar">
                              <img src="/assets/campana.svg" alt="notification_icon" width={"25px"} height={"25px"} />
                              <p className="d-none d-lg-block m-0">Notifications</p>
                            </Nav.Link>
                            {/* ////////////DROPDOWN LINK PROFILO//////// */}
                            <Nav.Link href="#" className="d-flex px-2 icon_profile_dropdown_navbar">
                              <img
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="profile_picture"
                                width={"25px"}
                                height={"25px"}
                                className="image_dropdown_navbar object-fit-cover"
                              />
                              <p className="d-none d-lg-block m-0">Me</p>
                            </Nav.Link>
                            {/* ///////DROPDOWN LINK BUSINESS////////// */}
                            <Nav.Link href="#" className="d-flex px-2 icon_business_dropdown_navbar">
                              <img src="/assets/business.svg" alt="business_icon mb-0" width={"25px"} height={"25px"} />
                              <p className="d-none d-lg-block m-0">Business</p>
                            </Nav.Link>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Nav>
              </div>
              {/* /////////FIONO ICONA TRE PUNTINI///////////////////////////////////////////////////////////// */}
            </div>
          </div>
        </Container>
      </Navbar>)}


    </>


  );
}

export default MyNavBar;
