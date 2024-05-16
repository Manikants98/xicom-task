/**
 * ## useRandomArray
 *
 * The `useRandomArray` hook is useful for scenarios where you need to generate a sequence of numbers within a specified range,
 * such as creating test data, generating random values, or iterating through a range of numerical values.
 *
 * ## Usage
 *
 * @example
 *
 * const MyComponent = () => {
 *   const arr = useRandomArray(0, 10);
 *   // Output: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 *   return <>MyComponent</>;
 * };
 *
 * export default MyComponent;
 */

const useRandomArray = (start: number, end: number): number[] => {
    return Array.from({ length: end - start }, (_, i) => start + i);
  };
  
  export default useRandomArray;
  