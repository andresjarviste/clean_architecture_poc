import { ProductInTerminal } from '../types'

function outputRow(name: string, price: string, stock: string) {
    const nameLength = 30;
    const priceLength = 10;
    const stockLength = 10;
    let output = '|';
    output += name.padEnd(nameLength-1);
    output += '|';
    output += price.padStart(priceLength-1);
    output += '|';
    output += stock.padStart(stockLength-1);
    output += '|';
    console.log(output);
    console.log('-'.padEnd(nameLength+priceLength+stockLength+1, '-'))
}

export const presentProducts = (products: ProductInTerminal[]) => {
    outputRow('Product name', 'price', 'in stock');
    products.forEach((p) => {
        outputRow(p.name, p.sellingPrice.toString(), p.amountInStock.toString());
    })
}