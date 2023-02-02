import Footer from './componets/Footer';
import Nav from './componets/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact component={Books}/>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
