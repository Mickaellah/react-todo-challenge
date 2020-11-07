import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from '../components/Form';
import NavBar from "../components/NavBar";

import All from '../components/AllPage';
import Active from '../components/ActivePage';
import Completed from '../components/CompletedPage';

function App() {
    const [ text, setText ] = useState('');
    const [ todo, setTodo ] = useState([]);
    console.log(text);
    console.log(todo);
    function handleClick(event) {
        console.log(event.target.value);
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
    }

    function handleChange(id) {
        const updateTodo = todo.map(todo => {
            return todo.id === id
                ? {...todo, completed: !todo.completed}
                : todo;
        });
        setTodo(updateTodo);
    }

    return (
        <div>
            <NavBar />
            <Form value={text} onClick={handleClick} onSubmit={handleSubmit}/>
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
                            />
                    </Route>
                </Switch>
            ))}
        </div>
    )
}

export default App