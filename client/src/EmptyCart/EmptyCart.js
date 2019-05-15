import React from "react";

function EmptyCart(props) {
    return (
        <div className="empty-cart">
            <img src="https://cdn.dribbble.com/users/1244867/screenshots/4346888/empty_cart_teaser.jpg" alt="empty-cart" />
            <h2>Your cart is empty!</h2>
        </div>
    )
}

export default EmptyCart;