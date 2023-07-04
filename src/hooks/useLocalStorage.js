const useLocalStorage = () => {
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cars'));
  };

  const setLocalStorage = (cars) => {
    return localStorage.setItem('cars', JSON.stringify(cars));
  };

  const addToLocalStorage = (car) => {
    const localStorage = getLocalStorage();
    localStorage.unshift(car);
    setLocalStorage(localStorage);
  };

  const editLocalStorage = (car) => {
    const localStorage = getLocalStorage();
    const result = localStorage.map((elem) => {
      if (elem.id === car.id) {
        return {
          ...elem,
          ...car,
        };
      } else {
        return elem;
      }
    });
    setLocalStorage(result);
  };

  const removeFromLocalStorage = (id) => {
    const localStorage = getLocalStorage();
    const result = localStorage.filter((elem) => {
      return elem.id !== id;
    });
    setLocalStorage(result);
  };

  return {
    getLocalStorage,
    setLocalStorage,
    addToLocalStorage,
    editLocalStorage,
    removeFromLocalStorage,
  };
};

export default useLocalStorage;
