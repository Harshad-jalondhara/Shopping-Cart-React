

const CartPage = () => {
  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4">Shopping Cart</h1>
        <div className="container">
          <h2 className="mb-3">Your Cart</h2>
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phone</td>
                <td>$500</td>
                <td style="width: 100px">
                  <input
                    className="form-control text-center"
                    min="1"
                    type="number"
                    value="1"
                  />
                </td>
                <td>$500</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm">Remove</button>
                </td>
              </tr>
              <tr>
                <td>Headphones</td>
                <td>$100</td>
                <td style="width: 100px">
                  <input
                    className="form-control text-center"
                    min="1"
                    type="number"
                    value="1"
                  />
                </td>
                <td>$100</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-end fw-bold fs-5">Total: $600.00</div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
