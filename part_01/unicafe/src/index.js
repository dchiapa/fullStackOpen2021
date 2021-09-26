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
      {total > 0 ? (
        <>
          <p>
            <strong>Feedback:</strong>
          </p>
          <p>
            <strong>Total:</strong> {total}
          </p>
          <p>
            <strong>Average:</strong> {average}
          </p>
          <p>
            <strong>Positive:</strong> {positive} %
          </p>
        </>
      ) : (
        <p>
          <strong>No feedback given</strong>
        </p>
      )}
    </>
  );
};
const Statistics = ({ good, neutral, bad }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <Feedback good={good} neutral={neutral} bad={bad} />
  </>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
