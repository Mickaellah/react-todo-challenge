import React from 'react';

function Form({ inputValue, value, onClick, onSubmit }) {
    return (
        <section>
            <form className="add_form" onSubmit={onSubmit}>
                <input ref={inputValue} type="text" className="input_form" value={value} placeholder="add details" onChange={onClick} />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default Form