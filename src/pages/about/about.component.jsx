import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
    <br /> <br /><br />
      <div className="about">
        <h1 className="pt-3 text-center font-details-b pb-3">ABOUT ME</h1>
        <Container>
           <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Joana Canonigo</strong><br />
                <br />A passionate programmer and a Traveler, born and raised in Manila, Philipines. I am a Full Stack Web Developer with React.js, Express.js, Node.js as my tech stack.
                <br /><br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-danger">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                   <div>
                    <a href="https://drive.google.com/file/d/1Zl2F5iZzagfnhPQrw-Ru_WbQWYzt_JVH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://gitlab.com/tuitt/students/batch68/joana-canonigo" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        Gitlab
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/joana-canonigo/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
           <br /> <br />

        </Container>
      </div>
    </div>

  );
};

export default About;