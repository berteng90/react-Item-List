import SearchBar from "./Searchbar";

export default function ProduchtHeader() {
  return (
    <div className="header wrapper">
      <SearchBar />
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="checkbox-instock"
          className="checkbox-instock"
        ></input>
        <label htmlFor="checkbox-instock">Only show products in stock</label>
      </div>
    </div>
  );
}
