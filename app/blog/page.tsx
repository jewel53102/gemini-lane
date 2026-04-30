import Link from "next/link";

export const metadata = {
  title: "Business Automation & Workflow Tips for Frederick, MD | Gemini Lane Blog",
  description:
    "Read practical tips for Frederick, MD business owners on AI automation, workflow optimization, project dashboards, and improving business efficiency.",
};

const posts = [
  {
    title: "How to Automate Your Small Business in Frederick, MD",
    description:
      "Learn how local business owners can reduce repetitive tasks, automate follow-up, and save time with better systems.",
    category: "AI Automation",
    href: "/blog/how-to-automate-your-small-business",
  },
  {
    title: "Why Small Businesses in Frederick Are Losing 10–20 Hours Per Week",
    description:
      "Discover where business owners lose time each week and how better workflows can improve efficiency.",
    category: "Workflow Optimization",
    href: "/blog/frederick-business-efficiency",
  },
  {
    title: "How AI Can Help Frederick, MD Businesses Increase Efficiency",
    description:
      "Explore practical ways AI can support daily business operations, follow-up, documentation, and task management.",
    category: "AI for Small Business",
    href: "/blog/ai-for-frederick-businesses",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="blog-index-page">
      <section className="blog-index-hero">
        <p className="eyebrow">Gemini Lane Resources</p>

        <h1>Business automation, workflow, and AI tips for Frederick, MD businesses.</h1>

        <p>
          Practical guidance for small to mid-sized business owners who want to
          reduce manual work, improve operations, and build systems that make
          growth easier.
        </p>
      </section>

      <section className="blog-index-section">
        <div className="section-heading">
          <p className="eyebrow">Latest Articles</p>
          <h2>Start improving the way your business runs.</h2>
        </div>

        <div className="blog-index-grid">
          {posts.map((post) => (
            <article className="blog-index-card" key={post.href}>
              <p className="blog-category">{post.category}</p>
              <h3>{post.title}</h3>
              <p>{post.description}</p>

              <Link href={post.href}>Read Article →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-index-cta">
        <p className="eyebrow">Free Business Analysis</p>

        <h2>Not sure where your business is losing time?</h2>

        <p>
          Take the free analysis and get an instant efficiency score with
          recommended next steps for your workflows, automation, and operations.
        </p>

        <div className="hero-actions center">
          <Link href="/free-business-analysis" className="primary-button">
            Get My Free Analysis
          </Link>

          <Link href="/frederick-md-ai-automation" className="secondary-button">
            View Frederick AI Services
          </Link>
        </div>
      </section>
    </main>
  );
}