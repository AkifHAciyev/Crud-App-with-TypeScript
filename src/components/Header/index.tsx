import { Link } from 'react-router-dom';
import Login from '../Login';

const Header = ({ showBtn, setShowBtn }) => {
	return (
		<>
			<div className="header">
				<nav>
					<ul>
						<li>
							<Link to={'/'}>Suppliers</Link>
						</li>
						<li>
							<Link to={'/products'}>Products</Link>
						</li>
						<li>
							<Link to={'/categories'}>Categories</Link>
						</li>
					</ul>
				</nav>
				<Login showBtn={showBtn} setShowBtn={setShowBtn} />
			</div>
		</>
	);
};

export default Header;
