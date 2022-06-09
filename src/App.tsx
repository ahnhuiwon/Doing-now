import Main from './view/Main'
import Result from './view/Result'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotSearch from './view/NotSearch'
import Loading from './component/Loading'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
          <Route path="/not_search" element={<NotSearch />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
