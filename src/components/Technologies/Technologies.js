import React from 'react';
import { DiFirebase, DiReact, DiZend, } from 'react-icons/di';
import { SiIbm, SiAdobe, SiGoogleanalytics } from 'react-icons/si';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design, Blockchain implimentation, Artificial Intelligence and Data analysis.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br />
            solidity 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiIbm size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IBM A.I</ListTitle>
          <ListParagraph>
            Experience with <br />
            IBM Artificial Intelligence  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiAdobe size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Adobe </ListTitle>
          <ListParagraph>
            Experience with <br />
            Premeir Pro, After-Effects  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiGoogleanalytics size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data analysis </ListTitle>
          <ListParagraph>
            Experience with <br />
            Data analysis and classification  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiFillGoogleCircle size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Digital Marketing  </ListTitle>
          <ListParagraph>
            Experience with <br />
            Google digital skills for marketing   
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
