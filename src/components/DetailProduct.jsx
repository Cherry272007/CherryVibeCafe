import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const sizePriceMap = {
  Small: 0,
  Medium: 1,
  Large: 1.5,
};

const getStar = (num) => {
  return Array.from({ length: 5 }, (_, i) => (
    <FontAwesomeIcon
      key={i}
      className={i + 1 <= num ? "text-amber-400" : "text-gray-300"}
      icon={faStar}
    />
  ));
};

const DetailProduct = ({
  isOpen,
  onClose,
  selected,
  selectedSize,
  setSize,
  quantity,
  setQuantity,
  onAddToCart,
  onBuyNow,
  showMore,
  toggleShowMore,
}) => {
  if (!selected) return null;

  const shortText = `We choose Arabica beans because Arabica beans are prized for their smooth, mild flavor and bright, vibrant acidity...`;
  const fullText = `${shortText}Grown at high altitudes, they develop complex notes of fruit, floral, and subtle sweetness.
    They contain less bitterness and more aromatic oils compared to other coffee beans.
    This makes Arabica the favorite choice for a refined, balanced, and flavorful cup.`;

  const getPriceBySize = (item, size) => {
    if (!item) return 0;
    return item.price + (sizePriceMap[size] || 0);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-6 rounded shadow-lg space-y-4 max-w-3xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="left space-y-4">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-80 object-cover rounded"
            />
            <p className="text-gray-600">
              {showMore ? shortText : fullText}
              <button
                onClick={toggleShowMore}
                className="text-[#414141] underline mt-2 text-[16px] font-medium cursor-pointer hover:font-bold hover:text-[#040404]"
              >
                {showMore ? "Show More" : "Show Less"}
              </button>
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{selected.name}</h2>
            <p className="text-green-600 text-lg font-semibold">
              ${getPriceBySize(selected, selectedSize).toFixed(2)}
            </p>
            <p className="text-sm text-gray-600">Category: {selected.category}</p>
            <div>{getStar(selected.rating)}</div>
            <div>
              <label className="block font-semibold mb-2">Cup Size:</label>
              <div className="flex space-x-4">
                {["Small", "Medium", "Large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSize(size)}
                    className={`px-4 py-2 border rounded ${
                      size === selectedSize
                        ? "bg-orange-500 text-white"
                        : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-2">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 px-2 py-1 border rounded"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => onAddToCart(selected)}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={onBuyNow}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailProduct;
