import React from 'react';

interface CartItemProps {
    cartItem: {
        id: number;
        name: string;
        price: number;
    };
    removeFromCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, removeFromCart }) => {
    return (
        <li key={cartItem.id}>
            <span>{cartItem.name}</span>
            <span>${cartItem.price}</span>
            <button onClick={() => removeFromCart(cartItem.id)} type='submit'>Remove</button>
        </li>
    );
};

export default CartItem;

