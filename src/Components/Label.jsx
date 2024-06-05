const Label = ({id, value}) =>{
    return <label className="font-medium select-none" htmlFor={id}>{value}:</label>
}

export default Label