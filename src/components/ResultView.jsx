
export const ResultView = (props) => {
  const { tipAmount, total, onResetHandler } = props

  return (
    <>
      <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-base md:text-lg">Tip Amount</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-xl md:text-3xl">${tipAmount?.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-lg">Total</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-xl md:text-3xl">${total?.toFixed(2)}</p>
          </div>
        </div>
        <button 
          className="text-white w-full border-[#646cff] tracking-wider transition py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem] hover:bg-neutral-700"
          onClick={onResetHandler}
          >
            RESET
        </button>
    </>
  )
}