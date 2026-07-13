function Input({ name, placeholder, onChange, className, value }) {

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <input value={value} className={`${className} w-full text-xl border border-gray-300 ring-[#1985A1] focus:ring-2 shadow transition-all rounded-md outline-0 p-3.75`} onChange={(e) => onChange(e.target.value)} type="text" placeholder={placeholder}></input>
        </div>
    )

}

export default Input