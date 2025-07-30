import Modal from "./Modal";

const Payment = ({
  isOpen,
  onClose,
  directBuyItem,
  cart,
  totalPrice,
  onConfirmPayDirect,
  onConfirmPayCart,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 bg-white rounded space-y-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-green-700">Checkout</h2>

        {directBuyItem ? (
          <>
            <div className="flex items-center border-b pb-4">
              <img
                src={directBuyItem.image}
                alt={directBuyItem.name}
                className="w-16 h-16 rounded"
              />
              <div className="ml-3 flex-1">
                <h3 className="font-semibold">{directBuyItem.name}</h3>
                <p className="text-sm text-gray-600">Size: {directBuyItem.size}</p>
                <p className="text-sm text-gray-600">Qty: {directBuyItem.quantity}</p>
                <p className="font-bold text-green-700">
                  ${(directBuyItem.price * directBuyItem.quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={onConfirmPayDirect}
            >
              Confirm & Pay
            </button>
          </>
        ) : cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b pb-4 mb-4"
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
              </div>
            ))}
            <p className="text-right font-bold text-lg">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={onConfirmPayCart}
            >
              Confirm & Pay
            </button>
          </>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </Modal>
  );
};

export default Payment;
