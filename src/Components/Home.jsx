import Header from './Header'
import Footer from './Footer'
import maka from '../assets/maka.png'
import imel from '../assets/imel.jpg'
import cat from '../assets/cat.webp'
import uan from '../assets/uan.jpg'
import { FaBook } from 'react-icons/fa'
import PrimarySection from './PrimarySection'
const Home = () => {

    return (
        <>
            <div>
                <Header />
                <main className='max-w-[1200px] m-auto'>
                    <PrimarySection />
                    <section className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='p-3 px-5'>
                            <h1 className='text-center text-2xl font-medium mb-3'>Porquê escolher a <span className='relative text-blue-700'>ECMABOOK? <div className='absolute h-1 w-36 -bottom-2 bg-blue-800 right-0 blur-[2px] rounded-[50%]'></div></span></h1>
                            <h2 className='font-medium text-lg'>Excelência Acadêmica: </h2>
                            <p>Oferecemos cursos de alta qualidade, ministrados por professores experientes e qualificados!</p>
                            <h2 className='font-medium text-lg mt-3'>Suporte ao Estudante: </h2>
                            <p>Fornecemos uma rede de apoio que incluioriêntação acadêmica, serviços de carreira e atividadee extracurriculares!</p>
                            <h2 className='font-medium text-lg mt-3'>Oportunidades de carreira: </h2>
                            <p>Nossos programas são projetados para atender às demandas do mercado de trabalho, aumentando suas chances de sucesso profissional, e muito mais...!</p>
                        </div>
                        <div className='p-3'>
                            <h1 className='text-center text-xl font-medium'>Conheça as nossas formações <FaBook className='text-blue-700 inline ml-1 text-2xl' /></h1>
                            <div className='bg-blue-100 shadow-xl p-4 rounded mt-4'>
                                <ul>
                                    <li className='font-medium'>1- Ciência da Computação</li>
                                    <li className='font-medium'>2- Engenharia da Computacão</li>
                                    <li className='font-medium'>3- Engenharia Informatica</li>
                                    <li className='font-medium'>4- Analise e D.de Sistemas(ADS)</li>
                                    <li className='font-medium'>5- Engenharia de Software</li>
                                    <li className='font-medium'>6- Segurança da Informação</li>
                                    <li className='font-medium'>7- Análise de dados</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <h1 className=' text-center pb-3 text-2xl font-medium'>Nossos parceiros</h1>
                    <section className='mt-5 flex flex-col items-center gap-5 md:flex-row'>
                        <div><img className='h-36 w-[270px]' src={imel} alt="imel" /></div>
                        <div><img className='h-36 w-[270px]' src={uan} alt="uan" /></div>
                        <div><img className='h-36 w-[270px]' src={maka} alt="makarenko" /></div>
                        <div><img className='h-36 w-[270px]' src={cat} alt="catolica" /></div>
                    </section>
                
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Home