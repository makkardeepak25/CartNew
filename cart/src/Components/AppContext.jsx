import React from 'react'


export const AppContext= React.createContext()


export default function AppContextProvider({children}) {


    const [cart,setCart]=React.useState([])
    
    const AddingToCart =(child)=>{
        cart.push(child)
    }
   
    const value={AddingToCart,cart}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
