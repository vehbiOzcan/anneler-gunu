import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Yeni bir Audio objesi oluştur, preload'u 'none' yap (sayfayı bloklamasın)
    const audio = new Audio('/music/yiruma.m4a');
    audio.preload = 'none';
    audio.loop = true;
    // formatı destekleyip desteklemediğini kontrol et
    if (audio.canPlayType('audio/mp4') !== '') {
      // doğrudan çalmayı dene, ama promise'i bekleme
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay engellendiyse sessizce yakala
          console.warn('Otomatik çalma engellendi.');
        });
      }
    }
    audioRef.current = audio;

    return () => {
      // component unmount olduğunda kaynağı serbest bırak
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  return null; // DOM'a hiçbir şey render etmiyoruz
}
