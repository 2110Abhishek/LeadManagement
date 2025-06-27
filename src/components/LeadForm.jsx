import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', source: '', status: 'New'
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://leadmanagementbackend-quvr.onrender.com/api/leads', form);
      alert('✅ Lead Added Successfully!');
      window.location.reload();
    } catch (err) {
      alert('❌ Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>📝 Add New Lead</h2>
      <div className="form-grid">
        <input name="name" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email Address" required onChange={handleChange} />
        <input name="phone" type="tel" placeholder="Phone Number" required onChange={handleChange} />
        <select name="source" required onChange={handleChange}>
          <option value="">Select Source</option>
          <option value="Website">Website</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Referral">Referral</option>
        </select>
        <select name="status" required onChange={handleChange}>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>
      </div>
      <button type="submit">➕ Submit Lead</button>
    </form>
  );
};

export default LeadForm;
