import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from "react-icons/bs"
import { CartContext } from '../contexts/CartContext';
import { INFORMACION } from '../constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const { setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  return (
    <header className='fixed w-screen z-10 ' >
      <div className='bg-primary flex justify-center items-center text-white'>
    <span className='font-semibold text-[12px] lg:text-sm py-2' >ENVIO GRATIS + 3 CUOTAS SIN INTERES </span>
      </div>
      <nav className={`flex justify-between py-5 px-10 ${isActive ? "bg-white shadow-xl" : "bg-transparent"} transition-all`}>
        <Link to="/">
          <h2 className='uppercase font-semibold text-2xl' >{INFORMACION.title}</h2>
        </Link>
        <div onClick={() => setIsOpen(prevState => !prevState)} className='cursor-pointer flex relative max-w-[50px]'>
          <BsBag className='text-2xl' />
          {
            itemAmount > 0 ? (
              <div className='bg-red-500 absolute -right-2 -bottom-0 text-[12px] w-5 h-5 text-white font-semibold rounded-full flex justify-center items-center' >
                <p>{itemAmount}</p>
              </div>
            ) : null
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
