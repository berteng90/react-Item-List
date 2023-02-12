export default function Searchbar() {
  return (
    <div className="search-wrapper">
      <input type="search" placeholder="Search....."></input>
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </div>
  );
}
