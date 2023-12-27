import React from 'react';
import Edit from './Edit';

function Cards({ todo, setTodo, completed, setCompleted, onEdit }) {
  let Delete = () => {
    setTodo((prevTodo) =>
      prevTodo.filter((item) => item.id !== todo.id)
    );
  };

  return (
    <div className="col">
      <div className="card" style={{ width: '18rem', fontWeight: 500, margin: 10 }}>
        <div className="card-body">
          <h5 className="card-title">Name:{todo.title}</h5>

          <p className="card-text">Description:{todo.description}</p>
          <div className="btn-group">
            Status &nbsp;
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {todo.status ? 'Completed' : 'Not Completed'}
            </button>
            <ul className="dropdown-menu">
              <li>Completed</li>
              <li>Not Completed</li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-end w-auto">
          <div>
            <button className="btn btn-success btn-sm w-auto" onClick={onEdit}>
              Edit
            </button>
          </div>
          &nbsp;
          <div>
            <button className="btn btn-danger btn-sm w-auto" onClick={Delete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;