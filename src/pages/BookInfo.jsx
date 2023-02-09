import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link} from "react-router-dom"
import { useParams } from "react-router";
import Price from "../componets/ui/Price"
import Rating from "../componets/ui/Rating"
import Book from "../componets/ui/Book";


function BookInfo({books}) {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id)
    console.log(book)
    return (
        <div id="books__body">
          <main id="books__main">
            <div className="books__container">
              <div className="row">
                <div className="book__selected--top">
                  <Link to="/books" className="book__link">
                    <FontAwesomeIcon icon="arrow-left" />
                  </Link>
                  <Link to="/books" className="book__link">
                    <h2 className="book__selected--title--top">Books</h2>
                  </Link>
                </div>
                <div className="book__selected">
                  <figure className="book__selected--figure">
                    <img className="book__selected--img" src={book.url} alt="" />
                  </figure>
                  <div className="book__selected--description">
                    <h2 className="book__selected--title">{book.title}</h2>
                    <Rating rating={book.rating} />
                    <div className="book__selected--price">
                      <Price
                        originalPrice={book.originalPrice}
                        salePrice={book.salePrice}
                      />
                    </div>
                    <div className="book__summary">
                      <h3 className="book__summary--title">Summary</h3>
                      <p className="book__summary--para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam, repellendus modi odio porro, consequuntur,
                        asperiores minima sint voluptatem at reiciendis ducimus
                        neque provident alias iure nihil explicabo nobis id
                        voluptas.
                      </p>
                      <p className="book__summary--para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam, repellendus modi odio porro, consequuntur,
                        asperiores minima sint voluptatem at reiciendis ducimus
                        neque provident alias iure nihil explicabo nobis id
                        voluptas.
                      </p>
                    </div>
                    <button className="btn" >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="books__container">
              <div className="row">
                <div className="book__selected--top">
                  <h2 className="book__selected--title--top">Recommended Books</h2>
                </div>
                <div className="books">
                    {
                    books.filter((book) => book.rating === 5 && +book.id !== +id)
                    .slice(0,4)
                    .map(book => <Book book={book} key={book.id}/>)
                } 
                </div>
               
              </div>
            </div>
          </main>
        </div>
      );
}

export default BookInfo

/*import React from "react";
import { useParams } from "react-router";
import Price from "../componets/ui/Price"
import Rating from "../componets/ui/Rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const BookInfo = ({ books, addItemToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                </div>
                <button className="btn" /*onClick={() => addItemToCart(book)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
*/