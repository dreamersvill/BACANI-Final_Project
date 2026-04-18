import React from 'react';

const Contact = ({ darkMode }) => {
  return (
    <section className="my-12">
      <h2 className={`text-3xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Contact</h2>
      <p className="text-lg mt-4">
        Phone: 09289329209
      </p>
      <p className="text-lg mt-2">
        Email: bacaniangelamae2004@gmail.com
      </p>
      <button className={`mt-4 px-4 py-2 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded hover:bg-blue-700`}>Send Message</button>
    </section>
  );
};

export default Contact;