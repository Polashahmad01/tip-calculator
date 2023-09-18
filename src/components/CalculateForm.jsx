import { useCalculateForm } from "./hooks/useCalculateForm"
import { ResultView } from "./ResultView"
import { InputView } from "./InputView"

export const CalculateForm = () => {
  const { 
    billAmount,
    customAmount,
    numberOfPeople,
    tipAmount,
    total,
    onHandleSubmit,
    onResetHandler,
    onHandleBillAmountChange,
    onCalculateFivePercentage,
    onCalculateTenPercentage,
    onCalculateFifteenPercentage,
    onCalculateTwentyFivePercentage,
    onCalculateFiftyPercentage,
    onHandleCustomAmountInputChange,
    onHandleNumberOfPeopleChange
  } = useCalculateForm()

  return (
    <form
      className="bg-white p-6 flex flex-col gap-4 justify-center rounded-2xl w-3/4 lg:w-2/4 md:p-12 md:flex-row md:gap-8"
      onSubmit={onHandleSubmit}
    >
      <div className="flex-1">
        <InputView
          billAmount={billAmount}
          customAmount={customAmount}
          numberOfPeople={numberOfPeople}
          onHandleBillAmountChange={onHandleBillAmountChange}
          onCalculateFivePercentage={onCalculateFivePercentage}
          onCalculateTenPercentage={onCalculateTenPercentage}
          onCalculateFifteenPercentage={onCalculateFifteenPercentage}
          onCalculateTwentyFivePercentage={onCalculateTwentyFivePercentage}
          onCalculateFiftyPercentage={onCalculateFiftyPercentage}
          onHandleCustomAmountInputChange={onHandleCustomAmountInputChange}
          onHandleNumberOfPeopleChange={onHandleNumberOfPeopleChange}
        />
      </div>
      <div className="bg-[#042f2e] rounded-2xl p-8 flex flex-col justify-between flex-1 text-white">
        <ResultView
          tipAmount={tipAmount}
          total={total}
          onResetHandler={onResetHandler}
        />
      </div>
    </form>
  )
}
