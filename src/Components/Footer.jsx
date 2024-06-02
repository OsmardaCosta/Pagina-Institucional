import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiPexels } from 'react-icons/si'

const Footer = () => {
    return (
        <div>
            <footer className="relative grid grid-cols-1 mt-7 bg-blue-300 p-4 md:grid-cols-2">
                <div className=''>
                    <h1 className="font-medium text-center">Informações de contacto</h1>
                    <div className='flex flex-col items-center mt-3'>
                        <p className='flex items-center text-sm mb-3'>Contacte o desenvolvedor: <FaWhatsapp className='text-2xl ml-2 mr-1' /> <a href="http://wa.me/244932668487" target="_blank" className='select-none bg-green-600 p-1 px-2 rounded text-white'>932-668-487</a></p>

                        <p className='flex items-center text-sm'>Contacte o desenvolvedor: <FaInstagram className='text-2xl ml-2 mr-1' /> <a href="https://www.instagram.com/osmar_costa77/" target="_blank" className='select-none bg-gradient-to-tl from-purple-500 to-pink-500 p-1 px-2 rounded text-white'>Osmar Costa</a></p>

                        <p className='flex items-center text-sm mt-3 mb-3'>Contacte o desenvolvedor: <FaGithub className='text-2xl ml-2 mr-1' /> <a href="http://github/OsmardaCosta" target="_blank" className='select-none bg-gray-800 p-1 px-2 rounded text-white'>Osmar Costa</a></p>

                        <p className='flex items-center text-sm mb-3'>Contacte o desenvolvedor: <FaLinkedin className='text-2xl ml-2 mr-1' /> <a href="https://www.linkedin.com/in/osmar-costa-3302b62a0/" target="_blank" className='select-none bg-blue-600 p-1 px-2 rounded text-white'>932-668-487</a></p>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-2'>
                    <h1 className='font-medium text-center'>Créditos de refrência</h1>

                    <div className='mb-4'>
                        <p className='flex items-center'>Imagem do cabeçalho:  <SiPexels className='text-2xl text-green-600 ml-2 mr-1' /><a className='bg-green-400 rounded p-1 px-2' href="http://Pexels.com" target="_blank">Pexels</a></p>

                        <h1 className='font-medium text-center'>Direitos Autorais</h1>

                        <div className='flex justify-center'>
                            <p className=' text-sm '>Desenvolvido por: Osmar Costa &copy;2024</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer