import React, { useState, useEffect, useRef } from 'react';
import '../style/Prompt.css';

function Prompt({ isOpen, onConfirm, onCancel }) {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  // useEffect(() => {
  //   if (isOpen) {
  //     setValue('');
  //     inputRef.current.focus();
  //   }
  // }, [isOpen]);

  const handleConfirm = () => {
    onConfirm(value);
  };

  const handleCancel = () => {
    onCancel();
  };

  if (!isOpen){
    return null;
  }
  
  return (
    <div className={`prompt ${isOpen ? 'show' : ''}`}>
      <div className={`prompt-window ${isOpen ? 'show' : ''}`}>
        <label>Enter your input:</label>
        <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
        <div className="button-container">
          <button onClick={handleConfirm}>OK</button>
          {/* TODO: need to handle user input cancel */}
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Prompt;