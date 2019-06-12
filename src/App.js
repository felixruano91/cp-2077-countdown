import React from 'react';
import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import Counter from './components/Counter'
import Footer from './components/Footer'
import WrapperPlaylist from './components/WrapperPlaylist'

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  border: solid 1px white;
`

function App() {
  return (
    <Container>
      <Nav />
      <Counter />
      <Footer />
    </Container>
  );
}

export default App;
