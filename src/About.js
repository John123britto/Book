import React, { useState } from 'react';

const About = () => {
  const [index, setIndex] = useState(0);
  const [a, seta] = useState([
    {
      id: 1,
      question: "What is 2 + 2?",
      choices: ["3", "4", "5", "6"],
      answer: 1, // Correct answer index (0-based)
    },
    {
      id: 2,
      question: "What is 2 + 3?",
      choices: ["3", "4", "5", "6"],
      answer: 2, // Correct answer index (0-based)
    },
    {
      id: 3,
      question: "What is 2 + 4?",
      choices: ["3", "4", "5", "6"],
      answer: 3, // Correct answer index (0-based)
    },
  ]);
  const [s, setSelectedOption] = useState(null); // Storing the selected index
  const [m, setm] = useState(0); // Score

  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value, 10)); // Parse selected index
  };

  const handleIncrement = () => {
    if (index < a.length - 1) {
      if (s === a[index].answer) {
        setm(m + 1); // Increment score if the answer is correct
      }
      setSelectedOption(null); // Reset selected option for the next question
      setIndex(index + 1); // Move to the next question
    }
  };

  const handleSubmit = () => {
    if (s === a[index].answer) {
      setm(m + 1); // Increment score if the answer is correct for the last question
    }
    alert(`Quiz Submitted! Your score is ${m + (s === a[index].answer ? 1 : 0)}`);
  };

  return (
    <div>
      <h1>Question {a[index].id}</h1>
      <h3>{a[index].question}</h3>
      <ul>
        {a[index].choices.map((choice, idx) => (
          <label key={idx}>
            <input
              type="radio"
              value={idx}
              checked={s === idx}
              onChange={handleOptionChange}
            />
            {choice}
          </label>
        ))}
      </ul>
      {index === a.length - 1 ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleIncrement}>Next</button>
      )}
    </div>
  );
};

export default About;
