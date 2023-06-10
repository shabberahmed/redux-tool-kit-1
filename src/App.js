import {BrowserRouter, Route, Routes} from "react-router-dom"
import Display from "./Display"
import Add from "./Add"
import Edit from "./Edit"
const App = () => {
return(
  <BrowserRouter>
<Routes>
  <Route path="/" element={<Display/>}/>
  <Route path="/add" element={<Add/>}/>
  <Route path="/edit/:id" element={<Edit/>} />
</Routes>
</BrowserRouter>
)
}

export default App