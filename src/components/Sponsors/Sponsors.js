import React from "react";
import * as officers from "../../config/officers";
import "./Sponsors.css";

const Sponsors = () => (
  <main className="sponsors">
    <h2>Sponsors</h2>
    <p className="sponsors --currently-looking">
      We are currently looking for sponsors! Please contact our presidents or
      vice presidents!
    </p>
    <article className="sponsors-officers --lawrence">
      <article className="sponsors-officers --officer">
        <h3>{officers.LAW_PRES}</h3>
        <img
          src={officers.LAW_PRES_PIC}
          alt={officers.LAW_PRES}
          title={officers.LAW_PRES}
        />
        <p>
          President -- Email:{" "}
          <a href={`mailto:${officers.LAW_PRES_EMAIL}`}>
            {officers.LAW_PRES_EMAIL}
          </a>
        </p>
      </article>
      <article className="sponsors-officers --officer">
        <h3>{officers.LAW_VICE}</h3>
        <img
          src={officers.LAW_VICE_PIC}
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
          src={officers.EDW_PRES_PIC}
          alt={officers.EDW_PRES}
          title={officers.EDW_PRES}
        />
        <p>
          President -- Email:{" "}
          <a href={`mailto:${officers.EDW_PRES_EMAIL}`}>
            {officers.EDW_PRES_EMAIL}
          </a>
        </p>
      </article>
      <article className="sponsors-officers --officer">
        <h3>{officers.EDW_VICE}</h3>
        <img
          src={officers.EDW_VICE_PIC}
          alt={officers.EDW_VICE}
          title={officers.EDW_VICE}
        />
        <p>
          Vice President -- Email:{" "}
          <a href={`mailto:${officers.EDW_VICE_EMAIL}`}>
            {officers.EDW_VICE_EMAIL}
          </a>
        </p>
      </article>
    </article>
  </main>
);

export default Sponsors;
