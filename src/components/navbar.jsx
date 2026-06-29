import SearchBar from "./searchBar";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { IoChatbubblesOutline } from "react-icons/io5";

function Navbar() {
    return (
        <nav className="w-full flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 px-6 py-6 lg:py-8">
            <h1 className="font-bold cursor-pointer italic tracking-tight text-[30px] sm:text-[34px] shrink-0">OLIVE YOUNG</h1>

            <div className="order-3 w-full lg:order-none lg:w-auto lg:flex lg:-translate-x-32">
                <SearchBar />
            </div>

            <div className="flex items-center gap-4 sm:gap-5 text-2xl sm:text-3xl shrink-0">
                <LuUserRound className="cursor-pointer"  />
                <HiOutlineShoppingBag className="cursor-pointer"  />
                <TbWorld className="cursor-pointer" />
                <IoChatbubblesOutline className="cursor-pointer" />
            </div>
        </nav>
    );
}

export default Navbar;
