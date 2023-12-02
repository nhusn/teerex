import React, { createContext, useState } from 'react'
export const addcartProductContext = createContext()
export const addWishlistProductContext = createContext()

function ContextShare({children}) {
    const [cartProduct,setCartProduct] = useState([])
    const [wishlistProduct,setWishlistProduct]=useState([])
  return (
    <>
        <addcartProductContext.Provider value={{cartProduct,setCartProduct}}>
            <addWishlistProductContext.Provider value={{wishlistProduct,setWishlistProduct}}>
                {children}
            </addWishlistProductContext.Provider>
        </addcartProductContext.Provider>
    </>
  )
}

export default ContextShare