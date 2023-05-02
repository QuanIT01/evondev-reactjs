import React, { useState } from "react";
import "./ToggleStyles.css";

// stateless function components: components nhưng không sử dụng state

/*function Toggle() {
  return <div className="toggle"></div>;
}

// stateful function components: components nhưng có sử dụng state

function Toggle2() {
  // const [count, setCount] = useState();
  return <div className="toggle"></div>;
}*/

function Toggle() {
  // 1. enabling state : useState(initialize value)
  // 2. initialize state : useState(false)
  // 3. reading state
  // 4. update state

  //const array = useState(false);
  //console.log(array); //[false , function]
  //console.log(array[0]);
  //console.log(array[1]);
  //const arr = [1, 2];
  //console.log(arr[0], arr[1]);
  //const [a,b] = [1, 2];
  // console.log(a,b)
  //initialize state: boolean(true, false), number , string , undefine, null , [] , {}
  const [on, setOn] = useState(false);
  console.log(on);
  //console.log(on, setOn);
  const handleToggle = () => {
    //setOn(callback) --> setOn(prevState ==> {} || !prevState)
    setOn((on) => {
      console.log(on);
      return !on;
    });
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          {" "}
        </div>

        <div className="toggle-off" onClick={() => setOn(false)}></div>
      </div>
    </div>
  );
}

export default Toggle;
