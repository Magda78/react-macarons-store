import { act } from 'react-dom/test-utils';
import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    button: 'ADD TO THE CART'
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => (item.id !== action.payload.id))
             }

        case CartActionTypes.REMOVE_ITEM:
            return {
                 ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
             }

        default: 
            return state
    }
};

export default cartReducer;