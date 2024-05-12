import React from 'react';
import CardIcon from './CardIcon'; // Assuming you have a CardIcon component
import data from '../Data/ProductIcon.js';

class CardIcons extends React.Component {
  render() {
    const iconProducts = data;

    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );

    // Render the card icons
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            // const ProductImage = this.components[product.img];

            return(
            <div key={idx} className="col-md-3">
                <CardIcon
                title={product.title}
                text={product.text}
                tips={product.tips}
                to={product.to}
                img={product.img}
              />
              <img src=''></img>
         {/* <ProductImage className={product.cssClass} width="80" height="80" /> */}

              {/* Render the image here */}
            </div>
            )
  })}
        </div>
      </div>
    ));

    return (
      <div className="carousel-inner">
        {carouselContent}
      </div>
    );
  }
}

export default CardIcons;
