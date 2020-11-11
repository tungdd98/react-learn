import React from "react";

const Auth = (props) => {
  const { children } = props;
  return (
    <div className="wrapper">
      <h1>Admin layout</h1>
      {children}
    </div>
  );
};

export default Auth;
