import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className='w-full bg-[#3e2a17] shadow-lg '>
        <div className="header w-[90%] flex items-center justify-between">
          <div className="logo p-4 px-[80px] ">
            <img className='w-[100px] rounded-[100%]' src="src/image/CherryCafe.jpg" alt="logo" />
          </div>
          <div className="menu flex gap-5" style={{scroll:'smooth'}}>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/'}>Home</Link>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/Menu'}>Menu</Link>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/Contact'}>Contact</Link>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/About'}>About Us</Link>
            <Link className='font-bold text-white font-sans text-[18px] hover:underline hover:text-[#53422e] ' to={'/Location'}>Location</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
