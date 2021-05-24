import './Work.css';
import { Row, Col } from 'react-bootstrap';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import portfolio from '../portfolio1.png';


function Work() {
    return (
        <section className ="worker_section container-fluid">
            <Row>
                <Col>
                    <img src={portfolio} className="portfolio_logo" alt="logo" />
                </Col>
            </Row>
        </section>
    );
  }
  
  export default Work;