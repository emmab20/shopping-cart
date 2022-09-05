import logo from "./logo.svg";
import "./App.css";

import useGetRequest from "./components/useGetRequest";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	const {
		data: products,
		isLoading,
		errorMessage,
	} = useGetRequest("https://fakestoreapi.com/products/");

	return (
		<div className="App">
			<ShoppingCart />
			<ProductList products={products} />
		</div>
	);
}

export default App;
