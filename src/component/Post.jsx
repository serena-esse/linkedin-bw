import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, modificaPost } from "../redux/action";


function Post(props) {
    const [yearS, monthS, dayS] = props.createdAt.split("T")[0].split("-");
    const dispatch = useDispatch()
    const token = useSelector((state) => state.apikey[0]);
    const [myPost, setMyPost] = useState({
        "text": "Questo è un nuovo post",

    })


    const [imageExp, setImageExp] = useState(null);
    const [show, setShow] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageExp(file);
    };

    const postSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post', imageExp);
       if(imageExp){
        dispatch(modificaPost(token, props.idPost, myPost, formData))
       }else{
        dispatch(modificaPost(token, props.idPost, myPost))
       }
        setShow(!show);
    }


    return (
        <Col xs={12} className="d-flex align-items-center gap-3 py-2">
            <div className="container bg-white hov py-2 rounded">
                {props.idUtente  ?(
                    <div className="mt-2 d-flex">
                        <div className="ms-auto gap-2 d-flex align-self-end">
                            <img alt="img" src="/assets/matita.svg" className="" width={"22rem"}
                                onClick={() => {
                                    setShow(!show);
                                }}
                            ></img>



                            <i className="bi bi-trash3-fill text-danger fs-5"
                                onClick={() => dispatch(deletePost(token, props.idPost))}></i>

                        </div>

                    </div>
                ):(<></>)}


                <Modal show={show} onHide={() => setShow(!show)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifica post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={postSubmit}>
                            <div className="mb-3">
                                <label htmlFor="avatar" className="form-label">Immagine</label>
                                <br></br>
                                <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Titolo" className="form-label">post</label>
                                <textarea type="text" className="form-control" id="Titolo"
                                    onChange={(e) => setMyPost({ ...myPost, text: e.target.value })}  />
                            </div>


                            <button type="submit" className="btn btn-primary">Posta</button>

                        </form>

                    </Modal.Body>
                </Modal>

















                <div className="d-flex gap-2 align-items-center">
                    <img
                        className="object-fit-cover rounded-circle"
                        width={"40rem"}
                        height={"40rem"}
                        alt="img"
                        src={props.imgP}
                    />
                    <p style={{ width: "70%" }} className="m-0 text-secondary sizeSmall">
                        <strong>{props.username}</strong> ha diffuso...
                    </p>
                    <p className="sizeSmall text-secondary m-0 ">{yearS}-{monthS}-{dayS}</p>
                </div>
                <p className="pt-2">{props.text}</p>
                <div className="text-center">
                    {props.image && <img alt="img" src={props.image} style={{ maxWidth: "100%" }} />}

                </div>

            </div>
        </Col>
    );
}

export default Post;
