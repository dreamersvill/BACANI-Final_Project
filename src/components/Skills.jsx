import React, { useState } from 'react';

const Skills = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`my-12 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded p-4`}>
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Skills</h2>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-4 px-4 py-2 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}
      >
        {expanded ? 'Hide Details' : 'View Projects'}
      </button>
      {expanded && (
        <ul className="text-lg mt-4 list-disc list-inside">
          <li>Designer</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-solving</li>
          <li>Adaptability</li>
        </ul>
      )}
    </section>
  );
};

export default Skills;