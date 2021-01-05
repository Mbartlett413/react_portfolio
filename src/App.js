import logo2 from './3d_geometry_square-512.png';
import './FONTS/beauty.woff';
import { Row, Col} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row className="App-header">
      <Col md={6}>
        <img src={logo2} className="App-logo" alt="logo" />
      </Col>
      <Col md={6} className="CompanyInfo">
        <h1 className="CoName">GLASS</h1>
        <h1 className="CoName2">MINDS</h1>
        <h1 className="CoName3">MINDS</h1>
        <p> Thinking outside the box </p>
        <h3>Website Design & Development</h3>
        <h3>Photography</h3>
      </Col>
      </Row>
    </div>

  );
}

export default App;
