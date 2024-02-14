import ProductPresenterInterface, {ProductOutput} from "../../../usecases/__interfaces__/ProductPresentationInterface";
function outputRow(name: string, description: string, price: string) {
    const nameLength = 20;
    const descriptionLength = 20;
    const priceLength = 10;
    let output = '|';
    output += name.padEnd(nameLength-1);
    output += '|';
    output += description.padEnd(descriptionLength-1);
    output += '|';
    output += price.padStart(priceLength-1);
    output += '|';
    console.log(output);
    console.log('-'.padEnd(nameLength+descriptionLength+priceLength+1, '-'))
}

export default class ProductsPresenterTerminal implements ProductPresenterInterface {
    renderProductList(products: ProductOutput[]): void {
        outputRow('Name', 'Description', 'Price');
        products.forEach((p) => {
            outputRow(p.name, p.description, p.price.toString());
        })
    }
}