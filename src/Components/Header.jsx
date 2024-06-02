import img from '../assets/R.png'
import {IoMenu} from 'react-icons/io5'

const Header = () =>{
    return(
        <div>
            <header className='-z-20 text-white relative bg-home bg-fixed bg-cover bg-center w-full h-[400px]'>
                <div className='-z-30 absolute top-0 left-0 h-[100%] w-[100%] bg-overlay'></div>
                <div className="-z-10 py-2 px-4 flex justify-between items-center">
                    <div className="text-2xl font-semibold">ECMABOOK</div>
                    <nav>
                        <IoMenu className='text-3xl' />
                    </nav>
                </div>
                <div className='flex justify-center flex-col mt-7'>
                    <img className=' m-auto w-32 h-32' src={img} alt="icone" />
                    <p className='text-center'>Inscreva-se na nossa instituição Para o melhor aprendizado</p>
                </div>
            </header>
        </div>
    )
}

export default Header