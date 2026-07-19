import { HealthAssistant } from "./HealthAssistant";
import { BmiCalculator } from "./BmiCalculator";
import { Route, Routes } from "react-router";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HealthAssistant />} />
      <Route path="/bmi" element={<BmiCalculator />} />
    </Routes>
  );
}

export default App
