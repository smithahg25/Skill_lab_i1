import React from 'react';
import { Navbar, Nav, Breadcrumb, Carousel, Card, Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          Your Website
        </Navbar.Brand>
        {/* Navbar content */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {/* Navbar links */}
            <Nav.Link href="#">Link 1</Nav.Link>
            <Nav.Link href="#">Link 2</Nav.Link>
            <Nav.Link href="#">Link 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item active>Page</Breadcrumb.Item>
      </Breadcrumb>

      {/* Content */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image1.jpg"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Slide 1 Title</h3>
            <p>Slide 1 description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image2.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Slide 2 Title</h3>
            <p>Slide 2 description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="card-image1.jpg" />
              <Card.Body>
                <Card.Title>Card 1 Title</Card.Title>
                <Card.Text>Card 1 description</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="card-image2.jpg" />
              <Card.Body>
                <Card.Title>Card 2 Title</Card.Title>
                <Card.Text>Card 2 description</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="card-image3.jpg" />
              <Card.Body>
                <Card.Title>Card 3 Title</Card.Title>
                <Card.Text>Card 3 description</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;