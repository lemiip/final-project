import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import searches from "../data/search.json";

const recentStorageKey = "olive-young-recent-searches";

function getRecentSearches() {
    const saved = localStorage.getItem(recentStorageKey);
    return saved ? JSON.parse(saved) : [];
}

function SearchBar(){
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("popular");
    const [recent, setRecent] = useState(getRecentSearches);

    function handleChange(e) {
        const nextValue = e.target.value;
        setValue(nextValue);
        setOpen(nextValue.trim() === "");
    }

    function saveRecent(text) {
        const cleanText = text.trim();
        if (!cleanText) return;

        const nextRecent = [
            cleanText,
            ...recent.filter((item) => item.toLowerCase() !== cleanText.toLowerCase())
        ].slice(0, 5);

        setRecent(nextRecent);
        localStorage.setItem(recentStorageKey, JSON.stringify(nextRecent));
    }

    function chooseSearch(name) {
        setValue(name);
        saveRecent(name);
        setOpen(false);
    }

    function removeRecent(name) {
        const nextRecent = recent.filter((item) => item !== name);
        setRecent(nextRecent);
        localStorage.setItem(recentStorageKey, JSON.stringify(nextRecent));
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            saveRecent(value);
            setOpen(false);
            e.currentTarget.blur();
        }
    }
    
    return(
        <div className="relative w-full">
            <input
                value={value}
                onFocus={() => {
                    if (value.trim() === "") setOpen(true);
                }}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={() => setOpen(false)}
                className="border h-[37px] w-full lg:w-[420px] my-2.5 text-[14px] px-2.5 pr-10 outline-none tracking-tight rounded focus:ring-neutral-400 border-lime-500"
                type="search"
                placeholder="Search for a product or brand..."
            />
            
            <CiSearch className="absolute right-6 font-bold text-[22px] top-1/2 -translate-y-1/2 text-black pointer-events-none" />

            {open && (
                <div className="absolute left-0 top-[56px] z-50 w-full lg:w-[420px] rounded border border-lime-500 bg-white shadow-lg">
                    <div className="grid grid-cols-2 border-b border-gray-200 text-center text-lg font-bold">
                        <button
                            className={`py-4 ${activeTab === "recent" ? "border-b-2 border-lime-500" : "text-gray-500"}`}
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setActiveTab("recent");
                            }}
                        >
                            Recent searches
                        </button>
                        <button
                            className={`py-4 ${activeTab === "popular" ? "border-b-2 border-lime-500" : "text-gray-500"}`}
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setActiveTab("popular");
                            }}
                        >
                            Popular searches
                        </button>
                    </div>

                    <ul className="px-8 py-5">
                        {activeTab === "popular" && searches.map((item, index) => (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        onMouseDown={() => chooseSearch(item.name)}
                                        className="flex w-full items-center justify-between py-2 text-left text-[15px] hover:text-lime-600"
                                    >
                                        <span className="flex items-center gap-5">
                                            <span className={index < 3 ? "font-bold text-red-400" : "font-bold text-lime-600"}>
                                                {index + 1}
                                            </span>
                                            <span>{item.name}</span>
                                        </span>
                                        <span className="text-xl text-gray-500">-</span>
                                    </button>
                                </li>
                            ))}

                        {activeTab === "recent" && recent.length === 0 && (
                            <li className="py-6 text-center text-sm text-gray-400">
                                No recent searches
                            </li>
                        )}

                        {activeTab === "recent" && recent.map((item, index) => (
                            <li key={item}>
                                <div className="flex items-center justify-between py-2 text-[15px]">
                                    <button
                                        type="button"
                                        onMouseDown={() => chooseSearch(item)}
                                        className="flex items-center gap-5 text-left hover:text-lime-600"
                                    >
                                        <span className="font-bold text-lime-600">{index + 1}</span>
                                        <span>{item}</span>
                                    </button>
                                    <button
                                        type="button"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            removeRecent(item);
                                        }}
                                        className="text-xl text-gray-500 hover:text-red-400"
                                    >
                                        -
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-end border-t border-gray-200 px-6 py-4">
                        <button
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setOpen(false);
                            }}
                            className="rounded border border-gray-300 px-4 py-1 text-sm hover:bg-gray-100"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default SearchBar
