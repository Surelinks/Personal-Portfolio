export const defaultSEO = {
  title: 'Kenneth Ezenwanne | Power Systems Engineer & Software Developer',
  description: 'BSc Electrical Engineering, MS Software Engineering - Advancing power systems stability and safeguarding critical infrastructure through innovative technology solutions.',
  canonical: 'https://kennethez.github.io/Personal-Portfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kennethez.github.io/Personal-Portfolio',
    site_name: 'Kenneth Ezenwanne Portfolio',
    title: 'Kenneth Ezenwanne | Power Systems Engineer & Software Developer',
    description: 'BSc Electrical Engineering, MS Software Engineering - Advancing power systems stability and safeguarding critical infrastructure through innovative technology solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kenneth Ezenwanne - Power Systems Engineer & Software Developer',
      },
    ],
  },
  twitter: {
    handle: '@kennethez',
    site: '@kennethez',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'power systems, software engineering, electrical engineering, critical infrastructure, SCADA, automation, cloud computing, AI, machine learning, full-stack development',
    },
    {
      name: 'author',
      content: 'Kenneth Ezenwanne',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'googlebot',
      content: 'index,follow',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export const blogSEO = {
  title: 'Blog | Kenneth Ezenwanne',
  description: 'Insights on power systems engineering, software development, and technology innovation.',
  canonical: 'https://kennethez.github.io/Personal-Portfolio/blog',
  openGraph: {
    title: 'Blog | Kenneth Ezenwanne',
    description: 'Insights on power systems engineering, software development, and technology innovation.',
    url: 'https://kennethez.github.io/Personal-Portfolio/blog',
  },
};

export const projectSEO = {
  title: 'Projects | Kenneth Ezenwanne',
  description: 'Portfolio of engineering projects spanning power systems, software development, and digital infrastructure.',
  canonical: 'https://kennethez.github.io/Personal-Portfolio/projects',
  openGraph: {
    title: 'Projects | Kenneth Ezenwanne', 
    description: 'Portfolio of engineering projects spanning power systems, software development, and digital infrastructure.',
    url: 'https://kennethez.github.io/Personal-Portfolio/projects',
  },
};
