import React from 'react'

function Price({salePrice, originalPrice}) {
  return (
    <div className="book__price">
    {salePrice ? (
        <>
            <span className="book__price--normal">${originalPrice}</span>
            ${salePrice.toFixed(2)}
        </>
    ) : ( 
       <>${originalPrice.toFixed(2)}</> 
    )}
    
    </div>
  )
}

export default Price