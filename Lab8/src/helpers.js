let idCounter = {};

export const getId = (key = 'default') => {
  if (!idCounter[key]) {
    idCounter[key] = 1;
  } else {
    idCounter[key]++;
  }

  return `${key}_${idCounter[key]}`;
};

