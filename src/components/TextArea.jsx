function TextArea({ name, placeholder, onChange, className, value, height = "flex-1" }) {

    return (
        <div className="min-h-0 flex-1 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <textarea value={value} className={`${className} ${height} font-[Inter] w-full text-xl border border-gray-300 ring-[#1985A1] focus:ring-2 shadow transition-all rounded-md outline-0 p-3.75`} onChange={(e) => onChange(e.target.value)}  type="text" placeholder={placeholder}></textarea>
        </div>
    )

}

export default TextArea