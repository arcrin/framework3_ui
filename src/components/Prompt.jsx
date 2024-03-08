import React, { useState, useEffect, useRef } from 'react';
import '../style/Prompt.css';

function Prompt({ isOpen, onConfirm, onCancel }) {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setValue('');
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm(value);
  };

  const handleCancel = () => {
    onCancel();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="prompt">
      <div className="prompt-window">
        <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={handleConfirm}>OK</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Prompt;