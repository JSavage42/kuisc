import React from 'react';
import './About.css';
import Coc from './coc';
import Officers from './Officers';
import Purpose from './Purpose';

const About = () => (
  <main className="about">
    <Purpose />
    <Officers />
    <Coc />
  </main>
);

export default About;
