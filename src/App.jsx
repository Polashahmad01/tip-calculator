import { CalculateForm } from "./components/CalculateForm"

export const App = () => {

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 md:mb-8">Tip Calculator</h1>
      <CalculateForm />
    </div>
  )
}
