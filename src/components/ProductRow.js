export default function ProductRow({ products }) {
  return (
    <>
      {products.map((product, index) => (
        <tr key={`${products.name} +''+ ${index}`}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
        </tr>
      ))}
    </>
  );
}
