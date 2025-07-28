import Link from 'next/link';
import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Container>
      <Div1>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', color:"white", textDecoration: 'none' }}>
          <span style={{ fontSize: '3rem', marginRight: '0.5rem' }}>👨‍💻</span> <span>Kenneth Ezenwanne</span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink onClick={() => scrollToSection('projects')}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollToSection('tech')}>
            Technologies
          </NavLink>
        </li>        
        <li>
          <NavLink onClick={() => scrollToSection('about')}>
            Timeline
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollToSection('blog')}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollToSection('contact')}>
            Contact
          </NavLink>
        </li>        
      </Div2>
      <Div3>
        <ThemeToggle style={{ marginRight: '1rem' }} />
        <SocialIcons href="https://github.com/kennethez" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <span style={{ fontSize: '3rem' }}>🐙</span>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/kenneth-ezenwanne" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <span style={{ fontSize: '3rem' }}>💼</span>
        </SocialIcons>
        <SocialIcons href="mailto:kenneth.ezenwanne@gmail.com" aria-label="Send Email">
          <span style={{ fontSize: '3rem' }}>📧</span>
        </SocialIcons>
        <SocialIcons href="https://twitter.com/kennethez" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
          <span style={{ fontSize: '3rem' }}>🐦</span>
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
