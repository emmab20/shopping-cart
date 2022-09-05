import React, { useState } from "react";
import useGetRequest from "./useGetRequest";

const Product = ({ id }) => {
	const {
		data: product,
		isLoading,
		errorMessage,
	} = useGetRequest("https://fakestoreapi.com/products/" + id);

	return (
		<section>
			<img src={product.image} alt="" />
			<span className={`product ${product.category}`}>{product.category}</span>
			<h3>
				<a href="">{product.title}</a>
			</h3>
			<p>{product.description}</p>
		</section>
	);
};

export default Product;
