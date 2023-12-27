import React, { useState } from 'react';
import Cards from './Cards';
import Edit from './Edit';

function TopBar({ todo, setTodo, completed, setCompleted }) {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [selectedTodo, setSelectedTodo] = useState(null);

  const handleDrop = (e) => {
    let gotcha = e.target.innerText;
    setCompleted(gotcha === 'Completed' ? 'Not Completed' : 'Completed');
  };

  const handleClick = () => {
    if (selectedTodo) {
      // Editing existing todo
      setTodo((prevTodos) =>
        prevTodos.map((t) =>
          t.id === selectedTodo.id ? { ...t, title, description } : t
        )
      );
      setSelectedTodo(null);
    } else {
      // Adding new todo
      let id = todo.length ? todo[todo.length - 1].id + 1 : 1;
      let newArray = [...todo];
      newArray.push({
        id,
        title,
        description,
      });
      setTodo(newArray);
    }

    // Reset input fields
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <h1 className="text-center HeaderColor">My Todo</h1>
      <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <input
                placeholder="Name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <input
                placeholder="Todo Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <button onClick={handleClick}>Add todo</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-5">
        <div>
          <h6 className="fw-bold content">My Todo's</h6>
        </div>
        <div>
          <h4 className="fw-bold">
            Status Filter :{' '}
            <span>
              {' '}
              <div className="btn-group">
                <button
                  className="btn btn-success btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {completed}
                </button>
                <ul className="dropdown-menu">
                  <a onClick={handleDrop}>Completed</a>
                  <a onClick={handleDrop}>Not Completed</a>
                </ul>
              </div>
            </span>
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {todo.map((e, i) => (
            <Cards
              key={i}
              completed={completed}
              setCompleted={setCompleted}
              todo={e}
              setTodo={setTodo}
              onEdit={() => {
                setSelectedTodo(e);
                setTitle(e.title);
                setDescription(e.description);
              }}
            />
          ))}
        </div>
      </div>
      {selectedTodo && (
        <Edit
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onClick={handleClick}
        />
      )}
    </>
  );
}

export default TopBar;