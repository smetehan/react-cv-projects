import { Col, Container, Row } from "react-bootstrap";
import {
  data,
  summary,
  work,
  tecnichal_skills,
  soft_skills,
} from "../helper/data";
const Cv = () => {
  return (
    <>
      <Container className="container_cv">
        <Row className="justify-content-md-center">
          <Col>
            <h5>Şevket Metehan PARLAK</h5>
            <h5>Front End Developer</h5>
          </Col>
        </Row>
        <hr />
        <>
          {data?.map((item) => {
            const { email, phone, address, github, linkedin } = item;
            return (
              <Row>
                <Col xs={12} md={6} lg={3} className="info-map">
                  <span>Email : </span>
                  <br /> {email}
                </Col>
                <Col xs={12} md={6} lg={3} className="info-map">
                  <span>LinkedIn :</span>
                  <br />
                  <a href={linkedin} target="noreferrer">
                    {linkedin}
                  </a>
                </Col>
                <Col xs={12} md={6} lg={3} className="info-map">
                  <span>GitHub :</span>
                  <br />
                  <a href={github} target="noreferrer">
                    {github}
                  </a>
                </Col>
                <Col xs={12} md={6} lg={3} className="info-map">
                  <span>Phone :</span>
                  <br /> {phone}
                </Col>
                <Col xs={12} md={6} lg={3} className="info-map">
                  <span>Address :</span>
                  <br /> {address}
                </Col>
              </Row>
            );
          })}
        </>
        <hr />
        <div>
          {summary?.map((item) => {
            const { summary, title } = item;
            return (
              <div>
                <h5>{title}</h5>

                <div>{summary}</div>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          <h4 className="h4">WORK EXPERIENCE</h4>

          {work?.map((item) => {
            const {
              title_one,
              title_two,
              title_three,
              step_one,
              step_two,
              step_three,
              step_four,
              step_five,
              step_six,
              step_seven,
              step_eight,
              step_nine,
              step_ten,
            } = item;
            return (
              <div>
                <div>
                  <h5>{title_one}</h5>
                  <ul>
                    <li>{step_one}</li>
                    <li>{step_two}</li>
                    <li>{step_three}</li>
                    <li>{step_four}</li>
                    <li>{step_five}</li>
                    <li>{step_six}</li>
                    <li>{step_seven}</li>
                    <li>{step_eight}</li>
                    <li>{step_nine}</li>
                    <li>{step_ten}</li>
                  </ul>
                </div>

                <div>
                  <h5>{title_two}</h5>
                  <p>
                    Turkish National Defense Department August 2018 - February
                    2022 ANKARA
                  </p>
                </div>
                <div>
                  <h5>{title_three}</h5>
                  <p>
                    Turkish National Defense Department July 2016 - August 2018
                    HAKKARI
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <hr />

        <div>
          {tecnichal_skills?.map((item) => {
            const { skill, title } = item;
            return (
              <div>
                <h5>{title}</h5>
                <div>{skill}</div>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          {soft_skills?.map((item) => {
            const { skill, title } = item;
            return (
              <div>
                <h5>{title}</h5>
                <div>{skill}</div>
              </div>
            );
          })}
        </div>
      </Container>

      <style jsx>
        {`
          .container_cv {
            margin-bottom: 30px;
          }

          .title {
            text-align: center;

            margin-bottom: 30px;
          }

          .info .info-map {
            padding: 10px;
            // border: 1px solid red;
            margin-right: 7px;
            margin-left: 10px;
          }
          .info span {
            font-size: 18px;
            font-weight: 500;
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
};

export default Cv;
