import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To Kenneth's <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
         Competent in Web Dev, Blockchain Tech, Microsoft office, 
        AdobeSuites, IBM cloud and Avolite Lighting software. Strives for excellence towards providing solutions to challenges personally and as a team to achieve organizational goals.

        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;