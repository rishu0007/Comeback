import React, { useState } from 'react'

const TodoList = () => {

  const [todo, SetTodo] = useState([]);
  const [input, setInput] = useState('');

  const addEvent = (e) => {
    setInput(e.target.value);
  }

  const addTodo = () => {
    SetTodo([...todo, input]);
    setInput('');
  }

  return (
    <div style={{marginTop: '50px'}}>
      <input type="text" placeholder='Enter Todo' onChange={addEvent}/>
      <button onClick={addTodo}>Add</button>

      <ul>
        {todo.map((t) => (
          <li key={Math.random()}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList