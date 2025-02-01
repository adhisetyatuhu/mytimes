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
      <a className="text-2xl font-extrabold" href="#">
        <span className="text-red-800">MY</span>TIMES
      </a>
      <div className="flex gap-4 text-lg">
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
    <a
      href={news.url}
      target="_blank"
      className="hover:cursor-pointer mb-8 group"
    >
      <figure className="bg-gray-500 w-full h-32 overflow-hidden mb-4">
        <img
          className="group-hover:opacity-70"
          src={news.imageSmall}
          alt="News Image"
        />
      </figure>
      <h3 className="font-sans text-sm uppercase font-semibold my-2 text-red-800 group-hover:text-red-600">
        {news.section}
      </h3>
      <h2 className="text-lg/6 group-hover:text-gray-800">{news.title}</h2>
    </a>
  );
}

function BigNewsCard({ news }: { news: News }) {
  return (
    <a
      href={news.url}
      target="_blank"
      className="flex gap-4 hover:cursor-pointer group"
    >
      <div className="w-1/3 flex flex-col gap-3">
        <h3 className="font-sans uppercase text-sm my-2 text-red-800 group-hover:text-red-600 group-hover:font-semibold">
          {news.section}
        </h3>
        <h2 className="font-semibold text-lg/6 group-hover:text-gray-800">
          {news.title}
        </h2>
        <p className="text-lg">{news.abstract}</p>
      </div>
      <figure className="bg-gray-400 w-2/3 relative overflow-hidden">
        <img
          className="absolute -left-full -right-full m-auto group-hover:opacity-80"
          src={news.imageSmall}
          alt="News Image"
        />
      </figure>
    </a>
  );
}

function SidebarRow({ news }: { news: News }) {
  return (
    <a
      href={news.url}
      target="_blank"
      className="my-2 hover:my-0 hover:p-2 hover:bg-gray-100 group"
    >
      <div className="text-red-800 group-hover:text-red-600 uppercase font-sans text-xs font-semibold">
        {news.section}
      </div>
      <div className="text-lg/6">{news.title}</div>
    </a>
  );
}

function Sidebar({ newsList }: { newsList: News[] }) {
  return (
    <div className="hidden md:flex flex-col px-4">
      <div className="font-semibold font-sans text-lg">The Latest</div>
      <hr className="mb-2" />
      {newsList.map((news) => {
        return <SidebarRow news={news} />;
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
    <>
      <div className="bg-gray-50 shadow-md mb-4">
        <div className="container mx-auto">
          <Header />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-6">
          <div className="lg:w-2/3 flex flex-col gap-4">
            <BigNewsCard news={highlightedNews} />
            <hr className="my-4" />
            <div className="grid grid-cols-3 gap-4">
              {newsList.splice(0, 6).map((news) => {
                return <SmallNewsCard news={news} />;
              })}
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <Sidebar newsList={newsList.splice(6, 10)} />
          </div>
        </div>
      </div>
    </>
  );
}
