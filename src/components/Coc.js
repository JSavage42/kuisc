import React from "react"
import styled from 'styled-components'

const CodeOfConduct = styled.section`
  margin-top: 2rem;
`

const COC = () => (
  <CodeOfConduct>
    <h2>Code of Conduct</h2>
    <h3>Summary</h3>
    <p>
      The University of Kansas Information Security Club (KUISC) is dedicated to
      providing a harassment-free environment for all, regardless of gender,
      sexual orientation, disability, physical appearance, body size, race, or
      religion. We do not tolerate harassment of any form. All communication
      should be appropriate for a professional audience including people of many
      different backgrounds. Sexual language and imagery are not appropriate for
      any communication and/or talks. Be kind and do not insult or put down
      others. Behave professionally. Remember that harassment and sexist,
      racist, or exclusionary jokes are not appropriate for KUISC. Members and
      Officers violating these rules should be reported to an Officer
      immediately. Crimes can be committed with the techniques taught in some of
      our labs. It is of utmost importance that you do not use any techniques
      learned on any network that you do have no explicit written permission to
      do so. These are the values to which people in the KUISC community should
      aspire:
    </p>
    <ul>
      <li>
        Don't Be Evil
        <ul>
          <li>
            Borrowing from Google's old Code, we should all strive to be kind to
            each other and do not stoop to malice and hate.
          </li>
        </ul>
      </li>
      <li>Be inclusive</li>
      <li>Be friendly to all</li>
      <li>
        Be welcoming to all
        <ul>
          <li>Encourage each other to do their best.</li>
        </ul>
      </li>
      <li>
        Be patient
        <ul>
          <li>Remember that people have varying levels of knowledge</li>
        </ul>
      </li>
      <li>
        Be thoughtful
        <ul>
          <li>
            Productive communication requires effot. Think about how your words
            will be interpreted.
          </li>
        </ul>
      </li>
      <li>Be respectful</li>
      <li>
        Be responsible
        <ul>
          <li>
            Do not use skills learned here without permission from the network
            owners.
          </li>
        </ul>
      </li>
      <li>
        Be professional
        <ul>
          <li>
            People are complicated. You should expect to be misunderstood and to
            misunderstand others; when this inevitably occurs, resist the urge
            to be defensive or assign blame. Try not to take offense where no
            offense was intended. Give people the benefit of the doubt. Even if
            the intent was to provoke, do not rise to it. It is the
            responsibility of all parties to de-escalate conflict when it
            arises.
          </li>
        </ul>
      </li>
    </ul>
  </CodeOfConduct>
)

export default COC
