
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addcontact from './components/contact/Addcontact';
import Contactlist from './components/contact/Contactlist';
import Editcontact from './components/contact/Editcontact';
import Viewcontact from './components/contact/Viewcontact';

function App() {
   
  
  return (
    <div className="App">
        <Navbar/>
     <Routes>
    

       <Route path={'/'} element={<Navigate to={'/contact/list'}/>}/>
       <Route path='/contact/list' element={<Contactlist/>}/>
       <Route path='/contact/add' element={<Addcontact/>}/>
       <Route path='/contact/edit/:Id' element={<Editcontact/>}/>
       <Route path='/contact/view/:Id' element={<Viewcontact/>}/>
     </Routes>
    </div>
  );
}

export default App;
