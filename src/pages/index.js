import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ezenwanne Kenneth - Power Systems Engineer & Software Developer | Portfolio</title>
        <meta name="description" content="Ezenwanne Kenneth - Power Systems Engineer and Software Developer specializing in critical infrastructure, blockchain, AI, and cybersecurity. BSc Electrical Engineering, MS Software Engineering student at Quantic School." />
        <meta name="keywords" content="Ezenwanne Kenneth, Power Systems Engineer, Software Developer, Critical Infrastructure, Blockchain, Ethereum, Smart Contracts, AI, Cybersecurity, React, Node.js, Nigeria, BSc Electrical Engineering, SCADA" />
        <meta name="author" content="Ezenwanne Kenneth" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ 
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        background: 'linear-gradient(180deg, #0a0a0b 0%, #111113 25%, #1a1a1d 100%)',
        color: '#ffffff',
        minHeight: '100vh',
        lineHeight: 1.6
      }}>
        {/* Header */}
        <header style={{
          padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'sticky',
          top: 0,
          background: 'rgba(10, 10, 11, 0.95)',
          backdropFilter: 'blur(20px)',
          zIndex: 100
        }}>
          <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
              fontWeight: '700', 
              color: '#ffffff',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              EK.
            </div>
            <div style={{ 
              display: 'flex', 
              gap: 'clamp(1rem, 3vw, 2.5rem)', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#about" style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                transition: 'color 0.2s ease',
                ':hover': { color: '#ffffff' }
              }}>About</a>
              <a href="#skills" style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
              }}>Expertise</a>
              <a href="#timeline" style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
              }}>Experience</a>
              <a href="#projects" style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
              }}>Projects</a>
              <a href="#contact" style={{ 
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                transition: 'all 0.2s ease'
              }}>Contact</a>
            </div>
          </nav>
        </header>

        {/* Hero Section - Professional Layout */}
        <section id="about" style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
          maxWidth: '1400px',
          margin: '0 auto',
          marginBottom: 'clamp(2rem, 4vw, 4rem)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(280px, 380px) 1fr', 
            gap: 'clamp(2rem, 4vw, 3rem)', 
            alignItems: 'start'
          }}
          className="hero-grid">
            {/* Professional Profile Card */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'clamp(12px, 3vw, 20px)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}>
              {/* Profile Image */}
              <div style={{
                width: 'clamp(120px, 20vw, 180px)',
                height: 'clamp(120px, 20vw, 180px)',
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                backgroundImage: 'url("/images/profile.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                margin: '0 auto clamp(1rem, 3vw, 2rem)',
                border: '3px solid rgba(59, 130, 246, 0.4)',
                boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                position: 'relative'
              }}>
                {/* Fallback text if image doesn't load */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  borderRadius: '50%',
                  zIndex: '-1'
                }}>
                  EK
                </div>
              </div>
              
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                fontWeight: '700',
                marginBottom: '0.5rem',
                color: '#ffffff'
              }}>
                Ezenwanne Kenneth
              </h3>
              
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                marginBottom: 'clamp(1rem, 3vw, 2rem)',
                lineHeight: '1.4'
              }}>
                Power Systems Engineer & Software Developer
              </p>
              
              {/* Professional Details - Clean Text Only */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.75rem, 2vw, 1rem)',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Location</span>
                  <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Nigeria</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Education</span>
                  <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>BSc Electrical Engineering</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Graduate Studies</span>
                  <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>MS Software Engineering</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Current Role</span>
                  <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>Power Systems</span>
                </div>
              </div>
            </div>

            {/* Main Professional Content */}
            <div>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                fontWeight: '800', 
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}>
                Engineering Solutions at the Intersection of{' '}
                <span style={{ 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Power & Code
                </span>
              </h1>
              
              <p style={{ 
                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', 
                lineHeight: '1.6', 
                marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '700px',
                fontWeight: '400'
              }}>
                A versatile professional bridging electrical engineering and software development. 
                Currently advancing power systems stability and safeguarding critical infrastructure 
                while building next-generation blockchain and AI solutions for global markets.
              </p>

              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 'clamp(0.75rem, 2vw, 1rem)',
                marginBottom: 'clamp(2rem, 4vw, 3rem)'
              }}>
                {[
                  { label: 'Experience', value: '6+ Years', emoji: '💼' },
                  { label: 'Current Focus', value: 'Critical Infrastructure', emoji: '⚡' },
                  { label: 'Education', value: 'BSc + Masters', emoji: '🎓' },
                  { label: 'Specialization', value: 'Blockchain & AI', emoji: '🚀' }
                ].map((stat, index) => (
                  <div key={index} style={{
                    padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
                  }}>
                    <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '0.5rem' }}>{stat.emoji}</div>
                    <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: '700', color: '#3b82f6', marginBottom: '0.25rem' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(255,255,255,0.7)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Call-to-Action */}
              <div style={{ 
                display: 'flex', 
                gap: 'clamp(0.75rem, 2vw, 1rem)', 
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
              className="cta-buttons">
                <a 
                  href="#projects" 
                  style={{ 
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)', 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: '#ffffff', 
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    textAlign: 'center',
                    minWidth: '120px'
                  }}
                >
                  View Projects
                </a>
                <a 
                  href="mailto:fumsamuel@gmail.com" 
                  style={{ 
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    color: 'rgba(255,255,255,0.9)', 
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    textAlign: 'center',
                    minWidth: '120px'
                  }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(180deg, rgba(10,14,26,0.8) 0%, rgba(15,20,35,0.9) 100%)',
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: 'clamp(2rem, 4vw, 4rem)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: 'clamp(2rem, 6vw, 4rem)',
            color: '#3B82F6'
          }}>
            Technology Expertise
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: 'clamp(1rem, 3vw, 2rem)' 
          }}>
            {[
              {
                icon: '🔌',
                title: 'Power Systems Engineering',
                skills: ['SCADA Systems', 'Grid Monitoring', 'Electrical Power Systems', 'Transmission Networks', 'Predictive Maintenance']
              },
              {
                icon: '💻',
                title: 'Software Development',
                skills: ['Python', 'JavaScript (Node.js, React.js)', 'Solidity', 'HTML/CSS', 'MATLAB']
              },
              {
                icon: '☁️',
                title: 'Cloud & DevOps',
                skills: ['AWS', 'Docker', 'CI/CD Pipelines', 'Git', 'Azure (Learning)']
              },
              {
                icon: '🔗',
                title: 'Blockchain & Web3',
                skills: ['Ethereum', 'Smart Contracts', 'Hardhat', 'Ethers.js', 'NFT Development', 'DeFi']
              },
              {
                icon: '�️',
                title: 'Databases',
                skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Data Analysis']
              },
              {
                icon: '�',
                title: 'Cybersecurity',
                skills: ['SIEM', 'IDS', 'Threat Detection', 'Ethical Hacking', 'Vulnerability Analysis']
              },
              {
                icon: '🤖',
                title: 'AI & Machine Learning',
                skills: ['IBM Watson APIs', 'OpenCV', 'Computer Vision', 'AI Applications']
              },
              {
                icon: '�️',
                title: 'Tools & Platforms',
                skills: ['Power BI', 'Bubble.io', 'JIRA', 'SCADA', 'POS Systems']
              }
            ].map((skill, index) => (
              <div key={index} style={{ 
                padding: 'clamp(1.5rem, 3vw, 2rem)', 
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
              }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{skill.icon}</div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>
                  {skill.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skill.skills.map((tech, techIndex) => (
                    <span key={techIndex} style={{ 
                      padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#3B82F6',
                      borderRadius: '20px',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section - Compact Professional Design */}
        <section id="timeline" style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(180deg, rgba(15,20,35,0.9) 0%, rgba(10,14,26,0.8) 100%)',
          maxWidth: '1400px',
          margin: '0 auto',
          marginBottom: 'clamp(2rem, 4vw, 4rem)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 4rem)' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
              fontWeight: '800', 
              marginBottom: '1rem',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              Professional Journey
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', 
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              My journey from electrical engineering to software development
            </p>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {[
              {
                year: '2023 - Present',
                title: 'Power Systems Engineer',
                company: 'Transmission Company of Nigeria',
                type: 'Full-time',
                description: 'SCADA systems, grid reliability, predictive maintenance',
                achievements: '30% reliability improvement',
                tech: ['SCADA', 'SQL', 'Power Systems'],
                emoji: '⚡'
              },
              {
                year: '2023 - Present',
                title: 'Bubble Developer',
                company: 'SkillHat - MyLet Platform',
                type: 'Part-time',
                description: 'End-to-end rental platform for Canadian communities',
                achievements: '40% deployment time reduction',
                tech: ['Bubble.io', 'API Integration', 'No-Code'],
                emoji: '🏠'
              },
              {
                year: '2020 - Present',
                title: 'Software Engineer',
                company: 'IBM (Freelance)',
                type: 'Contract',
                description: 'AI applications with IBM Watson, computer vision systems',
                achievements: 'Enterprise AI solutions',
                tech: ['IBM Watson', 'OpenCV', 'Python'],
                emoji: '🤖'
              },
              {
                year: '2019 - Present',
                title: 'Freelance Developer',
                company: 'Blockchain & Web3 Projects',
                type: 'Freelance',
                description: 'DeFi platforms, NFT marketplaces, smart contracts',
                achievements: 'Multiple DeFi projects delivered',
                tech: ['Solidity', 'Ethereum', 'React'],
                emoji: '🔗'
              },
              {
                year: '2022 - 2023',
                title: 'Assistant ETO',
                company: 'AWARITSE (Offshore)',
                type: 'Full-time',
                description: 'Offshore vessel operations, electrical systems',
                achievements: '95% maintenance efficiency',
                tech: ['Electrical Systems', 'Marine Operations'],
                emoji: '⚓'
              },
              {
                year: '2019 - 2021',
                title: 'Operations Manager',
                company: 'Surelink Computers',
                type: 'Full-time',
                description: 'Process re-engineering, productivity optimization',
                achievements: '40% productivity increase',
                tech: ['POS Systems', 'Process Management'],
                emoji: '💼'
              }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'clamp(1rem, 3vw, 2rem)',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
              className="timeline-item"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
              }}>
                {/* Year Column */}
                <div style={{
                  textAlign: 'center',
                  paddingBottom: '1rem',
                  marginBottom: '1rem',
                  borderBottom: '2px solid rgba(59, 130, 246, 0.3)'
                }}
                className="timeline-year">
                  <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', marginBottom: '0.5rem' }}>{item.emoji}</div>
                  <div style={{ 
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                    fontWeight: '600',
                    color: '#3b82f6',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    {item.year}
                  </div>
                  <div style={{ 
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: '0.25rem'
                  }}>
                    {item.type}
                  </div>
                </div>

                {/* Content Column */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{ 
                        fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', 
                        fontWeight: '700', 
                        color: '#ffffff',
                        marginBottom: '0.25rem'
                      }}>
                        {item.title}
                      </h3>
                      <div style={{ 
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', 
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '0.75rem'
                      }}>
                        {item.company}
                      </div>
                    </div>
                    <div style={{
                      padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: '#06b6d4',
                      borderRadius: '12px',
                      fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                      fontWeight: '500',
                      textAlign: 'center',
                      minWidth: 'fit-content'
                    }}>
                      {item.achievements}
                    </div>
                  </div>

                  <p style={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    marginBottom: '1rem',
                    lineHeight: '1.5',
                    fontSize: 'clamp(1rem, 2.2vw, 1.1rem)'
                  }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{ 
                        padding: 'clamp(0.3rem, 1vw, 0.4rem) clamp(0.75rem, 2vw, 1rem)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#3b82f6',
                        borderRadius: '8px',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - Professional Grid */}
        <section id="projects" style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(180deg, rgba(10,14,26,0.8) 0%, rgba(15,20,35,0.9) 100%)',
          maxWidth: '1400px',
          margin: '0 auto',
          marginBottom: 'clamp(2rem, 4vw, 4rem)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 4rem)' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
              fontWeight: '800', 
              marginBottom: '1rem',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              Featured Projects
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Engineering solutions across power systems, blockchain, and AI
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'MyLet Rental Platform',
                category: 'No-Code Development',
                description: 'End-to-end rental platform connecting sublet tenants with homeowners in underserved Canadian communities.',
                tech: ['Bubble.io', 'API Integration', 'Workflow Automation'],
                metrics: '40% deployment reduction',
                status: 'Production',
                image: '/images/projects.jpeg'
              },
              {
                title: 'SCADA Grid Monitoring',
                category: 'Power Systems',
                description: 'Real-time power grid monitoring system with predictive maintenance capabilities for critical infrastructure operations.',
                tech: ['SCADA', 'SQL', 'Predictive Analytics'],
                metrics: '30% reliability improvement',
                status: 'Enterprise',
                image: '/images/robo.png'
              },
              {
                title: 'NFT Marketplace DApp',
                category: 'Blockchain',
                description: 'Decentralized marketplace for digital assets with smart contract integration and seamless trading.',
                tech: ['Solidity', 'Ethereum', 'React', 'Web3'],
                metrics: 'Multi-chain support',
                status: 'Live',
                image: '/images/nft.png'
              },
              {
                title: 'AI Computer Vision',
                category: 'Machine Learning',
                description: 'Real-time object detection system using IBM Watson APIs and OpenCV for enterprise applications.',
                tech: ['IBM Watson', 'OpenCV', 'Python', 'TensorFlow'],
                metrics: '95% accuracy rate',
                status: 'Enterprise',
                image: '/images/smart-brain.png'
              },
              {
                title: 'Crypto Transaction Platform',
                category: 'Blockchain',
                description: 'Secure global platform for Ethereum transfers with custom metadata and transaction tracking.',
                tech: ['Ethereum', 'Web3.js', 'Node.js', 'React'],
                metrics: 'Global ETH transfers',
                status: 'Live',
                image: '/images/krypt.png'
              },
              {
                title: 'Virtual Reality Training',
                category: 'Immersive Tech',
                description: 'Educational VR application for power systems training with realistic 3D environments.',
                tech: ['Unity', 'C#', 'WebGL', '3D Modeling'],
                metrics: 'Training efficiency +60%',
                status: 'Beta',
                image: '/images/virtual.png'
              }
            ].map((project, index) => (
              <div key={index} style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(59, 130, 246, 0.25)';
                e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
              }}>
                {/* Project Image */}
                <div style={{
                  height: 'clamp(150px, 25vw, 200px)',
                  background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1)), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
                    background: project.status === 'Live' ? 'rgba(34, 197, 94, 0.2)' : 
                               project.status === 'Production' ? 'rgba(59, 130, 246, 0.2)' :
                               project.status === 'Enterprise' ? 'rgba(147, 51, 234, 0.2)' : 'rgba(249, 115, 22, 0.2)',
                    color: project.status === 'Live' ? '#22c55e' : 
                           project.status === 'Production' ? '#3b82f6' :
                           project.status === 'Enterprise' ? '#9333ea' : '#f97316',
                    borderRadius: '12px',
                    fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ 
                      fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
                      color: '#06b6d4',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {project.category}
                    </div>
                    <h3 style={{ 
                      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
                      fontWeight: '700', 
                      color: '#ffffff',
                      marginBottom: '0.75rem',
                      lineHeight: '1.3'
                    }}>
                      {project.title}
                    </h3>
                  </div>

                  <p style={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontSize: 'clamp(0.9rem, 2.2vw, 1rem)'
                  }}>
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div style={{
                    padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                    background: 'rgba(6, 182, 212, 0.1)',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
                      color: '#06b6d4',
                      fontWeight: '600'
                    }}>
                      {project.metrics}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{ 
                        padding: 'clamp(0.2rem, 0.8vw, 0.25rem) clamp(0.6rem, 1.5vw, 0.75rem)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#3b82f6',
                        borderRadius: '8px',
                        fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section - Professional Stack Display */}
        <section id="technologies" style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(180deg, rgba(15,20,35,0.9) 0%, rgba(10,14,26,0.8) 100%)',
          maxWidth: '1400px',
          margin: '0 auto',
          marginBottom: 'clamp(2rem, 4vw, 4rem)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 4rem)' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
              fontWeight: '800', 
              marginBottom: '1rem',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              Technology Stack
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', 
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Expertise across power systems, software development, and emerging technologies
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                category: 'Power Systems',
                emoji: '⚡',
                color: '#f59e0b',
                bgColor: 'rgba(245, 158, 11, 0.1)',
                skills: [
                  { name: 'SCADA Systems', level: 95 },
                  { name: 'Power Grid Analysis', level: 90 },
                  { name: 'Predictive Maintenance', level: 85 },
                  { name: 'Electrical Design', level: 88 }
                ]
              },
              {
                category: 'Blockchain & Web3',
                emoji: '🔗',
                color: '#8b5cf6',
                bgColor: 'rgba(139, 92, 246, 0.1)',
                skills: [
                  { name: 'Solidity', level: 90 },
                  { name: 'Ethereum', level: 88 },
                  { name: 'DeFi Protocols', level: 85 },
                  { name: 'Smart Contracts', level: 92 }
                ]
              },
              {
                category: 'AI & Machine Learning',
                emoji: '🤖',
                color: '#06b6d4',
                bgColor: 'rgba(6, 182, 212, 0.1)',
                skills: [
                  { name: 'IBM Watson', level: 88 },
                  { name: 'OpenCV', level: 85 },
                  { name: 'Python ML', level: 87 },
                  { name: 'Computer Vision', level: 83 }
                ]
              },
              {
                category: 'Frontend Development',
                emoji: '💻',
                color: '#3b82f6',
                bgColor: 'rgba(59, 130, 246, 0.1)',
                skills: [
                  { name: 'React.js', level: 92 },
                  { name: 'Next.js', level: 88 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'Modern CSS', level: 90 }
                ]
              },
              {
                category: 'Backend & Cloud',
                emoji: '☁️',
                color: '#10b981',
                bgColor: 'rgba(16, 185, 129, 0.1)',
                skills: [
                  { name: 'Node.js', level: 88 },
                  { name: 'Python', level: 90 },
                  { name: 'SQL Databases', level: 85 },
                  { name: 'Cloud APIs', level: 87 }
                ]
              },
              {
                category: 'No-Code & Automation',
                emoji: '🔧',
                color: '#ef4444',
                bgColor: 'rgba(239, 68, 68, 0.1)',
                skills: [
                  { name: 'Bubble.io', level: 95 },
                  { name: 'API Integration', level: 90 },
                  { name: 'Workflow Automation', level: 88 },
                  { name: 'Process Optimization', level: 92 }
                ]
              }
            ].map((tech, index) => (
              <div key={index} style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 25px 50px ${tech.color}30`;
                e.currentTarget.style.border = `1px solid ${tech.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
              }}>
                {/* Category Header */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  background: tech.bgColor,
                  borderRadius: '12px',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  <div style={{ 
                    width: 'clamp(40px, 8vw, 48px)',
                    height: 'clamp(40px, 8vw, 48px)',
                    background: tech.color,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    flexShrink: 0
                  }}>
                    {tech.emoji}
                  </div>
                  <h3 style={{ 
                    fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', 
                    fontWeight: '700', 
                    color: tech.color,
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    {tech.category}
                  </h3>
                </div>

                {/* Skills with Progress Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                  {tech.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        <span style={{ 
                          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                          fontWeight: '600',
                          color: '#ffffff'
                        }}>
                          {skill.name}
                        </span>
                        <span style={{ 
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                          color: tech.color,
                          fontWeight: '600',
                          fontFamily: 'JetBrains Mono, monospace'
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: 'clamp(4px, 1vw, 6px)',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${tech.color}, ${tech.color}dd)`,
                          borderRadius: '3px',
                          transition: 'width 1s ease-out'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements Section */}
        <section id="achievements" style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(180deg, rgba(10,14,26,0.8) 0%, rgba(15,20,35,0.9) 100%)',
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: 'clamp(2rem, 4vw, 4rem)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            fontWeight: '700', 
            textAlign: 'center', 
            marginBottom: 'clamp(2rem, 6vw, 4rem)',
            color: '#3B82F6'
          }}>
            Certifications & Achievements
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: 'clamp(1.5rem, 3vw, 2rem)' 
          }}>
            {[
              {
                category: 'Recent Certifications (2024)',
                icon: '🏆',
                items: ['Google Cybersecurity Professional Certificate', 'AIG Shields Up: Cybersecurity Certificate', 'Mastercard Cybersecurity Certificate', 'COREN Certified Engineer']
              },
              {
                category: 'Professional Memberships',
                icon: '🎓',
                items: ['MNSE - Nigerian Society of Engineers', 'COREN Member', 'McKinsey Forward Program Graduate']
              },
              {
                category: 'Blockchain & AI Certifications',
                icon: '�',
                items: ['Ethereum 101 Certificate (Cadana)', 'IBM Applied AI Professional Certificate', 'DeFi Talents Program (2025)']
              },
              {
                category: 'Cloud & DevOps',
                icon: '☁️',
                items: ['Cloud Computing (Coursera)', 'AWS Learning Path', 'DevOps & CI/CD Expertise']
              },
              {
                category: 'Maritime Certifications',
                icon: '⚓',
                items: ['HUET, ISPS, OTF, PSCRB', 'STCW, MOTORMAN, RFPEW', 'Offshore Operations Certified']
              },
              {
                category: 'Leadership & Management',
                icon: '👥',
                items: ['Team Lead - Powerworld Ministries (2019-Present)', 'Operations Manager Experience', 'McKinsey Leadership Program']
              }
            ].map((achievement, index) => (
              <div key={index} style={{ 
                padding: 'clamp(1.5rem, 3vw, 2rem)', 
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(15px)',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{achievement.icon}</div>
                <h3 style={{ 
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', 
                  fontWeight: '600', 
                  marginBottom: '1.5rem',
                  color: 'white',
                  lineHeight: '1.3'
                }}>
                  {achievement.category}
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: 'rgba(255,255,255,0.7)'
                }}>
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ 
                      marginBottom: '0.75rem',
                      padding: 'clamp(0.4rem, 1vw, 0.5rem)',
                      background: 'rgba(59, 130, 246, 0.1)',
                      borderRadius: '8px',
                      borderLeft: '3px solid #3B82F6',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      textAlign: 'left'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            fontWeight: '700', 
            marginBottom: '2rem',
            color: '#3B82F6'
          }}>
            Let's Connect
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', 
            color: 'rgba(255,255,255,0.8)', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Ready to collaborate on innovative projects or discuss technology solutions? 
            Let's explore opportunities together.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 'clamp(1rem, 3vw, 2rem)',
            flexWrap: 'wrap'
          }}
          className="contact-buttons">
            <a 
              href="mailto:fumsamuel@gmail.com" 
              style={{ 
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)', 
                backgroundColor: '#3B82F6', 
                color: 'white', 
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                minWidth: 'fit-content'
              }}
            >
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/ezenwanne-kenneth/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'rgba(255,255,255,0.9)', 
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                minWidth: 'fit-content'
              }}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/kennethez" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'rgba(255,255,255,0.9)', 
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                minWidth: 'fit-content'
              }}
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.6)'
        }}>
          <p>© 2025 Kenneth Ezenwanne - Engineering Excellence Through Innovation</p>
        </footer>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        /* Mobile-specific navigation adjustments */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          
          .cta-buttons {
            justify-content: center !important;
          }
          
          .stat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          /* Mobile navigation */
          nav div:last-child {
            gap: clamp(0.75rem, 2vw, 1.5rem) !important;
          }
          
          /* Timeline mobile layout - single column */
          .timeline-item {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          
          .timeline-year {
            border-right: none !important;
            border-bottom: 2px solid rgba(59, 130, 246, 0.3) !important;
            padding-bottom: 1rem !important;
            margin-bottom: 1rem !important;
            text-align: center !important;
            padding-right: 0 !important;
          }
          
          /* Better spacing on mobile */
          section {
            padding-left: clamp(1rem, 4vw, 2rem) !important;
            padding-right: clamp(1rem, 4vw, 2rem) !important;
          }
        }

        @media (max-width: 480px) {
          /* Extra small mobile adjustments */
          .stat-grid {
            grid-template-columns: 1fr !important;
          }
          
          /* Reduce spacing on very small screens */
          section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          /* Stack contact buttons vertically on small screens */
          .contact-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .contact-buttons a {
            width: 100% !important;
            max-width: 250px !important;
            text-align: center !important;
          }
          
          /* Better card spacing on mobile */
          .timeline-item, 
          .skill-card, 
          .project-card,
          .tech-card,
          .achievement-card {
            margin-bottom: 1rem !important;
          }
        }
        
        /* Enhanced hover animations */
        a:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }
        
        /* Smooth transitions for all interactive elements */
        .interactive-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .interactive-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.25);
        }
        
        /* Performance optimizations */
        * {
          will-change: auto;
        }
        
        /* Prevent layout shifts */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Optimized gradient performance */
        .gradient-bg {
          will-change: transform;
          transform: translateZ(0);
        }

        /* Responsive text scaling */
        @media (max-width: 1200px) {
          html {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          html {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          html {
            font-size: 14px;
          }
        }

        /* Improved touch targets for mobile */
        @media (max-width: 768px) {
          a, button {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Landscape mobile optimizations */
        @media (max-width: 768px) and (orientation: landscape) {
          section {
            padding-top: clamp(2rem, 4vw, 4rem) !important;
            padding-bottom: clamp(2rem, 4vw, 4rem) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
