function Select() {
    return (
        <div>
            <form className="bg-white border p-20 w-[200px]">
                <div className="flex items-center justify-center space-x-4">
                    <label htmlFor=""> one</label>
                <input className="relative" type="checkbox" />

                </div>
                <div className="flex items-center justify-center space-x-4">
                    <label htmlFor=""> two</label>
                <input className="relative"  type="checkbox" />

                </div>
                <div className="flex items-center justify-center space-x-4">
                    <label htmlFor=""> three</label>
                <input className="relative"  type="checkbox" />

                </div>
            </form>
        </div>
    )
}

export default Select
