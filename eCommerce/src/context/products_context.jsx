import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
import { products_url as url} from '../utils/constants'
import { 
  SIDEBAR_OPEN, 
  SIDEBAR_CLOSE 
} from '../action'



// CREATING CONTEXT
const productsContext = React.createContext()

// INITIAL VALUE OF USEREDUCER
const initialState = {
  isSidebarOpen : false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: []
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

  const fetchProducts = async(url) => {
    const response = await axios.get(url)
    console.log(response.data);
  }

  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
      <productsContext.Provider value={{...state, openSidebar, closeSidebar}}>
        {children}
      </productsContext.Provider>
  )
}

export function useProductsContext(){
  return useContext(productsContext)
}
