import { MutableRefObject, useRef } from 'react';

export function useArrayRef(): [MutableRefObject<any>, (ref: any) => void] {
  const refs = useRef<any>([]);
  refs.current = [];

  const addRef = (ref: any) => {
    ref && refs.current.push(ref);
  };

  return [refs, addRef];
}
