import ProductRepositoryInterface from '../__interfaces__/ProductRepositoryInterface';
import Product from '../../entities/Product/Product';
import ProductPresenterInterface, { ProductOutput } from '../__interfaces__/ProductPresentationInterface'

export const getProducts = (
    repository: ProductRepositoryInterface,
    presenter: ProductPresenterInterface
): Product[] => {
    const allProducts = repository.getAllProducts();
    const dataForRendering: ProductOutput[] = allProducts.map(
        (p:Product) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            price: p.price
        })
    )
    presenter.renderProductList(dataForRendering);

    //if all tests done in render functions, then no need for returning anythin
    return repository.getAllProducts();
}
