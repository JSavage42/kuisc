import React from "react"
import Layout from '../components/layout'
import Argonne1 from "../assets/images/competitions/2018Argonne1.jpg"
import Argonne2 from "../assets/images/competitions/2018Argonne2.jpg"
import ALCCDC1 from "../assets/images/competitions/2019ALCCDC.jpg"
import ALCCDC2 from "../assets/images/competitions/2019ALCCDC2.jpg"
import JayhackerIWD1 from "../assets/images/competitions/2019jayhackersIWD.jpg"

const imgUrls = [Argonne1, Argonne2, ALCCDC1, ALCCDC2, JayhackerIWD1]

const Media = () => (
  <Layout>
    <h2>Media</h2>
    {imgUrls.map(src => (
      <img src={src} alt="Jayhackers" title="Jayhackers at competitions" />
    ))}
  </Layout>
);

export default Media;
