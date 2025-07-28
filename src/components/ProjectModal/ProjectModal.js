import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalContainer = styled(motion.div)`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${props => props.theme.shadows.xl};
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 10px;
    max-height: 95vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: ${props => props.theme.colors.backgroundTertiary};
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 200px;
  }
`;

const Content = styled.div`
  padding: 32px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 24px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const Category = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.gradientPrimary};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 1.1rem;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

const SectionContent = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.text};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid ${props => props.theme.colors.border};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;

  &.primary {
    background: ${props => props.theme.colors.gradientPrimary};
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.medium};
    }
  }

  &.secondary {
    background: ${props => props.theme.colors.backgroundSecondary};
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.border};

    &:hover {
      background: ${props => props.theme.colors.backgroundTertiary};
    }
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const MetricsSection = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const MetricsTitle = styled.h4`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  margin-bottom: 8px;
`;

const MetricsValue = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 700;
`;

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton
              onClick={onClose}
              aria-label="Close modal"
            >
              <XMarkIcon width={20} height={20} />
            </CloseButton>

            <ImageSection>
              <OptimizedImage
                src={project.image}
                alt={project.title}
                objectFit="cover"
              />
            </ImageSection>

            <Content>
              <Category>{project.category}</Category>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>

              {project.problem && (
                <Section>
                  <SectionTitle>Problem</SectionTitle>
                  <SectionContent>{project.problem}</SectionContent>
                </Section>
              )}

              {project.solution && (
                <Section>
                  <SectionTitle>Solution</SectionTitle>
                  <SectionContent>{project.solution}</SectionContent>
                </Section>
              )}

              {project.metrics && (
                <MetricsSection>
                  <MetricsTitle>Impact</MetricsTitle>
                  <MetricsValue>{project.metrics}</MetricsValue>
                </MetricsSection>
              )}

              <Section>
                <SectionTitle>Technologies</SectionTitle>
                <TechList>
                  {project.tags.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechList>
              </Section>

              <ButtonGroup>
                {project.visit && (
                  <ActionButton
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary"
                  >
                    <GlobeAltIcon width={20} height={20} />
                    Live Demo
                  </ActionButton>
                )}
                {project.source && (
                  <ActionButton
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                  >
                    <CodeBracketIcon width={20} height={20} />
                    Source Code
                  </ActionButton>
                )}
              </ButtonGroup>
            </Content>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
