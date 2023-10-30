import React from 'react'
import { useContext, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
import { 
  SIDEBAR_OPEN, 
  SIDEBAR_CLOSE 
} from '../action'


const productsContext = React.createContext()

const initialState = {
  isSidebarOpen : false,
}

// PRODUCTS PROVIDER
export default function ProductsProvider({children}) {
  const [state, dispatch] = useReducer(products_reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
      <productsContext.Provider value={{...state, openSidebar, closeSidebar}}>
        {children}
      </productsContext.Provider>
  )
}

export function useProductsContext(){
  return useContext(productsContext)
}
