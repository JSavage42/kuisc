import React from "react";
import * as officers from "../../config/officers";
import "./About.css";

const About = () => (
  <main className="about">
    <section className="about-purpose">
      <h2>Our Purpose</h2>
      <ul>
        <li>
          Train students in the ability to properly secure and defend home and
          enterprise systems.
        </li>
        <li>Compete in Cyber Defense Competitions each semester.</li>
        <li>
          Provide students with access to a network of professionals in the
          cyber security fields.
        </li>
        <li>
          Present speakers, with a connection to cyber security, to the students
          of the University of Kansas.
        </li>
        <li>Host Cyber Defense Competitions at least once per school year.</li>
      </ul>
      <h2>How to Get Involved</h2>
      <ul>
        <li>
          We host bi-weekly meetings. All of our meetings are open to everyone,
          so anyone is more that welcome to attend and get involved.
          <ul>
            <li>Lawrence: [LOCATION] from [TIME] on [DAY]</li>
            <li>Edwards: BEST 135 from 5pm to 6pm on Wednesdays</li>
          </ul>
        </li>
        <li>
          Contact any of our officers listed below to learn more about upcoming
          events and meetings.
        </li>
        <li>
          Join us on{" "}
          <a href="https://rockchalkcentral.ku.edu/organization/KUISC">
            Rock Chalk Central!
          </a>
        </li>
      </ul>
    </section>
    <section className="about-officers">
      <h2>The KU Lawrence Team</h2>
      <article className="about-officers --officer">
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
      <article className="about-officers --officer">
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
      <article className="about-officers --officer">
        <h3>{officers.LAW_CTOF}</h3>
        <img
          src={officers.LAW_CTOF_PIC}
          alt={officers.LAW_CTOF}
          title={officers.LAW_CTOF}
        />
        <p>
          Chief Technology Officer -- Email:{" "}
          <a href={`mailto:${officers.LAW_CTOF_EMAIL}`}>
            {officers.LAW_CTOF_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.LAW_COMM}</h3>
        <img
          src={officers.LAW_COMM_PIC}
          alt={officers.LAW_COMM}
          title={officers.LAW_COMM}
        />
        <p>
          Communication Chair -- Email:{" "}
          <a href={`mailto:${officers.LAW_COMM_EMAIL}`}>
            {officers.LAW_COMM_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.LAW_WEBM}</h3>
        <img
          src={officers.LAW_WEBM_PIC}
          alt={officers.LAW_WEBM}
          title={officers.LAW_WEBM}
        />
        <p>
          Webmaster -- Email:{" "}
          <a href={`mailto:${officers.LAW_WEBM_EMAIL}`}>
            {officers.LAW_WEBM_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.LAW_TREA}</h3>
        <img
          src={officers.LAW_TREA_PIC}
          alt={officers.LAW_TREA}
          title={officers.LAW_TREA}
        />
        <p>
          Treasurer -- Email:{" "}
          <a href={`mailto:${officers.LAW_TREA_EMAIL}`}>
            {officers.LAW_TREA_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.LAW_EXPO}</h3>
        <img
          src={officers.LAW_EXPO_PIC}
          alt={officers.LAW_EXPO}
          title={officers.LAW_EXPO}
        />
        <p>
          Expo Chair -- Email:{" "}
          <a href={`mailto:${officers.LAW_EXPO_EMAIL}`}>
            {officers.LAW_EXPO_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.LAW_SCRI}</h3>
        <img
          src={officers.LAW_SCRI_PIC}
          alt={officers.LAW_SCRI}
          title={officers.LAW_SCRI}
        />
        <p>Scribe</p>
      </article>
    </section>
    <section className="about-officers">
      <h2>The KU Edwards Team</h2>
      <article className="about-officers --officer">
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
      <article className="about-officers --officer">
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
      <article className="about-officers --officer">
        <h3>{officers.EDW_CTOF}</h3>
        <img
          src={officers.EDW_CTOF_PIC}
          alt={officers.EDW_CTOF}
          title={officers.EDW_CTOF}
        />
        <p>
          Chief Technology Officer -- Email:{" "}
          <a href={`mailto:${officers.EDW_CTOF_EMAIL}`}>
            {officers.EDW_CTOF_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.EDW_COMM}</h3>
        <img
          src={officers.EDW_COMM_PIC}
          alt={officers.EDW_COMM}
          title={officers.EDW_COMM}
        />
        <p>
          Communication Chair -- Email:{" "}
          <a href={`mailto:${officers.EDW_COMM_EMAIL}`}>
            {officers.EDW_COMM_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.EDW_WEBM}</h3>
        <img
          src={officers.EDW_WEBM_PIC}
          alt={officers.EDW_WEBM}
          title={officers.EDW_WEBM}
        />
        <p>
          Webmaster -- Email:{" "}
          <a href={`mailto:${officers.EDW_WEBM_EMAIL}`}>
            {officers.EDW_WEBM_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.EDW_TREA}</h3>
        <img
          src={officers.EDW_TREA_PIC}
          alt={officers.EDW_TREA}
          title={officers.EDW_TREA}
        />
        <p>
          Treasurer -- Email:{" "}
          <a href={`mailto:${officers.EDW_TREA_EMAIL}`}>
            {officers.EDW_TREA_EMAIL}
          </a>
        </p>
      </article>
      <article className="about-officers --officer">
        <h3>{officers.EDW_SCRI}</h3>
        <img
          src={officers.EDW_SCRI_PIC}
          alt={officers.EDW_SCRI}
          title={officers.EDW_SCRI}
        />
        <p>Scribe</p>
      </article>
    </section>
  </main>
);

export default About;
