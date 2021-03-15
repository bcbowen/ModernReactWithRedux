import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);

  const formRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (formRef.current && formRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={formRef} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={() => setOpen(!open)} className="ui selection dropdown ">
          <i className={`dropdown icon ${open ? "visible active" : ""}`}></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
