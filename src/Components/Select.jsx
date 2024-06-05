
const Select = ({id, options}) =>{
    return(
        <div>
            <select id={id} className="outline-none w-[99%] border border-zinc-600 p-1 rounded cursor-pointer transition focus:border-blue-600">
                {options.map((option, index, array) => (
                    <option value={option.value} key={index} selected={array[7]}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select