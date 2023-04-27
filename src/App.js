import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AddUser from "./Component/User/signup"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
      <Routes>
      <Route path="/" element={<AddUser/>} />
  </Routes>
  </div>
    </BrowserRouter>
      </div>
  );
}
export default App;