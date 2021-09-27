import React from "react";
import ReactDOM from "react-dom";

const Header = ({ name }) => <h1>{name}</h1>;
const Part = ({ key, part }) => (
  <li key={key}>
    {part.name}: {part.exercises}
  </li>
);
const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

const Course = ({ name, parts }) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10, id: 1 },
      { name: "Using props to pass data", exercises: 7, id: 2 },
      { name: "State of a component", exercises: 14, id: 3 },
    ],
  };

  return (
    <div>
      <Course name={course.name} parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
