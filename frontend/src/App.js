import './Styles/App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Review from './Components/Review';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
					<Route exact path='/cart' element={<Cart />} />
					<Route exact path='/review' element={<Review />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
