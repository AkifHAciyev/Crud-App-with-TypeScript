import { Dispatch, SetStateAction } from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from '../../pages/Categories';
import Products from '../../pages/Products ';
import Suppliers from '../../pages/Suppliers';

export interface Props {
	showBtn: boolean;
	setShowBtn: Dispatch<SetStateAction<boolean>>;
}

const Main = ({ showBtn }: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Suppliers showBtn={showBtn} />} />
			<Route path="/products" element={<Products showBtn={showBtn} />} />
			<Route path="/categories" element={<Categories showBtn={showBtn} />} />
		</Routes>
	);
};

export default Main;
