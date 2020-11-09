import React from 'react';

function Completed({todo, handleChange, handleDelete}) {
    return (
        <>
         {todo.completed 
            ? <article className="container" id={todo.id}>
                <input className="checkbox" onClick={() => handleChange(todo.id)} type="checkbox" />
                <div className={todo.completed ? 'completed list-todo' : ''}>
                    {todo.todo}
                </div>
                <button className="delete" onClick={() => handleDelete(todo.id)} type='button'>Delete</button>
            </article> 
            : ''
        }
        </>
    )
}

export default Completed