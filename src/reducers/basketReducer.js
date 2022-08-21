import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';
import allBooks from '../data/books';
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    books: allBooks,
    products: { }
}

export default (state = initialState, action) => {
    let productSelected = "";
    // let productId = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            // productSelected = { ...state.products[action.payload] }

            // Find if the item is already in the shopping cart (products)
            let alreadyInCart = state.products.hasOwnProperty(action.payload);
            
            if (alreadyInCart) {
                productSelected = { ...state.products[action.payload] }
            } else {
                // If not in the cart get it from the database
                productSelected = { ...state.books.find(book => book.tagName === action.payload) };    
            }
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(`product selected is ${productSelected.name}`);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                // cartCost: state.cartCost + state.products[action.payload].price,
                cartCost: state.cartCost + productSelected.price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state,
            };
        case INCREASE_QUANTITY:
            // state.products['blackTshirt']
            productSelected = { ...state.products[action.payload] };
            productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                // cartCost: state.cartCost + state.products[action.payload].price,
                cartCost: state.cartCost + productSelected.price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] };
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
                newBasketNumbers = state.basketNumbers;
            } else {
                productSelected.numbers -= 1;
                newCartCost =
                    state.cartCost - state.products[action.payload].price;
                newBasketNumbers = state.basketNumbers - 1;
            }

            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload] };
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost:
                    state.cartCost - numbersBackup * productSelected.price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        default:
            return state;
    }
};
