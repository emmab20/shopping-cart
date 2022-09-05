import React, { useEffect, useState } from "react";

import useGetRequest from "./useGetRequest";

const ShoppingCart = () => {
	const [cart, setCart] = useState([
		{
			id: 1,
			title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
			price: 109.95,
			description:
				"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
			category: "men's clothing",
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			rating: { rate: 3.9, count: 120 },
			quantity: 1,
		},
	]);

	return (
		<section className="cart">
			<h1>Shopping Cart</h1>
			{cart.map((product) => (
				<div id={product.id}>
					<h1>{product.title}</h1>
					<h2>{product.description}</h2>
					<h2>{product.quantity}</h2>
				</div>
			))}
		</section>
	);
};

export default ShoppingCart;
