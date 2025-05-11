import React, { useState, useEffect, useMemo } from 'react';
import Letter from './components/Letter';
import Envelope from './components/Envelope';
import './App.css';

export default function App() {
  // anne/evlat parametrelerini oku
  const { anne, evlat } = useMemo(() => {
    const p = new URLSearchParams(window.location.search);
    return {
      anne: p.get('anne'),
      evlat: p.get('evlat'),
    };
  }, []);

  // aşama: intro → envelope → letter
  const [stage, setStage] = useState('intro');

  // intro’dan envelope’a 3s sonra geç
  useEffect(() => {
    if (stage === 'intro') {
      const t = setTimeout(() => setStage('envelope'), 3000);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <div className="page">
      {/* kalp deseni */}
      <div className="heart-pattern" />

      {/* bulutlar */}
      <div className="clouds">
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
      </div>

      {/* 1) INTRO */}
      {stage === 'intro' && (
        <div className="intro-text">
          Dünyanın En Mükemmel Annesi
        </div>
      )}

      {/* 2) ZARF */}
      {stage === 'envelope' && (
        <div className="envelope-wrapper">
          <Envelope onOpen={() => setStage('letter')} />
          <div className="envelope-instruction">Zarfa tıkla ❤️</div>
        </div>
      )}

      {/* 3) MEKTUP */}
      {stage === 'letter' && (
        <div className="letter-page">
          <div className="letter-container">
            <Letter anne={anne} evlat={evlat} />
          </div>
        </div>
      )}
    </div>
  );
}
