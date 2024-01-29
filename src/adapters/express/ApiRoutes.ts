import { Router, Request, Response } from 'express'
import ProductsPresenter, { TransactionParams} from './ProductsPresenter';


export default class ApiRoutes {
	public router: Router;
	
	constructor(private presenter: ProductsPresenter) {
		this.router = Router();
		this.presenter = presenter;
		this.registerRoutes();
	}

	protected registerRoutes(): void {
		this.router.get('/products', (req, res) => {
			this.presenter.presentProducts(req, res);
		});
		this.router.post('/transaction', (req: Request<any, any, any, TransactionParams>, res: Response) => this.presenter.makePurchase(req, res));
		this.router.post('/test', (req: Request, res: Response) => {
			console.log(req.params);
			console.log(req.query);
			console.log(req.body);
		});
	}

}