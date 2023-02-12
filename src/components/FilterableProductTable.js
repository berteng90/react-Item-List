import SearchBar from "./Searchbar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
