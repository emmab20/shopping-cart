import React, { useContext, useEffect, useState } from "react";

import useGetRequest from "./useGetRequest";
import { ShoppingCartContext } from "./useShoppingCart";

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

	const { shoppingCart } = useContext(ShoppingCartContext);

	const [total, setTotal] = useState(0);

	useEffect(() => {
		let priceTotal = 0;
		for (let i = 0; i < shoppingCart.length; i++) {
			priceTotal += shoppingCart[i].price;
		}
		setTotal(priceTotal);
	}, [shoppingCart]);

	const addItem = (id) => {};

	return (
		<section className="cart">
			<h1>Shopping Cart</h1>
			{shoppingCart.map((product) => (
				<div key={product.id} id={product.id}>
					<p>
						{product.title} - <button>-</button>
						{product.quantity}
						<button>+</button>
						{product.price}
					</p>
				</div>
			))}
			<p>Total: {total}</p>
		</section>
	);
};

export default ShoppingCart;
