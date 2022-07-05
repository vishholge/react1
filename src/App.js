
import './App.css';
import Navbar from './componants/BootstrapComponants/Navbar';
import ChildComponant from './componants/ChildComponant1/ChildComponant1';
import Counter from './componants/ChildComponant2/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './componants/BootstrapComponants/Products';
import Photo from './componants/Photo/Photo';
import Enlarged from './componants/BootstrapComponants/Enlarged'
import About from './componants/About/About';

import { Routes,Route } from 'react-router-dom';
import Signup from './componants/Signup/Signup';





function App() {
  return (
    
    <div className='app'>
        <Navbar/>
        {/* <ChildComponan
        t />
        <Counter />  */}
        {/* <Products /> */}
        <Routes>
            <Route path='/' element={<Photo />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            {/* <Route path='/login' element={<Login/>} /> */}
            <Route path='/photos/:id/:author' element = {<Enlarged/>}/>
        </Routes>

    </div>


      
        

          
        
    
  );
}

export default App;
