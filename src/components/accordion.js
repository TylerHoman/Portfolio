import { useState, useRef, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default function Accordion({ data }) {
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
      <section className="process-accordion">
        <button
          className="accordion-toggle"
          onClick={() => setAccordionOpen((prev) => !prev)}
        >
          {data.processTitle}
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
          className={`menu-accordion${accordionOpen ? " show-accordion" : ""}`}
        >
          <p>{data.processText}</p>
          {data.processImages.map((path, index) => {
            return (
              <div key={path}>
                <img src={process.env.PUBLIC_URL + `${path}`} alt={path} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
