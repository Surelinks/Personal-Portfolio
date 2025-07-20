import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "AWS", text: 'Certified Solutions Architect Professional' },
  { number: "Azure", text: 'Certified DevOps Engineer Expert' },
  { number: "CISSP", text: 'Certified Information Systems Security Professional' },
  { number: "Kubernetes", text: 'Certified Kubernetes Administrator (CKA)' },
  { number: "Terraform", text: 'Certified Associate - Infrastructure Automation' },
  { number: "IBM", text: 'AI Professional Certificate & Cloud Computing' },
  { number: "NSE", text: 'Nigerian Society of Engineers (MNSE)' },
  { number: "Leadership", text: 'McKinsey Forward Program Graduate' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Professional Certifications & Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
