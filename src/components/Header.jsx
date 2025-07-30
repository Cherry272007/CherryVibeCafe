import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
const Header = ({onMenuClick}) => {
   const { cart, showCart, setShowCart } = useContext(CartContext);
  return (
    <>
      <header className='w-full sticky top-0 z-111 bg-[#3e2a17] shadow-lg '>
        <div className="header w-[90%] flex items-center justify-between">
          <div className="logo p-4 px-[80px]">
            <img className='w-[100px] rounded-[100%] hover:shadow-[0_0_15px_#f97316] hover:shadow-[0_0_8px_#f97316,0_0_16px_#f97316] transition-all duration-300' src="src/image/CherryCafe.jpg" alt="logo" />
          </div>
          <div className="menu flex gap-5 justify-center items-center" style={{scroll:'smooth'}}>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/'}>Home</Link>
             <button
              className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e]'
              onClick={onMenuClick}
            >
             Menu
            </button>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/Contact'}>Contact</Link>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/About'}>About Us</Link>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/Location'}>Location</Link>
            <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <FontAwesomeIcon icon={faCartShopping} className="text-3xl text-[orange]" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
