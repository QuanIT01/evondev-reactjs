import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

const TooltipAdvanced = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };

  const handleMouseLease = () => {
    setVisible(false);
  };
  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} classNames="fade" timeout={300} unmountOnExit>
        {(status) => (
          <Portal overlay={false} visible={status !== "exited"}>
            <p
              className="absolute inline-block p-3 text-white -translate-y-full bg-black rounded-xl max-w-[200px] -translate-x-2/4 tooltip transition-all z-[9999]"
              style={{
                top: coords.top - coords.height / 2 + window.screenY,
                left: coords.left + coords.width / 2,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLease}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvanced;
