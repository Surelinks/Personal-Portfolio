import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technology Expertise</SectionTitle>
    <SectionText>
      Comprehensive experience across modern technology stacks - from cloud infrastructure and DevOps 
      to AI/ML implementation, full-stack development, and blockchain solutions.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <div style={{ fontSize: '3rem' }}>⚛️</div>
        </picture>
        <ListContainer>
          <ListTitle>Full-Stack Development</ListTitle>
          <ListParagraph>
            Advanced expertise in <br />
            Next.js, React, TypeScript, Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <div style={{ fontSize: '3rem' }}>☁️</div>
        </picture>
        <ListContainer>
          <ListTitle>Cloud Infrastructure</ListTitle>
          <ListParagraph>
            Certified in <br />
            AWS, Azure, Docker, Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <div style={{ fontSize: '3rem' }}>💻</div>
        </picture>
        <ListContainer>
          <ListTitle>Frontend Technologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Vue.js, Angular, HTML5, CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
