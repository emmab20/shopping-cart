import Product from "./Product";

const ProductList = ({ products }) => {
	return (
		<section className="products">
			{products.map((product) => (
				<Product id={product.id} key={product.id} />
			))}
		</section>
	);
};

export default ProductList;
