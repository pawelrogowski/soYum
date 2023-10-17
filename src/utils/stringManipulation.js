/**
 * Shortens a string to a maximum length and appends specified text if needed.
 *
 * @param {String} inputString - The input string to be shortened.
 * @param {Number} maxLength - The maximum length allowed for the string.
 * @param {String} appendText - The text to append if the string is shortened.
 * @returns {String} The shortened string.
 */

export const shortenString = (inputString, maxLength, appendText) => {
  if (inputString.length > maxLength) {
    return inputString.slice(0, maxLength - appendText.length) + appendText;
  }
  return inputString;
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
