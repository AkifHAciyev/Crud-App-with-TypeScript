import { Category } from '../../models/categories';
import { BaseService } from '../base/BaseService';

export class CategoriesService extends BaseService<Category> {
	constructor() {
		super('/categories');
	}
}
