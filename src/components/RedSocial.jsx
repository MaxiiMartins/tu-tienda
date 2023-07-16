import { BsInstagram } from 'react-icons/bs';
import { INFORMACION } from './../constants';

const RedSocial = () => {
    return (
        <section className=" mt-8 py-20 flex flex-col justify-center items-center text-6xl font-medium text-[#d33b94]" >
            <a target="_blank" href={`https://www.instagram.com/${INFORMACION.instagram}`} rel="noreferrer">
                <h3 className='flex flex-row gap-2'><span className='mr-1' ><BsInstagram /></span>{INFORMACION.instagram || "tuinstagram"}</h3>
                <div className='text-center' >
                    <button className='uppercase border-2 text-primary hover:text-[#d33b94] border-primary hover:border-[#d33b94] rounded-full py-2 px-4 text-base tracking-wider transition-colors duration-700'>Seguinos</button>
                </div>
            </a>
        </section>
    )
}

export default RedSocial