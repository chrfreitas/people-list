export const toggleItemArray = (array, item) => {
  if (!array) {
    return [item];
  }

  const hasItem = array.some((itemArray) => itemArray === item);

  if (hasItem) {
    return array.filter((itemArray) => itemArray !== item);
  }

  return [...array, item];
};

export const capitalize = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1);
