import logo from "./logo.svg";
import "./App.css";

import useGetRequest from "./components/useGetRequest";
import { ShoppingCartContext } from "./components/useShoppingCart";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
	const {
		data: products,
		isLoading,
		errorMessage,
	} = useGetRequest("https://fakestoreapi.com/products/");

	const [shoppingCart, setShoppingCart] = useState([]);

	return (
		<div className="App">
			<ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
				<ShoppingCart />
				<ProductList products={products} />
			</ShoppingCartContext.Provider>
		</div>
	);
}

export default App;
