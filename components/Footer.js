import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import logo from "../public/tengallon.png";

import { Facebook, Instagram } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <Container className="bg-dark text-secondary overflow-hidden" fluid="true">
      <footer>
        <Row className="overflow-hidden">
          <Col/>
        </Row>
        <Row>
          <Col>
            <small>© 2020 Ten Gallon Tech </small>
          </Col>
          <Col>
            <div className="float-end">
              <a href="https://www.tengallon.tech">
                <Image src={logo} alt="Ten Gallon Logo" width={65}/>
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};
