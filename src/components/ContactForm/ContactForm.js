import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const FormContainer = styled(motion.div)`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 16px;
  padding: 32px;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.medium};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 24px;
    margin: 20px;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid ${props => props.hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid ${props => props.hasError ? props.theme.colors.error : props.theme.colors.border};
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme.colors.gradientPrimary};
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${props => props.theme.colors.success};
  color: white;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just show success message
      // In production, you would send to your backend or service like Netlify Forms
      console.log('Form submitted:', data);
      
      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Let's Work Together</Title>
      <Subtitle>
        Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
      </Subtitle>

      {isSuccess && (
        <SuccessMessage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircleIcon width={20} height={20} />
          Thank you! Your message has been sent successfully.
        </SuccessMessage>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            hasError={!!errors.name}
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
          />
          {errors.name && (
            <ErrorMessage>
              <ExclamationCircleIcon width={16} height={16} />
              {errors.name.message}
            </ErrorMessage>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            hasError={!!errors.email}
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <ErrorMessage>
              <ExclamationCircleIcon width={16} height={16} />
              {errors.email.message}
            </ErrorMessage>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            type="text"
            placeholder="What's this about?"
            hasError={!!errors.subject}
            {...register('subject', { 
              required: 'Subject is required',
              minLength: { value: 5, message: 'Subject must be at least 5 characters' }
            })}
          />
          {errors.subject && (
            <ErrorMessage>
              <ExclamationCircleIcon width={16} height={16} />
              {errors.subject.message}
            </ErrorMessage>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Message *</Label>
          <TextArea
            id="message"
            placeholder="Tell me about your project, timeline, and any specific requirements..."
            hasError={!!errors.message}
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 20, message: 'Message must be at least 20 characters' }
            })}
          />
          {errors.message && (
            <ErrorMessage>
              <ExclamationCircleIcon width={16} height={16} />
              {errors.message.message}
            </ErrorMessage>
          )}
        </InputGroup>

        {submitError && (
          <ErrorMessage>
            <ExclamationCircleIcon width={16} height={16} />
            {submitError}
          </ErrorMessage>
        )}

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ width: 20, height: 20, border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%' }}
              />
              Sending...
            </>
          ) : (
            <>
              <PaperAirplaneIcon width={20} height={20} />
              Send Message
            </>
          )}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
