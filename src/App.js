import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import verses from './verse.json';

function BibleVerseGenerator() {
  const getRandomVerse = (currentVerse) => {
    let randomIndex;
    let newVerse;
    do {
      randomIndex = Math.floor(Math.random() * verses.length);
      newVerse = verses[randomIndex];
    } while (newVerse === currentVerse);
    return newVerse;
  };

  const [verse, setVerse] = useState(getRandomVerse(null));

  return (
    <HelmetProvider>
      <div className='container'>
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Timothy Class | Bible Verse of the Day</title>
          <meta name="description" content={`"${verse.text}" - ${verse.reference}`} />
          <meta name="keywords" content="Bible, Bible Verses, Timothy Class, Scripture, Christian, Faith, Daily Devotions, Bible Verse Timothy Class, bverse tm, Inspirational Bible Quotes, Daily Bible Verse, Encouraging Scriptures, Bible Study, Gospel, Jesus Christ, God’s Word, Holy Bible, Devotional Scriptures, Spiritual Growth, Bible Teachings, Christian Faith, Prayer and Worship, Bible Quotes for Strength, Bible Verses About Hope, Bible Verses About Faith, Bible Verses for Encouragement, Christian Inspiration" />
          <meta name="author" content="Timothy Class" />
          <meta property="og:title" content="Bible Verse of the Day | Timothy Class" />
          <meta property="og:description" content={`"${verse.text}" - ${verse.reference}`} />
          <meta property="og:image" content="https://yourwebsite.com/assets/tm_logo.png" />
          <meta property="og:url" content="https://yourwebsite.com" />
        </Helmet>

        <div className='content'>
          <h4 id='title'>
            Bible Verse For You
            <a href="https://www.facebook.com/TimothyClassPH" target="_blank" rel="noopener noreferrer">
              <img src='./assets/tm-logo.png' id='tclogo' alt='Timothy Class Logo' />
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
    </HelmetProvider>
  );
}
export const App = () => {
  return (
    <div><BibleVerseGenerator/></div>  
  );
};
export default BibleVerseGenerator;
