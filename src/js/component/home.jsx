import React, { useEffect, useState } from "react";
import SecondsCounter from "./secondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
        const timeout = setTimeout(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [seconds]);


	return (
            <div>
                <SecondsCounter seconds={seconds} />
            </div>
	);
};

export default Home;
