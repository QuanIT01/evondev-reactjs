import React from "react";
import Dropdown from "./components/advanced-react/inversion-of-control/Dropdown";

const options = [
  {
    title: "Frontend Developer",
    onClick: () => {},
  },
  {
    title: "Backend Developer",
    onClick: () => {},
  },
  {
    title: "FullStack Developer",
    onClick: () => {},
  },
];

const App = () => {
  return (
    <div>
      <Dropdown options={options} visibleSearch visibleIconCheck></Dropdown>
    </div>
  );
};

export default App;
