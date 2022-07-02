import React, { useEffect, useRef, useState } from 'react';
import { FcAddDatabase } from "react-icons/fc";


const Home = () => {
    const [input, setInput] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }
    const addbtn = e => {
        e.preventDefault();

        fetch('http://localhost:5000/lists',{
            method: 'POST',
            body : JSON.stringify({
                data : input,
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
    //console.log(input);
    return (
        <form>
            <div className='flex justify-center align-middle'>
                <FcAddDatabase size={35} />
                <input
                    className='border-black rounded border-2 mx-2'
                    type="text"
                    onChange={handleChange}
                    placeholder='Make a todo list'
                    value={input}
                    ref={inputRef}
                    maxLength={300}
                    autoComplete="off"
                />
                <button onClick={addbtn} className='btn btn-info'>Add</button>
            </div>
            <div>
                
            </div>
        </form>
    );
};

export default Home;