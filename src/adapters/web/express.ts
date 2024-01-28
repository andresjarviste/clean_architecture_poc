import express from 'express';
import cors from 'cors';
import ProductRepositoryInterface from '../../usecases/__interfaces__/ProductRepositoryInterface';

let productRepository : ProductRepositoryInterface;

export interface WebApp  {
    app: express.Application;
    addProductRepository<T extends ProductRepositoryInterface>(repository: T):boolean;
}

export const createServer = (): WebApp => {
    const app = express();

    app.use(express.urlencoded( {extended: true}));
    app.use(cors());
    app.use(express.json());

    app.get('/health', (_req, res) => {
        res.send('server is UP');
    })

    return {
        app,
        addProductRepository<T extends ProductRepositoryInterface>(repository: T):boolean {
            productRepository = repository;
            return true;
        }
    };
}