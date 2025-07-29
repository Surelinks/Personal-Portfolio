import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { blogSEO } from '../config/seo';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0b 0%, #111113 25%, #1a1a1d 100%);
  color: white;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  padding: 2rem 0;
  text-align: center;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(-4px);
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const PostExcerpt = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled.span`
  color: #3b82f6;
  font-weight: 500;
  font-size: 0.95rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  grid-column: 1 / -1;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const EmptyText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
`;

const ComingSoonBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
`;

// Sample blog posts - in production, these would come from a CMS or markdown files
const blogPosts = [
  {
    id: 1,
    title: "The Future of Smart Grid Technology",
    excerpt: "Exploring how AI and IoT are revolutionizing power distribution systems and creating more resilient, efficient grids for tomorrow's energy demands.",
    date: "2025-01-15",
    readTime: "5 min read",
    slug: "future-smart-grid-technology"
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Best practices for designing and implementing microservices architecture that can handle millions of requests while maintaining code quality and performance.",
    date: "2025-01-08",
    readTime: "8 min read",
    slug: "scalable-microservices-nodejs"
  },
  {
    id: 3,
    title: "Blockchain in Energy Trading: Real-World Applications",
    excerpt: "How blockchain technology is enabling peer-to-peer energy trading and creating new opportunities in the renewable energy market.",
    date: "2025-01-01",
    readTime: "6 min read",
    slug: "blockchain-energy-trading"
  }
];

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Blog = () => {
  return (
    <>
      <NextSeo {...blogSEO} />
      <Container>
        <Header>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <BackButton href="/">
              <ArrowLeftIcon width={20} height={20} />
              Back to Portfolio
            </BackButton>
            <Title>Blog & Insights</Title>
            <Subtitle>
              Sharing thoughts on technology, engineering, and innovation
            </Subtitle>
          </div>
        </Header>

        <BlogGrid>
          {blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  // In production, navigate to the full post
                  console.log(`Navigate to /blog/${post.slug}`);
                }}
              >
                <PostMeta>
                  <MetaItem>
                    <CalendarIcon width={16} height={16} />
                    {formatDate(post.date)}
                  </MetaItem>
                  <MetaItem>
                    <ClockIcon width={16} height={16} />
                    {post.readTime}
                  </MetaItem>
                </PostMeta>
                
                <PostTitle>{post.title}</PostTitle>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                
                <ReadMore>Read more →</ReadMore>
              </BlogCard>
            ))
          ) : (
            <EmptyState>
              <EmptyTitle>Blog Coming Soon</EmptyTitle>
              <EmptyText>
                I&apos;m working on creating valuable content about power systems engineering, 
                software development, and technology innovation. Check back soon!
              </EmptyText>
              <ComingSoonBadge>More Posts Coming Soon</ComingSoonBadge>
            </EmptyState>
          )}
        </BlogGrid>
      </Container>
    </>
  );
};

export default Blog;
