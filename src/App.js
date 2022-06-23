
import './App.css';
import Navbar from './componants/BootstrapComponants/Navbar';
import ChildComponant from './componants/ChildComponant1/ChildComponant1';
import Counter from './componants/ChildComponant2/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './componants/BootstrapComponants/Products';
import Photo from './componants/Photo/Photo';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ChildComponan
      t />
      <Counter />  */}
      {/* <Products /> */}
      <Photo/>


      

      
    </div>
  );
}

export default App;
