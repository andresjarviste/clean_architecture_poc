import {createServer} from './adapters/express/express';
import ProductRepositoryFile from './repositories/ProductRepositoryFile';

const startServer = () => {
    const productRepo = new ProductRepositoryFile(__dirname + '/adapters/terminal');
    const app = createServer(productRepo);

    app.listen(3000, () => {
        console.log('Webapp is up and running on port 3000');
    })
}

startServer();