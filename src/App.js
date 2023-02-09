import Footer from './componets/Footer';
import Nav from './componets/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data'
import Cart from './pages/Cart';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books}/>} />
        <Route path="/cart" exact render={() => <Cart books={books}/>}/>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
