import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import './Calendar.css';


export function Calendar({ startDate, endDate, setStartDate, setEndDate }) {
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    return (
        <div className="App pt-4">
            <DateRangePicker 
                startDate={startDate}
                startDateId="tata-start-date"
                endDate={endDate}
                endDateId="tata-end-date"
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            />
        </div>
    );
}