import React from "react";
import "./projects.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
// import { project } from "../helper/projects";
const Projects = () => {
  return (
    <>
      <Container>
        <Row className=" justify-content-xs-center align-items-xs-center ">
          <Col xs={12} md={12} lg={12} xl={12} className="divImg">
            <div>
              <h5>FURKAN HOCA BLOG</h5> <div className="card"></div>
            </div>
          </Col>
          <hr />
          <Col xs={12} md={12} lg={12} xl={12} className="divImg">
            <div>
              <h5>PARA HARCAMA</h5> <div className="cardW"></div>
            </div>
          </Col>
          <hr />
          <Col xs={12} md={12} lg={12} xl={12} className="divImg">
            <div>
              <h5>ANALOG SAAT</h5> <div className="cardO"></div>
            </div>
          </Col>
          <hr />
          <Col xs={12} md={12} lg={12} xl={12} className="divImg">
            <div>
              <h5>LANGUAGES</h5> <div className="cardL"></div>
            </div>
          </Col>
          <hr />
          <Col xs={12} md={12} lg={12} xl={12} className="divImg">
            <div>
              <h5>ZAR ATMA</h5> <div className="cardZ"></div>
            </div>
          </Col>
          <hr />
        </Row>
      </Container>
    </>
  );
};

export default Projects;
