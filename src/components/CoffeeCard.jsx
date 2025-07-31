import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const getStar = (num) => {
  return Array.from({ length: 5 }, (_, i) => (
    <FontAwesomeIcon
      key={i}
      className={i + 1 <= num ? 'text-amber-400' : 'text-gray-300'}
      icon={faStar}
    />
  ));
};

const CoffeeCard = ({ coffee, onAddToCartClick, onCardClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer relative"
      onClick={() => onCardClick(coffee)}
    >
      <div className="absolute top-0 left-0 py-1 px-2 bg-red-400 text-white rounded-br-md">
        {coffee.category}
      </div>
      <div className="h-52 overflow-hidden">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold">{coffee.name}</h2>
        <p className="text-green-600 font-bold">${coffee.price}</p>
        <div>{getStar(coffee.rating)}</div>
      </div>
      <button
      className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 z-20"
      onClick={(e) => {
        e.stopPropagation(); // Prevents the parent onClick from firing
        onAddToCartClick(coffee);
      }}
    >
      Add to cart
    </button>

    </div>
  );
};

export default CoffeeCard;
