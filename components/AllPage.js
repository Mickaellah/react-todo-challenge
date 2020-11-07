import React from 'react';

function All({todo, handleChange}) {
    return (
        <article className="container">
            <input className="checkbox" onClick={() => handleChange(todo.id)} type="checkbox" />
            <div className={todo.completed ? 'completed list-todo' : ''}>
                {todo.todo}
            </div>
        </article>
    )
}

export default All