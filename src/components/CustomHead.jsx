import Head from 'next/head';

const CustomHead = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
    <meta name="description" content="A portfolio website showcasing my projects and skills." />
    <meta name="author" content="Your Name" />
    <meta name="keywords" content="portfolio, web development, projects, skills, Your Name" />
    <meta property="og:title" content="My Portfolio" />
    <meta property="og:description" content="A portfolio website showcasing my projects and skills." />
    <meta property="og:image" content="https://example.com/og-image.jpg" />
    <meta property="og:url" content="https://example.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="My Portfolio" />
    <meta name="twitter:description" content="A portfolio website showcasing my projects and skills." />
    <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </Head>
);

export default CustomHead;
