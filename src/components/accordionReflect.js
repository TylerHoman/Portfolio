import { useState, useRef, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default function AccordionReflect({ data }) {
  const [accordionOpen, setAccordionOpen] = useState(true);

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (accordionOpen && ref.current && !ref.current.contains(event.target)) {
        setAccordionOpen(true);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [accordionOpen]);
  function handleBlurOnClick(e) {
    e.target.blur();
  }
  return (
    <>
      <section className="reflect-accordion">
        <button
          className="reflect-accordion-toggle"
          onClick={() => setAccordionOpen((prev) => !prev)}
        >
          {data.reflectionTitle}
          {accordionOpen ? (
            <FiPlus style={{ width: "20px", height: "20px" }} />
          ) : (
            <FiMinus
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          )}
        </button>
        <div
          className={`menu-accordion-reflect${
            accordionOpen ? " show-accordion-reflect" : ""
          }`}
        >
          <p>{data.reflectionText}</p>
        </div>
      </section>
    </>
  );
}
