import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { parseCurrency } from './../utils';

import { CartContext } from '../contexts/CartContext';


// eslint-disable-next-line react/prop-types
const Product = ({ product = {} }) => {
  const { title, image, id, price, category } = product
  const { agregarAlCarrito } = useContext(CartContext)
  return (
    <article>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className="w-full h-full flex justify-center items-center">
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img draggable={false} className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="Trulli" />
          </div>
        </div>
        {/* botones */}
        <div className='absolute top-6 flex flex-col justify-center items-start text-white z-[5]'>
          {id % 2 === 0 ? null :
            (
              <span className='font-semibold bg-red-500 w-full p-2 uppercase text-xs leading-3'>Oferta</span>
            )}
          {id !== 3 ? null :<span className='font-semibold w-full bg-price p-2 uppercase text-xs leading-3'>Nuevo</span>}
        </div>

        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div onClick={() => agregarAlCarrito(product)} className='flex justify-center items-center text-white w-12 h-12 bg-green-700 cursor-pointer drop-shadow-xl'>
            <BsPlus className='text-4xl' />
          </div>
          <Link to={`/producto/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className='space-y-1' >
        <p className='text-sm capitalize text-gray-500'>{category}</p>
        <Link to={`/producto/${id}`} className='font-semibold' >
          <h2>{title}</h2>
        </Link>
        <div className='flex flex-row justify-start items-center gap-2 '>
          {id % 2 == 0 ?
            (<p className='font-semibold text-price'>{parseCurrency(price)}</p>)
            :
            (<>
              <p className='font-semibold text-price'>{parseCurrency(price - (price * 0.2))}</p>
              <p className='font-semibold text-xs text-gray-500 line-through'>{parseCurrency(price)}</p>
            </>
            )
          }
        </div>
      </div>
    </article>
  )
};

export default Product;
