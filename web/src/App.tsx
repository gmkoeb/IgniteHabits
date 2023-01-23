import "./styles/global.css";
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";
import './lib/dayjs'

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-max px-6 w-max-5xl flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}

export default App;
