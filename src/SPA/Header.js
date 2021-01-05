import './Header.css';
import { Row, Col} from 'react-bootstrap';

function Header() {
    return (
        <section className ="header_section container-fluid">
                <Row>
                    <Col md={6} className="header_left" style={{ backgroundImage: `url("/section.png")` }}>
                        <p>I've been busy</p>
                    </Col>
                    <Col md={6} className="header_right">
                    <p>I am a Full Stack Developer from Maryland, living in Austin, Texas. </p>

                    <p><b>Digital Addiction</b></p>
                    <p>I simply love coding. 
                    I enjoy the process of being able to create a program//app//website,
                    update it and sometimes just plain destroy it.
                    I consider myself a professional problem solver who is obsessed with using 
                    the best practices to bring resolution to whatever issues I face.
                    </p>

                    <p>As a full stack developer, I am able to create aesthetically pleasing 
                    and responsive websites that offer a seamless interaction as well a delightful experience. 
                    This can also require building robust back end systems capable of handling complicated problems.
                    </p>

                    <p>The process is simple </p>
                    <ol>
                    <li>Identify the problem</li>
                    <li> Create a solution </li>
                    <li>Build out the solution </li>
                    <li> Maintain and support  </li>
                    </ol>


                    </Col>
                </Row>
        </section>
    );
  }
  
  export default Header;
  