import { Product } from '../../models/products';
import { BaseService } from '../base/BaseService';

export class ProductService extends BaseService<Product> {
	constructor() {
		super('/products');
	}
}
