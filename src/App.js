
import './App.css';
import Navbar from './componants/BootstrapComponants/Navbar';
import ChildComponant from './componants/ChildComponant1/ChildComponant1';
import Counter from './componants/ChildComponant2/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './componants/BootstrapComponants/Products';
import Photo from './componants/Photo/Photo';
import Enlarged from './componants/BootstrapComponants/Enlarged'
import About from './componants/About/About';


import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './componants/Signup/Signup';
import Login from './componants/Signup/Login';
import  {store } from './componants/Redux/store';
import {Provider} from 'react-redux'
import Contact from './componants/About/Contact';





function App() {
  return (
    <Provider store={store}>
    
      <div className='app'>
          <Navbar/>
          {/* <ChildComponan
          t />
          <Counter />  */}
          {/* <Products /> */}
          <Routes>
              <Route path='/' element={<Photo />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/photos/:id/:author' element = {<Enlarged/>}/>
          </Routes>

      </div>

    

    </Provider>


      
        

          
        
    
  );
}

export default App;
