import React from "react";

export const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0);
  return <p>Total of exercises: {total}</p>;
};
