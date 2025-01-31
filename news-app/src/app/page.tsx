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

function BigNewsCard() {
  return (
    <div className="flex gap-4">
      <div className="w-1/3">
        <h3>News Category</h3>
        <h2>The News Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vitae
          nisi alias hic, nulla odio sit dignissimos delectus dicta corrupti
          voluptatem libero? Ut laudantium aut tempore nulla sit eos alias.
        </p>
      </div>
      <figure className="bg-gray-400 w-2/3">
        <img src="" alt="News Image" />
      </figure>
    </div>
  );
}

function NewsList() {
  return (
    <div>
      <div className="text-red-600 uppercase font-sans text-xs font-semibold">
        News Category
      </div>
      <div className="text-lg">
        The News Title ipsum dolor sit amet consectetur elit ipsum dolor sit
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden md:flex flex-col px-4">
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
      <NewsList />
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
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex">
        <div className="w-2/3 flex flex-col">
          <BigNewsCard />
          <div className="grid grid-cols-3 gap-4 mt-6">
            {newsList.map((news) => {
              return <SmallNewsCard news={news} />;
            })}
          </div>
        </div>
        <div className="w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
