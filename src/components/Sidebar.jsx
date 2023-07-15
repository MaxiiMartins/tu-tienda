import { useContext } from "react"

import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi"

import CartItem from './CartItem';

import { SidebarContext } from './../contexts/SidebarContext';
import { CartContext } from "../contexts/CartContext";
import { parseCurrency } from "../utils";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, vaciarCarrito,itemAmount,total } = useContext(CartContext)


  return (
    <div className={` ${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`} >
      <div className="flex items-center justify-between py-6 border-b">
        <div>
          <h2 className="uppercase text-sm font-semibold" >Tu pedido <span className="text-gray-500">({itemAmount})</span></h2>
        </div>
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleClose} >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[70vh] lg:h-[72vh] overflow-y-auto overscroll-y-none overflow-x-hidden border-b" >
        {cart.map((item) => (<CartItem key={item.id} product={item} />))}
      </div>
      <div className="flex w-full justify-between items-center my-4">
        <div className="uppercase font-semibold">
          <p>Total: <span>{parseCurrency(total)}</span></p>
        </div>
        <div onClick={vaciarCarrito} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
          <FiTrash2 />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
