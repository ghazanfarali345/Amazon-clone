export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((acc, curr) => (acc += curr.price), 0);


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.log(`cant remove produt (id:${action.id})`)
            }

            return {
                ...state,
                basket: newBasket
            }
        case 'CURRENT_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state

    }
}

