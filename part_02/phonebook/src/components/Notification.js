import React from "react";

export const Notification = ({ errorState, message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div
      className={
        errorState
          ? "notification__message error"
          : "notification__message success"
      }
    >
      {message}
    </div>
  );
};
