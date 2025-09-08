import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // TODO: Start an interval that increases `time` every second
    // TODO: Return a cleanup function that clears the interval
  }, []);

  return (
    <section className="p-6 mt-4 rounded-2xl shadow-lg bg-yellow-100 text-center">
      <p className="text-xl">Time passed: <strong>{time}</strong> seconds</p>
    </section>
  );
};

export default Timer;
