
const initialState = [] ;

function reducer(  state = initialState  , action ) {

    switch( action.type ) {
        case "ADD_ITEM" :
            return [...state , action.payload ] ;
            
        case "DELETE_ITEM" :
            return state.filter(ele => ele.id !== action.payload ) ;

        case "UPDATE_ITEM" :
            let product = state.find(ele => ele.id === action.payload.id) ;
            product.title = action.payload.title ;
            product.price = action.payload.price ;
            return state ;

        default : 
            return state ;
    }

    

}


export default reducer ;


// state => data 

//* action  {
// !    action.type => (crud)  
// !    action.payload => infos   
// }

