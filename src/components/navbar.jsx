import React from "react";
import SearchBar from "./searchBar";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { IoChatbubblesOutline } from "react-icons/io5";

function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between gap-3 px-6 py-8">
            <h1 className="font-bold cursor-pointer italic tracking-tight text-[34px]">OLIVE YOUNG</h1>

            <div className="flex -translate-x-32">
                <SearchBar />
            </div>

            <div className="flex items-center gap-5 text-3xl">
                <LuUserRound className="cursor-pointer"  />
                <HiOutlineShoppingBag className="cursor-pointer"  />
                <TbWorld className="cursor-pointer" />
                <IoChatbubblesOutline className="cursor-pointer" />
            </div>
        </nav>
    );
}

export default Navbar;