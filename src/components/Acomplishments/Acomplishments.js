import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "Analytics", text: 'Linkedin Learning '},
  { number:"STCW", text: 'Joemarine Institute ', },
  { number: "Member", text: 'Nigerian Society of Engineers ', },
  { number: "CyberSecurity", text: 'CISCO Networking Academy ', },
  { number: "Mickensy Academy ", text: 'MickensyForward Badge ', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
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
