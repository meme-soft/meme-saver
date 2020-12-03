import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemeForm from './components/MemeForm';
import MemeList from './components/MemeList';
import Meme from './components/Meme';
import ServerHealthIndicator from './components/ServerHealthIndicator';

const App: React.FC = () => (
  <>
    <Router>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand>
            Meme Saver
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/upload">upload</Nav.Link>
            <Nav.Link href="/memes">list</Nav.Link>
          </Nav>
          <Nav>
            <ServerHealthIndicator />
          </Nav>
        </Navbar>
      </Container>
      <Switch>
        <Route exact path="/upload" component={MemeForm} />
        <Route exact path="/memes" component={MemeList} />
        <Route exact path="/meme/:id" component={Meme} />
      </Switch>
    </Router>
  </>
);

export default App;
