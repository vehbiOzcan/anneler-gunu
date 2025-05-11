
import React, { useState } from 'react';
import './Envelope.css';

// Arka plan müziğini buraya taşıyoruz, envelope tıklamasıyla çalacak
const bgm = new Audio('/music/yiruma.m4a');
bgm.loop = true;
bgm.preload = 'auto';

export default function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);

      // Kullanıcı etkileşimi garantilendiği için müziği burada başlat
      bgm.play().catch((e) => {
        console.warn('Müzik çalmadı:', e);
      });

      // Kapak açılma + mektup fırlatma animasyonu için süre
      setTimeout(onOpen, 1800);
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
        <div className="envelope-midline" />
        <div className="envelope-letter" />
      </div>
    </div>
  );
}
