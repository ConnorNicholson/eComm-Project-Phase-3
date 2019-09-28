import React from 'react';
import '../lib/css/styles.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
// import { parse } from 'path';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: '',
      allProducts: []
    }
  }

  componentWillMount(){
    fetch('http://localhost:3001/api/products')
    .then(res => {
      console.log(res);
      return res.text()
    })
    .then(data => {
      console.log(JSON.parse(data));
      this.setState({
      allProducts: JSON.parse(data)
    }, () => console.log('hello'))})

    fetch('http://localhost:3001/api/')
  }

  render() {
    const routing = (
      <Router>
        <div>
          <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/products">Products</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/products" render={(props) => <Products {...props} allProducts={JSON.stringify(this.state.allProducts)} />}/>
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
    console.log(this.state.allProducts)
    return (
      routing
    )
  }
}
export default App;
