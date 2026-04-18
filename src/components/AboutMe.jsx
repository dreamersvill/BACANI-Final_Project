import React from 'react';

const AboutMe = ({ darkMode }) => {
  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>About Me</h2>
      <p className="text-lg mt-4">
        I am a passionate web developer who enjoys building clean and user-friendly applications.
      </p>
    </section>
  );
};

export default AboutMe;