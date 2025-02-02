export function SmallNewsCard({ news }: { news: News }) {
    return (
        <a
            href={news.url}
            target="_blank"
            className="hover:cursor-pointer mb-8 group"
        >
            <figure className="bg-gray-500 w-full h-32 overflow-hidden mb-4">
                {news.imageSmall ? (
                    <img
                        className="group-hover:opacity-70"
                        src={news.imageSmall}
                        alt="News Image"
                    />
                ) : (
                    <div className="h-full w-full flex justify-center items-center">
                        <h1 className="text-white">Image Not Found</h1>
                    </div>
                )}
            </figure>
            <h3 className="font-sans text-sm uppercase font-semibold my-2 text-red-800 group-hover:text-red-600">
                {news.section}
            </h3>
            <h2 className="text-lg/6 group-hover:text-gray-800">
                {news.title}
            </h2>
        </a>
    );
}

export function BigNewsCard({ news }: { news: News }) {
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
            <figure className="bg-gray-500 w-2/3 relative overflow-hidden">
                {news.imageSmall ? (
                    <img
                        className="absolute -left-full -right-full m-auto group-hover:opacity-80"
                        src={news.imageSmall}
                        alt="News Image"
                    />
                ) : (
                    <div className="h-full w-full flex justify-center items-center">
                        <h1 className="text-white">Image Not Found</h1>
                    </div>
                )}
            </figure>
        </a>
    );
}
