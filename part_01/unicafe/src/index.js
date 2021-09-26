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
      <tr>
        <td>Total </td>
        <td>{total}</td>
      </tr>
      <tr>
        <td>Average </td>
        <td>{average}</td>
      </tr>
      <tr>
        <td>Positive </td>
        <td>{positive} %</td>
      </tr>
    </>
  );
};
const Statistics = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
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
        <table>
          <tbody>
            <Statistics text="Good" value={good} />
            <Statistics text="Neutral" value={neutral} />
            <Statistics text="Bad" value={bad} />
            <Feedback good={good} neutral={neutral} bad={bad} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
