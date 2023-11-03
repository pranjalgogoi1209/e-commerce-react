import { 
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
 } from "../action"


export default function products_reducer(state, action) {
    if(action.type === SIDEBAR_OPEN) {
        return {...state, isSidebarOpen : true}
    }

    if(action.type === SIDEBAR_CLOSE) {
        return {...state, isSidebarOpen : false}
    }

    // for loading
    if(action.type === GET_PRODUCTS_BEGIN) {
        return {...state, products_loading: true}
    }

    // no error
    if(action.type === GET_PRODUCTS_SUCCESS) {
        const featured_products = action.payload.filter((product) => product.featured === true)
        return {...state, products_loading: false, products: action.payload, featured_products}
        // featured_products: featured_products => both are same, so we write only one
    }

    // error
    if(action.type === GET_PRODUCTS_ERROR) {
        return {...state, products_loading: false, products_error: true}
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}