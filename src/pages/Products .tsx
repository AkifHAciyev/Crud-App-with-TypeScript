import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Product } from '../models/products';
import { ProductService } from '../network/products/Products';
function Products({ showBtn }) {
	const [products, setProducts] = useState<Product[]>([]);
	const [newProduct, setNewProduct] = useState<Product>({
		name: '',
		unitPrice: 0,
		unitsInStock: 0,
	});

	useEffect(() => {
		productsdata.getAll().then((res) => {
			setProducts(res.data);
		});
	}, []);

	const productsdata = new ProductService();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target?.name;
		const value = e.target?.value;

		setNewProduct({
			...newProduct,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		productsdata.add(newProduct).then(() => {
			productsdata.getAll().then((res) => {
				setProducts(res.data);
			});
		});
		setNewProduct({ name: '', unitPrice: 0, unitsInStock: 0 });
	};

	const handleDelete = (id: number): void => {
		productsdata.delete(id).then(() => {
			productsdata.getAll().then((res) => {
				setProducts(res.data);
			});
		});
	};

	return (
		<div className="wrapper">
			{showBtn && (
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input value={newProduct.name} type="text" id="name" name="name" onChange={handleChange} />
					</div>
					<div>
						<label htmlFor="unitPrice">UnitPrice</label>
						<input value={newProduct.unitPrice} type="text" id="unitPrice" name="unitPrice" onChange={handleChange} />
					</div>
					<div>
						<label htmlFor="UnitsInStock">UnitsInStock</label>
						<input
							value={newProduct.unitsInStock}
							type="text"
							id="UnitsInStock"
							name="unitsInStock"
							onChange={handleChange}
						/>
					</div>
					<button className="login">Add</button>
				</form>
			)}

			<table className="w3-table-all">
				<thead className="w3-light-grey">
					<tr>
						<th>İd</th>
						<th>Name</th>
						<th>UnitPrice</th>
						<th>UnitsInStock</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.unitPrice}</td>
							<td>{product.unitsInStock}</td>
							{showBtn && (
								<td>
									<button className="login" onClick={() => handleDelete(product.id!)}>
										Delete
									</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Products;
