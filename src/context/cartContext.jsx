// import { createContext, useState } from "react";
// export const CartContext=createContext();
// export function CartPro({children}){
//     const[cart,setCart]=useState([])
//     function addtoCart(product){
//         setCart(prev=>[...prev,product])
//     }
//     return(
//         <CartContext.Provider value={{
//             cart,
//             addtoCart
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }