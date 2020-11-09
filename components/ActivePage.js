import React from 'react';

function Active({todo, handleChange}) {
    return (
        <>
            {!todo.completed 
                ? 
                <>
                    <article className="container">
                        <input className="checkbox" onClick={() => handleChange(todo.id)} type="checkbox" />
                        <div className={todo.completed ? 'completed' : 'list-todo'}>
                            {todo.todo}
                        </div>
                    </article><hr />
                </>
                : ''
            }
        </>
    )
}

export default Active