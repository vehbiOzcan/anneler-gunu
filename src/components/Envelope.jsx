import React, { useState } from 'react';
import './Envelope.css';

export default function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      // Kapak açılma + mektup fırlatma animasyonu için yeterli süre
      setTimeout(onOpen, 1800); // Biraz daha uzun süre
    }
  };

  return (
    <div
      className={`envelope-container ${isOpening ? 'opening' : ''}`}
      onClick={handleClick}
    >
      <div className="envelope-flap" />
      <div className="seal" />
      <div className="envelope-body">
        <div className="envelope-midline" /> {/* Referans için orta çizgi */}
        <div className="envelope-letter" />
      </div>
    </div>
  );
}