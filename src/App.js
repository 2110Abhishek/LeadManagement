import React from 'react';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>🚀 Lead Management Portal</h1>
      <div className="card">
        <LeadForm />
      </div>
      <div className="card">
        <LeadList />
      </div>
    </div>
  );
};

export default App;
