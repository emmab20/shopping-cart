import React, { useContext, useState } from "react";
import useGetRequest from "./useGetRequest";
import { ShoppingCartContext } from "./useShoppingCart";

const Product = ({ id }) => {
	const {
		data: product,
		isLoading,
		errorMessage,
	} = useGetRequest("https://fakestoreapi.com/products/" + id);

	const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

	const addItem = (id, title, price) => {
		console.log(`add item - ${title} - ${price}`);
		setShoppingCart([
			...shoppingCart,
			{ id: id, title: title, price: price, quantity: 1 },
		]);
	};

	return (
		<section>
			<img src={product.image} alt="" />
			<span className={`product ${product.category}`}>{product.category}</span>
			<h3>
				<a href="">{product.title}</a>
			</h3>
			<p>{product.description}</p>
			<button onClick={() => addItem(product.id, product.title, product.price)}>
				Add Item
			</button>
		</section>
	);
};

export default Product;
