import React, { Fragment } from "react";
import CartList from "./components/gallery/CartList";
import PhotoList from "./components/gallery/PhotoList";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { CountProvider, useCount } from "./contexts/countContext";
import { GalleryProvider } from "./contexts/gallery-context";

function CountDisplay() {
  const [count] = useCount();
  // console.log("CountDisplay ~ context", context);
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  // const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
    >
      Increment count
    </button>
  );
}

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <Fragment>
      {/* <div className="flex items-center justify-center p-5 gap-x-5">
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
    </div> */}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
