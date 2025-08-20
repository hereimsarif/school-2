import Hero from './(components)/Hero';
import Highlights from './(components)/Highlights';
import NoticeBoard from './(components)/NoticeBoard';
export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <NoticeBoard />
        <Highlights />
      </div>
    </>
  );
}
