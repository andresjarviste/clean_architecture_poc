import {ProductOutput} from "../../../usecases/__interfaces__/ProductPresentationInterface";
import ProductPresenterAPI from "./ProductPresenterAPI";

//we could use templating here
const  _getProducRowsHTML = (products: ProductOutput[]) => {
    let out = '';
    products.forEach((p, index) => {
        out += `
        <tr>
            <th scope="row">${p.id}</th>
            <td>${p.name}</td>
            <td>${p.description}</td>
            <td>${p.price}</td>
        </tr>        
        `;
    })
    return out;
}
const  _getProductListHTML = (products: ProductOutput[]) => {
    let rows = _getProducRowsHTML(products);
    let output = `
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
<head>
<body>
    <div class="container mt-5">
    <h1>Here are all our incredible products</h1>
    <div></div>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
        ${rows}
        </tbody>
    </table>
    </div>
</body>
    `;

    return output;
}

//violating Dependency inversion Principle knowingly
//If any render function here is not implemeented, I am ok with 
//original implementation (JSON output)
export default class ProductPresenterHTML extends ProductPresenterAPI  {
    renderProductList(products: ProductOutput[]): void {
        if (!this.res) {
            throw new Error('Res not initialised!');
        }

        this.res?.send(_getProductListHTML(products));
    }
}