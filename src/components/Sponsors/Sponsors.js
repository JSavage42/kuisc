import React from "react";
import * as officers from "../../config/officers";
import * as pics from "../../config/pics";
import "./Sponsors.css";

const Sponsors = () => (
  <main className="sponsors">
    <section className="sponsors-section">
      <h2>Sponsors</h2>
      <p className="sponsors --currently-looking">
        We are currently looking for sponsors! Please contact our presidents or
        vice presidents!
      </p>
      <article className="sponsors-officers --lawrence">
        <article className="sponsors-officers --officer">
          <h3>{officers.LAW_PRES}</h3>
          <img
            src={pics.LAW_PRES}
            alt={officers.LAW_PRES}
            title={officers.LAW_PRES}
          />
          <p>
            President -- Email:{" "}
            <a href={`mailto:${officers.LAW_PRES.email}`}>
              {officers.LAW_PRES.email}
            </a>
          </p>
        </article>
        <article className="sponsors-officers --officer">
          <h3>{officers.LAW_VICE}</h3>
          <img
            src={pics.LAW_VICE}
            alt={officers.LAW_VICE}
            title={officers.LAW_VICE}
          />
          <p>
            Vice President -- Email:{" "}
            <a href={`mailto:${officers.LAW_VICE_EMAIL}`}>
              {officers.LAW_VICE_EMAIL}
            </a>
          </p>
        </article>
        <article className="sponsors-officers --officer">
          <h3>{officers.EDW_PRES}</h3>
          <img
            src={pics.EDW_PRES}
            alt={officers.EDW_PRES}
            title={officers.EDW_PRES}
          />
          <p>
            President -- Email:{" "}
            <a href={`mailto:${officers.EDW_PRES.email}`}>
              {officers.EDW_PRES.email}
            </a>
          </p>
        </article>
        <article className="sponsors-officers --officer">
          <h3>{officers.EDW_VICE}</h3>
          <img
            src={pics.EDW_VICE}
            alt={officers.EDW_VICE}
            title={officers.EDW_VICE}
          />
          <p>
            Vice President -- Email:{" "}
            <a href={`mailto:${officers.EDW_VICE.email}`}>
              {officers.EDW_VICE.email}
            </a>
          </p>
        </article>
      </article>
    </section>
  </main>
);

export default Sponsors;
