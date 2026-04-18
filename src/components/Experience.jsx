import React from 'react';

const Experience = ({ darkMode }) => {
  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Experience</h2>
      <p className="text-lg mt-4">
        N/A
      </p>
    </section>
  );
};

export default Experience;