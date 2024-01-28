import {WebApp, createServer} from './adapters/web/express';
import ProductRepositoryFile from './repositories/ProductRepositoryFile';

const startServer = () => {
    const productRepo = new ProductRepositoryFile(__dirname + '/adapters/terminal');
    const webApp = createServer();
    webApp.addProductRepository(productRepo);

    webApp.app.listen(3000, () => {
        console.log('Webapp is up and running on port 3000');
    })
}

startServer();