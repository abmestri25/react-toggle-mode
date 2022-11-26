import React from "react";

const Switch = ({ theme, setTheme }) => {
  return (
    <div className="switch-container">
      <h4>Dark Mode</h4>
      <span className="switch square">
        <input
          onChange={() => setTheme(!theme)}
          type="checkbox"
          id="switch-square"
        />
        <label htmlFor="switch-square"></label>
      </span>
      <h4>Light Mode</h4>
    </div>
  );
};

export default Switch;
