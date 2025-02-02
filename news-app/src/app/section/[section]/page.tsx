import { SmallNewsCard } from "@/components/newsCard";
import Sidebar from "@/components/sidebar";

const fetchNews = async (section: string) => {
    const data = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NYTIMES_API_KEY}`
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

async function SectionPage({ params }: { params: { section: string } }) {
    const newsList = await fetchNews(params.section);
    const newsLatest = await fetchNews("home");

    return (
        <div className="container mx-auto">
            <div className="flex gap-8">
                <div className="lg:w-2/3 grid grid-cols-3 gap-4">
                    {newsList.splice(0, 12).map((news) => {
                        return <SmallNewsCard news={news} />;
                    })}
                </div>

                <div className="hidden lg:block lg:w-1/3">
                    <Sidebar newsList={newsLatest.splice(0, 10)} />
                </div>
            </div>
        </div>
    );
}

export default SectionPage;
