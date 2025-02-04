import { SmallNewsCard } from "@/components/newsCard";
import Sidebar from "@/components/sidebar";

const fetchNews = async (section: string) => {
    const data = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NYTIMES_API_KEY}`
    );

    if (!data.ok) {
        throw new Error("Failed fetching data...");
    }

    const dataJSON = await data.json();

    const newsList: News[] = dataJSON.results.map((news: any) => {
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
        <div className="container mx-auto px-4 sm:p-0">
            <div className="flex gap-8">
                <div className="lg:w-2/3 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {newsList.splice(0, 12).map((news, index) => {
                        return <SmallNewsCard key={index} news={news} />;
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
