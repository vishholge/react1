
import './App.css';
import Navbar from './componants/BootstrapComponants/Navbar';
import ChildComponant from './componants/ChildComponant1/ChildComponant1';
import Counter from './componants/ChildComponant2/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './componants/BootstrapComponants/Products';
import Photo from './componants/Photo/Photo';
import About from './componants/About/About';

import { BrowserRouter,Routes,Route } from 'react-router-dom';





function App() {
  return (
    
      <div className="App">
        
          <Navbar/>
          {/* <ChildComponan
          t />
          <Counter />  */}
          {/* <Products /> */}
          <Routes>
              <Route path="/" element={<Photo />} />
              <Route path="about" element={<About />} />
          </Routes>

          
        </div>
    
  );
}

export default App;
