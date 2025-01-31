import { url } from "inspector";
import Image from "next/image";

interface News {
  section: string;
  title: string;
  abstract: string;
  url: string;
  imageLarge: string;
  imageSmall: string;
}

function Header() {
  return (
    <div className="flex justify-between py-4">
      <a className="text-xl font-semibold" href="#">
        News App
      </a>
      <div className="flex gap-4">
        <a href="">US</a>
        <a href="">World</a>
        <a href="">Business</a>
        <a href="">Arts</a>
        <a href="">Politics</a>
        <a href="">Sports</a>
      </div>
    </div>
  );
}

function SmallNewsCard({ news }: { news: News }) {
  return (
    <div>
      <figure className="bg-gray-500 w-full h-32 overflow-hidden">
        <img src={news.imageSmall} alt="News Image" />
      </figure>
      <h3 className="font-sans text-sm uppercase font-semibold">
        {news.section}
      </h3>
      <h2 className="text-lg">{news.title}</h2>
    </div>
  );
}

function BigNewsCard({ news }: { news: News }) {
  return (
    <div className="flex gap-4">
      <div className="w-1/3">
        <h3 className="font-sans uppercase text-sm">{news.section}</h3>
        <h2 className="font-semibold">{news.title}</h2>
        <p>{news.abstract}</p>
      </div>
      <figure className="bg-gray-400 w-2/3">
        <img src={news.imageSmall} alt="News Image" />
      </figure>
    </div>
  );
}

function NewsRow({ news }: { news: News }) {
  return (
    <div className="my-2">
      <div className="text-red-600 uppercase font-sans text-xs font-semibold">
        {news.section}
      </div>
      <div className="text-lg">{news.title}</div>
    </div>
  );
}

function Sidebar({ newsList }: { newsList: News[] }) {
  return (
    <div className="hidden md:flex flex-col px-4">
      <div className="font-semibold font-sans">The Latest</div>
      <hr className="mb-4" />
      {newsList.map((news) => {
        return <NewsRow news={news} />;
      })}
    </div>
  );
}

const fetchNews = async () => {
  const data = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=" +
      process.env.NYTIMES_API_KEY
  );
  const dataJSON = await data.json();

  let newsList: News[] = dataJSON.results.map((news: any) => {
    return {
      section: news.section,
      title: news.title,
      abstract: news.abstract,
      url: news.url,
      imageLarge: news.multimedia[0].url,
      imageSmall: news.multimedia[1].url,
    };
  });

  return newsList;
};

export default async function Home() {
  const newsList = await fetchNews();
  const randomIndex = Math.floor(Math.random() * newsList.length);
  const highlightedNews = newsList[randomIndex];

  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex">
        <div className="w-2/3 flex flex-col">
          <BigNewsCard news={highlightedNews} />
          <div className="grid grid-cols-3 gap-4 mt-6">
            {newsList.map((news) => {
              return <SmallNewsCard news={news} />;
            })}
          </div>
        </div>
        <div className="w-1/3">
          <Sidebar newsList={newsList} />
        </div>
      </div>
    </div>
  );
}
