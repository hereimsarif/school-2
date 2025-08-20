import blogData from '@lib/blogData';
import { useParams } from 'next/navigation';

export default function BlogArticle() {
  const { slug } = useParams() as { slug: string };
  const article = blogData.find(a => a.slug === slug);

  if (!article) return <div className="p-8 text-center text-gray-500">Article not found.</div>;
  return (
    <article className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-8 my-8">
      <h1 className="text-3xl font-bold text-primary mb-2">{article.title}</h1>
      <div className="text-gray-600 dark:text-gray-300 text-sm mb-6">
        {article.date} &ndash; {article.author}
      </div>
      <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
