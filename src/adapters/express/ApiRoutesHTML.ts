import { Router, Request, Response } from 'express'
import ProductsController, { TransactionParams} from './ProductsController';
import { WebOutputType } from './ProductsController';

export default class ApiRoutesHTML {
	public router: Router;
	
	constructor(private presenter: ProductsController) {
		this.router = Router();
		this.presenter = presenter;
		this.registerRoutes();
	}

	protected registerRoutes(): void {
		this.router.get('/products', (req, res) => {
			this.presenter.showProducts(req, res, WebOutputType.html);
		});

	}

}