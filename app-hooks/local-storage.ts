import { useState } from 'react';

type SetValueToLocalStorage<T> = (
  value: T | ((previousValue: T) => T),
  setToLocalStorage?: boolean
) => void;
type GetValueFromLocalStorage<T> = () => T;
type RemoveValueFromLocalStorage = () => void;

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [
  T,
  SetValueToLocalStorage<T>,
  GetValueFromLocalStorage<T>,
  RemoveValueFromLocalStorage
] {
  const getValue: GetValueFromLocalStorage<T> = () => {
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
  };

  const [storedValue, setStoredValue] = useState<T>(() => getValue());

  const setValue: SetValueToLocalStorage<T> = (
    value,
    setToLocalStorage = true
  ) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined' && setToLocalStorage) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue: RemoveValueFromLocalStorage = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, getValue, removeValue];
}
