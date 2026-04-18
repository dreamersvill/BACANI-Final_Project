import React, { useState } from 'react';

const Experience = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`my-12 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded p-4`}>
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Experience</h2>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-4 px-4 py-2 ${darkMode ? 'bg-purple-300' : 'bg-purple-200'} text-purple-700 rounded hover:bg-purple-400 active:bg-purple-500`}
      >
        {expanded ? 'Hide Details' : 'View Resume'}
      </button>
      {expanded && (
        <div className="mt-4">
          <p className="text-lg mt-4">
            On the job Training, University of Baguio, Assistant Secretary
          </p>
        </div>
      )}
    </section>
  );
};

export default Experience;