import { HealthAssistant } from "./HealthAssistant";
import { BmiCalculator } from "./BmiCalculator";
import { Histroy } from "./History";
import { Route, Routes } from "react-router";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HealthAssistant />} />
      <Route path="/bmi" element={<BmiCalculator />} />
      <Route path="/history" element={<Histroy />} />
    </Routes>
  );
}

export default App
