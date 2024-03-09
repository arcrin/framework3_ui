import React, { useState, useEffect, useRef } from "react";
import "../style/AnimatedBox.css";

function AnimatedBox() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);
  return (
    <div className={`box ${isVisible ? 'show' : ''}`}>Test</div>
  )
}

export default AnimatedBox;