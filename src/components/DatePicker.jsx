import React, { useState } from 'react'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

const DatePicker = ({value, onChange}) => {
    return (
        <div className='relative' aria-placeholder='Click to Select Date and Time'>
            <Datetime value={value} onChange={onChange} className='appearance-none shadow border rounded-xl py-3 px-2 mb-4 text-gray-700' placeHolder="Titt" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
        </div>
    )
}

export default DatePicker