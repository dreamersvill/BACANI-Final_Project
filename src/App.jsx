import React, { useState } from 'react';
import './index.css';  // Make sure this imports the Tailwind styles

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white font-sans' : 'bg-gray-50 text-gray-900 font-sans'}>
      <header className="text-center py-8 bg-blue-500 text-white relative">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="max-w-6xl mx-auto p-6">
        <AboutMe darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;