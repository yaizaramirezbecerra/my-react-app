// src/components/Header.js
import React from 'react';

function Header({ setActiveSection }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => setActiveSection("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("experience")}>Experience</button> {/* New Experience button */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

