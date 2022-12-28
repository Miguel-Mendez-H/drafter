import * as React from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';

import DisplayCardsAgents from './components/agents/index';


function App() {
  return (
    <div>
      <Header/>
        <DisplayCardsAgents/>
      <Footer/>
    </div>
  );
}

export default App;
