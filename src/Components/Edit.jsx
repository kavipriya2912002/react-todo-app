import React from 'react';

function Edit({ title, setTitle, description, setDescription, onClick }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Edit Todo</h2>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: 'block', marginBottom: 5 }}>Name:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '50%', padding: '8px', marginBottom: 10 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: 'block', marginBottom: 5 }}>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '50%', padding: '8px', marginBottom: 10 }}
        />
      </div>
      <button onClick={onClick} style={{ padding: '8px', margin: '10px 0', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
        Save Changes
      </button>
    </div>
  );
}

export default Edit;