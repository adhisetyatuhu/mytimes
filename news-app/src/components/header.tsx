"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <div className="bg-gray-50 shadow-md mb-6">
            <div className="sm:container mx-auto px-4 sm:p-0">
                <div className="flex justify-between py-4">
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

                    {/* drawer */}
                    <div className="sm:hidden">
                        <div className="drawer drawer-end">
                            <input
                                id="my-drawer-4"
                                type="checkbox"
                                className="drawer-toggle"
                                checked={isDrawerOpen}
                                onChange={() => setIsDrawerOpen(isDrawerOpen)}
                            />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label
                                    onClick={toggle}
                                    htmlFor="my-drawer-4"
                                    className="drawer-button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="undefined"
                                    >
                                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    onClick={toggle}
                                    htmlFor="my-drawer-4"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-lg">
                                    <li className="font-extrabold text-xl uppercase active:bg-black/0">
                                        <div className="flex justify-between px-2">
                                            <label className="active:bg-black/0">
                                                <span className="text-red-800">
                                                    MY
                                                </span>
                                                TIMES
                                            </label>
                                            <div onClick={toggle}>
                                                <svg
                                                    className="hover:fill-red-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="24px"
                                                    viewBox="0 -960 960 960"
                                                    width="16px"
                                                    fill="undefined"
                                                >
                                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                    {/* Sidebar content here */}
                                    <li>
                                        <Link
                                            onClick={toggle}
                                            className={`hover:text-red-700 px-2 ${
                                                pathname === "/" &&
                                                "text-red-700"
                                            }`}
                                            href={"/"}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={toggle}
                                            className={`hover:text-red-700 px-2 ${
                                                pathname === "/section/us" &&
                                                "text-red-700"
                                            }`}
                                            href={"/section/us"}
                                        >
                                            US
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={toggle}
                                            className={`hover:text-red-700 px-2 ${
                                                pathname === "/section/world" &&
                                                "text-red-700"
                                            }`}
                                            href={"/section/world"}
                                        >
                                            World
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={toggle}
                                            className={`hover:text-red-700 px-2 ${
                                                pathname ===
                                                    "/section/business" &&
                                                "text-red-700"
                                            }`}
                                            href="/section/business"
                                        >
                                            Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={toggle}
                                            className={`hover:text-red-700 px-2 ${
                                                pathname === "/section/arts" &&
                                                "text-red-700"
                                            }`}
                                            href="/section/arts"
                                        >
                                            Arts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={toggle}
                                            className={`hover:text-red-700 px-2 ${
                                                pathname ===
                                                    "/section/politics" &&
                                                "text-red-700"
                                            }`}
                                            href="/section/politics"
                                        >
                                            Politics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={toggle}
                                            className={`hover:text-red-700 px-2 ${
                                                pathname ===
                                                    "/section/sports" &&
                                                "text-red-700"
                                            }`}
                                            href="/section/sports"
                                        >
                                            Sports
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* end of drawer */}
                </div>
            </div>
        </div>
    );
}
