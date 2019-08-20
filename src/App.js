import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Squad from './components/Squad'


function App() {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 12 }}>
          <Squad/>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <p className="text-center">Lingua Squadra is not affiliated with, sponsored by, or endorsed by GitHub.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
