import React, { useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from './components/UseLocalStorage';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getGoodsFromApi } from './components/ApiGoods';
import { NewGood } from './components/NewGoods/NewGood';
import { Selecters } from './components/Selecters/Selecters';

import './App.scss';
const currencyRate = 28;
let currencyPrepareToSort = [];

function App() {

const [goods, setGoods] = useLocalStorage('goods', []);
const [priceFrom, setPriceFrom] = useState(0);
const [priceTo, setPriceTo] = useState(0);
const [valueSorted, setValueSorted] = useState(null);
const [currencyBasic, setCurrencyBasic] = useState(false);

useEffect(() => {
  getGoodsFromApi()
  .then(result => setGoods(result.products));
}, []);

useEffect(() => {
 if (!priceTo) {
  setPriceTo(10000000)
 }
}, [goods]);

const handleFilterPriceFrom = (event) => {
  setPriceFrom(event);
}

const handleFilterPriceTo = (event) => {
  setPriceTo(event);
};

let sortByPrice = useMemo(() => goods.filter((good) => {
  return good.price >= priceFrom && good.price <= priceTo
}), [priceFrom, priceTo, goods]);

const onFilter = (command) => {
  setValueSorted(command);
};

const priceChange = [...sortByPrice].map(good => {
  return {
    ...good,
    price: Math.round(+good.price / currencyRate)
  };
});

 const sortedProduct = () => {
   if (currencyBasic) {
    currencyPrepareToSort = priceChange
  } else {
    currencyPrepareToSort = [...sortByPrice];
  }

  switch(valueSorted) {
    case 'increasePrice':

    return [...currencyPrepareToSort].sort((a, b) => a.price - b.price)

    case 'decreasePrice':

      return [...currencyPrepareToSort].sort((a, b) => b.price - a.price)

    case 'alphabetic':

      return [...currencyPrepareToSort].sort((a, b) => a.name.localeCompare(b.name))

    default:
      return currencyPrepareToSort;
  }
};

const onFilterCurrency = (selecter) => {
  if (selecter === 'USD') {
    setCurrencyBasic(!currencyBasic);
  } else {
    setCurrencyBasic(!currencyBasic)
  }
};

const sortedProductToRender = useMemo(
  sortedProduct,
  [valueSorted, currencyPrepareToSort]
);

const goodAdd = (newGood) => {
  setGoods([...goods, newGood]);

  sortedProduct();
  getGoodsFromApi();
}

  return (
    <main>
      <header id="pageHeader">
        <h1>Online Stock</h1>
      </header>
      <section id="mainSection">
       <Selecters
        onFilter={onFilter}
        onFilterCurrency={onFilterCurrency}
        handleFilterPriceFrom={handleFilterPriceFrom}
        handleFilterPriceTo={handleFilterPriceTo}
       />
      </section>

      <article id="mainArticle">
        <GoodsList goods={sortedProductToRender}/>
      </article>
      
      <footer id="pageFooter">
        <NewGood onAdd={goodAdd} />
      </footer>
    </main>
  );
}

export default App;
