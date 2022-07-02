import React, { useEffect, useState } from 'react';

const CompleteTAsk = () => {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/clist')
            .then(response => response.json())
            .then(data => setTodo(data))

    }, [todo]);

    // const handleDone = id =>{

    // }
    return (
        <div>
            <h1 className='text-2xl'>Your Complete Task: {todo.length} </h1>

          

        </div>
    );
};

export default CompleteTAsk;