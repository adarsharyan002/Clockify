import {Container} from 'react-bootstrap'
import Card from '../Components/TimeTrackerCard'
import PageNav from '../Components/PageNav'
const TimeTracker = () => {
    return ( 
        <Container>
     <PageNav/>
     <Card/>
    </Container>

     );
}
 
export default TimeTracker;