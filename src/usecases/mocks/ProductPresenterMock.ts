import ProductPresenterInterface, {ProductOutput} from "../__interfaces__/ProductPresentationInterface";

export default class ProductPresenterMock implements ProductPresenterInterface {
    renderProductList(products: ProductOutput[]): void {
        throw new Error("Override in test to assert content of products");
    }
}