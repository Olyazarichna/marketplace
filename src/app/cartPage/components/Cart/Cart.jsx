'use client'
import ProductList from '../../../components/ProductList/ProductList';
import CartItem from '../CartItem/CartItem';
import { useState } from 'react';

const Cart = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description for Product 1',
            price: 10,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for Product 2',
            price: 20,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description for Product 3',
            price: 30,
        },
    ];
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <ProductList products={products} addToCart={addToCart} />

            <h2>Cart:</h2>
            {cartItems.length > 0 ? (
                <div>
                    <ul>
                        {cartItems.map((cartItem) => (
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                removeFromCart={removeFromCart}
                            />
                        ))}
                    </ul>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
