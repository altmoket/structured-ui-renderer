import { data } from "./store/mockData"
import ResultView from "./components/ResultView"
import { normalizeData } from "./utils/normalize"

const normalizedData = normalizeData(data)

function App() {
  return <ResultView data={normalizedData} />
}

export default App
