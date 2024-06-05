import { ADD_ITEM , REMOVE_ITEM } from "../constants/Cart"; 

const initState = {
    items : [],
    total: 0,
};


const Cart =(state = initState, action) => {
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                items : [...state.items , action.payload],
                total: Number(state.total) + Number(action.payload.price),
            };
        case REMOVE_ITEM:
            const index = state.items.findIndex((item) => item?.id === action?.payload?.id);
            return {
                ...state,
                // state.items.slice(0, index) : va garder 0<=les éléments <index 
                // state.items.slice(index + 1) : va gardez index+1 <=les éléments 
                // puis combiner
                // ça veut dire garder tous sauf index
                items: [...state.items.slice(0, index), ...state.items.slice(index + 1)],
                //s'il ya un seul element ça veut dire que celui qui vas etre supprimer alors: directement 0
                total: state.items?.length === 1 ? 0 : Number(state.total) - Number(action.payload.price),
            };
        default:
            return state;
    }
}

export default Cart;