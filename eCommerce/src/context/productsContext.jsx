import React from 'react'
import { useContext } from 'react'

const productsContext = React.createContext()


export default function ProductsProvider({children}) {
    return (
      <productsContext.Provider value="kaise hai">
        {children}
      </productsContext.Provider>
    )
  }

export function useProductsContext(){
  return useContext(productsContext)
}
