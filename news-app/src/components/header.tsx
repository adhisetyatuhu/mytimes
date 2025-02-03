"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="bg-gray-50 shadow-md mb-6">
            <div className="sm:container mx-auto px-4 sm:p-0">
                <div className="sm:flex justify-between py-4">
                    <Link href={"/"} className="text-2xl font-extrabold">
                        <span className="text-red-800">MY</span>TIMES
                    </Link>
                    <div className="hidden sm:flex gap-2 text-lg font-semibold">
                        <Link
                            className={`hover:text-red-700 px-2 ${
                                pathname === "/section/us" && "text-red-700"
                            }`}
                            href={"/section/us"}
                        >
                            US
                        </Link>
                        <Link
                            className={`hover:text-red-700 px-2 ${
                                pathname === "/section/world" && "text-red-700"
                            }`}
                            href={"/section/world"}
                        >
                            World
                        </Link>
                        <Link
                            className={`hover:text-red-700 px-2 ${
                                pathname === "/section/business" &&
                                "text-red-700"
                            }`}
                            href="/section/business"
                        >
                            Business
                        </Link>
                        <Link
                            className={`hover:text-red-700 px-2 ${
                                pathname === "/section/arts" && "text-red-700"
                            }`}
                            href="/section/arts"
                        >
                            Arts
                        </Link>
                        <Link
                            className={`hover:text-red-700 px-2 ${
                                pathname === "/section/politics" &&
                                "text-red-700"
                            }`}
                            href="/section/politics"
                        >
                            Politics
                        </Link>
                        <Link
                            className={`hover:text-red-700 px-2 ${
                                pathname === "/section/sports" && "text-red-700"
                            }`}
                            href="/section/sports"
                        >
                            Sports
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
