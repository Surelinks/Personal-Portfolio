import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.background2};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border || 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows?.large || '0 10px 25px rgba(0, 0, 0, 0.2)'};
    border-color: ${(props) => props.theme.colors.accent1};
  }
`;

export const ContactIcon = styled.div`
  color: ${(props) => props.theme.colors.accent1};
  flex-shrink: 0;
`;

export const ContactText = styled.div`
  flex: 1;
`;

export const ContactLink = styled.a`
  color: ${(props) => props.theme.colors.text || '#E2E8F0'};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  
  &:hover {
    color: ${(props) => props.theme.colors.accent1};
    text-decoration: underline;
  }
`;
