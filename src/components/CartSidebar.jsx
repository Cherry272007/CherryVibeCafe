import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartSidebar = ({
  showCart,
  cart,
  onClose,
  onRemoveItem,
  onCheckout,
  totalPrice,
}) => {
  return (
    <div
      className={`fixed top-30 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-700">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-4 border-b pb-4 last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-3 flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="font-bold text-green-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => onRemoveItem(index)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                &times;
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="p-4 border-t">
          <p className="text-lg font-bold mb-4">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={onCheckout}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
