import {IoTime} from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PrimarySection = () => {

    const [date, setDate] = useState('')

    const [dateClose, setDateClose] = useState('')


    useEffect(() => {
        DateOpen()
        DateClose()
    }, [])

function DateOpen(){
        const setdate = new Date()
        const SetDate = setdate.toLocaleDateString()
        setDate(SetDate)
    }

     function DateClose(){
        const setdate = new Date()
        const SetDate = setdate.getMonth()
        setdate.setMonth(SetDate + 2)
        const formatdate = setdate.toLocaleDateString()
        setDateClose(formatdate)
    }

    return(
        <div>
             <section className='grid grid-cols-1 mb-6 md:grid-cols-2'>
                    <div className='p-3'>
                        <h1 className='text-2xl font-medium text-center mb-4'>Abertura de inscrições de Alunos para <span>ECMABOOK</span></h1>
                        <p className='text-center'>Temos o prazer de anunciar que estão abertas as inscrições para as nossas formações na EcmaBook, esta é a sua chance de fazer parte de uma instituição de renome, dedicada a fornecer abilidades de qualidade e preparar nossos estudantes para um futuro brilhante!</p>
                    </div>

                    <div className='m-auto mt-5 p-3 bg-blue-100 shadow-lg rounded-md w-[85%]'>
                        <div >
                            <div className='flex items-center justify-center mb-3'>
                                <h1 className='text-2xl font-bold'>Inscrições abertas </h1>
                                <IoTime className='ml-1 text-2xl'/>
                            </div>
                            <p className='font-medium flex items-center font-fontPoppins'>Abertura: {date} <div className='ml-2 w-4 h-4 bg-green-500 rounded-full'></div></p>
                            <p className='font-medium flex items-center mb-3 font-fontPoppins'>Fechamento: {dateClose} <div className='ml-2 w-4 h-4 bg-red-600 rounded-full'></div></p>
                        
                            <p>Não perca a oportunidade da carreira dos teus sonhos, tanto como profissional de TI ou outro ramo tecnico!</p>
                        </div>
                        
                        <Link to="/Login">
                            <button className='active:hover:bg-blue-700 font-medium bg-blue-600 p-1 px-3 text-white m-auto block rounded cursor-pointer select-none mt-3  md:hover:bg-blue-700 transition '>Inscrever-se</button>
                        </Link>
                    </div>
                </section>
        </div>
    )
}

export default PrimarySection