import React from 'react';
import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Counter from './components/Counter'
import Footer from './components/Footer'
import WrapperPlaylist from './components/WrapperPlaylist'

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  border: solid 1px white;
`
const FourOFour = styled.h1`
  color: rgb(194, 194, 194);
  text-align: center;
  font-size: 5rem;
  text-transform: uppercase;
`

function App() {
  return (
    <Router>
      <Container>
        <Nav />
        <Switch>
          <Route exact path='/' component={Counter} />
          <Route exact path='/playlists' component={WrapperPlaylist} />
          <Route render={() => <FourOFour>404: not found</FourOFour>} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
