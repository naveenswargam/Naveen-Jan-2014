// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
// import Cart from './Routes/Cart';
// import Gallery from './Routes/Gallery';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Cart />
        <Gallery />
      </Router>



      {/* <Routes>
          <Route exact path='/cart' element={<Cart/>}>
          </Route>
        </Routes> 

        <Routes>
          <Route exact path='/' element={<Gallery/>}>
          </Route>
        </Routes>  */}




    </div>
  );
}

export default App;


// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>