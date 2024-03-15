import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Products from './pages/Products';
import NoPage from './pages/NoPage';
import CalendarViewComp from './pages/CalendarView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/calendarview' element={<CalendarViewComp/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
