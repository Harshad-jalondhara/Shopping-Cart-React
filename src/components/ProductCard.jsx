import { useCart } from "../context/CartContext";

const ProductCard = ({dataProduct}) => {

  const { addProduct } = useCart();

  return (
    <>
      <div className="card shadow-sm h-100 text-center">
        <div className="card-body">
          <h5 className="card-title">{dataProduct.name}</h5>
          <p className="card-text">${dataProduct.price}</p>
          <button className="btn btn-primary"
          onClick={() => addProduct(dataProduct)} // dataProduct => productList na data se

          >Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
