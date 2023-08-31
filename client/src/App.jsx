import { useState } from 'react';
import { useEffect } from "react";
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then((res) => {
        res.json()
        .then((data) => {setTodo(data.todo)
         setTodo(data);
        });
      });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };

  return (
    <>
      <div className='container'>
        <div className='box'>
          <h2>To Do List</h2>
          <form onSubmit={handleForm}>
            <input type='text' 
              placeholder='Write Here...' 
              id='inputBx' 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            {/* <button
              type="submit"
              className="btn"
            >
              Add Todo
            </button> */}
          </form>
          <div>
            <ul id='list'>
              {todoList.map((singleTodo, index) => {
                return (
                  <li
                    key={index}
                    className=""
                  >
                    {singleTodo.todoName}{" "}
                    <span
                      onClick={() => deleteTodo(singleTodo.todoName)}
                      className="i"
                    >
                      <i></i>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
