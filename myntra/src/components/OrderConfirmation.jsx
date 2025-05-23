import "bootstrap/dist/css/bootstrap.min.css";

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation text-center mt-5">
      <h1 className="order-heading">✅ Order Placed Successfully!</h1>
      <h3 className="payment-not">🚧 Payment gateway is not yet integrated.</h3>
      <p className="thank">Thank you for shopping with us.</p>
    </div>
  );
};

export default OrderConfirmation;
