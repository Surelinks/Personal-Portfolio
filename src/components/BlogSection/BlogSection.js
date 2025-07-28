import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const BlogSection = styled.section`
  padding: 80px 0;
  background: ${props => props.theme.colors.backgroundSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const PostCard = styled(motion.article)`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 16px;
  padding: 32px;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.textMuted};
  font-size: 0.875rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 12px;
  line-height: 1.3;
`;

const PostExcerpt = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 0.95rem;
`;

const ViewAllButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${props => props.theme.colors.gradientPrimary};
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 auto;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
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

const BlogAndUpdates = () => {
  return (
    <BlogSection>
      <Container>
        <Header>
          <Title>Latest Insights</Title>
          <Subtitle>
            Sharing thoughts on technology, engineering, and innovation in power systems and software development.
          </Subtitle>
        </Header>

        <PostsGrid>
          {blogPosts.map((post, index) => (
            <PostCard
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
              
              <ReadMore>
                Read more
                <ArrowRightIcon width={16} height={16} />
              </ReadMore>
            </PostCard>
          ))}
        </PostsGrid>

        <CenterContainer>
          <ViewAllButton
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
            <ArrowRightIcon width={20} height={20} />
          </ViewAllButton>
        </CenterContainer>
      </Container>
    </BlogSection>
  );
};

export default BlogAndUpdates;
