const InputText = ({placeholder, id, type}) =>{
    return(
        <input className="focus:border-blue-600 transition border border-zinc-400 rounded p-1 mb-1 outline-none w-[99%]" type={type} id={id} placeholder={placeholder} required/>
    )
}

export default InputText