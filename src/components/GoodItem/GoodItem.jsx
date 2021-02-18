import React from 'react';
import './GoodItem.scss';

export const GoodItem = ({ good }) => {
  const {
    name,
    image,
    description,
    price,
  } = good;

  return (
    <>
      <li className="catalog__card card">
        
        <div className="card__photo">
          {(typeof(image) === 'string') && (
            <img
            src={`../../images/${image}`}
            alt={name}
            className="card__photo-img"
          />
          )}
          {(typeof(image) === 'object') && (
            <img
            src={URL.createObjectURL(image)}
            alt={name}
            className="card__photo-img"
          />
          )}
          
        </div>
        <h2 className="card__title">{name}</h2>
        
        <div className="card__price">
          <div className="card__price-name">Цена: </div>
          <div className="card__price-value">{price}</div>
        </div>

        <a
          href="#"
          className="card__button"
          data-qa="card-hover"
        >
          купить
        </a>

        <div
          className="card__description display-none"
        >
          {description}
        </div>
    </li> 
  </>
  )
}
