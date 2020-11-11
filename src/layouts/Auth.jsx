import React from "react";

const Auth = (props) => {
  const { children } = props;
  return <div className="wrapper min-vh-100 flex-center">{children}</div>;
};

export default Auth;
