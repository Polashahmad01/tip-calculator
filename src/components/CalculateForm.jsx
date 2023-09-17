import { useReducer, useEffect } from "react"

const initalState = {
  billAmount: 0,
  builtInTipAmount: 0,
  customAmount: 0,
  numberOfPeople: 0,
  tipAmount: 0,
  total: 0
}

const calculateTotalReducer = (state, action) => {
  switch(action.type) {

    case "UPDATE_BILL_AMOUNT":
      return {
        ...state,
        billAmount: action.payload.amount
      }

    case "UPDATE_CUSTOM_AMOUNT":
      return {
        ...state,
        customAmount: action.payload.amount
      }

    case "UPDATE_NUMBER_OF_PEOPLE":
      return {
        ...state,
        numberOfPeople: action.payload.amount
      }

    case "CALCULATE_TOTAL":
      return {
        ...state,
        tipAmount: action.payload.tipPerperson,
        total: action.payload.totalPerson
      }

    case "FIVE_PERCENTAGE":
      return {
        ...state,
        builtInTipAmount: action.payload.amount
      }

    case "RESET":
      return {
        billAmount: 0,
        builtInTipAmount: 0,
        customAmount: 0,
        numberOfPeople: 0,
        tipAmount: action.payload.tipAmount,
        total: action.payload.total
      }

    default:
      return initalState
  }
}

export const CalculateForm = () => {

  const [calculatedState, dispatch] = useReducer(calculateTotalReducer, initalState)
  const { billAmount, builtInTipAmount, customAmount, numberOfPeople, tipAmount, total } = calculatedState

  // console.log("Tip per person", tipAmount)
  // console.log("Total per person", total)

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const handleBillAmountChange = (event) => {
    dispatch({ type: "UPDATE_BILL_AMOUNT", payload: { amount: event.target.value }})
  }

  const handleCustomAmountInputChange = (event) => {
    dispatch({ type: "UPDATE_CUSTOM_AMOUNT", payload: { amount: event.target.value }})
  }

  const handleNumberOfPeopleChange = (event) => {
    dispatch({ type: "UPDATE_NUMBER_OF_PEOPLE", payload: { amount: event.target.value }})
  }

  const resetHandler = () => {
    dispatch({ type: "RESET", payload: { tipAmount: 0, total: 0 } })
  }

  useEffect(() => {
    if(calculateableHandler()) {
      const calculateTotal = () => {
        const totalTipAmount = (parseInt(customAmount) / parseInt(billAmount))
        console.log("totalTipAmount", totalTipAmount)
        const tipPerperson = totalTipAmount / numberOfPeople
        const totalPerson = (Number(billAmount) + totalTipAmount) / numberOfPeople
        dispatch({ type: "CALCULATE_TOTAL", payload: { tipPerperson, totalPerson }})
      }
      calculateTotal()
    }

  }, [billAmount, customAmount, numberOfPeople, tipAmount])

  const calculateableHandler = () => {
    if(billAmount > 0 && customAmount > 0 && numberOfPeople > 0) {
      return true
    }
    return false
  }

  const fivePercentTipHandler = () => {
    dispatch({ type: "FIVE_PERCENTAGE", payload: { amount: 5 }})
  }

  // console.log("builtInTipAmount", builtInTipAmount)

  return (
    <form
      className="bg-white p-6 flex flex-col gap-4 justify-center rounded-2xl w-3/4 lg:w-2/4 md:p-12 md:flex-row md:gap-8"
      onSubmit={handleSubmit}
    >
      <div className="flex-1">
        <div className="flex flex-col mb-2 md:mb-4">
          <label htmlFor="bill" className="mb-1 text-lg md:text-xl md:mb-2">Bill</label>
          <input
            type="number"
            className="border-2 rounded-lg border-[#042f2e] py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
            onChange={handleBillAmountChange}
            value={billAmount}
          />
        </div>
        <div className="mb-2 md:mb-4">
          <label htmlFor="select" className="text-lg md:text-xl">Select Tip %</label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button
              className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
              onClick={fivePercentTipHandler}
            >
              5%
            </button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">10%</button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">15%</button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">25%</button>
            <button className="py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]">50%</button>
            <input
              type="number"
              placeholder="Custom"
              className="border-2 rounded-lg border-[#042f2e] text-center"
              value={customAmount}
              onChange={handleCustomAmountInputChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="numberOfPeople" className="text-lg mb-1 md:text-xl md:mb-2">Number Of People</label>
          <input
            type="number"
            className="border-2 rounded-lg border-[#042f2e] py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem]"
            onChange={handleNumberOfPeopleChange}
            value={numberOfPeople}
          />
        </div>
      </div>
      <div className="bg-[#042f2e] rounded-2xl p-8 flex flex-col justify-between flex-1 text-white">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-base md:text-lg">Tip Amount</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-xl md:text-3xl">${tipAmount}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="mb-1 font-extrabold text-lg">Total</h5>
              <p className="opacity-50">/ person</p>
            </div>
            <p className="font-extrabold text-xl md:text-3xl">${total}</p>
          </div>
        </div>
        <button 
          className="text-white w-full border-[#646cff] tracking-wider transition py-[0.40rem] px-[0.90rem] md:py-[0.55rem] md:px-[1.15rem] hover:bg-neutral-700"
          onClick={resetHandler}
          >
            RESET
        </button>
      </div>
    </form>
  )
}