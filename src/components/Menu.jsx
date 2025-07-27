import { useContext, useState } from "react"
import { ProductContext } from "../Context/ProductContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './Modal.jsx'
import Modal from "./Modal.jsx";
const Menu = () => {
    const {Coffee} = useContext(ProductContext);
    const [selected, setSelected] = useState(null);    // which product is clicked
    const [showDetail, setShowDetail] = useState(false);

    function getStar(num) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <FontAwesomeIcon
                key={i}
                className={i <= num ? "text-amber-300" : "text-gray-300"}
                icon={faStar}
            />
        );
    }
    return stars;
    }
    const handleClick = val => {
    setSelected(val);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
    setSelected(null);
  };

  return (
    <>
      <div className="w-[100%] bg-gray-100 py-[50px]">
        <div className="title text-center text-[#6b411f] text-2xl font-bold font-serif">
            <h1>ALL MENU</h1>
        </div>
        <div className="Box-card grid grid-cols-5 gap-4 w-[90%] mx-auto mt-[15px]">
            {Coffee.map(val=>(
                <div
                    key={val.id}
                    className="card w-full relative h-[350px] shadow-md rounded-md mt-5 overflow-hidden cursor-pointer"
                    onClick={() => handleClick(val)}>
                <div className="bg-red-400 absolute top-0 start-0 z-10 py-1 px-2 rounded-br-sm text-white">
                    {val.category}
                </div>
                <div className="image w-full h-[70%] overflow-hidden">
                    <img className="w-full h-full hover:scale-[1.07] transition ease-in-out duration-100"src={val.image} alt='' />
                </div>
                <div className="caption flex flex-col py-1 px-2 w-full h-[30%]">
                    <span>{val.name}</span>
                    <span>${val.price}</span>
                    <span>{getStar(val.rating)}</span>
                </div>
            </div>

            ))}
        </div>
      </div>
      <Modal isOpen={showDetail} onClose={handleClose}>
        {selected && (
          <div className="space-y‑4">
            <img src={selected.image} alt={selected.name} className="w‑full h‑auto max‑h‑80 object‑cover rounded"/>
            <h2 className="text‑2xl font-semibold">{selected.name}</h2>
            <p className="text‑lg">$ {selected.price}</p>
            <p className="text‑sm text‑gray‑600">Category: {selected.category}</p>
            <div>{getStar(selected.rating)}</div>
            <p className="mt‑2">{selected.description}</p>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Menu
