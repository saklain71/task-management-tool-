import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/list')
            .then(response => response.json())
            .then(data => setTodo(data))

    }, [todo]);

    const handleDone = (id) => {
        //e.preventDefault();

        fetch(`http://localhost:5000/list/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h1 className='text-2xl underline'>Task Number:  {todo.length}</h1>
            <div className='mt-12'>

                {
                    todo.map(list =>
                        <li
                            key={list._id}
                            list={list}
                            className="mt-2"
                        >
                            {list.data}
                            <button onClick={()=>handleDone(list._id)} className='mx-8 btn btn-info'>Done</button>
                        </li>)
                }

            </div>

        </div>
    );
};

export default TodoList;