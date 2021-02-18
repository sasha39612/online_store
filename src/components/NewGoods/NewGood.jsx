import React, { useState } from 'react';

import './NewGood.scss';

export const NewGood = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const addNewGood = (event) => {
    event.preventDefault();

    const newGood = {
      id: +new Date(),
      name,
      image,
      description,
      price,
    }

    onAdd(newGood)

    setName('');
    setPrice('');
    setImage('');
    setDescription('')
  }
  
  return (
    <>
      <form
        className="newGoods"
        onSubmit={addNewGood}
      >
        <label
          htmlFor="newGoods__name"
          className="newGoods__name-label"
        >
          Имя&nbsp;&nbsp;
          <input
            type="text"
            id="newGoods__name"
            placeholder="Name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          >
          </input>
        </label>

        <label
          htmlFor="newGoods__price"
          className="newGoods__name-price"
        >
          Цена&nbsp;
          <input
            type="number"
            id="newGoods__price"
            placeholder="1000"
            required
            step="100"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          </label>

        <div className="newGoods__picture-container">
          <span>Изображение</span>&nbsp;&nbsp;
          <label
            htmlFor="newGoods__picture-file"
            className="newGoods__picture"
            style={{ background:"grey", padding:"5px 10px" }}
          >
             +
          </label>             
            <input
              id="newGoods__picture-file"
              className="newGoods__picture-file"
              style={{visibility:"hidden"}}
              type={"file"}
              onChange={(event) => setImage(event.target.files[0])}
            >
            </input>
        </div>
        
      
        <label
          htmlFor="newGoods__description"
          className="newGoods__name-description"
        >
          <textarea 
            type="textarea"
            id="newGoods__description"
            placeholder="Description"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            >
          </textarea>
        </label>

        <button
          type="submit"
          className="newGoods__submit"
        >
          Save
        </button>  
      </form>
    </>
  )
}
