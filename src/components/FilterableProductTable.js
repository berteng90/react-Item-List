import Searchbar from "./Searchbar";
import ProductTable from "./ProductTable";
export default function FilterableProductTable({ products }) {
  return (
    <div>
      <Searchbar />
      <ProductTable products={products} />
    </div>
  );
}
