import React, { useEffect, useState } from 'react';

import "./Selecters.scss";

const handleFilter = (event, callFilter, criteria) => {
  event.preventDefault();
  callFilter(criteria);
};

export const Selecters = ({ onFilter, onFilterCurrency, handleFilterPriceFrom, handleFilterPriceTo }) => {
  const [selecterCurrency, setSelecterCurrency] = useState('UAH');
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(29999);

  const handleFilterCurrency = (event) => {
    if (event.localeCompare(selecterCurrency) === 0) {
      return '...'
    } else {
      onFilterCurrency(event);

      setSelecterCurrency(event);
    }
  }

  return (
    <>
     <div className="container__choose">
          <div className="container__price">
            <h3>Цена</h3>
            <div className="container__price-limit">
              <span className="container__price-from">от</span>
              <span className="container__price-to">до</span>
              <input
                type="number"
                className="container__price-chooseFrom"
                placeholder="1199"
                min="0"
                step="100"
                onChange={event => handleFilterPriceFrom(event.target.value)}
              >
              </input>

              <input
                type="number"
                className="container__price-chooseTo"
                placeholder="29999"
                min="0"
                step="100"
                onChange={event => handleFilterPriceTo(event.target.value)}
              >
              </input>
            </div>
          </div>

          <h3>Валюта</h3>
          <div className="container__currency">
              <button
                className="container__USD buuton__currency"
                value={"USD"}
                onClick={event => handleFilterCurrency(event.target.value)}
              >
                USD
              </button>
              <button
                className="container__UAH buuton__currency"
                value={'UAH'}
                onClick={event => handleFilterCurrency(event.target.value)}
              >
                UAH
              </button>
          </div>

          <h3>Сортировка</h3>
          <div className="container__sort">
            <label
              htmlFor="increase__price1"
              className="increase__price-label"
            >
              <input
                type="radio"
                name="radio"
                id="increase__price1"
                className="increase__price"
                onClick={event => handleFilter(event, onFilter, 'increasePrice')}
              >
              </input>
              &nbsp;по возрастанию цены
            </label>

            <label
              htmlFor="increase__price2"
              className="increase__price-label"
            >
              <input
                type="radio"
                name="radio"
                id="increase__price2"
                className="increase__price"
                onClick={event => handleFilter(event, onFilter, 'decreasePrice')}
              >
              </input>
              &nbsp;по убыванию цены
            </label>

            <label
              htmlFor="increase__price3"
              className="increase__price-label"
            >
              <input
                type="radio"
                name="radio"
                id="increase__price3"
                className="increase__price"
                onClick={event => handleFilter(event, onFilter, 'alphabetic')}
              >
              </input>
              &nbsp;по алфавиту
            </label>
          </div>
        </div>

    </>
  )
}