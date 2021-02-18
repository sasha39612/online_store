// const BASE_URL = 'https://mate-academy.github.io/phone-catalogue-static/api/phones';

const request = () => {
  return fetch('/Api/products.json')

  .then(response => {
    if (response.ok) {
      
      return response.json();
    }

    throw `${response.status} - ${response.statusText}`
  });
};

export const getGoodsFromApi = () => {

  return request()
}
