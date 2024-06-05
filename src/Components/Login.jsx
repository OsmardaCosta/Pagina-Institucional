import InputText from './InputText'
import Label from './Label'
import Select from './Select'
import { Education } from './SelectOptions'
import { Office } from './SelectOptions'
import { Courses } from './SelectOptions'
import { Period } from './SelectOptions'

const Login = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] md:bg-zinc-100">
            <section className="mt-[500px] bg-white rounded p-3 md:shadow-lg md:mt-0 max-w-[850px] ">
                <h1 className="text-center font-semibold text-xl mb-4"> formulário para admição</h1>

                <div className='grid gap-3 grid-cols-1 md:grid-cols-3 '>

                    <div>
                        <Label id="CompleteName" value="Nome Completo" />
                        <InputText id="CompleteName" placeholder="Nome Completo..." />
                    </div>
                    <div>
                        <Label id="data" value="Data de nascimento" />
                        <InputText type="date" />
                    </div>

                    <div className='mt-3'>
                        <Label id="Genero" value="Digite o seu gênero" />
                        <div className='flex items-center'>
                            <Label id="masc" value="Masculino" />
                            <input type="radio" id='masc' checked className='ml-1 mr-4' />

                            <Label id="Femenino" value="Femenino" />
                            <input type="radio" id='Femenino' className='ml-1 mr-4' />

                            <Label id="Outro" value="Outro" />
                            <input type="radio" id='Outro' className='ml-1 mr-3' />
                        </div>
                    </div>

                    <div>
                        <Label id="país" value="País" />
                        <InputText id="país" placeholder="Digite o seu país..." />
                    </div>
                    <div>
                        <Label id="provincia" value="Provincia" />
                        <InputText id="provincia" placeholder="Digite a o seu país..." />
                    </div>
                    <div>
                        <Label id="municipio" value="Município" />
                        <InputText id="municipio" placeholder="Digite a o seu país..." />
                    </div>
                </div>

                <div className='mt-3 gap-3 grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <Label id="email" value="Digite o seu e-mail" />
                        <InputText type="text" id="email" placeholder="Digite o seu e-mail" />
                    </div>

                    <div>
                        <Label id="number" value="Telefone" />
                        <InputText type="tel" id="number" placeholder="Número de telefone..." />
                    </div>

                    <div>
                        <p><Label id="escolaridade" value="Escolaridade" /></p>
                        <Select id="escolaridade" options={Education} />
                    </div>
                </div>

                <div className='grid mt-3 gap-3 grid-cols-1 md:grid-cols-3'>

                    <div>
                        <Label id="cargo" value="Nível" />
                        <Select options={Office} />
                    </div>
                    <div>
                        <Label id="aredeformação" value="Área de Atuação" />
                        <InputText id="aredeformação" placeholder="Onde você atua..." />
                    </div>
                    <div>
                        <Label id="empresaatual" value="Empresa Atual" />
                        <InputText id="empresaatual" placeholder="Empresa em que trabalha(Opcional)" />
                    </div>
                </div>
                <div className='grid mt-3 gap-3 grid-cols-1 md:grid-cols-3'>
                    <div>
                        <Label id="formaçao" value="Formação pretendida" />
                        <Select options={Courses} />
                    </div>
                    <div>
                        <Label value="Periódo de Interesse" />
                        <Select options={Period} />
                    </div>
                    <div>
                        <Label value="Data de início pretendida" />
                        <InputText type="date" />
                    </div>
                    
                </div>
                <button className='block w-[100%] p-1 bg-blue-700 rounded text-white cursor-pointer md:hover:bg-blue-800 transition md:w-[32%] md:m-auto'>Submeter</button>
            </section>
        </div>
    )
}
export default Login