import React, { useState } from 'react';
import './App.css';
import verses from './verse.json';

function BibleVerseGenerator() {
  // Initial random verse selection
  const getRandomVerse = (currentVerse) => {
    let randomIndex;
    let newVerse;
    // Ensure new verse is different from the current verse
    do {
      randomIndex = Math.floor(Math.random() * verses.length);
      newVerse = verses[randomIndex];
    } while (newVerse === currentVerse); // Re-randomize if the same verse is selected
    return newVerse;
  };

  const [verse, setVerse] = useState(getRandomVerse(null)); // Initialize with a random verse

  return (
    <div className='container'>
      <div className='content'>
        <h4 id='title'>
          Bible Verse For You
          <a 
            href="https://www.facebook.com/TimothyClassPH?mibextid=ZbWKwL" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src='./assets/tm logo.png' id='tclogo' alt='Timothy Class Logo' />
          </a>
        </h4>
        <div className='verse-display'>
          <p><b>"</b><span id='versetext'>{verse.text}</span><b>"</b></p>
          <p id='verses'>{verse.reference}</p>
        </div>
      </div>
      <button className='button-29' onClick={() => setVerse(getRandomVerse(verse))}>
        Next Verse
      </button>
    </div>
  );
}

export const App = () => {
  return (
    <div><BibleVerseGenerator/></div>  
  );
};

export default App;
