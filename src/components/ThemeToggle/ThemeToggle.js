import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleButton = styled.button`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background: ${props => props.isDark 
    ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' 
    : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
  };
  transition: all 0.3s ease;
  padding: 0;
  outline: none;
  box-shadow: ${props => props.theme.shadows.small};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ToggleSlider = styled.div`
  position: absolute;
  top: 3px;
  left: ${props => props.isDark ? '33px' : '3px'};
  width: 24px;
  height: 24px;
  background: ${props => props.isDark 
    ? 'linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)' 
    : 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)'
  };
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.small};
`;

const Icon = styled.span`
  font-size: 12px;
  line-height: 1;
`;

const ThemeToggle = ({ className }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      isDark={isDark}
      className={className}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <ToggleSlider isDark={isDark}>
        <Icon>
          {isDark ? '🌙' : '☀️'}
        </Icon>
      </ToggleSlider>
    </ToggleButton>
  );
};

export default ThemeToggle;
