export default function ProductTable({ products }) {
  const categories = [...new Set(products.map((product) => product.category))];
  const productList = products.map((product) => ({
    name: product.name,
    price: product.name,
  }));
  console.log(productList);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
