import React from "react";
import { useAccordion } from "./accordion-context";

//specialized compononets
const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
  return (
    <div
      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer header"
      onClick={handleToggleShow}
    >
      <span>{children}</span>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
