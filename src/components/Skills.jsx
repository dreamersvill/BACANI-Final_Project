import React from 'react';

const Skills = ({ darkMode }) => {
  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Skills</h2>
      <ul className="text-lg mt-4 list-disc list-inside">
        <li>Designer</li>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem-solving</li>
        <li>Adaptability</li>
      </ul>
      <button className={`mt-4 px-4 py-2 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}>View Projects</button>
    </section>
  );
};

export default Skills;