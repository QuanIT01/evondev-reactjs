import React from "react";
import { AccordionProvider } from "./accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

//container component
const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
