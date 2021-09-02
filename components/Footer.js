import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import pbits from "../public/pbits.png";

import { Facebook, Instagram } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <Container className="bg-dark text-secondary overflow-hidden" fluid="true">
      <footer>
        <Row className="overflow-hidden">
          <Col className="text-start">
            <small>© 2021 PBITS </small>
          </Col>
          <Col>
            <div style={{ width: "75px" }} className="float-end">
              <a href="https://www.pbits.online">
                <Image src={pbits} alt="PBITS" />
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};
