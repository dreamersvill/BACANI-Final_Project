import React, { useState } from 'react';

const Education = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`my-12 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded p-4`}>
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Education</h2>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-4 px-4 py-2 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}
      >
        {expanded ? 'Hide Details' : 'View Certificates'}
      </button>
      {expanded && (
        <ul className="text-lg mt-4 list-disc list-inside">
          <li>Dona Nicasia Juco Puyat elem. School 2010</li>
          <li>Dona Aurora national High School 2015</li>
          <li>University of Baguio 2022</li>
          <li>University of the cordilleras 2023-present</li>
        </ul>
      )}
    </section>
  );
};

export default Education;