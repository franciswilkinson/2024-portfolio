import React, { useState } from 'react';
import './style.css';

function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    Name: '',
    message: '',
    email: '',
  });

  const handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === 'email') {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!formData.Name || !formData.email) {
      alert('Fill out your name and email address please!');
    } else if (formData.email.length < 3) {
      alert(
        `I know that isn't an email... ${formData.Name}`
      );
    } else {
      alert(`Thank you ${formData.Name}`);
    }

    setFormData({
      firstName: '',
      message: '',
      email: '',
    });
  };

  return (
    <div className='container'>
      <p>
        Hello {formData.Name}
      </p>
      <form className="form">
        <input className="form-control" 
          value={formData.Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input className="form-control" 
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input className="form-control"
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          type="text-area"
          placeholder="Message"
        />
        <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
