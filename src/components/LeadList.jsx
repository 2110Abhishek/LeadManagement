import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('https://leadmanagementbackend-quvr.onrender.com/api/leads')
      .then(res => setLeads(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>📄 Lead List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.source}</td>
              <td>
                <span className={`status-badge status-${lead.status}`}>
                  {lead.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadList;
