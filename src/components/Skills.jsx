import React from 'react';

const Skills = ({ darkMode }) => {
  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Skills</h2>
      <ul className="text-lg mt-4 list-disc list-inside">
        <li>Designer</li>
        <li>Communication</li>
      </ul>
    </section>
  );
};

export default Skills;