(function () {
  const STORAGE_KEY = 'shopData';

  function getDefaultData() {
    return {
      cart: {
        totalPrice: 0,
        itemsCount: 0,
      },

      products: [
        { name: 'Джинсы', desc: 'Классический крой', price: 4000, isInCart: false, picSrc: './img/jeans.jpg' },
        { name: 'Кофта', desc: 'Шерстяная, теплая', price: 3250, isInCart: false, picSrc: './img/koftaxDDD.jpeg'},
        { name: 'Шапка', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка1', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка2', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка3', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка4', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка5', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка6', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка7', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка8', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка9', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка0', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Шапка12', desc: 'Зимняя, вязаная', price: 1599, isInCart: false, picSrc: './img/hat.jpg' },
        { name: 'Кроссовки', desc: 'Спортивные, легкие', price: 5500, isInCart: false, picSrc: './img/krosi.jpg' }   
      ]
    };
  }

  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultData();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return getDefaultData();
      return parsed;
    } catch (e) {
      console.warn('Cannot load shop data from localStorage, using defaults', e);
      return getDefaultData();
    }
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Cannot save shop data to localStorage', e);
    }
  }

  window.shopData = loadData();
  window.saveShopData = function () {
    saveData(window.shopData);
  };
})();