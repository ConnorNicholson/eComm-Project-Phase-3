import React from 'react';
import '../lib/css/styles.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchEndpoint: 'http://localhost:3001/api/products',
      allProducts: [],
      everything: true,
      telescopes: false,
      sextants: false,
      belowThousand: false
    };
  };

  // This function will fetch an endpoint stored in the fetchEndpoint state, then it will return the appropriate data and set the state of allProducts to equal the returned data.

  fetchSpecificEndpoint = () => {
    fetch(this.state.fetchEndpoint)
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
      allProducts: data
    })})
    .catch(function(error) {
      console.log(error)
    })
  };

  // As soon as the application loads, execute the fetchSpecificEndpoint function, returning the data from the current endpoint stored in the fetchEndpoint state: 'http://localhost:3001/api/products'

  componentDidMount() {
    this.fetchSpecificEndpoint()
  };

  componentDidUpdate(oldProps, oldState) {
    if (this.state.everything !== oldState.everything || 
      this.state.telescopes !== oldState.telescopes || 
      this.state.sextants !== oldState.sextants || 
      this.state.belowThousand !== oldState.belowThousand) {
      this.fetchSpecificEndpoint()
    }
  }

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  viewEverything = () => {
    this.setState({
        fetchEndpoint: 'http://localhost:3001/api/products',
        everything: true,
        telescopes: false,
        sextants: false,
        belowThousand: false
    })
}

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  telescopes = () => {
    this.setState({
        fetchEndpoint: 'http://localhost:3001/api/productfilter/telescopes',
        everything: false,
        telescopes: true,
        sextants: false,
        belowThousand: false
    })
}

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  sextants = () => {
    this.setState({
        fetchEndpoint: 'http://localhost:3001/api/productfilter/sextants',
        everything: false,
        telescopes: false,
        sextants: true,
        belowThousand: false
    })
}

  // Function used to set state. The endpoint stored in fetchEndpoint changes, and the Boolean values of 'everything', 'telescopes', 'sextants', and 'belowThousand' change

  belowThousand = () => {
    this.setState({
        fetchEndpoint: 'http://localhost:3001/api/productprice/lowprice',
        everything: false,
        telescopes: false,
        sextants: false,
        belowThousand: true
    })
}

  render() {

    const routing = (
      <Router>
        <div>
          <ul className="navbar fixed-top justify-content-center">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/products" render={(props) => <Products {...props} allProducts={(this.state.allProducts)} viewEverything={this.viewEverything} telescopes={this.telescopes} sextants={this.sextants} belowThousand={this.belowThousand}/>}/>
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
    return (
      routing
    );
  };
};
export default App;
