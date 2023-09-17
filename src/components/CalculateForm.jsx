export const CalculateForm = () => {

  return (
    <form className="bg-white p-8 flex gap-8 justify-center rounded-2xl w-2/4">
      <div className="flex-1">
        <div className="flex flex-col mb-4">
          <label htmlFor="bill" className="text-xl mb-2">Bill</label>
          <input type="text" className="border-2 border-[#042f2e] py-[0.55rem] px-[1.15rem] rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="select" className="text-xl">Select Tip %</label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input type="number" placeholder="Custom" className="border-2 rounded-lg border-[#042f2e] text-center" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="numberOfPeople" className="text-xl mb-2">Number Of People</label>
          <input type="text" className="border-2 border-[#042f2e] py-[0.55rem] px-[1.15rem] rounded-lg" />
        </div>
      </div>
      <div className="bg-[#042f2e] rounded-2xl p-8 flex flex-col justify-between flex-1 text-white">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-lg">Tip Amount</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-3xl">$0.00</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-lg">Total</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-3xl">$0.00</p>
          </div>
        </div>
        <button className="text-white w-full border-[#646cff] tracking-wider transition hover:bg-neutral-700">RESET</button>
      </div>
    </form>
  )
}