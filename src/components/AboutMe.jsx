import React, { useState } from 'react';

const AboutMe = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>About Me</h2>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-4 px-4 py-2 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}
      >
        {expanded ? 'Hide Details' : 'Learn More'}
      </button>
      {expanded && (
        <p className="text-lg mt-4">
          I am a passionate IT student who enjoys exploring the world of technology and design. With a strong interest in both fields, I am constantly seeking opportunities to learn and grow. I have a keen eye for aesthetics and a knack for creating visually appealing designs, while also being fascinated by the technical aspects of IT. I am eager to combine my creativity and technical skills to contribute to innovative projects and make a positive impact in the industry.
        </p>
      )}
    </section>
  );
};

export default AboutMe;