import './Work.css';
import { Row, Col } from 'react-bootstrap';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo2 from '../3d_geometry_square-512.png';

function Work() {
    return (
        <section className ="worker_section container-fluid">
            <Row>
                <Col><img src={logo2} className="App-logo" alt="logo" /></Col>
                <Col><img src={logo2} className="App-logo" alt="logo" /></Col>
            </Row>
            <Row>
                <Col><img src={logo2} className="App-logo" alt="logo" /></Col>
                <Col><img src={logo2} className="App-logo" alt="logo" /></Col>
            </Row>
        </section>
    );
  }
  
  export default Work;