import { useState } from "react";
import searches from "../data/search.json";
import { FiSearch } from "react-icons/fi";


function SearchBox(){

const [open,setOpen] = useState(false);
const [value,setValue] = useState("");



return (

<div className="relative w-[600px]">


<div
className="
border border-lime-500
rounded-md
h-14
flex items-center
px-5
"
>

<input
value={value}
onFocus={()=>setOpen(true)}
onChange={(e)=>setValue(e.target.value)}
placeholder="Search for a product or brand..."
className="
outline-none
flex-1
text-lg
"
/>


<FiSearch size={28}/>

</div>



{
open &&

<div
className="
absolute
top-16
left-0
w-full
bg-white
border-2
border-lime-500
rounded-md
shadow-xl
z-50
"
>


<div className="flex h-20">


<button
className="
w-1/2
text-xl
font-bold
text-gray-500
border-b
"
>
Recent searches
</button>


<button
className="
w-1/2
text-xl
font-bold
border-2
border-black
rounded-md
"
>
Popular searches
</button>


</div>



<ul className="p-5">


{
searches.map((item,index)=>(

<li
key={item.id}
className="
flex
items-center
justify-between
py-3
text-xl
"
>

<div>

<span
className="
text-lime-500
font-bold
mr-6
"
>
{index+1}
</span>


{item.name}

</div>


<span className="text-gray-400">
-
</span>


</li>


))
}



</ul>


<div
className="
border-t
p-4
flex
justify-end
"
>

<button
onClick={()=>setOpen(false)}
className="
border
rounded-md
px-5
py-2
"
>
Close
</button>


</div>



</div>

}


</div>


)

}

export default SearchBox;