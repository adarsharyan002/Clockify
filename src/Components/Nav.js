import {Container,Navbar,Button} from 'react-bootstrap'
import { FaRegBell ,FaRegQuestionCircle,FaList} from "react-icons/fa";

const Nav = () => {
    return ( 
        <Navbar className='nav'>
        <Container>
            <div className='head'>
          <FaList/>
        <Navbar.Brand href="/">
            <img
              src="https://clockify.me/assets/images/clockify-logo.svg"
              width="120"
              height="35"
              className="img align-top"
              alt=" logo"
            />
          </Navbar.Brand>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse style={{gap:'1rem'}} className="justify-content-end">
      
            <Navbar.Text className="none01">
              Adarsh Aryan's workspace
            </Navbar.Text>
            <Button style={{width:'5rem',marginLeft:'10px',fontSize:'0.8rem'}} variant="outline-primary">UPGRADE</Button>
            <FaRegQuestionCircle className='none01' style={{fontSize:'1.4rem',color:'#757575'}}/>
            <FaRegBell style={{fontSize:'1.4rem',color:'#757575'}}/>
            
           
            <button style={{width:'3rem',color:'white' ,height:'3rem',backgroundColor:'#4CAF50',border:'none',marginLeft:'10px',borderRadius:'50%'}}>AA</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default Nav;