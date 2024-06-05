import img from '../assets/R.png'
import {FaGithub} from 'react-icons/fa'

const Header = () =>{
    return(
        <div>
            <header className='z-[1] text-white relative bg-home bg-fixed bg-cover bg-center w-full h-[400px]'>
                <div className='-z-20 absolute top-0 left-0 h-[100%] w-[100%] bg-overlay'></div>
                
                <div className=" py-2 px-4 flex justify-between items-center">

                    <div className="select-none text-2xl font- font-fontPoppins">ECMABOOK</div>
                    <nav>
                        <a href="http://github/OsmardaCosta" target='_blank'>
                            <FaGithub className='text-3xl cursor-pointer text-zinc-300 hover:text-white transition' />
                        </a>
                    </nav>
                </div> 
                <div className='flex justify-center flex-col mt-7'>
                    <img className='select-none m-auto w-32 h-32' src={img} alt="icone" />
                    <p className='text-center select-none'>Inscreva-se na nossa instituição Para o melhor aprendizado</p>
                </div>
            </header>
        </div>
    )
}

export default Header