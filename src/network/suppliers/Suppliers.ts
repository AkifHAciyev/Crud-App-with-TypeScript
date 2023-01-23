import { Supplier } from '../../models/suppliers';
import { BaseService } from '../base/BaseService';

export class SuppliersService extends BaseService<Supplier> {
	constructor() {
		super('/suppliers');
	}
}
