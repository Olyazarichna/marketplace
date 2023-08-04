import React from 'react';

const CartItem = ({ cartItem, removeFromCart }) => {
    return (
        <li key={cartItem.id}>
            <span>{cartItem.name}</span>
            <span>${cartItem.price}</span>
            <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
        </li>
    );
};

export default CartItem;
