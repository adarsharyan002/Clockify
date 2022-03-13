import {Card,ListGroup} from 'react-bootstrap'
import clockifyimage from '../assets/clockifyimage.png'
import {FaAndroid,FaApple,FaWindows,FaChrome} from 'react-icons/fa'

const TimeCard = () => {
    return (
<Card className='center' style={{ width: '22rem' }}>
  <Card.Img variant="top" src={clockifyimage} />
  <Card.Body className="text-center">
    <Card.Title>Let's start tracking!</Card.Title>
    <Card.Text>
    Install Clockify and track time anywhere.
    </Card.Text>
    <ListGroup variant="flush">
  <ListGroup.Item style={{ fontSize:'1.8rem',color:'#757575'}}>
      <FaAndroid className="m-2"/>
      <FaApple className="m-2"/>
      <FaWindows className="m-2"/>
      <FaChrome className="m-2"/>
  </ListGroup.Item>
 
</ListGroup>
    <Card.Link href="#" style={{textDecoration:'none',color:'black'}}>50+ integrations</Card.Link>
  </Card.Body>
</Card>
      );
}
 
export default TimeCard;