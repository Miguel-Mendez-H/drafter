import * as React from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import DisplayAgents from './components/agents/index';

function App() {
  return (
    <div>
      <Header/>
        <DisplayAgents/>
      <Footer/>
    </div>
  );
}

export default App;
