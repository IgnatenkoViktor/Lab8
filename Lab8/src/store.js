import { createStore } from 'redux';

const initialState = {
  imagePath: './img/logo-social.png',
  sideBarMenuList: [
    { text: 'Home', url: 'http://localhost:3000/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
    { text: 'Google', url: 'https://google.com' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IMAGE_PATH':
      return { ...state, imagePath: action.payload };
    case 'SET_SIDEBAR_MENU':
      return { ...state, sideBarMenuList: action.payload };
    case 'SET_CURRENT_DATE':
      return { ...state, currentDate: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState())
export default store;
