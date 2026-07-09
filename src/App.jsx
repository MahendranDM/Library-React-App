import './App.css'
import AddBook from './components/AddBook'
import DeleteBook from './components/DeleteBook'
import SearchBook from './components/SearchBook'
import ViewBook from './components/ViewBook'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
     

      <Routes>
        <Route path="/" element={<ViewBook />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/search" element={<SearchBook />} />
        <Route path="/delete" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App