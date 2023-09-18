import { useReducer, useEffect } from "react"

const initalState = {
  billAmount: 0,
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
    
    case "BUILD_IN_AMOUNT":
      return {
        ...state,
        customAmount: action.payload.amount
      }

    case "RESET":
      return {
        billAmount: 0,
        customAmount: 0,
        numberOfPeople: 0,
        tipAmount: action.payload.tipAmount,
        total: action.payload.total
      }

    default:
      return initalState
  }
}

export const useCalculateForm = () => {
  const [calculatedState, dispatch] = useReducer(calculateTotalReducer, initalState)
  const { billAmount, customAmount, numberOfPeople, tipAmount, total } = calculatedState

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
        const totalTipAmount = (parseInt(customAmount) / 100) * parseInt(billAmount)
        const tipPerperson = totalTipAmount / numberOfPeople
        const totalPerson = (Number(billAmount) + totalTipAmount) / numberOfPeople
        dispatch({ type: "CALCULATE_TOTAL", payload: { tipPerperson, totalPerson }})
      }
      calculateTotal()
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billAmount, customAmount, numberOfPeople])

  const calculateableHandler = () => {
    if(billAmount > 0 && customAmount > 0 && numberOfPeople > 0) {
      return true
    }
    return false
  }

  const calculateFivePercentage = () => {
    dispatch({ type: "BUILD_IN_AMOUNT", payload: { amount: 5 }})
  }

  const calculateTenPercentage = () => {
    dispatch({ type: "BUILD_IN_AMOUNT", payload: { amount: 10 }})
  }

  const calculateFifteenPercentage = () => {
    dispatch({ type: "BUILD_IN_AMOUNT", payload: { amount: 15 }})
  }

  const calculateTwentyFivePercentage = () => {
    dispatch({ type: "BUILD_IN_AMOUNT", payload: { amount: 25 }})
  }

  const calculateFiftyPercentage = () => {
    dispatch({ type: "BUILD_IN_AMOUNT", payload: { amount: 50 }})
  }

  return {
    billAmount,
    customAmount,
    numberOfPeople,
    tipAmount,
    total,
    onHandleSubmit: handleSubmit,
    onResetHandler: resetHandler,
    onHandleBillAmountChange: handleBillAmountChange,
    onCalculateFivePercentage: calculateFivePercentage,
    onCalculateTenPercentage: calculateTenPercentage,
    onCalculateFifteenPercentage: calculateFifteenPercentage,
    onCalculateTwentyFivePercentage: calculateTwentyFivePercentage,
    onCalculateFiftyPercentage: calculateFiftyPercentage,
    onHandleCustomAmountInputChange: handleCustomAmountInputChange,
    onHandleNumberOfPeopleChange: handleNumberOfPeopleChange
  }
}
