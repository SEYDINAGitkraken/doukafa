export const existingCartItem = ({
    prevItems,
    nextItem
    })=>{ 
    if (prevItems) {
        const c= prevItems.find(
            cartItem => cartItem.id === nextItem.id
        )
        return c
    }
    return false 
}

export const handleAddToCart = ({ prevItems, nextItem }) =>{
    const  itemExist = existingCartItem({prevItems, nextItem});
    if(itemExist){
        return prevItems.map(cartItem =>{
            if (cartItem.id === nextItem.id) {
                nextItem['quantity'] += 1 
                return nextItem
            } else {
                return cartItem
            }}
        )
    }
    nextItem['quantity'] = 1 
    return  [
        ...prevItems,
        {
            ...nextItem
        }
    ]
}

export const handleSubToCart = ({ prevItems, nextItem }) =>{
    const  itemExist = existingCartItem({prevItems, nextItem});
    if(itemExist){
        return prevItems.map(cartItem =>{
            if (cartItem.id === nextItem.id) {
                cartItem['quantity'] -= 1 
            }
            return cartItem
        })
    }
    return prevItems
    
}

export const handleQty = ({prevItems}) =>{
    let qty = 0
    prevItems.map(cartItem =>{
        qty += cartItem.quantity
    })
    return  qty
}

export const handleCount = ({prevItems}) =>{
    let pri = 0
    prevItems.map(cartItem =>{
        pri += cartItem.quantity*cartItem.price
    })
    return  pri
}


