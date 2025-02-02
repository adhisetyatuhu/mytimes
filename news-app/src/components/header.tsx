import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-gray-50 shadow-md mb-6">
            <div className="container mx-auto">
                <div className="flex justify-between py-4">
                    <Link href={"/"} className="text-2xl font-extrabold">
                        <span className="text-red-800">MY</span>TIMES
                    </Link>
                    <div className="flex gap-4 text-lg">
                        <Link href={"/section/us"}>US</Link>
                        <Link href={"/section/world"}>World</Link>
                        <Link href="/section/business">Business</Link>
                        <Link href="/section/arts">Arts</Link>
                        <Link href="/section/politics">Politics</Link>
                        <Link href="/section/sports">Sports</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
