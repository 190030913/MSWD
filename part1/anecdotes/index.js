import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Heading = (props) => <h2>{props.text}</h2>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Anecdote = (props) => {
  return (
    <>
      <b>" {props.anecdote} "</b>
      <br />
      <br />
      Number of votes this anecdote has : {props.votes}
      <br />
    </>
  );
};

const MostVoted = (props) => {
  return (
    <>
      <Heading text="Most Voted Anecdote" />
      {!props.hasVotes && <>Anecdotes have been not voted yet .</>}
      {props.hasVotes && (
        <Anecdote anecdote={props.anecdote} votes={props.votes} />
      )}
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));
  const [hasVotes, setHasVotes] = useState(false);

  const getRandomIdx = (length) => {
    return Math.floor(Math.random() * length);
  };

  const setNewRandomAnecdote = () => {
    let randomAnecdoteIdx;

    do {
      randomAnecdoteIdx = getRandomIdx(props.anecdotes.length);
    } while (randomAnecdoteIdx === selected);

    setSelected(randomAnecdoteIdx);
  };

  const incrementVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setHasVotes(true);
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case "next":
        setNewRandomAnecdote();
        break;
      case "vote":
        incrementVote();
        break;
      default:
        break;
    }
  };

  const maxVote = votes.reduce(
    (acc, num, idx) => {
      if (num > acc.num) {
        acc.num = num;
        acc.idx = idx;
      }

      return acc;
    },
    { num: 0 }
  );

  const maxVotedAnecdote = anecdotes[maxVote.idx];

  return (
    <div>
      <Heading text="Anecdote of the Day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <br />
      <Button onClick={() => handleButtonClick("vote")} text="Vote" />
      <Button onClick={() => handleButtonClick("next")} text="Next Anecdote" />
      <MostVoted
        hasVotes={hasVotes}
        anecdote={maxVotedAnecdote}
        votes={maxVote.num}
      />
    </div>
  );
};

const anecdotes = [
  "The expert in anything was once a beginner.",
  "Today a reader.Tomorrow a leader.",
  "Dreams don't work unless you do.",
  "If debugging is the process of removing software bugs,then programming must be the process of putting them in",
  "Everybody in this country should learn to program a computer,because it teaches you how to think.",
  "Controlling complexity is the essence of computer programming.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
export default App