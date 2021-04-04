import './Contact.css';
import { Row, Col} from 'react-bootstrap';

function Contact() {
    return (
        <section className ="header_section container-fluid">
                <Row>
                    <Col md={6} className="contact_left">
                        <h1>contact</h1>
                    </Col>
                    <Col md={6} className="contact_right">
                        <p>If you have an idea, you are welcome to contact me.</p>
                    
                        <h3><b><u>MASON BARTLETT</u></b></h3>
                        <p> Web Designer // Software Engineer // Photographer </p>
                        <a  href="mailto:mbartlett413.com"> Mbartlett413@me.com</a>
                        <a  href="tel:315-600-7940">315.600.7940 </a>
                    </Col>
                </Row>
        </section>
    );
  }
  
  export default Contact;
  