export const CalculateForm = () => {

  return (
    <form className="bg-white p-6 flex flex-col gap-4 justify-center rounded-2xl w-3/4 lg:w-2/4 md:p-12 md:flex-row md:gap-8">
      <div className="flex-1">
        <div className="flex flex-col mb-2 md:mb-4">
          <label htmlFor="bill" className="mb-1 text-lg md:text-xl md:mb-2">Bill</label>
          <input type="text" className="border-2 rounded-lg border-[#042f2e] py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]" />
        </div>
        <div className="mb-2 md:mb-4">
          <label htmlFor="select" className="text-lg md:text-xl">Select Tip %</label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">5%</button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">10%</button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">15%</button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">25%</button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">50%</button>
            <input type="number" placeholder="Custom" className="border-2 rounded-lg border-[#042f2e] text-center" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="numberOfPeople" className="text-lg mb-1 md:text-xl md:mb-2">Number Of People</label>
          <input type="text" className="border-2 rounded-lg border-[#042f2e] py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]" />
        </div>
      </div>
      <div className="bg-[#042f2e] rounded-2xl p-8 flex flex-col justify-between flex-1 text-white">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-base md:text-lg">Tip Amount</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-xl md:text-3xl">$0.00</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-lg">Total</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-xl md:text-3xl">$0.00</p>
          </div>
        </div>
        <button className="text-white w-full border-[#646cff] tracking-wider transition py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem] hover:bg-neutral-700">RESET</button>
      </div>
    </form>
  )
}