import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import searches from "../data/search.json";

const recentStorageKey = "olive-young-recent-searches";

function getSearchFromHash() {
    const queryString = window.location.hash.split("?")[1] || "";
    return new URLSearchParams(queryString).get("search") || "";
}

function getRecentSearches() {
    try {
        const saved = localStorage.getItem(recentStorageKey);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

function SearchBar(){
    const [value, setValue] = useState(getSearchFromHash);
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("popular");
    const [recent, setRecent] = useState(getRecentSearches);

    useEffect(() => {
        function updateValue() {
            setValue(getSearchFromHash());
        }

        window.addEventListener("hashchange", updateValue);
        return () => window.removeEventListener("hashchange", updateValue);
    }, []);

    function goToSearch(text) {
        const searchText = text.trim();
        const nextPage = searchText
            ? `#/products?search=${encodeURIComponent(searchText)}`
            : "#/products";

        window.location.assign(nextPage);
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
        goToSearch(name);
    }

    function removeRecent(name) {
        const nextRecent = recent.filter((item) => item !== name);
        setRecent(nextRecent);
        localStorage.setItem(recentStorageKey, JSON.stringify(nextRecent));
    }

    function handleChange(e) {
        const nextValue = e.target.value;
        setValue(nextValue);
        setOpen(nextValue.trim() === "");
    }

    function handleSubmit(e) {
        e.preventDefault();
        saveRecent(value);
        setOpen(false);
        goToSearch(value);
    }
    
    return(
        <div className="relative w-full lg:max-w-[420px]">
            <form onSubmit={handleSubmit} className="flex w-full">
                <input
                    value={value}
                    onFocus={() => {
                        if (value.trim() === "") setOpen(true);
                    }}
                    onChange={handleChange}
                    onBlur={() => setOpen(false)}
                    className="h-[38px] w-full rounded-l border border-lime-500 px-3 text-[14px] outline-none focus:border-lime-700"
                    type="search"
                    placeholder="Search for a product or brand..."
                />
                <button
                    type="submit"
                    className="flex h-[38px] w-12 items-center justify-center rounded-r bg-lime-500 text-xl text-white hover:bg-lime-600"
                    aria-label="Search"
                    title="Search"
                >
                    <CiSearch />
                </button>
            </form>

            {open && (
                <div className="absolute left-0 top-12 z-50 w-full rounded border border-lime-500 bg-white shadow-lg">
                    <div className="grid grid-cols-2 border-b border-gray-200 text-center text-xs font-bold sm:text-sm">
                        <button
                            className={`py-3 ${activeTab === "recent" ? "border-b-2 border-lime-500" : "text-gray-500"}`}
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setActiveTab("recent");
                            }}
                        >
                            Recent searches
                        </button>
                        <button
                            className={`py-3 ${activeTab === "popular" ? "border-b-2 border-lime-500" : "text-gray-500"}`}
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setActiveTab("popular");
                            }}
                        >
                            Popular searches
                        </button>
                    </div>

                    <ul className="px-5 py-4">
                        {activeTab === "popular" && searches.map((item, index) => (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    onMouseDown={() => chooseSearch(item.name)}
                                    className="flex min-w-0 w-full items-center gap-4 py-2 text-left text-[15px] hover:text-lime-600"
                                >
                                    <span className={index < 3 ? "w-5 font-bold text-red-400" : "w-5 font-bold text-lime-600"}>
                                        {index + 1}
                                    </span>
                                    <span className="min-w-0 truncate">{item.name}</span>
                                </button>
                            </li>
                        ))}

                        {activeTab === "recent" && recent.length === 0 && (
                            <li className="py-5 text-center text-sm text-gray-400">
                                No recent searches
                            </li>
                        )}

                        {activeTab === "recent" && recent.map((item, index) => (
                            <li key={item}>
                                <div className="flex items-center justify-between py-2 text-[15px]">
                                    <button
                                        type="button"
                                        onMouseDown={() => chooseSearch(item)}
                                        className="flex min-w-0 items-center gap-4 text-left hover:text-lime-600"
                                    >
                                        <span className="w-5 font-bold text-lime-600">{index + 1}</span>
                                        <span className="min-w-0 truncate">{item}</span>
                                    </button>
                                    <button
                                        type="button"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            removeRecent(item);
                                        }}
                                        className="text-gray-400 hover:text-red-400"
                                        aria-label={`Remove ${item} from recent searches`}
                                    >
                                        x
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default SearchBar
