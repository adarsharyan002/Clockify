import {Container,Navbar,Button,FormControl} from 'react-bootstrap'
import { BsPlusCircle,BsTag,BsCurrencyDollar} from "react-icons/bs";


const PageNav = () => {
    return ( 
        <Navbar className='nav'>
        <Container className='pagenav'>
        <FormControl style={{height: '3rem'}} placeholder="What are you working in?" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
          
          <Navbar.Collapse style={{gap:'1.4rem'}} className="justify-content-end">
      
            <BsPlusCircle style={{color:'#03A9F4',marginLeft:'2rem'}} className="font"/>
            <p style={{marginTop:'15px',color:'#03A9F4'}}>Project</p>
            <BsTag style={{color:'#A9A9A9'}} className="font"/>
            <BsCurrencyDollar style={{color:'#A9A9A9'}} className="font"/>
            <p style={{marginTop:'12px',fontSize:'1.2rem'}}>00:00:00</p>
            <Button  style={{width:'5rem',marginLeft:'10px',backgroundColor:'#03A9F4',border:'none'}} variant="primary">Start</Button>
            
            
           
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default PageNav;