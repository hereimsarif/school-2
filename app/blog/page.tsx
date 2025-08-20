import BlogList from '../(components)/BlogList';

export default function BlogPage() {
  return (
    <section className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-primary mb-4">Blog & News</h1>
      <BlogList />
    </section>
  );
}
