import './App.css';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

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

      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/detail">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path = "/home"/>
        <Route path = "/home"/>
        <Route path = "/home"/>
      </Routes>
    </div>
  );
}

export default App;
