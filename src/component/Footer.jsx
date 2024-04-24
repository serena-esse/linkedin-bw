import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center" xs={12} sm={6} md={2}>
          <div>
            <img src="/assets/linkedin.svg" alt="logo" style={{ width: "5rem" }} className=" mt-4"></img>
          </div>
        </Col>
        <Col xs={12} sm={6} md={2}>
          <ul style={{ listStyleType: "none" }} className="sizeSmall mt-4 text-secondary">
            <li className="mb-2" style={{ fontWeight: "bold" }}>
              Generale
            </li>
            <li>Iscriviti</li>
            <li>Centro Assistenza</li>
            <li>Informazioni</li>
            <li>Stampa</li>
            <li>Blog</li>
            <li>Opportunità di carriera</li>
            <li>Sviluppatori</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={2}>
          {" "}
          <ul style={{ listStyleType: "none" }} className="sizeSmall mt-4 text-secondary">
            <li className="mb-2" style={{ fontWeight: "bold" }}>
              Sfoglia Linkedin
            </li>
            <li>Learning</li>
            <li>Lavoro</li>
            <li>Retribuzione</li>
            <li>Mobile</li>
            <li>Servizi</li>
            <li>Prodotti</li>
            <li>Hub Top Companies</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={2}>
          {" "}
          <ul style={{ listStyleType: "none" }} className="sizeSmall mt-4 text-secondary">
            <li className="mb-2" style={{ fontWeight: "bold" }}>
              Soluzioni Business
            </li>
            <li>Talent</li>
            <li>Marketing</li>
            <li>Vendite</li>
            <li>Learning</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={2}>
          {" "}
          <ul style={{ listStyleType: "none" }} className="sizeSmall mt-4 text-secondary">
            <li className="mb-2" style={{ fontWeight: "bold" }}>
              Elenchi
            </li>
            <li>Membri</li>
            <li>Lavoro</li>
            <li>Aziende</li>
            <li>In primo piano</li>
            <li>Learning</li>
            <li>Post</li>
            <li>Articoli</li>
            <li>Scuola o università</li>
            <li>Notizie</li>
            <li>Newsletter</li>
            <li>Servizi</li>
            <li>Prodotti</li>
            <li>Consigli</li>
            <li>Ricerca persone</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={2}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
