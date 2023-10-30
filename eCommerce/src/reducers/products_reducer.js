


export default function products_reducer(state, action) {
    if(action.type === 'SIDEBAR_OPEN') {
        return {...state, isSidebarOpen : true}
    }

    if(action.type === 'SIDEBAR_CLOSE') {
        return {...state, isSidebarOpen : false}
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}