import React, { useState } from "react";

export const AdvicePage = () => {
  const [advice, setadvice] = useState([]);
  const generateAdvice = async () => {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    if (advice.length === 3) {
      setadvice([data.slip.advice]);
    } else setadvice((prev) => [...prev, data.slip.advice]);
  };

  return (
    <div>
      <button onClick={generateAdvice}>getAdvice</button>

      {advice.map((advices, index) => (
        <div key={index}>{advices}</div>
      ))}
    </div>
  );
};
