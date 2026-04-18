import React, { useState } from 'react';

const Experience = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Experience</h2>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-4 px-4 py-2 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}
      >
        {expanded ? 'Hide Details' : 'View Resume'}
      </button>
      {expanded && (
        <p className="text-lg mt-4">
          N/A
        </p>
      )}
    </section>
  );
};

export default Experience;