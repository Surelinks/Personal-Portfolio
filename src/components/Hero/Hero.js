import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Kenneth Ezenwanne <br />
          Senior Systems Engineer & Innovation Director
        </SectionTitle>
        <SectionText>
          Experienced Systems Engineer specializing in cloud infrastructure, AI/ML implementation, 
          and digital transformation. Expert in full-stack development, blockchain technology, 
          cybersecurity, and DevOps practices. Passionate about leveraging cutting-edge technology 
          to solve complex engineering challenges and drive organizational excellence.
        </SectionText>
        <div style={{ marginTop: '2rem' }}>
          <button style={{ 
            padding: '12px 24px', 
            backgroundColor: '#3B82F6', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>
            Explore My Work
          </button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;