import ProductRow from "./ProductRow";

export default function ProductCategoryRow({ products }) {
  const categories = [...new Set(products.map((product) => product.category))];
  const productList = products.map((product) => ({
    name: product.name,
    price: product.price,
    category: product.category,
  }));

  return (
    <div className="table-wrapper">
      {categories.map((category, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th colSpan="3">{category}</th>
            </tr>
          </thead>
          <tbody>
            <ProductRow
              products={productList.filter(
                (product) => product.category === category
              )}
            />
          </tbody>
        </table>
      ))}
    </div>
  );
}
