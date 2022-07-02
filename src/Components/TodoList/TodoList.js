import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/list')
        .then(response => response.json())
        .then(data => setTodo(data))

    },[todo]);

    return (
        <div>
            <>{todo.length}</>
            {
                todo.map(list => <li  key ={list._id} list={list} >{list.data} </li>)
            }
             
        </div>
    );
};

export default TodoList;