
import './App.css';
import BootstrapComponant from './componants/BootstrapComponants/BootstrapComponant';
import ChildComponant from './componants/ChildComponant1/ChildComponant1';
import Counter from './componants/ChildComponant2/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './componants/BootstrapComponants/Products';

function App() {
  return (
    <div className="App">
      <BootstrapComponant />
      {/* <ChildComponan
      t />
      <Counter />  */}
      <Products />
      

      
    </div>
  );
}

export default App;
