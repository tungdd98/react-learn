import React from "react";
import Loading from "components/Loading/Loading";
import { useSelector } from "react-redux";

const Default = (props) => {
  const { children } = props;
  const isDisplayLoading = useSelector((state) => state.loading.display);
  return (
    <div className="wrapper">
      {isDisplayLoading && <Loading />}
      {children}
    </div>
  );
};

export default Default;
