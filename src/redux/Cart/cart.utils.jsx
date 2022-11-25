export const existingCartItem = ({
    prevItems,
    nextItem
    })=>{
        
    if (prevItems) {
        console.log(nextItem)
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


export const handleCount = ({prevTotal, item}) =>{
    
    return item['price'] + prevTotal
}