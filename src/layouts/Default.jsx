import React from "react";
import Loading from "components/Loading/Loading";
import { useSelector } from "react-redux";

const Default = ({ children }) => {
  const isDisplayLoading = useSelector((state) => state.loading.display);
  return (
    <div className="wrapper">
      {isDisplayLoading && <Loading />}
      {children}
    </div>
  );
};

export default Default;
