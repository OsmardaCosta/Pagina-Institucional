const Input = ({placeholder, id, type}) =>{
    return(
        <input className="focus:border-blue-600 transition border border-zinc-400 rounded p-2 mb-1 outline-none w-[99%] md:p-1" type={type} id={id} placeholder={placeholder} required/>
    )
}

export default Input