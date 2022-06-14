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
          <Route path="/~c11st16/portfolio/do_now" element={<Main />} />
          <Route
            path="/~c11st16/portfolio/do_now/result"
            element={<Result />}
          />
          <Route
            path="/~c11st16/portfolio/do_now/not_search"
            element={<NotSearch />}
          />
          <Route
            path="/~c11st16/portfolio/do_now/loading"
            element={<Loading />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
