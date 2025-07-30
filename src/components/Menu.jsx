import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import CartSidebar from "./CartSidebar";
import CoffeeCard from "./CoffeeCard";
import DetailProduct from "./DetailProduct";
import Payment from "./Payment";
import QR from "./QR";
import { forwardRef } from "react";

const sizePriceMap = {
  Small: 0,
  Medium: 1,
  Large: 1.5,
};

const Menu = forwardRef((props, ref) => {
  const { Coffee } = useContext(ProductContext);
  const {
    cart,
    addToCart,
    removeFromCart,
    totalPrice,
    showCart,
    setShowCart,
  } = useContext(CartContext);

  const [selected, setSelected] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedSize, setSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [directBuyItem, setDirectBuyItem] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [showMore, setShowMore] = useState(true);

  const getPriceBySize = (item, size) => {
    if (!item) return 0;
    return item.price + (sizePriceMap[size] || 0);
  };

  const handleClick = (val) => {
    setSelected(val);
    setSize("Small");
    setQuantity(1);
    setShowDetail(true);
  };

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      size: selectedSize,
      quantity,
      price: getPriceBySize(item, selectedSize),
      image: item.image,
    };

    addToCart(cartItem);
    setShowCart(true);
    setShowDetail(false);
  };

  const handleBuyNow = () => {
    if (selected) {
      const item = {
        id: selected.id,
        name: selected.name,
        size: selectedSize,
        quantity,
        price: getPriceBySize(selected, selectedSize),
        image: selected.image,
      };
      setDirectBuyItem(item);
      setShowPayment(true);
      setShowDetail(false);
    }
  };

  const removeCartItem = (index) => {
    removeFromCart(index);
  };

  return (
    <>
      <div className=" w-full bg-gray-100 py-[100px]" ref={ref}>
      <CartSidebar
        showCart={showCart}
        cart={cart}
        onClose={() => setShowCart(false)}
        onRemoveItem={removeCartItem}
        onCheckout={() => {
          setDirectBuyItem(null);
          setShowPayment(true);
          setShowCart(false);
        }}
        totalPrice={totalPrice}
      />

      {/* Menu Items */}
      <div className="w-full bg-gray-100 py-12">
        <h1 className="text-center text-[#6b411f] text-3xl font-bold font-serif mb-6">
          ALL MENU
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 px-6">
          {Coffee.map((val) => (
            <CoffeeCard
              key={val.id}
              coffee={val}
              onAddToCartClick={handleClick}
              onCardClick={handleClick}
            />
          ))}
        </div>
      </div>

      <DetailProduct
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        selected={selected}
        selectedSize={selectedSize}
        setSize={setSize}
        quantity={quantity}
        setQuantity={setQuantity}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        showMore={showMore}
        toggleShowMore={() => setShowMore((prev) => !prev)}
      />

      <Payment
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        directBuyItem={directBuyItem}
        cart={cart}
        totalPrice={totalPrice}
        onConfirmPayDirect={() => {
          setShowPayment(false);
          setShowQR(true);
          setDirectBuyItem(null);
        }}
        onConfirmPayCart={() => {
          setShowPayment(false);
          setShowQR(true);
        }}
      />

      <QR isOpen={showQR} onClose={() => setShowQR(false)} />
      </div>
    </>
  );
});

export default Menu;
