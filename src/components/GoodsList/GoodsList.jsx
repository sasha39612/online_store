import React from 'react';
import { GoodItem } from '../GoodItem/GoodItem';

import './GoodsList.scss';

export const GoodsList = React.memo(({ goods }) => {

  return (
    
    <ul className="cards">
      {goods.map(good => (
        <GoodItem 
          good={good}
          key={good.id}
        />
      ))}
    </ul>
  )
});
