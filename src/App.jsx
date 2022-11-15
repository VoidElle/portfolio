import React from 'react';

import Intro from "./components/Intro.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;