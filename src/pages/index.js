import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../utils/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h2>Speakers From the Industry</h2>
      <p>
        The KU Information Security Club officers work with Faculty to bring in
        a variety of speakers from industry to talk about the work they are
        involved in and to provide some insight about pursuing cyber security as
        a profession.
      </p>
      <h2>Competitions</h2>
      <p>
        As a club, we’ve attended several cyber defense competitions ranging
        from the Central Area Networking and Security workshop (CANSec), to the
        regional qualifiers for the national collegiate cyber defense
        competition. We’ve also hosted a few competitions ourselves.
      </p>
      <h2>Hacking Labs</h2>
      <p>
        Gain hands on experience with various tools included in Kali Linux,
        learn about proper configuration of systems and services, and how to use
        various networking tools.
      </p>
    </section>
  </Layout>
)

export default IndexPage
