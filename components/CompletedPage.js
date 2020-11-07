import React from 'react';

function Completed({todo, handleChange}) {
    return (
        <>
         {todo.completed 
            ? <article className="container">
                <input className="checkbox" onClick={() => handleChange(todo.id)} type="checkbox" />
                <div className={todo.completed ? 'completed list-todo' : ''}>
                    {todo.todo}
                </div>
            </article> 
            : ''
        }
        </>
    )
}

export default Completed