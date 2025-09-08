import React, { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    //  TODO: Set the message to "Welcome to the site!" when this mounts
  }, []);

  return (
    <section className="p-6 mt-9 rounded-2xl shadow-lg bg-blue-100 text-center">
      <h1 className="text-3xl font-bold">{message || "..."}</h1>
    </section>
  );
};

export default WelcomeMessage;
