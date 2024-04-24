import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function MyButton(props) {
    const navigate=useNavigate()
    return (

   
            <Button className='rounded-pill fw-semibold' variant={`${props.colore}`}
                onClick={()=>{
                    props.funzione()
                    navigate(props.link)

                }
                }
                type={props.type}>
                <div className='d-flex'> {props.img && (<img src={`${props.img}`} alt='img'></img>)}{props.text}</div>
            </Button>
       
    )
}
export default MyButton;