import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../component/Navbar/navbar.css";
import { Form, Dropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Navbar2 = () => {
    const location = useLocation();
    const utente = useSelector((state) => state.utente);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setShow(!show);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='d-flex justify-content-between'>
                <div className='d-flex align-items-center gap-1'>
                    <Navbar.Brand
                        href="/Profilo"
                        className="m-0"
                        width="45px"
                        height="45px"
                    >
                        <img src="/assets/logo.svg" alt="logo" width="44px" height="100%" className="Logo_navbar_fixed " />
                    </Navbar.Brand>


                    <Form.Control
                        type="text"
                        placeholder="Cerca"
                        className="d-none d-lg-block research_input_form_navbar pe-0"
                        style={{ width: "80%", paddingLeft: "1.8rem", height: "50%" }}
                    />

                </div>
                <div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='d-flex'>

                                <Nav.Link href="#action1" className='text-center'>
                                    <img src="/assets/home.svg" alt="" />
                                    <p className='m-0 xsSize'>Home</p>
                                </Nav.Link>
                                <Nav.Link href="#action1" className='text-center'>
                                    <img src="/assets/people.svg" alt="" />
                                    <p className='m-0 xsSize'>Rete</p>
                                </Nav.Link>
                                <Nav.Link href="#action1" className='text-center'>
                                    <img src="/assets/work.svg" alt="" />
                                    <p className='m-0 xsSize'>Lavoro</p>
                                </Nav.Link>
                                <Nav.Link href="#action1" className='text-center'>
                                    <img src="/assets/message.svg" alt="" />
                                    <p className='m-0 xsSize'>Messagistica</p>
                                </Nav.Link>
                                <Nav.Link href="#action1" className='text-center'>
                                    <img src="/assets/campana.svg" alt="" />
                                    <p className='m-0 xsSize'>Notifiche</p>
                                </Nav.Link>
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
                            </div>








                        </Nav>

                    </Navbar.Collapse>

                </div>

            </Container>
        </Navbar>
    )
}

export default Navbar2