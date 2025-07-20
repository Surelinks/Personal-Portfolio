import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';

const Contact = () => (
  <Section id="contact">
    <SectionDivider />
    <SectionTitle>Let's Connect</SectionTitle>
    <SectionText>
      Ready to collaborate on innovative projects or discuss technology solutions? 
      Let's explore opportunities together.
    </SectionText>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '2rem', 
      marginTop: '3rem',
      flexWrap: 'wrap'
    }}>
      <a href="mailto:kenneth.ezenwanne@gmail.com" style={{ 
        padding: '1rem 2rem', 
        backgroundColor: '#3B82F6', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease'
      }}>
        Email Me
      </a>
      <a href="https://linkedin.com/in/kenneth-ezenwanne" target="_blank" rel="noopener noreferrer" style={{ 
        padding: '1rem 2rem', 
        border: '2px solid #3B82F6', 
        color: '#3B82F6', 
        textDecoration: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease'
      }}>
        LinkedIn
      </a>
      <a href="https://github.com/kennethez" target="_blank" rel="noopener noreferrer" style={{ 
        padding: '1rem 2rem', 
        border: '2px solid #3B82F6', 
        color: '#3B82F6', 
        textDecoration: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease'
      }}>
        GitHub
      </a>
    </div>
  </Section>
);

export default Contact;
