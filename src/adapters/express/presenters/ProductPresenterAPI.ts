import ProductPresenterInterface, {ProductOutput} from "../../../usecases/__interfaces__/ProductPresentationInterface";
import { Response } from "express";

export default class ProductPresenterAPI implements ProductPresenterInterface {
    protected res: Response | null;
    constructor() {
        this.res = null;
    }
    setRes( res: Response): void {
        this.res = res;
    }
    renderProductList(products: ProductOutput[]): void {
        if (!this.res) {
            throw new Error('Res not initialised!');
        }
        products.forEach((p) => {
            this.res?.send(products);
        })
    }
}