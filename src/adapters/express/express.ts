import express from "express";
import cors from "cors";
import ProductRepositoryInterface from "../../usecases/__interfaces__/ProductRepositoryInterface";
import ApiRoutesAPI from "./ApiRoutesAPI";
import ApiRoutesHTML from "./ApiRoutesHTML";
import ProductsController from "./ProductsController";

export const createServer = <T extends ProductRepositoryInterface>(
	repository: T
): express.Application => {
	const app = express();
	const presenter = new ProductsController(repository);

	app.use(express.urlencoded({ extended: true }));
	app.use(cors());
	app.use(express.json());

	app.get("/health", (_req, res) => {
		res.send("server is UP !!!");
	});

	app.use("/api", new ApiRoutesAPI(presenter).router);
	app.use("/shop", new ApiRoutesHTML(presenter).router);

	return app;
};
