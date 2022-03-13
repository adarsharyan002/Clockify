import {Container,ListGroup,Button, ListGroupItem,Dropdown,DropdownButton} from 'react-bootstrap'
import Clockifyimg2 from '../assets/Clockifyimg2.png'
import { FaMarsStroke } from "react-icons/fa";


const Calendar = () => {
    return (
        <Container className="pagenav">

            <ListGroup  className="d-flex flex-wrap flex-row justify-content-between" as="ul">

            <ListGroup.Item className="buttons" style={{ fontSize:'1.8rem',color:'#757575'}}>
             <Button>Calendar</Button>
             <Button>Week</Button>
             <Button>Day</Button>
             </ListGroup.Item>

  <ListGroupItem style={{ gap:'1.3rem',border:'none'}} className="d-flex flex-row justify-content-between buttons">
     
      <Button><FaMarsStroke/></Button> 
     <DropdownButton id="dropdown-basic-button" title="Team mates">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<input className="Input" type="date" style={{ color:'#757575',width:"20rem",height:'3rem'}} />
  </ListGroupItem>

  </ListGroup>

  <img alt="card" style={{ marginRight:'2rem',width:'100%',marginTop:'2rem' }}src={Clockifyimg2}></img>
        </Container>
    );
}
 
export default Calendar;