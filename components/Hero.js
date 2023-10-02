import React from "react";
import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                TurboTurtle{" "}
                <span className="text-primary font-weight-medium">TTURT</span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                is a next-generation meme token inspired by the success of the
                Turbo (TURBO) token. With a focus on simplicity, strong
                marketing, and an engaged community, TurboTurtle aims to achieve
                exponential growth and a high-ranking position in the
                cryptocurrency market.
              </p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/04.png"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
