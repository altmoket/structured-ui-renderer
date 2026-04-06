import { data } from "./mockData"
import ResultView from "./ResultView"
import { normalizeData } from "./utils/normalize"

const normalizedData = normalizeData(data)

function App() {
  return <ResultView data={normalizedData} />
}

export default App
