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

export default function Sidebar({ newsList }: { newsList: News[] }) {
    return (
        <div className="flex flex-col">
            <div className="font-semibold font-sans text-lg">The Latest</div>
            <hr className="mb-2" />
            {newsList.map((news, index) => {
                return <SidebarRow key={index} news={news} />;
            })}
        </div>
    );
}
