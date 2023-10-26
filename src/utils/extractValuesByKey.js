/**
 * Converts an array of objects to an array of values extracted from a specified key.
 * @param {Array<Object>} objArray - The array of objects to convert.
 * @param {string} key - The key to extract the values from.
 * @returns {Array} - The array of values extracted from the specified key.
 */
export const extractValuesByKey = (objArray, key) => {
  return objArray.map((obj) => obj[key]);
};
