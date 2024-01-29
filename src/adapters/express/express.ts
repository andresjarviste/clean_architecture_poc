import express from "express";
import cors from "cors";
import ProductRepositoryInterface from "../../usecases/__interfaces__/ProductRepositoryInterface";
import ApiRoutes from "./ApiRoutes";
import ProductsPresenter from "./ProductsPresenter";

export const createServer = <T extends ProductRepositoryInterface>(
	repository: T
): express.Application => {
	const app = express();
	const presenter = new ProductsPresenter(repository);

	app.use(express.urlencoded({ extended: true }));
	app.use(cors());
	app.use(express.json());

	app.get("/health", (_req, res) => {
		res.send("server is UP !!!");
	});

	app.use("/api", new ApiRoutes(presenter).router);

	return app;
};
