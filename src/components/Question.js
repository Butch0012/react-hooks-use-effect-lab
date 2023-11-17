import React, { useState, useEffect } from 'react';

const Question = ({ question, answers, onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Decrease timeRemaining by 1 second
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    // Cleanup function for useEffect
    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining]); // Add timeRemaining as a dependency

  useEffect(() => {
    // Check if timeRemaining has reached 0
    if (timeRemaining === 0) {
      // Reset timeRemaining to 10 seconds
      setTimeRemaining(10);
      // Call onAnswered callback with a value of false
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]); // Add timeRemaining and onAnswered as dependencies

  return (
    <div>
      <h2>{question && question.prompt}</h2>
      <ul>
        {answers && answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
};

export default Question;
