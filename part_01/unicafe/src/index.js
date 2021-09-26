import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Feedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <>
      <p>Feedback:</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </>
  );
};
const Statistics = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <>
          <Statistics text="Good" value={good} />
          <Statistics text="Neutral" value={neutral} />
          <Statistics text="Bad" value={bad} />
          <Feedback good={good} neutral={neutral} bad={bad} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
