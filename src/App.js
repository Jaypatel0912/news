import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import News from './Component/News';
import NewsItem from './Component/NewsItem';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact  path="/technology" element={<News key="technology" category="technology" pagesize={7} country="in"/>}></Route>
                   {/* In the Above we can write All the necessary Component in element */}
          <Route exact path='/sport' element={<News key="sport" category="sport" pagesize={5} country="in"/>}></Route>
          <Route exact path='/science'element={<News key="science" category="science" pagesize={5} country="in"/>}></Route>
          <Route exact path='/general' element={<News key="general" category="general" pagesize={5} country="in"/>}></Route>
          
          <Route exact path='/entertainment' element={ <News key="entertainment" category="entertainment" pagesize={5} country="in"/>}></Route>
          <Route exact path='/Business' element={<News key="Business" category="Business" pagesize={5} country="in"/>}></Route>
         </Routes> 
        </Router>
        
    </div>
  );
}

export default App;

