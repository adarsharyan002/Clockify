

import {Container,ListGroup,Button, ListGroupItem,Dropdown,DropdownButton} from 'react-bootstrap'
import Clockifydashboard from '../assets/Clockifydashboard.png'



const Dashboard = () => {
    return (
        <Container className="pagenav">

            <ListGroup className="d-flex flex-wrap flex-row justify-content-between" as="ul">

            <ListGroup.Item  style={{ fontSize:'1.8rem',color:'#757575',border:'none'}}>
             
                        Dashboard
             </ListGroup.Item>

  <ListGroupItem style={{ gap:'1.3rem',border:'none'}} className="d-flex flex-row justify-content-between buttons">
  <DropdownButton id="dropdown-basic-button" title="Project">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
     
     <DropdownButton id="dropdown-basic-button" title="Only Me">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<input className="Input" type="date" style={{ color:'#757575',width:"20rem",height:'3rem'}} />
  </ListGroupItem>

  </ListGroup>

  <img alt="card" style={{ marginRight:'2rem',width:'100%',marginTop:'2rem' }}src={Clockifydashboard}></img>
        </Container>
    );
}
 
export default Dashboard;