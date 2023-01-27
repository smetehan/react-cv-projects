import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Col, Container, Row } from "react-bootstrap";
import AppRouter from "./routers/AppRouter";
function App() {
  return (
    <>
      <div className="app-settings">
        <Header />
      </div>
      <Container className="container_app">
        <Row>
          <Col>
            <AppRouter />
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .app-settings {
          position: sticky;
          top: 0;
          z-index: 999;
        }
        .container_app {
          z-index: 0;
        }
      `}</style>
    </>
  );
}

export default App;
