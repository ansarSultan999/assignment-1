import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
  };

  return (
    <div className='main-home'>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
