import { Helmet } from "react-helmet-async";

const SITE_NAME = "Naveen V | Full Stack Developer";
const SITE_URL = "https://naveenv-portfolio.vercel.app"; // update once deployed
const DEFAULT_DESCRIPTION =
  "Naveen V — Full Stack Developer building AI-powered web applications with React, Node.js and modern web technologies. View projects, resume and contact details.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Drop into any page/route to set that page's title, meta description,
 * canonical URL, Open Graph and Twitter Card tags. Falls back to
 * sensible site-wide defaults when a prop is omitted.
 */
export default function SEO({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Naveen V" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
