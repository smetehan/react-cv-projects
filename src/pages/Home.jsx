import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Calc from "../components/Calculator/Calc";
import TicTacToe from "../components/TicTacToe/TicTacToe";

const Home = () => {
  const [coord, setCoord] = useState(null);

  const [piyasa, setPiyasa] = useState(null);
  const [deneme, setDeneme] = useState(null);
  const [times, setTimes] = useState(null);
  const [dates, setDates] = useState(null);

  const time = () => {
    setTimes(`${new Date().getHours()} : ${new Date().getMinutes()}`);
    setDates(new Date().toLocaleDateString());
  };

  const API_KEY = "611966046d454bbe9eb223702232101";

  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY} &q=39.911424,32.9351168&aqi=no`;

  const localData = async () => {
    const data = await axios(url);
    setDeneme(
      `WEATHER: ${data.data.current.temp_c}°C ${data.data.current.condition.text} ${data.data.location.name} `
    );
    // console.log(data.data);
  };
  const getLocation = async () => {
    if (!navigator.geolocation) {
      alert("konum bilgisi alınamadı");
    } else {
      await navigator.geolocation.getCurrentPosition((position) => {
        setCoord(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
  };
  const moneyData = async () => {
    var requestURL = "https://api.exchangerate.host/latest/?base=TRY";
    var request = new XMLHttpRequest();
    await request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
      var response = request.response;
      // console.log(response);
      setPiyasa(
        `FINANCE : USD : ${(1 / response.rates.USD).toFixed(2)}₺, EUR :  ${(
          1 / response.rates.EUR
        ).toFixed(2)}₺, GBP :  ${(1 / response.rates.GBP).toFixed(
          2
        )}₺, JPY :  ${(1 / response.rates.JPY).toFixed(2)}₺ QAR :  ${(
          1 / response.rates.QAR
        ).toFixed(2)}₺ `
      );
    };
  };

  useEffect(() => {
    getLocation();
    localData();
    moneyData();
    const interval = setInterval(() => {
      time();
    }, 15000);
  }, []);
  return (
    <>
      <div>
        <Carousel fade variant="dark" style={{ border: "5px solid black" }}>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src="https://miro.medium.com/max/1024/0*_C52yYMRTDuMtdBA"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src="https://www.freecodecamp.org/news/content/images/2022/06/2.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src="https://i0.wp.com/www.techomoro.com/wp-content/uploads/2021/01/without-context-and-with-context.png?resize=640%2C341&ssl=1"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <Container>
          <Row>
            <Col className="try_piyasa">
              <span>{deneme}</span>
              <span>
                {dates} {times}
              </span>
              <span>{piyasa} </span>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="prog">
        <Row>
          <Col xs={12} lg={4}>
            <Calc />
            <div className="title">
              <h5>CALCULATOR</h5>
            </div>
          </Col>
          <Col xs={12} lg={{ span: 4, offset: 4 }}>
            <TicTacToe />
            <div className="title">
              <h5>TIC TAC TOE</h5>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .prog {
          margin-top: 1rem;
        }
        .title {
          text-align: center;
          margin-top: 1.3rem;
          padding: 12px;
          -webkit-box-shadow: 4px 6px 54px 12px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 4px 6px 54px 12px rgba(0, 0, 0, 0.75);
          box-shadow: 4px 6px 54px 12px rgba(0, 0, 0, 0.75);
          background: #95e61c;
          margin-bottom: 1rem;
        }

        .weather .current {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        .current_img {
          width: 100px;
          height: 100px;
        }
        .location {
          margin-top: 80px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .text_weather {
          font-size: 24px;
        }
        .img {
          height: 60vh;
        }
        .try_piyasa {
          height: 75px;
          background: black;
          color: #19e843;
          font-size: 18px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
          margin-top: 10px;
        }
        .try_piyasa span {
          position: absolute;
          animation: animasyon 14s ease-in-out infinite;
          animation-fill-mode: backwards;
        }
        .try_piyasa span:nth-child(1) {
          animation-delay: 0s;
        }
        .try_piyasa span:nth-child(2) {
          animation-delay: 4s;
        }
        .try_piyasa span:nth-child(3) {
          animation-delay: 8s;
        }

        @keyframes animasyon {
          0% {
            transform: translateX(1000px);
            opacity: 0;
          }
          5% {
            transform: translateX(1000px);
            opacity: 1;
          }

          99% {
            transform: translateX(-1300px);
            opacity: 1;
          }
          100% {
            transform: translateX(-1300px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
