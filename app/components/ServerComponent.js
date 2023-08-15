import React from 'react';

const ServerComponent = ({ data }) => {
  return (
    <div>
      <h2>Server-Side Component</h2>
      <p>Data from server: {data}</p>
    </div>
  );
};

export default ServerComponent;