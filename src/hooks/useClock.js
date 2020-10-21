import { useEffect, useState } from "react";
import { formatDate } from "../utils/helpers";

const useClock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            setTime(formatDate(now));
        }, 1000);
        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    return {
        time,
    };
};

export default useClock;
