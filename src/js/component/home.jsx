import React, { useEffect, useState } from "react";
import SecondsCounter from "./secondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); 

    const resetTimer = () => {
        setSeconds(0);
    };

    return (
        <div>
            <SecondsCounter seconds={seconds} />
            <button onClick={resetTimer} className="reset-button">
                Reset Timer
            </button>
        </div>
    );
};

export default Home;
