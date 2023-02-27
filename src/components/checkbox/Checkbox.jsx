import { useEffect } from 'react';
import { useState } from 'react';
import './Checkbox.css';

function Checkbox({ text, setFilter, filter }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (filter.includes(text)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [filter]);

  function handleChange() {
    if (filter.includes(text)) {
      setFilter(
        filter.filter((item) => {
          return item !== text;
        })
      );
    } else {
      setFilter([...filter, text]);
    }
  }
  return (
    <div className="checkbox__block">
      <input
        id={text}
        type="checkbox"
        className="checkbox"
        onChange={handleChange}
        defaultChecked={isChecked}
      />
      <label htmlFor={text} className="checkbox__label">
        {text}
      </label>
    </div>
  );
}

export { Checkbox };
