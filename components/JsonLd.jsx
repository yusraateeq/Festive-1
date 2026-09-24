/* Renders a JSON-LD structured-data script block (SSR, present in source HTML for crawlers). */
export default function JsonLd({ data }) {
  const markup = typeof data === 'string' ? data : JSON.stringify(data);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: markup }} />;
}