import "./App.css";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MapTest from "./location";

function App() {
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

      <div className="sidebar">
        <div className="sidebar-icon">1</div>
        <div className="sidebar-icon">2</div>
        <div className="sidebar-icon">3</div>
        <div className="sidebar-icon">4</div>
      </div>

      <MapTest />

      {/* c5bc5e9a942be7948330f8cd95de2520 */}

      {/* <Routes>
        <Route path = "/home"/>
        <Route path = "/home"/>
        <Route path = "/home"/>
      </Routes> */}
    </div>
  );
}

export default App;
