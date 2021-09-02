import { Header } from "../components/Header";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Footer } from "../components/Footer";

import solutions from "../public/solutions.png";
import about from "../public/about.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <div className="row gx-4 gx-lg-5 align-items-center my-5">
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
          <div className="outline-info">
            <Row>
              <Col>
                <h2 className="text-center">What We Offer</h2>
              </Col>
            </Row>

            <div className="row gx-4 gx-lg-5" id="services">
              <div className="col-md-4 mb-5">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">Card One</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem magni quas ex numquam, maxime minus quam molestias
                      corporis quod, ea minima accusamus.
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
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">Card Two</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod tenetur ex natus at dolorem enim! Nesciunt pariatur
                      voluptatem sunt quam eaque, vel, non in id dolore
                      voluptates quos eligendi labore.
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
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">Card Three</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem magni quas ex numquam, maxime minus quam molestias
                      corporis quod, ea minima accusamus.
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
          <Row id="contact">
            <Col className="d-flex align-items-center">
              <h2>How to reach us</h2>
            </Col>
            <Col>
              <p>
                Lorem epsume oiw;ofnldscidfn ile
                lkajsdnkajdfnalkjdnaekndjnelknekscnslejk
                nkljadsnklasjbdalksjdbaslkjdbLorem epsume oiw;ofnldscidfn ile
                lkajsdnkajdfnalkjdnaekndjnelknekscnslejk
                nkljadsnklasjbdalksjdbaslkjdbLorem epsume oiw;ofnldscidfn ile
                lkajsdnkajdfnalkjdnaekndjnelknekscnslejk
                nkljadsnklasjbdalksjdbaslkjdbLorem epsume oiw;ofnldscidfn ile
                lkajsdnkajdfnalkjdnaekndjnelknekscnslejk
                nkljadsnklasjbdalksjdbaslkjdb
              </p>
            </Col>
          </Row>
          <Row id="about">
            <Col>
              <Image src={solutions} alt="" />
            </Col>
            <Col>
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
        </main>
      </Container>
      <Footer />
    </>
  );
}
