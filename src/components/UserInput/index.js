import React from "react";

const UserInput = ({ changedValue, currentName }) => {
  return <input type="text" onChange={changedValue} value={currentName} />;
};

export default UserInput;
