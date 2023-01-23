import { Categories } from '../../models/categories';
import { BaseService } from '../base/BaseService';

export class CategoriesService extends BaseService<Categories> {
	constructor() {
		super('/categories');
	}
}
