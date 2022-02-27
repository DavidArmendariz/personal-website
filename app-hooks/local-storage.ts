import { useCallback, useState } from 'react';

type SetValueToLocalStorage<T> = (
  value: T | ((previousValue: T) => T),
  setToLocalStorage?: boolean
) => void;
type RemoveValueFromLocalStorage = () => void;

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValueToLocalStorage<T>, RemoveValueFromLocalStorage] {
  const [storedValue, setStoredValue] = useState<T>(() => {
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
  });

  const setValue: SetValueToLocalStorage<T> = useCallback(
    (value, setToLocalStorage = true) => {
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
    },
    [key, storedValue]
  );

  const removeValue: RemoveValueFromLocalStorage = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return [storedValue, setValue, removeValue];
}
