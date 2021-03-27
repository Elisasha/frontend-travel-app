import React, { useState } from "react";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

export function Calendar(props) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);

    return (
        <div className="calendar">
            <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => { setStartDate({ startDate }); setEndDate({ endDate }) }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => { setFocusedInput(focusedInput) }}
            />
        </div>
    );
}