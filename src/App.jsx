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
    <div className={darkMode ? 'bg-purple-900 text-white font-sans' : 'bg-purple-100 text-gray-900 font-sans'}>
      <header className="text-center py-8 bg-purple-500 text-white relative">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 px-4 py-2 bg-purple-200 text-purple-700 rounded hover:bg-purple-300 active:bg-purple-400"
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