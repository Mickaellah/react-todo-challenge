import React from 'react';

import Delete from '../assets/icon-delete.svg';

function Completed({todo, handleChange, handleDelete}) {
    return (
        <>
         {todo.completed 
            ? 
            <>
                <article className="container" id={todo.id}>
                    <input className="checkbox" onClick={() => handleChange(todo.id)} type="checkbox" />
                    <div className={todo.completed ? 'completed' : 'list-todo'}>
                        {todo.todo}
                    </div>
                    <button className="delete" id={todo.id} onClick={() => handleDelete(todo.id)} type='button'><img src={Delete} alt="Delete button" /></button>
                </article><hr/>
            </>
            : ''
        }
        </>
    )
}

export default Completed