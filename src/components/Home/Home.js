import React from 'react';
import jayhackerSeal from '../../assets/images/jayhackersSeal.png';
import './Home.css';

const Home = () => (
  <main className="home">
    <section>
      <header className="hero">
        <span className="heroTitle">KU Information Security Club</span>
        <img src={jayhackerSeal} alt="Jayhawk" />
      </header>
      <h2>Speakers From the Industry</h2>
      <p>
        The KU Information Security Club officers work with Faculty to bring in a variety of speakers from industry to talk about the work they are involved in and to provide some
        insight about pursuing cyber security as a profession.
      </p>
      <h2>Competitions</h2>
      <p>
        As a club, we’ve attended several cyber defense competitions ranging from the Central Area Networking and
        Security workshop (CANSec), to the regional qualifiers for the national collegiate cyber defense competition.
        We’ve also hosted a few competitions ourselves.
      </p>
      <h2>Hacking Labs</h2>
      <p>
        Gain hands on experience with various tools included in Kali Linux, learn about proper configuration of systems
        and services, and how to use various networking tools.
      </p>
    </section>
  </main>
);

export default Home;
