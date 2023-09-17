export const CalculateForm = () => {

  return (
    <form className="bg-white p-8 rounded-2xl flex justify-between items-center gap-4 w-2/4">
      <div>
        <div className="flex flex-col mb-4">
          <label htmlFor="bill" className="text-xl mb-2">Bill</label>
          <input type="text" className="border-y border-x border-[#333] py-[0.55rem] px-[1.15rem] rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="select" className="text-xl">Select Tip %</label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input type="text" placeholder="Custom" className="border-y border-x rounded-lg border-[#333] text-center" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="numberOfPeople" className="text-xl mb-2">Number Of People</label>
          <input type="text" className="border-y border-x border-[#333] py-[0.55rem] px-[1.15rem] rounded-lg" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Results</h1>
      </div>
    </form>
  )
}