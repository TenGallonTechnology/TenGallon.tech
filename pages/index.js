import { Header } from "../components/Header";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Footer } from "../components/Footer";

import solutions from "../public/solutions.png";
import about from "../public/about.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Envelope, EnvelopeFill, PhoneFill } from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <div className="row  align-items-center my-5 ">
            <div className="col-lg-7">
              <Image src={solutions} alt="" />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light ">PBITS</h1>
              <p>
                We help small businesses compete in the digital space! We
                provide services to your business so you can benefit from the
                technology used by large businesses. Check out our array of
                services below!
              </p>
              <a className="btn btn-primary" href="#services">
                View Services
              </a>
            </div>
          </div>
          <div className="card text-white bg-info my-5 text-center">
            <div className="card-body">
              <p className="text-dark m-0">
                We are a small business for small business! Let us be your
                partner in success!{" "}
                <a className="btn btn-sm btn-outline-dark" href="#contact">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          <div>
            <Row id="services">
              <Col>
                <h2 className="text-center">What We Offer</h2>
              </Col>
            </Row>

            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="card h-100 grow">
                  <div className="card-body">
                    <h3 className="card-title">Software Development</h3>
                    <p className="card-text">
                      We create websites to help your customers and you!
                    </p>
                    <p>
                      Our websites will integrate any of the technology you're
                      using to manage your business today. Providing a seamless
                      experience to your customers.
                    </p>
                    <p>
                      We also deliver websites or other software for your
                      business operations to increase productivity.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-outline-primary btn-sm" href="#!">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="card h-100 grow">
                  <div className="card-body">
                    <h3 className="card-title">Data Analytics</h3>
                    <p className="card-text">Put your data to work for you!</p>
                    <p>
                      Every business collects data from their customers in some
                      fashion. We can help you use that information to produce
                      business value.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-outline-primary btn-sm" href="#!">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="card h-100 grow">
                  <div className="card-body">
                    <h3 className="card-title">Consulting</h3>
                    <p className="card-text">
                      Let us be your partner in success!
                    </p>
                    <p>
                      You may be planning a change or just starting out, but we
                      can help guide you in making the technology choices along
                      the way.
                    </p>
                    <p>
                      We will be with you from start to finish, advising and
                      helping as needed.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-outline-primary btn-sm" href="#!">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row className="mb-5">
            <Col className="text-end">
              <span>Questions About Our Services?</span>
              <a className="btn btn-sm btn-outline-dark" href="#contact">
                Contact Us
              </a>
            </Col>
          </Row>

          <Row id="about" className="d-flex align-items-center">
            <Col lg={5}>
              <Image src={about} alt="" />
            </Col>
            <Col lg={7}>
              <h3 className="text-center">
                We Find Creative Solutions To Business Problems
              </h3>
              <hr></hr>
              <p>
                We use the latest technologies to deliver first class products
                to our customers.
              </p>
              <p>
                PBITS started to address the competitive gap between our
                customers and the big guys. We are problem solvers in nature and
                want to help you succeed. Founded in 2020, when the digital
                prescence of small to medium businesses had never been more
                important, we want to give you the tools to succeed in the
                digital space. Our solutions are completely custom tailored to{" "}
                <b>your</b> business. We understand that no one knows your
                business like you do. That&apos;s why we work along side you to
                ensure expectations are not only met but that your ideas can
                grow during the process!
              </p>
              <p>Contact us today for a free consultation!</p>
            </Col>
          </Row>
          <Row id="contact" className="mt-5 mb-5 outline-info-top">
            <Col lg={6} sm={12} className="text-center">
              <h2>How to reach us</h2>
            </Col>
            <Col lg={2} sm={4}>
              <a
                href="mailto:pbits.online@gmail.com"
                className="btn btn-outline-secondary btn-block "
              >
                <EnvelopeFill />
                Email
              </a>
            </Col>
            <Col lg={2} sm={4}>
              <a
                href="tel:4708510317"
                className="btn btn-outline-secondary btn-block"
              >
                <PhoneFill />
                Call
              </a>
            </Col>
          </Row>
        </main>
      </Container>
      <Footer />
    </>
  );
}
