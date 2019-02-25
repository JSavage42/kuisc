import React from "react";
import * as email from "../config/emailAddresses";
import * as officers from "../config/officers";
import "./About.css";

const About = () => (
  <main>
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
    <section className="about">
      <article className="about-officers --lawrence">
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
            <a href={`mailto:${email.LAW_PRES}`}>{email.LAW_PRES}</a>
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
            <a href={`mailto:${email.LAW_VICE}`}>{email.LAW_VICE}</a>
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
            <a href={`mailto:${email.LAW_CTOF}`}>{email.LAW_CTOF}</a>
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
            Communication Specialist -- Email:{" "}
            <a href={`mailto:${email.LAW_COMM}`}>{email.LAW_COMM}</a>
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
            <a href={`mailto:${email.LAW_WEBM}`}>{email.LAW_WEBM}</a>
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
            Treasurer -- Email: Email:{" "}
            <a href={`mailto:${email.LAW_TREA}`}>{email.LAW_TREA}</a>
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
            <a href={`mailto:${email.LAW_EXPO}`}>{email.LAW_EXPO}</a>
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
      </article>
      <article className="about-officers --edwards">
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
            <a href={`mailto:${email.EDW_PRES}`}>{email.EDW_PRES}</a>
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
            <a href={`mailto:${email.EDW_VICE}`}>{email.EDW_VICE}</a>
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
            <a href={`mailto:${email.EDW_CTOF}`}>{email.EDW_CTOF}</a>
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
            <a href={`mailto:${email.EDW_COMM}`}>{email.EDW_COMM}</a>
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
            <a href={`mailto:${email.EDW_WEBM}`}>{email.EDW_WEBM}</a>
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
            <a href={`mailto:${email.EDW_TREA}`}>{email.EDW_TREA}</a>
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
      </article>
    </section>
  </main>
);

export default About;
