import { useEffect, useState } from "react";
function ScrollTop(){
    const[visible,setVisible]=useState(false)
    useEffect(()=>{
        const handScroll=()=>{
            if(window.scrollY>300){
                setVisible(true)
            }else{
                setVisible(false)
            }
        }
        window.addEventListener("scroll",handScroll)
        return()=>{
            window.removeEventListener("scroll",handScroll)
        }
    },[])
     const Top=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
     }
      return (

    visible && (

      <button
        onClick={Top}
        className="
        fixed
        z-30
        bottom-8
        right-8
        w-15
        h-15
        bg-gray-50
        opacity-75
        border
        border-gray-300
        rounded
        shadow-md
        flex
        flex-col
        items-center
        justify-center
        hover:bg-gray-100
        transition
        "
      >

        <span className="text-green-500 text-3xl">
          ↑
        </span>

        <span className="text-gray-500 text-sm">
          TOP
        </span>


      </button>

    )

  )
}
export default ScrollTop