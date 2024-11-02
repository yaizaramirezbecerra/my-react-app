// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience'; // Import the new Experience component
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "experience": // Add case for experience
        return <Experience />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
