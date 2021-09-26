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
      newVotes = {
        ...votes,
        [selected]: { votes: votes[selected]["votes"] + 1, id: selected },
      };
    } else {
      newVotes = { ...votes, [selected]: { votes: 1, id: selected } };
    }
    setVotes(newVotes);
  };
  return <button onClick={handleClick}>vote</button>;
};

const MostVotes = ({ votes }) => {
  const getMostVoted = () => {
    const id = Object.values(votes).sort((a, b) => b.votes - a.votes)[0].id;
    return anecdotes[id];
  };
  return (
    <>
      <h2>Most voted anecdote</h2>
      {Object.keys(votes).length !== 0 ? (
        <p>{getMostVoted()}</p>
      ) : (
        <p>No votes</p>
      )}
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  return (
    <>
      <p>{props.anecdotes[selected]}</p>
      {votes[selected] && (
        <p>
          Has {votes[selected]["votes"]}
          {votes[selected]["votes"] > 1 ? " votes" : " vote"}
        </p>
      )}
      <Vote selected={selected} setVotes={setVotes} votes={votes} />
      <Next setSelected={setSelected} anecdotesCount={props.anecdotes.length} />
      <MostVotes votes={votes} anecdotes={props.anecdotes} />
    </>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
