// 헤더 설정
import "../App.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary main-navbar">
        <Container>
          <Navbar.Brand href="#home">RouteRover</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">경로 탐색 및 안내</Nav.Link>
              <Nav.Link href="#pricing">여행지 추천</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </div>
  );
}
