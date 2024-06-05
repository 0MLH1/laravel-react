import { SAVE_PRODUCT } from "../constants/Product";

const initState = {
    currentProduct : null,
};


const Product =(state = initState, action) => {
    switch(action.type){
        case SAVE_PRODUCT:
            return {
                ...state,
                currentProduct :action.payload
            };
        default:
            return state;
    }
};

export default Product;