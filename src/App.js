import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
import Main from './components/main'
import Header from './components/header'
import SideBar from './components/sidebar'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <SideBar> </SideBar>
      <Container>
        <Row>
          <Col>
            <Main></Main>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
