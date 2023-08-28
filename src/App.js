import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = prompt("type your first name");

function App() {
  return (
    <>
      {/* A simple grid container to position the card */}
      <Container>
        <Row>
          <Col></Col>
          <Col style={{ margin: "2rem 5rem 0" }}>
            <Card style={{ width: "18rem" }} bg="dark" text="white">
              <Image />
              <Card.Body>
                <Name />
                <Price />
                <Description />
                <Button variant="primary">Purchase</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col style={{ margin: "2rem 0 0" }}>
            <Toast bg="dark" style={{ color: "white" }}>
              <Toast.Header style={{ backgroundColor: "black", color: "white" }}>
                {/* Checking whether a name was inserted or not */}
                {typeof firstName === "string" && firstName.trim() !== "" ? (
                  <img style={{width: 15, height: 15}}
                    src='/true.png'
                    className="rounded me-2"
                    alt=""
                  />
                ) : (
                  <img style={{width: 15, height: 15}}
                    src='/false.png'
                    className="rounded me-2"
                    alt=""
                  />
                )}
                <strong className="me-auto">Admin</strong>
                <small>1 min ago</small>
              </Toast.Header>
              <Toast.Body>
                {/* Checking whether a name was inserted or not */}
                {typeof firstName === "string" && firstName.trim() !== ""
                  ? `Hello, ${firstName}.`
                  : "Hello, there!"}
              </Toast.Body>
            </Toast>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
