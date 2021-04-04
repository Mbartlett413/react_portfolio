import './Work.css';
import { Row, Col } from 'react-bootstrap';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo2 from '../3d_geometry_square-512.png';
import portfolio1 from '../portfolio1.png';
import portfolio2 from '../portfolio2.jpg';
import portfolio3 from '../portfolio3.jpg';

function Work() {
    return (
        <section className ="worker_section container-fluid">
            <Row>
                <Col><img src={logo2} className="App-logo" alt="logo" /></Col>
                <Col><img src={portfolio1} className="portfolioImg" alt="logo" /></Col>
            </Row>
            <Row>
                <Col><img src={portfolio2} className="portfolioImg" alt="logo" /></Col>
                <Col><img src={portfolio3} className="portfolioImg" alt="logo" /></Col>
            </Row>
        </section>
    );
  }
  
  export default Work;