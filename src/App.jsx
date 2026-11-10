
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddData from "./pages/AddData"
import Viewdata from "./pages/Viewdata"
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addData" element={<AddData/>} />
          <Route path="/viewData" element={<Viewdata/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App