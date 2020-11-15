import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import MemeForm from './components/MemeForm';
import ServerHealthIndicator from './components/ServerHealthIndicator';

const App: React.FC = () => (
  <>
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Meme Saver</Navbar.Brand>
      </Container>
    </Navbar>
    <Container style={{ maxWidth: 500 }}>
      <ServerHealthIndicator />
      <MemeForm />
    </Container>
  </>
);

export default App;
