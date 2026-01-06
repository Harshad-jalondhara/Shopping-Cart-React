import ProductCard from "./ProductCard";

// products data
const products = [
  { id: 1, name: "Macbook", price: 800 },
  { id: 2, name: "IPhone", price: 600 },
  { id: 3, name: "IQOO", price: 400 },
  { id: 4, name: "Vivo", price: 200 },
];

const ProductList = () => {
  return (
    <div className="row">
      {products.map((dataProduct) => ( // map function => value ne alg kar va matee
        <div
         key={dataProduct.id}          // key value unique identify
         className="col-md-3 mb-4">
          <ProductCard dataProduct={dataProduct} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
