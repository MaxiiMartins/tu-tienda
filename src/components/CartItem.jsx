import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io"
import { parseCurrency } from "../utils";
import { CartContext } from "../contexts/CartContext";

// eslint-disable-next-line react/prop-types
const CartItem = ({ product = {} }) => {
  const { title, image, id, amount, price } = product

  const {removerDelCarrito, incrementarProducto, decrementarProducto } = useContext(CartContext)
  return (
    <div className="flex py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/producto/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link to={`/producto/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
              {title}
            </Link>
              {/* quitar del carrito */}
            <div onClick={()=>removerDelCarrito(id)}  className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          {/* cantidad, precio */}
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] border items-center h-full text-primary font-medium" >
              <div onClick={()=>decrementarProducto(id)} className="flex-1 px-2 flex justify-center items-center cursor-pointer">
                <IoMdRemove className="text-gray-500 hover:text-red-500 transition" />
              </div>
              <div className="h-full flex justify-center items-center px-2">{amount}</div>
              <div onClick={()=>incrementarProducto(id)} className="flex-1 px-2 flex justify-center items-center cursor-pointer">
                <IoMdAdd className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around"><h3>{parseCurrency(price)}</h3></div>
            <div className="flex-1 flex items-center justify-end text-primary font-medium"><h3>{parseCurrency(price*amount)}</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
