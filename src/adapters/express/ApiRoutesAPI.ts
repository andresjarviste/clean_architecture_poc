import { Router, Request, Response } from 'express'
import ProductsController, { TransactionParams} from './ProductsController';
import { WebOutputType } from './ProductsController';

export default class ApiRoutesAPI {
	public router: Router;
	
	constructor(private presenter: ProductsController) {
		this.router = Router();
		this.presenter = presenter;
		this.registerRoutes();
	}

	protected registerRoutes(): void {
		this.router.get('/products', (req, res) => {
			this.presenter.showProducts(req, res, WebOutputType.api);
		});
		this.router.post('/transaction', (req: Request<any, any, any, TransactionParams>, res: Response) => {
			this.presenter.makePurchase(req, res)
		});
		this.router.get('/transaction', (req: Request, res: Response) => {
			this.presenter.getAllTransactions(req, res)
		});
	}

}