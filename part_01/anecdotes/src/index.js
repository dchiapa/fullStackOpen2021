import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Next = ({ setSelected, anecdotesCount }) => {
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotesCount));
  };
  return <button onClick={handleClick}>next anecdote</button>;
};
const Vote = ({ selected, votes, setVotes }) => {
  const handleClick = () => {
    let newVotes;
    if (votes[selected]) {
      newVotes = { ...votes, [selected]: votes[selected] + 1 };
    } else {
      newVotes = { ...votes, [selected]: 1 };
    }
    setVotes(newVotes);
  };
  return <button onClick={handleClick}>vote</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  return (
    <>
      <p>{props.anecdotes[selected]}</p>
      {votes[selected] && (
        <p>
          Has {votes[selected]} {votes[selected] > 1 ? "Votes" : "vote"}
        </p>
      )}
      <Vote selected={selected} setVotes={setVotes} votes={votes} />
      <Next setSelected={setSelected} anecdotesCount={props.anecdotes.length} />
    </>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
