import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: ${props => props.borderRadius || '8px'};
`;

const PlaceholderDiv = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  transition: opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
`;

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  objectFit = 'cover',
  borderRadius,
  priority = false,
  placeholder = 'Loading...',
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (priority) {
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const imageElement = document.getElementById(`image-${src}`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  // Generate WebP and fallback sources
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return '';
    
    // Check if it's already an optimized format or external URL
    if (originalSrc.includes('http') || originalSrc.includes('.webp') || originalSrc.includes('.avif')) {
      return originalSrc;
    }
    
    // Generate WebP version for local images
    const extension = originalSrc.split('.').pop();
    return originalSrc.replace(`.${extension}`, '.webp');
  };

  return (
    <ImageContainer 
      id={`image-${src}`} 
      borderRadius={borderRadius}
      {...props}
    >
      {!loaded && !error && (
        <PlaceholderDiv>
          {placeholder}
        </PlaceholderDiv>
      )}
      
      {imageSrc && (
        <picture>
          <source srcSet={getOptimizedSrc(imageSrc)} type="image/webp" />
          <Image
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            objectFit={objectFit}
            loaded={loaded}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}
      
      {error && (
        <PlaceholderDiv>
          Image not available
        </PlaceholderDiv>
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;
