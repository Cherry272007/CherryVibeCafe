import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
const CartIcon = () => {
  return (
    <div>
      {/* Cart Icon */}
      <div
        className="Cart absolute top-12 right-20 z-50 cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <FontAwesomeIcon icon={faCartShopping} className="text-3xl text-[Orange]" />
          {cart.length > 0 && (
          <span className="fixed -top-3 -right-2 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
            {cart.length}
          </span>
        )}
      </div>
    </div>
  )
}

export default CartIcon
