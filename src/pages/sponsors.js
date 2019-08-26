import React from "react"
import Layout from '../components/layout'
import * as officers from "../config/officers"

const Sponsors = () => (
  <Layout>
    <section>
      <h2>Sponsors</h2>
      <p>
        We are currently looking for sponsors! Please contact our presidents or
        vice presidents!
      </p>
      <article>
        <h3>{officers.LAW_PRES}</h3>
        <p>
          President -- Email:{" "}
          <a href={`mailto:${officers.LAW_PRES_EMAIL}`}>
            {officers.LAW_PRES_EMAIL}
          </a>
        </p>
        <h3>{officers.LAW_VICE}</h3>
        <p>
          Vice President -- Email:{" "}
          <a href={`mailto:${officers.LAW_VICE_EMAIL}`}>
            {officers.LAW_VICE_EMAIL}
          </a>
        </p>
        <h3>{officers.EDW_PRES}</h3>
        <p>
          President -- Email:{" "}
          <a href={`mailto:${officers.EDW_PRES_EMAIL}`}>
            {officers.EDW_PRES_EMAIL}
          </a>
        </p>
        <h3>{officers.EDW_VICE}</h3>
        <p>
          Vice President -- Email:{" "}
          <a href={`mailto:${officers.EDW_VICE_EMAIL}`}>
            {officers.EDW_VICE_EMAIL}
          </a>
        </p>
      </article>
    </section>
  </Layout>
)

export default Sponsors
