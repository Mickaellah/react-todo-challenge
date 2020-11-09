import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from '../components/Form';
import NavBar from "../components/NavBar";

import All from '../components/AllPage';
import Active from '../components/ActivePage';
import Completed from '../components/CompletedPage';

function App() {
    const [ text, setText ] = useState('');
    const [ todo, setTodo ] = useState([]);
    const inputValue = useRef(null);
    

    function handleClick(event) {
        setText(event.target.value);
    }

    function newTodo() {
        setTodo([
            ...todo,
            {
                id: Date.now(),
                todo: text,
                completed: false
            }
        ]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        newTodo();
        setText('');
        inputValue.current.focus();
    }

    function handleChange(id) {
        const updateTodo = todo.map(todo => {
            return todo.id === id
                ? {...todo, completed: !todo.completed}
                : todo;
        });
        setTodo(updateTodo);
    }

    function handleDelete(id) {
        console.log(id);
        const newList = todo.filter((item) => item.id != id);

        setTodo(newList);
    }

    return (
        <div>
            <NavBar />
            <Form inputValue={inputValue} value={text} onClick={handleClick} onSubmit={handleSubmit}/>
            {todo.map((todo) => (
                <Switch key={todo.id}>
                    <Route exact path="/" key={todo.id}>
                        <All 
                            key={todo.id} 
                            todo={todo} 
                            handleChange={handleChange}/>
                    </Route>
                    <Route path="/active" key={todo.id}>
                        <Active 
                        key={todo.id}
                        todo={todo} 
                        handleChange={handleChange}/>
                    </Route>
                    <Route path="/completed" key={todo.id}>
                        <Completed 
                            key={todo.id} 
                            todo={todo} 
                            handleChange={handleChange}
                            handleDelete={handleDelete}
                            />
                    </Route>
                </Switch>
            ))}
        </div>
    )
}

export default App