
export const InputView = (props) => {
  const { 
    billAmount,
    customAmount,
    numberOfPeople,
    onHandleBillAmountChange,
    onCalculateFivePercentage,
    onCalculateTenPercentage,
    onCalculateFifteenPercentage,
    onCalculateTwentyFivePercentage,
    onCalculateFiftyPercentage,
    onHandleCustomAmountInputChange,
    onHandleNumberOfPeopleChange,
  } = props

  return (
    <>
      <div className="flex flex-col mb-2 md:mb-4">
        <label htmlFor="bill" className="mb-1 text-lg md:text-xl md:mb-2">Bill</label>
        <input
          type="number"
          className="border-2 rounded-lg border-[#042f2e] py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
          onChange={onHandleBillAmountChange}
          value={billAmount}
        />
      </div>
      <div className="mb-2 md:mb-4">
        <label htmlFor="select" className="text-lg md:text-xl">Select Tip %</label>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <button 
            className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
            onClick={onCalculateFivePercentage}
          >
            5%
          </button>
          <button
            className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
            onClick={onCalculateTenPercentage}
          >
            10%
          </button>
          <button
            className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
            onClick={onCalculateFifteenPercentage}
          >
            15%
          </button>
          <button
            className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
            onClick={onCalculateTwentyFivePercentage}
          >
            25%
          </button>
          <button
            className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
            onClick={onCalculateFiftyPercentage}
          >
            50%
          </button>
          <input
            type="number"
            placeholder="Custom"
            className="border-2 rounded-lg border-[#042f2e] text-center"
            value={customAmount}
            onChange={onHandleCustomAmountInputChange}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="numberOfPeople" className="text-lg mb-1 md:text-xl md:mb-2">Number Of People</label>
        <input
          type="number"
          className="border-2 rounded-lg border-[#042f2e] py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
          onChange={onHandleNumberOfPeopleChange}
          value={numberOfPeople}
        />
      </div>
    </>
  )
}
