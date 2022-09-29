
// Localstorage utils 

const fetchItems = (key) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

const saveItems = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
}

const findItem = (key, id) => {
  return fetchItems(key).find(item => item.id === id);
}

const updateItem = (key, id, values) => {
  const items = fetchItems(key).map(item => {
    if (item.id === id) {
      values.id = id;
      return values;
    }

    return item;
  });
  saveItems(key, items);
}

const createItem = (key, values) => {
  const items = fetchItems(key);
  values.id = items.length + 1;
  items.push(values);
  saveItems(key, items);
}

const deleteItem = (key, id) => {
  const items = fetchItems(key).filter(item => item.id !== id);
  saveItems(key, items);
}
