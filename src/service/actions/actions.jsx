
import {ADD_TO_CART} from '../constants'

export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

// export const removeToCard = (data) =>{
//     return{
    
//        type: REMOVE_To_CARD,
//         data:data
    
//     }
// }

