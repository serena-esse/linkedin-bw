import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";


import { useDispatch } from "react-redux";
import { getAllPost, getFetch, putToken } from "../redux/action";
import { useNavigate } from "react-router-dom";


function Login({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(putToken(token));
      dispatch(getFetch(token))
      dispatch(getAllPost(token))
      

      navigate("/Home")
    }
  }, [token, dispatch]);

  const checkUtente = () => {
    switch (username) {
      case 'Alfio':
        setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiZDRlYmEyODFkODAwMTlhM2VjNzEiLCJpYXQiOjE3MTIwNTE0MzUsImV4cCI6MTcxMzI2MTAzNX0.6XFsoRmlAIYN75fwlnD95BLxQxCGd9IcLzryQIMY3ps");
       ;
        break;
      case 'Serena':
        setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNGIwM2Y5NGY0YTAwMTkzNzkxYmMiLCJpYXQiOjE3MTIxNDcyMDMsImV4cCI6MTcxMzM1NjgwM30.qeeiVvKDA3SGBZeomE3kCVwmkoz33bfX-4EqWeHX5wI");
        break;
      case 'Amanda':
        setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmVmZWEyODFkODAwMTlhM2VjNGIiLCJpYXQiOjE3MTIwNDU4MjIsImV4cCI6MTcxMzI1NTQyMn0.w7PF_g-TL9V7aM52dxydpbE12hjI7zyy95-6ss-mplo");
        break;
      default:
        alert("Utente non trovato");
        break;
    }
  }


  return (
    <div className="box">
      <Container fluid>
        <Row className="w-100 mx-auto">
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4} className="mt-5 bg-white pb-3 ">
            <div className="text-center">
              <img src="/assets/linkedin.svg" alt="logo" style={{ width: "8rem" }} className="mt-5"></img>
            </div>
            <div className="mt-4 ">
              <h4>Accedi</h4>
              <form onSubmit={(e) => {
                e.preventDefault()
                checkUtente()
              }
              } >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Inserisci il tuo Username"
                    aria-describedby="emailHelp"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" required />
                </div>
                <div className=" form-check ">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Ricordami
                  </label>
                </div>
                <div className=" d-flex align-items-center justify-content-center gap-2 mt-4">
                  <button type="submit" className="btn btn-primary rounded-pill"

                  >Accedi</button>
                  <span> o</span>
                  <button type="button" className="btn btn-primary rounded-pill" onClick={() => { }}>Registrati</button>

                </div>
              </form>
              <div className="mt-4">
                <a href="#">Password dimenticata?</a>
                <br></br>
                <a href="#">Nuovo su linkedIn?Iscriviti ora </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
