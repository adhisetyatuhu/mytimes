import Sidebar from "@/components/sidebar";
import { SmallNewsCard, BigNewsCard } from "@/components/newsCard";

const fetchNews = async () => {
    const data = await fetch(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" +
            process.env.NYTIMES_API_KEY
    );
    const dataJSON = await data.json();

    let newsList: News[] = dataJSON.results.map((news: any) => {
        const imageLarge = news.multimedia ? news.multimedia[0].url : "";
        const imageSmall =
            news.multimedia?.length > 1 ? news.multimedia[1].url : "";
        return {
            section: news.section,
            title: news.title,
            abstract: news.abstract,
            url: news.url,
            imageLarge: imageLarge,
            imageSmall: imageSmall,
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
