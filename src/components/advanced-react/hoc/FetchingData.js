import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  return (
    <div>
      {/*{data.map((item) => (
        <div key={item}></div>
      ))}*/}
    </div>
  );
};

export default withLoading(
  FetchingData,
  "http://hn.algolia.com/api/v1/search?query=react"
);
