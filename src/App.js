import Main from './view/Main.tsx'
import Result from './view/Result.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotSearch from './view/NotSearch.tsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
          <Route path="/not_search" element={<NotSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
