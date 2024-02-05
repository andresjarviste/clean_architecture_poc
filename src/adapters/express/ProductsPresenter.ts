import { Request, Response } from "express";
import ProductRepositoryInterface from "../../usecases/__interfaces__/ProductRepositoryInterface";
import { getProducts } from "../../usecases/product/getProducts";
import {
	purchase,
	getAllPurchases,
	APIPurchase,
} from "../../usecases/product/purchase";

export type TransactionParams = {
	productId: string;
	accountId: string;
	amount: number;
};

export default class ProductsPresenter {
	constructor(public productRepository: ProductRepositoryInterface) {}
	presentProducts(req: Request, res: Response) {
		res.send(getProducts(this.productRepository));
	}
	makePurchase(
		req: Request<any, any, any, TransactionParams>,
		res: Response
	) {
		res.send(
			purchase(this.productRepository, {
				productId: req.body.productId,
				accountId: req.body.accountId,
				amount: req.body.amount,
			})
		);
	}
	getAllTransactions(req: Request, res: Response) {
		res.send(getAllPurchases(this.productRepository));
	}
}
