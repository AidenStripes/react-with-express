import './App.css';
import Navbar from './Navbar'
import Data from './Data'
import Footer from './Footer'
import StackEx from './Boxes';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Data />
      <br /><br />
      <StackEx />
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;
