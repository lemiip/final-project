import { useState } from "react";
import SearchBar from "./searchBar";
import { LuMoon, LuSun, LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { IoChatbubblesOutline } from "react-icons/io5";
import countries from "../data/countries.json";

function Navbar({ cartCount = 0, currentUser, deliveryCountry, onChangeDeliveryCountry, darkMode, onToggleDarkMode }) {
    const [countryModalOpen, setCountryModalOpen] = useState(false);
    const [helpMenuOpen, setHelpMenuOpen] = useState(false);

    function selectCountry(country) {
        onChangeDeliveryCountry(country);
        setCountryModalOpen(false);
    }

    return (
        <nav className="relative z-50 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-white px-4 py-4 sm:gap-4 sm:px-6 lg:grid-cols-[auto_minmax(280px,520px)_auto] lg:px-8 lg:py-8">
            <a href="#/" className="col-start-1 row-start-1 min-w-0 cursor-pointer text-[22px] font-bold italic tracking-tight min-[360px]:text-[24px] sm:text-[34px]">
                OLIVE YOUNG
            </a>

            <div className="col-span-2 row-start-2 w-full lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:w-full lg:justify-self-center">
                <SearchBar />
            </div>

            <div className="col-start-2 row-start-1 flex shrink-0 items-center gap-2 justify-self-end text-xl min-[360px]:text-2xl sm:gap-5 sm:text-3xl lg:col-start-3">
                <a
                    href="#/login"
                    className={currentUser ? "text-lime-600" : ""}
                    aria-label="Open profile"
                    title={currentUser ? currentUser.name : "Login"}
                >
                    <LuUserRound className="cursor-pointer"  />
                </a>
                <a href="#/cart" className="relative" aria-label="Open cart" title="Cart">
                    <HiOutlineShoppingBag className="cursor-pointer"  />
                    {cartCount > 0 && (
                        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-500 px-1 text-xs font-bold text-white">
                            {cartCount}
                        </span>
                    )}
                </a>
                <button
                    type="button"
                    onClick={onToggleDarkMode}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-lg transition hover:border-lime-500 hover:text-lime-600 sm:h-9 sm:w-9 sm:text-xl"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    title={darkMode ? "Light mode" : "Dark mode"}
                >
                    {darkMode ? <LuSun /> : <LuMoon />}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setCountryModalOpen(true);
                        setHelpMenuOpen(false);
                    }}
                    className="flex items-center gap-1"
                    aria-label="Choose delivery country"
                    title="Choose delivery country"
                >
                    <TbWorld className="cursor-pointer" />
                    <span className="hidden text-xs font-bold min-[420px]:inline">{deliveryCountry.code}</span>
                </button>
                <div className="relative hidden min-[420px]:block">
                    <button
                        type="button"
                        onClick={() => setHelpMenuOpen((current) => !current)}
                        className="flex items-center"
                        aria-label="Open help menu"
                        title="Help"
                    >
                        <IoChatbubblesOutline className="cursor-pointer" />
                    </button>

                    {helpMenuOpen && (
                        <div className="absolute right-0 top-10 z-[80] w-[170px] rounded border border-gray-200 bg-white p-2 text-base shadow-lg">
                            <a
                                href="#/contact"
                                onClick={() => setHelpMenuOpen(false)}
                                className="block rounded px-3 py-2 hover:bg-lime-50 hover:text-lime-700"
                            >
                                Contact Us
                            </a>
                            <a
                                href="#/faq"
                                onClick={() => setHelpMenuOpen(false)}
                                className="block rounded px-3 py-2 hover:bg-lime-50 hover:text-lime-700"
                            >
                                FAQs
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {countryModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/40 px-4 py-4 sm:items-center">
                    <section className="max-h-[calc(100vh-32px)] w-full max-w-[460px] overflow-y-auto rounded bg-white p-5 shadow-xl sm:p-6">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                            <div>
                                <h2 className="text-2xl font-bold">Delivery Country</h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Choose where your order will be delivered.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCountryModalOpen(false)}
                                className="text-2xl text-gray-400 hover:text-black"
                                aria-label="Close country modal"
                            >
                                x
                            </button>
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {countries.map((country) => (
                                <button
                                    key={country.id}
                                    type="button"
                                    onClick={() => selectCountry(country)}
                                    className={`flex items-center justify-between rounded border p-4 text-left hover:border-lime-500 ${
                                        deliveryCountry.id === country.id
                                            ? "border-lime-500 bg-lime-50"
                                            : "border-gray-200"
                                    }`}
                                >
                                    <span className="font-bold">{country.name}</span>
                                    <span className="rounded bg-gray-100 px-2 py-1 text-sm font-bold">
                                        {country.code}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </section>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
