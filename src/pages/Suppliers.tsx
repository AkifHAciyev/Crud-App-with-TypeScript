import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Supplier } from '../models/suppliers';
import { SuppliersService } from '../network/suppliers/Suppliers';

function Suppliers({ showBtn }: any) {
	const [suppliers, setSuppliers] = useState<Supplier[]>([]);
	const [newSuppliers, setNewSuppliers] = useState<Supplier>({
		companyName: '',
		contactName: '',
		contactTitle: '',
	});

	useEffect(() => {
		categoriesdata.getAll().then((res) => {
			setSuppliers(res.data);
		});
	}, []);

	const categoriesdata = new SuppliersService();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target?.name;
		const value = e.target?.value;

		setNewSuppliers({
			...newSuppliers,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		categoriesdata.add(newSuppliers).then(() => {
			categoriesdata.getAll().then((res) => {
				setSuppliers(res.data);
			});
		});
		setNewSuppliers({ companyName: '', contactName: '', contactTitle: '' });
	};

	const handleDelete = (id: number): void => {
		categoriesdata.delete(id).then(() => {
			categoriesdata.getAll().then((res) => {
				setSuppliers(res.data);
			});
		});
	};

	return (
		<div className="wrapper">
			{showBtn && (
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="unitPrice">Company Name</label>
						<input
							value={newSuppliers.companyName}
							type="text"
							id="companyName"
							name="companyName"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="unitPrice">Contact Name</label>
						<input
							value={newSuppliers.contactName}
							type="text"
							id="contactName"
							name="contactName"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="unitPrice">Contact Title</label>
						<input
							value={newSuppliers.contactTitle}
							type="text"
							id="contactTitle"
							name="contactTitle"
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
						<th>Сompany Name</th>
						<th>Сontact Name</th>
						<th>Сontact Title</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{suppliers?.map((supplier) => (
						<tr key={supplier.id}>
							<td>{supplier.id}</td>
							<td>{supplier.companyName}</td>
							<td>{supplier.contactName}</td>
							<td>{supplier.contactTitle}</td>
							{showBtn && (
								<td>
									<button className="login" onClick={() => handleDelete(supplier.id!)}>
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

export default Suppliers;
