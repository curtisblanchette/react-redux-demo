export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function incrementCount() {
  return ({type: INCREMENT });
}

export function decrementCount() {
  return ({type: DECREMENT });
}
