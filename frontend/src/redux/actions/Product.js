import { SAVE_PRODUCT } from "../../redux/constants/Product";


export const setCurrentProduct = (payload) => {
    return {
        type : SAVE_PRODUCT,
        payload,
    }
};