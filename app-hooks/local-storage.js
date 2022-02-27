import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const initialize = useCallback(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }, [initialValue, key]);
  const [storedValue, setStoredValue] = useState(initialize());
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
      setStoredValue(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setStoredValue(initialize());
  }, [initialize]);

  return [storedValue, setValue];
};

export default useLocalStorage;
