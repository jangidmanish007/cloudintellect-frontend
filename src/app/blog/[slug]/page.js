export async function generateMetadata({ params }) {
  const { slug } = params;

  return {
    title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - CloudIntellect Blog`,
    description: "Read our latest blog post about Salesforce and cloud technologies.",
  };
}

export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>Blog post content for {params.slug}</p>
    </div>
  );
}
