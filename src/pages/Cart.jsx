import React from 'react'

function Cart() {
  return (
    <div id="books__body">
        <main id="books_main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <div className="cart__book">Book</div>
                            <div className="cart__quantity">Quantity</div>
                            <div className="cart__total">Price</div>
                        </div>
                        <div className="cart__body">
                            <div className="cart__item">
                                <div className="cart__book">
                                    <img src="https://covers.openlibrary.org/b/id/10958382-L.jpg" alt="" className="cart__book--img" />
                                    <div className="cart__book--info">
                                        <span className="cart__book--title">
                                            Crack the coding interview
                                        </span>
                                        <span className="cart__book--price">
                                            $10.00
                                        </span>
                                        <button className="cart__book--remove">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="cart__quantity">
                                    <input type="number" min={0} max={99} className="cart__input"/>
                                </div>
                                <div className="cart__total">
                                    $10.00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>$9.00</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>$10.00</span>
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>$10.00</span>
                        </div>
                        <button className="btn btn__checkout no-cursor" onClick={() => alert("this is unfinished")}>
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Cart