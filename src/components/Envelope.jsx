import React, { useState } from 'react';
import './Envelope.css'; // Aşağıda CSS örneğini verdim

export default function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(onOpen, 600); // kapak açılma süresiyle uyumlu
    }
  };

  return (
    <div className="envelope-container" onClick={handleClick}>
      <div className={`envelope-flap ${isOpening ? 'open' : ''}`} />
      <div className="envelope-body" />
    </div>
  );
}
