import React from 'react';
import './Letter.css';

export default function Letter({ anne, evlat }) {
  const capitalizeWords = (str) =>
    str
      .split(' ')
      .filter(Boolean)
      .map(
        (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
      )
      .join(' ');

  function addDative(rawName) {
    const name = capitalizeWords(rawName);
    const vowels = 'aeıioöuü';
    const lower = name.toLowerCase();
    const lastVowel = [...lower].reverse().find(c => vowels.includes(c));
    const suffixVowel = lastVowel && 'aıou'.includes(lastVowel) ? 'a' : 'e';
    const lastChar = lower.slice(-1);
    const suffix = vowels.includes(lastChar) ? 'y' + suffixVowel : suffixVowel;
    return `${name}'${suffix}`;
  }

  const baslik = anne
    ? `Dünyanın En Mükemmel Annesi`
    : 'Dünyanın En Mükemmel Annesine';

  const Anne = anne ? capitalizeWords(anne) : null;
  const Evlat = evlat ? capitalizeWords(evlat) : null;

  return (
    <div className="letter-page letter-container">
      <div>
        <h1 className="letter-title">{baslik}</h1>
        {Anne && (
          <h2 className="letter-subtitle">
            Canımm Annemm {addDative(Anne)},
          </h2>
        )}
        <p>Sevgili Annem,</p>
        <p>Senin sevgi dolu kucağında her zorluğun üstesinden gelmeyi öğrendim. Senin sıcak gülüşün, beni her zaman güvende hissettiren bir liman oldu; gözlerindeki şefkat, karanlık günlerime umut ışığı, neşesiz anlarıma neşe kattı. Hayatımdaki en değerli rehber, en iyi öğretmen ve en sıkı dost olduğun için minnettarım.</p>
        <p>Sabahları senin varlığınla uyanmak, bana dünyanın en huzurlu başlangıcını yaşatıyor. Küçük sürprizlerin ve en basit anları bile özel kılman, hayatımı renklendiriyor. Ne zaman zorlandığımı hissetsen, kollarını açıp sarılıp yeniden cesaret bulmamı sağlıyorsun.</p>
        <p>Sadece bu günde değil, hayatının her anında sana teşekkür etmekle kalmayıp; paylaştığımız tüm anıları, kahkahaları, hatta gözyaşlarını bile kucaklamak istiyorum. Her sarılışımda hissettiğim tarifsiz huzuru ve her paylaşımımızda içimde çınlayan o derin mutluluğu anlatacak kelime bulamıyorum.</p>
        <p>Bu Anneler Günü’nde aklımdan geçen tek şey, sana hak ettiğin tüm güzellikleri göstermek ve yanında geçirdiğimiz her saniyeyi ölümsüzleştirmek. Seninle paylaştığım kahkahalar, sohbetler ve sessiz anlar, benim için dünyanın en değerli hazinesi.</p>
        <p>Sen benim en büyük şansımsın. İyi ki varsın, iyi ki benim annemsin.</p>
        <p>Anneler Günün kutlu olsun!</p>
        <p className="letter-signoff">Sevgilerle,</p>
        {Evlat && <p className="letter-signature">{Evlat}</p>}
      </div>
    </div>
  );
}

