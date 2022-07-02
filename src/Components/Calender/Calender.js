import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="p-5 lg:flex">
            <div><Calendar onChange={onChange} value={value}></Calendar></div>
            <div className='p-5'>
                <h1 className='text-3xl underline'>Ultimate calendar for your React app.</h1>
                <p className='m-16'>
                    Pick days, months, years, or even decades
                    Supports range selection
                    Supports virtually any language
                    No moment.
                </p>

                <p>
                <span className='underline' >Installation</span> Add React-Calendar to your project by executing <span className='text-xl'>npm install react-calendar</span> or <span className='text-xl'>yarn add react-calendar</span>.
                </p>
            </div>
        </div>
    );
};

export default Calender;