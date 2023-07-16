import { BsCreditCard, BsTruck, BsWhatsapp } from 'react-icons/bs'

const Opciones = () => {
    return (
        <section className='flex flex-row w-full justify-center items-center gap-40 py-16'>
            <div className='flex flex-col justify-center items-center gap-1 text-2xl' >
                <BsTruck className='text-5xl' />
                <h4 className='uppercase'>Envio a todo el pais</h4>
                <span className='text-base text-gray-400'>A domicilio o Retiro Sucursal</span>
            </div>
            <div className='md:flex hidden flex-col justify-center items-center gap-1 text-2xl' >
                <BsCreditCard className='text-5xl' />
                <h4 className='uppercase'>Cuotas sin interes</h4>
                <span className='text-base capitalize text-gray-400'>visa | mastercard</span>
            </div>
            <div className='md:flex hidden flex-col justify-center items-center gap-1 text-2xl' >
                <BsWhatsapp className='text-5xl' />
                <h4 className='uppercase'>Whatsapp</h4>
                <span className='text-base capitalize text-gray-400'>Atencion 24hs</span>
            </div>
        </section>
    )
}

export default Opciones