import { useEffect, useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteExperience, putEsperienza } from "../redux/action";

function Esperienza(props) {
    const [showEsperienze, setShowEsperienze] = useState(false);
    const [imageExp, setImageExp] = useState(null);
    const dispatch = useDispatch()
    const [oggetto, setOggetto] = useState(props.oggetto)
    const [yearS, monthS, dayS] = props.dataS.split("T")[0].split("-");
    const [yearE, monthE, dayE] = props.dataE.split("T")[0].split("-");


    useEffect(() => {
        setOggetto(props.oggetto)
    }, [props.oggetto]);

    // invio form
    const esperienzaSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('experience', imageExp);
        alert("Esperienza Modificata Correttamente");
        if (imageExp) {
            dispatch(putEsperienza(props.token, props.idUtente, oggetto, props.id, formData))
        } else {
            dispatch(putEsperienza(props.token, props.idUtente, oggetto, props.id))

        }
        setShowEsperienze(!showEsperienze)
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageExp(file);
       
    };


    return (<>

        <Col xs={12} className="d-flex align-items-start gap-3 pt-3">
            <img className="object-fit-cover" width={"55rem"} height={"55rem"} alt="img" src={props.img}></img>
            <div>
                <h6>{props.title}</h6>
                <p className="m-0 text-secondary sizeSmall"><span className="fw-semibold">Inizio:</span> {yearS}-{monthS}-{dayS} <span className="fw-semibold">Fine:</span> {yearE}-{monthE}-{dayE}</p>
                <p className="m-0 text-secondary sizeSmall">{props.luogo}</p>
                <p className="mt-2 text-secondary sizeSmall fw-semibold">{props.competenze} </p>

            </div>
            <img src="/assets/matita.svg" width={"15rem"} alt="img" className="ms-auto"
                onClick={() => setShowEsperienze(!showEsperienze)} />
        </Col>

        <Modal show={showEsperienze} onHide={() => setShowEsperienze(!showEsperienze)}>
            <Modal.Header closeButton>
                <Modal.Title>Modifica Esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={esperienzaSubmit}>
                    <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Immagine</label>
                        <br></br>
                        <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Titolo" className="form-label">Titolo</label>
                        <input type="text" className="form-control" id="Titolo" onChange={(e) => setOggetto({ ...oggetto, role: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Inizio" className="form-label">Inizio Data</label>
                        <input type="date" className="form-control" id="Inizio" onChange={(e) => {
                            setOggetto({ ...oggetto, startDate: e.target.value })
                           
                        }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Fine" className="form-label">Fine Data</label>
                        <input type="date" className="form-control" id="Fine" onChange={(e) => setOggetto({ ...oggetto, endDate: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Luogo" className="form-label">Luogo</label>
                        <input type="text" className="form-control" id="Luogo" onChange={(e) => setOggetto({ ...oggetto, area: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Competenze" className="form-label">Competenze</label>
                        <input type="text" className="form-control" id="Competenze" onChange={(e) => setOggetto({ ...oggetto, description: e.target.value })} />
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="btn btn-success">Salva Modifiche</button>
                        <button type="button" className="btn btn-danger ms-auto" onClick={() => {
                            dispatch(deleteExperience(props.token, props.idUtente, props.id))
                            setShowEsperienze(!showEsperienze)
                        }


                        }>Cancella</button>
                    </div>
                </form>

            </Modal.Body>
        </Modal>



    </>)


}
export default Esperienza;