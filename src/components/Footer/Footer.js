import React from 'react';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Connect</LinkTitle>
          <LinkItem href="tel:+234-812-345-6789">+234 812 345 6789</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:kenneth.ezenwanne@gmail.com">
            kenneth.ezenwanne@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem>Lagos, Nigeria</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2025 Kenneth Ezenwanne - Engineering Excellence Through Innovation</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/kennethez" target="_blank" rel="noopener noreferrer">
            <span style={{ fontSize: '3rem' }}>🐙</span>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/kenneth-ezenwanne" target="_blank" rel="noopener noreferrer">
            <span style={{ fontSize: '3rem' }}>💼</span>
          </SocialIcons>
          <SocialIcons href="mailto:kenneth.ezenwanne@gmail.com">
            <span style={{ fontSize: '3rem' }}>📧</span>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/kennethez" target="_blank" rel="noopener noreferrer">
            <span style={{ fontSize: '3rem' }}>🐦</span>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
