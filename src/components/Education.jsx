import React from 'react';

const Education = ({ darkMode }) => {
  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Education</h2>
      <ul className="text-lg mt-4 list-disc list-inside">
        <li>Dona Nicasia Juco Puyat elem. School 2010</li>
        <li>Dona Aurora national High School 2015</li>
        <li>University of Baguio 2022</li>
        <li>University of the cordilleras 2023-present</li>
      </ul>
    </section>
  );
};

export default Education;