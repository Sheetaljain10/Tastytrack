import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './Pages/Add/Add'
import {Routes, Route} from "react-router-dom"
import List from './Pages/List/List'
import Order from './Pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
      // const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content"><Sidebar/>
      <Routes>
        <Route path="/add" element = {<Add />}/>
        <Route path="/list" element = {<List />}/>
        <Route path="/orders" element = {<Order />}/>
      </Routes>
      </div>
      
    </div>
  )
}

export default App
