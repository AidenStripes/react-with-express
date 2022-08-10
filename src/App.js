import './App.css';
import Navbar from './Navbar'
import Data from './Data'
import Preview from './Preview';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Data />
      <Preview />
      <Footer />
    </div>
  );
}

export default App;
