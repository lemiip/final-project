import { CiSearch } from "react-icons/ci";
function SearchBar(){
    
    return(
        <div className="relative w-full">
            <input
                className="border h-[37px] w-full lg:w-[420px] my-2.5 text-[14px] px-2.5 pr-10 outline-none tracking-tight rounded focus:ring-neutral-400 border-lime-500"
                type="search"
                placeholder="Search for a product or brand..."
            />
            
            <CiSearch className="absolute right-6 font-bold text-[22px] top-1/2 -translate-y-1/2 text-black pointer-events-none" />
        </div>
    )
}
export default SearchBar
