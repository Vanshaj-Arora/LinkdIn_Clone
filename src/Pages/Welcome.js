import React from 'react';
import Header from '/Users/apple/Desktop/linkdn /Linkedin-Mern-Clone/src/Components/Welcome/Header.js';
import Features from '/Users/apple/Desktop/linkdn /Linkedin-Mern-Clone/src/Components/Welcome/Feature.js';
import MainImg from '/Users/apple/Desktop/linkdn /Linkedin-Mern-Clone/src/Components/Welcome/MainImg.js';
import OptionSection from '/Users/apple/Desktop/linkdn /Linkedin-Mern-Clone/src/Components/Welcome/OptionSection.js';
import Review from '/Users/apple/Desktop/linkdn /Linkedin-Mern-Clone/src/Components/Welcome/Review.js';
import Video from '/Users/apple/Desktop/linkdn /Linkedin-Mern-Clone/src/Components/Welcome/Video.js';

const Welcome = () => {
  return (
    <div>
      <Header />
        <MainImg />
        

      <Features />
      <Review />
      <Video />
    </div>
  );
};

export default Welcome;
