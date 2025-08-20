import blogData from '@lib/blogData';
import Link from 'next/link';

export default function BlogList() {
  return (
    <div className="space-y-6">
      {blogData.map(article => (
        <div key={article.slug} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-primary mb-1">
            <Link href={`/blog/${article.slug}`}><a className="hover:underline">{article.title}</a></Link>
          </h3>
          <p className="text-gray-600 dark:text-gray-200 text-sm mb-2">
            {new Date(article.date).toLocaleDateString()} &mdash; {article.author}
          </p>
          <p className="text-base text-gray-800 dark:text-gray-100">{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
