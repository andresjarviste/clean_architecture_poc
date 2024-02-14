import { Request, Response } from "express";
import ProductRepositoryInterface from "../../usecases/__interfaces__/ProductRepositoryInterface";
import { getProducts } from "../../usecases/product/getProducts";
import ProductPresenterAPI from "./presenters/ProductPresenterAPI";
import ProductPresenterHTML from "./presenters/ProductPresenterHTML";

import {
	purchase,
	getAllPurchases,
} from "../../usecases/product/purchase";

export type TransactionParams = {
	productId: string;
	accountId: string;
	amount: number;
};

export enum WebOutputType {
	html,
	api
};

export default class ProductsController {
	constructor(
		public productRepository: ProductRepositoryInterface,
	) {}
	//here we inject presenter to use case and use case calls presenter to render output
	showProducts(req: Request, res: Response, type: WebOutputType) {
		let apiPresenter;
		if (type === WebOutputType.api) {
			apiPresenter = new ProductPresenterAPI();
		} else {
			apiPresenter = new ProductPresenterHTML();
		}
		apiPresenter.setRes(res);
		getProducts(this.productRepository, apiPresenter);
	}

	//here the use case returns data and controller should handle itself separately possible 
	//different  outputs (e.g. error situations, valid output, etc)
	makePurchase(
		req: Request<any, any, any, TransactionParams>,
		res: Response
	) {
		try {
			res.send(
				purchase(this.productRepository, {
					productId: req.body.productId,
					accountId: req.body.accountId,
					amount: req.body.amount,
				})
			);
		} catch (e) {
			res.status(400).end({status: 'Error', message: "Try to turn it off and on again!"});
		}

	}
	getAllTransactions(req: Request, res: Response) {
		res.send(getAllPurchases(this.productRepository));
	}
}
