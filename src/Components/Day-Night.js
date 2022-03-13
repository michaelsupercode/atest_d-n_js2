import React, { useState } from "react";
import './Day-Night.css'

const Day = () => {
    const [isDay, setDay] = useState(true)

    const Day = () => setDay(!isDay)
    return (
        <div className={isDay ? "dayItem day" : "dayItem night"}>
            <h6>it's {isDay ? "Day" : "Night"}</h6>
            <button onClick={Day}>switch into {isDay ? "Night" : "Day"}</button>
        </div>
    )
}

export default Day