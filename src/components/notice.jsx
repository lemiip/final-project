import {useEffect, useState} from "react";
import { fetchPublicJson } from "../lib/publicUrl";


function Notice(){

const [notices,setNotices] = useState([]);


useEffect(()=>{

fetchPublicJson("/notices/notices.json")
.then(data=>setNotices(data))
.catch(()=>setNotices([]))

},[]);



return(

<section className="
border-y
border-gray-200
py-8
px-6
lg:px-16
">


<div className="
flex
flex-col
lg:flex-row
items-center
gap-8
lg:gap-20
">


<h2 className="
text-3xl
font-bold
">
Notice
</h2>



<div className="flex-1">


{
notices.map(item=>(

<div
key={item.id}
className="
flex
justify-between
items-center
py-3
border-b
border-gray-100
"
>


<a
href="#"
className="
text-gray-600
text-lg
hover:underline
"
>
{item.title}
</a>



<div className="
flex
items-center
gap-10
">

<span className="text-gray-500">
{item.date}
</span>


<a href="#" className="text-3xl">
+
</a>


</div>


</div>


))
}


</div>


</div>


</section>

)

}


export default Notice;
