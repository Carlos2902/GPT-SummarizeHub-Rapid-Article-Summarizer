import React from 'react'
import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';

function App() {
  return (
    <main>
      <div className="main">
        {/* gradient background */}
        <div className="gradient"/>

        <div className="app">
            <Hero/>
            <Demo/>
        </div>

      </div>
    </main>
  )
}

export default App
 